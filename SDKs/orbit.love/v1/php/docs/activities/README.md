# activities

### Available Operations

* [deleteWorkspaceSlugMembersMemberSlugActivitiesId](#deleteworkspaceslugmembersmemberslugactivitiesid) - Delete a post activity
* [getWorkspaceSlugActivities](#getworkspaceslugactivities) - List activities for a workspace
* [getWorkspaceSlugActivitiesId](#getworkspaceslugactivitiesid) - Get an activity in the workspace
* [getWorkspaceSlugMembersMemberSlugActivities](#getworkspaceslugmembersmemberslugactivities) - List activities for a member
* [getWorkspaceSlugOrganizationsOrganizationIdActivities](#getworkspaceslugorganizationsorganizationidactivities) - List member activities in an organization
* [postWorkspaceSlugActivities](#postworkspaceslugactivities) - Create a Custom or a Content activity for a new or existing member
* [postWorkspaceSlugMembersMemberSlugActivities](#postworkspaceslugmembersmemberslugactivities) - Create a Custom or a Content activity for a member
* [putWorkspaceSlugMembersMemberSlugActivitiesId](#putworkspaceslugmembersmemberslugactivitiesid) - Update a custom activity for a member

## deleteWorkspaceSlugMembersMemberSlugActivitiesId

Delete a post activity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest();
    $request->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';
    $request->memberSlug = 'esse';
    $request->workspaceSlug = 'ipsum';

    $requestSecurity = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->deleteWorkspaceSlugMembersMemberSlugActivitiesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugActivities

List activities for a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesAffiliationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesIdentityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesItemsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugActivitiesRequest();
    $request->activityType = GetWorkspaceSlugActivitiesActivityTypeEnum::INSIDED_QUESTION_REPLIED;
    $request->affiliation = GetWorkspaceSlugActivitiesAffiliationEnum::MEMBER;
    $request->cities = 'perferendis';
    $request->company = 'ad';
    $request->countries = 'natus';
    $request->direction = GetWorkspaceSlugActivitiesDirectionEnum::ASC;
    $request->endDate = 'iste';
    $request->identity = GetWorkspaceSlugActivitiesIdentityEnum::TWITTER;
    $request->items = GetWorkspaceSlugActivitiesItemsEnum::FIFTY;
    $request->memberTags = 'laboriosam';
    $request->orbit = 'hic';
    $request->page = 'saepe';
    $request->regions = 'fuga';
    $request->relative = 'in';
    $request->sort = GetWorkspaceSlugActivitiesSortEnum::OCCURRED_AT;
    $request->startDate = 'iste';
    $request->title = 'iure';
    $request->type = 'saepe';
    $request->workspaceSlug = 'quidem';

    $requestSecurity = new GetWorkspaceSlugActivitiesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->getWorkspaceSlugActivities($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugActivitiesId

Get an activity in the workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugActivitiesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugActivitiesIdRequest();
    $request->id = '10faaa23-52c5-4955-907a-ff1a3a2fa946';
    $request->workspaceSlug = 'quam';

    $requestSecurity = new GetWorkspaceSlugActivitiesIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->getWorkspaceSlugActivitiesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugMembersMemberSlugActivities

List activities for a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugActivitiesDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugActivitiesItemsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugActivitiesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugMembersMemberSlugActivitiesRequest();
    $request->activityType = 'molestiae';
    $request->direction = GetWorkspaceSlugMembersMemberSlugActivitiesDirectionEnum::ASC;
    $request->items = GetWorkspaceSlugMembersMemberSlugActivitiesItemsEnum::FIFTY;
    $request->memberSlug = 'quia';
    $request->page = 'quis';
    $request->sort = GetWorkspaceSlugMembersMemberSlugActivitiesSortEnum::OCCURRED_AT;
    $request->type = 'laborum';
    $request->workspaceSlug = 'animi';

    $requestSecurity = new GetWorkspaceSlugMembersMemberSlugActivitiesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->getWorkspaceSlugMembersMemberSlugActivities($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugOrganizationsOrganizationIdActivities

List member activities in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdActivitiesActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdActivitiesDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdActivitiesItemsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugOrganizationsOrganizationIdActivitiesRequest();
    $request->activityType = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesActivityTypeEnum::DISCORD;
    $request->direction = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesDirectionEnum::ASC;
    $request->items = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesItemsEnum::ONE_HUNDRED;
    $request->organizationId = 'sequi';
    $request->page = 'tenetur';
    $request->sort = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSortEnum::OCCURRED_AT;
    $request->workspaceSlug = 'id';

    $requestSecurity = new GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->getWorkspaceSlugOrganizationsOrganizationIdActivities($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspaceSlugActivities

Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivityAndIdentity;
use \OpenAPI\OpenAPI\Models\Shared\Identity;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspaceSlugActivitiesRequest();
    $request->activityAndIdentity = new ActivityAndIdentity();
    $request->activityAndIdentity->activity = new PostActivityWithMember();
    $request->activityAndIdentity->activity->activityType = PostActivityWithMemberActivityTypeEnum::CONTENT;
    $request->activityAndIdentity->activity->member = new Member();
    $request->activityAndIdentity->activity->member->bio = 'aut';
    $request->activityAndIdentity->activity->member->birthday = 'quasi';
    $request->activityAndIdentity->activity->member->company = 'Smitham - Pacocha';
    $request->activityAndIdentity->activity->member->devto = 'quasi';
    $request->activityAndIdentity->activity->member->email = 'Weston_Thiel@hotmail.com';
    $request->activityAndIdentity->activity->member->github = 'voluptatibus';
    $request->activityAndIdentity->activity->member->linkedin = 'ipsa';
    $request->activityAndIdentity->activity->member->location = 'omnis';
    $request->activityAndIdentity->activity->member->name = 'Ms. Karla Aufderhar';
    $request->activityAndIdentity->activity->member->pronouns = 'maiores';
    $request->activityAndIdentity->activity->member->shippingAddress = 'dicta';
    $request->activityAndIdentity->activity->member->slug = 'corporis';
    $request->activityAndIdentity->activity->member->tagList = 'dolore';
    $request->activityAndIdentity->activity->member->tags = 'iusto';
    $request->activityAndIdentity->activity->member->tagsToAdd = 'dicta';
    $request->activityAndIdentity->activity->member->teammate = false;
    $request->activityAndIdentity->activity->member->title = 'Miss';
    $request->activityAndIdentity->activity->member->tshirt = 'enim';
    $request->activityAndIdentity->activity->member->twitter = 'accusamus';
    $request->activityAndIdentity->activity->member->url = 'commodi';
    $request->activityAndIdentity->activity->occurredAt = 'repudiandae';
    $request->activityAndIdentity->activity->url = 'quae';
    $request->activityAndIdentity->identity = new Identity();
    $request->activityAndIdentity->identity->email = 'Mathilde_Mann@gmail.com';
    $request->activityAndIdentity->identity->name = 'Irma Ledner DVM';
    $request->activityAndIdentity->identity->source = 'sint';
    $request->activityAndIdentity->identity->sourceHost = 'veritatis';
    $request->activityAndIdentity->identity->uid = 'itaque';
    $request->activityAndIdentity->identity->url = 'incidunt';
    $request->activityAndIdentity->identity->username = 'Emily_Altenwerth13';
    $request->workspaceSlug = 'deserunt';

    $requestSecurity = new PostWorkspaceSlugActivitiesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->postWorkspaceSlugActivities($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspaceSlugMembersMemberSlugActivities

Create a Custom or a Content activity for a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersMemberSlugActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersMemberSlugActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspaceSlugMembersMemberSlugActivitiesRequest();
    $request->requestBody = new PostActivity();
    $request->requestBody->activityType = PostActivityActivityTypeEnum::CONTENT;
    $request->requestBody->occurredAt = 'quibusdam';
    $request->requestBody->url = 'labore';
    $request->memberSlug = 'modi';
    $request->workspaceSlug = 'qui';

    $requestSecurity = new PostWorkspaceSlugMembersMemberSlugActivitiesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->postWorkspaceSlugMembersMemberSlugActivities($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspaceSlugMembersMemberSlugActivitiesId

Update a custom activity for a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Activity;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspaceSlugMembersMemberSlugActivitiesIdRequest();
    $request->activity = new Activity();
    $request->activity->activityType = 'aliquid';
    $request->activity->activityTypeKey = 'cupiditate';
    $request->activity->description = 'quos';
    $request->activity->key = 'perferendis';
    $request->activity->link = 'magni';
    $request->activity->linkText = 'assumenda';
    $request->activity->occurredAt = 'ipsam';
    $request->activity->properties = [
        'fugit' => 'dolorum',
    ];
    $request->activity->title = 'Ms.';
    $request->activity->weight = 'tempora';
    $request->id = 'bb4f63c9-69e9-4a3e-ba77-dfb14cd66ae3';
    $request->memberSlug = 'occaecati';
    $request->workspaceSlug = 'enim';

    $requestSecurity = new PutWorkspaceSlugMembersMemberSlugActivitiesIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->putWorkspaceSlugMembersMemberSlugActivitiesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
