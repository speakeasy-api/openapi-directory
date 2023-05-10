# schemaResponses

## Overview

Schema Responses contain user supplied responses to a Registration Schema. A Schema Response aggregates all of the the responses for a given version of a Registration's Registration Schema. Schema Responses are created when a Registration is completed. Once a Registration is completed the Schema Responses for a Registration can be revisied and updated by using it's associated action endpoints.

There are a few states for Schema Responses:

  - `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you
  must create a Schema Response Action that triggers a new submission.

  - `in_progess` is the state of a Schema Response where the response is editable and still private, Schema
  Responses are editted via a PATCH request as specified below.

  - `unapproved` is the state of a Schema Response where edits have been made and "locked-in", now contributors
  have the ability to reject the changes, however if they are not rejected changes are automatically approved
  after 48 hours. If `unapproved` Schema Responses are rejected, they are returned to the `in_progress` state. If
  `unapproved` Schema Responses are approved they either enter an `approved` state or go into a
  `pending_moderation` to be accepted or denied by a moderator.

  - `pending_moderation` is the state of a Schema Response where moderators have an opportunity to reject or
  approve a Schema Response that has been approved by it's contributors. This state is only reachable for Schema
  Responses that are associated with a Registration that has Registration Provider a moderated workflow.

  - `approved` is the state of a Schema Response where it is public and immutable, in order to update an approved
  Schema Response a new one must be created.

### Available Operations

* [schemaResponseDelete](#schemaresponsedelete) - Delete a Incomplete Schema Response
* [schemaResponsePatch](#schemaresponsepatch) - Update a Registration's Schema Response
* [schemaResponsePpost](#schemaresponseppost) - Create a new Schema Response
* [schemaResponsesList](#schemaresponseslist) - List all Schema Responses
* [schemaResponsesRead](#schemaresponsesread) - Retrieve a Schema Response

## schemaResponseDelete

This endpoint deletes a new Schema Response. Schema Responses can only be deleted in the `in_progress` state. Once a Schema Response is transitioned to an `approved` it is immutable and another Schema Response must be created to update the Schema Response for that registration.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponseDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchemaResponseDeleteRequest();
    $request->schemaResponseId = 'eaque';

    $response = $sdk->schemaResponses->schemaResponseDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schemaResponsePatch

Patching to this endpoint allows one to directly edit the revision responses on the Schema Response of a Registration if that Schema Response is in an `in_progress` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePatchSchemaResponsesInput;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePatchSchemaResponsesAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePatchSchemaResponsesLinks;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePatchSchemaResponsesRelationships;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchemaResponsePatchRequest();
    $request->requestBody = new SchemaResponsePatchSchemaResponsesInput();
    $request->requestBody->attributes = new SchemaResponsePatchSchemaResponsesAttributesInput();
    $request->requestBody->attributes->dateCreated = 577229;
    $request->requestBody->attributes->dateModified = 699098;
    $request->requestBody->attributes->dateSubmitted = 237893;
    $request->requestBody->attributes->isOriginalResponse = false;
    $request->requestBody->attributes->isPendingCurrentUserApproval = false;
    $request->requestBody->attributes->reviewsState = SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum::PENDING_MODERATION;
    $request->requestBody->attributes->revisionJustification = 'earum';
    $request->requestBody->attributes->revisionResponses = [
        'iste' => 'dolorum',
        'deleniti' => 'pariatur',
    ];
    $request->requestBody->links = new SchemaResponsePatchSchemaResponsesLinks();
    $request->requestBody->links->self = 'provident';
    $request->requestBody->relationships = new SchemaResponsePatchSchemaResponsesRelationships();
    $request->requestBody->relationships->actions = 'nobis';
    $request->requestBody->relationships->initiatedBy = 'libero';
    $request->requestBody->relationships->registration = 'delectus';
    $request->requestBody->relationships->registrationSchema = 'quaerat';
    $request->requestBody->type = 'quos';
    $request->schemaResponseId = 'aliquid';

    $response = $sdk->schemaResponses->schemaResponsePatch($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schemaResponsePpost

This endpoint creates a new Schema Response with an `in_progress` state. A new response can only be created if the current schema response is in an `approved` state.
#### Returns
Returns a JSON object with a `data` key containing an updated representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePpostSchemaResponsesInput;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePpostSchemaResponsesAttributesInput;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePpostSchemaResponsesAttributesReviewsStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePpostSchemaResponsesLinks;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsePpostSchemaResponsesRelationships;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchemaResponsePpostSchemaResponsesInput();
    $request->attributes = new SchemaResponsePpostSchemaResponsesAttributesInput();
    $request->attributes->dateCreated = 212390;
    $request->attributes->dateModified = 209843;
    $request->attributes->dateSubmitted = 222443;
    $request->attributes->isOriginalResponse = false;
    $request->attributes->isPendingCurrentUserApproval = false;
    $request->attributes->reviewsState = SchemaResponsePpostSchemaResponsesAttributesReviewsStateEnum::INITIAL;
    $request->attributes->revisionJustification = 'ipsum';
    $request->attributes->revisionResponses = [
        'excepturi' => 'cum',
        'voluptate' => 'dignissimos',
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->links = new SchemaResponsePpostSchemaResponsesLinks();
    $request->links->self = 'veritatis';
    $request->relationships = new SchemaResponsePpostSchemaResponsesRelationships();
    $request->relationships->actions = 'ipsa';
    $request->relationships->initiatedBy = 'ipsa';
    $request->relationships->registration = 'iure';
    $request->relationships->registrationSchema = 'odio';
    $request->type = 'quaerat';

    $response = $sdk->schemaResponses->schemaResponsePpost($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schemaResponsesList

This retrieves a paginated list of all active Schema Responses that are public.
#### Returns
Returns a JSON object containing `data` and `links` keys. The `data` key contains an array of 10 Schema Responses. Each resource in the array is a separate Registration Schemas object. The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->schemaResponses->schemaResponsesList();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## schemaResponsesRead

This retrieves a single Schema response using it's id.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Schema Response, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SchemaResponsesReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchemaResponsesReadRequest();
    $request->schemaResponseId = 'accusamus';

    $response = $sdk->schemaResponses->schemaResponsesRead($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
