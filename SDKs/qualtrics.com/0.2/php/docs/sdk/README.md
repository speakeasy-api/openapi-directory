# SDK

## Overview

Work with Qualtrics surveys, distributions and response events

### Available Operations

* [createContactInMailinglist](#createcontactinmailinglist) - Create contact in mailing list
* [generateDistributionLinks](#generatedistributionlinks) - Generate distribution links
* [getDistributions](#getdistributions) - Get distributions for survey
* [getEventSubscriptions](#geteventsubscriptions) - Get event subscriptions
* [getSurvey](#getsurvey) - Get survey
* [retrievedistributionlinks](#retrievedistributionlinks) - Retrieve distribution links
* [webhookDelete](#webhookdelete) - Remove subscription to response event
* [whenAResponseIsReceived](#whenaresponseisreceived) - Triggers when a response is submitted to a qualtrics survey

## createContactInMailinglist

Creates a contact in a given mailing list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactInMailinglistRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContactInMailingList;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactInMailinglistRequest();
    $request->createContactInMailingList = new CreateContactInMailingList();
    $request->createContactInMailingList->email = 'Gerda89@yahoo.com';
    $request->createContactInMailingList->firstName = 'Anahi';
    $request->createContactInMailingList->lastName = 'Windler';
    $request->createContactInMailingList->unsubscribed = false;
    $request->directoryId = 'tempora';
    $request->mailingListId = 'suscipit';

    $response = $sdk->sdk->createContactInMailinglist($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateDistributionLinks

Geneates links for individual distribution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateDistributionLinks;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDistributionLinks();
    $request->action = 'molestiae';
    $request->description = 'minus';
    $request->expirationDate = '2021-01-21 00:00:00';
    $request->linkType = 'placeat';
    $request->mailingListId = 'voluptatum';
    $request->surveyId = 'iusto';

    $response = $sdk->sdk->generateDistributionLinks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistributions

Gets all distributions for a given survey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDistributionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistributionsRequest();
    $request->surveyId = 'excepturi';

    $response = $sdk->sdk->getDistributions($request);

    if ($response->distributionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventSubscriptions

Get event subscriptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSubscriptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventSubscriptionsRequest();
    $request->subscriptionId = 'nisi';

    $response = $sdk->sdk->getEventSubscriptions($request);

    if ($response->eventSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSurvey

Gets a single Qualtrics survey speficied by its ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSurveyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSurveyRequest();
    $request->surveyId = 'recusandae';

    $response = $sdk->sdk->getSurvey($request);

    if ($response->surveyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrievedistributionlinks

Retrieves all the individual links for a given distribution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrievedistributionlinksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrievedistributionlinksRequest();
    $request->distributionId = 'temporibus';
    $request->surveyId = 'ab';

    $response = $sdk->sdk->retrievedistributionlinks($request);

    if ($response->retrieveDistributionLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhookDelete

Remove event subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubscribeToEventBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribeToEventBody();
    $request->encrypt = false;
    $request->publicationUrl = 'quis';
    $request->topics = 'veritatis';

    $response = $sdk->sdk->webhookDelete($request);

    if ($response->eventSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## whenAResponseIsReceived

Subscribe to response event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubscribeToEventBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribeToEventBody();
    $request->encrypt = false;
    $request->publicationUrl = 'deserunt';
    $request->topics = 'perferendis';

    $response = $sdk->sdk->whenAResponseIsReceived($request);

    if ($response->eventSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
