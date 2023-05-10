# podcasterAPI

## Overview

Endpoints to improve the podcast database

### Available Operations

* [deletePodcastById](#deletepodcastbyid) - Request to delete a podcast
* [submitPodcast](#submitpodcast) - Submit a podcast to Listen Notes database

## deletePodcastById

Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePodcastByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePodcastByIdRequest();
    $request->xListenAPIKey = 'provident';
    $request->id = '890afa56-3e25-416f-a4c8-b711e5b7fd2e';
    $request->reason = 'pariatur';

    $response = $sdk->podcasterAPI->deletePodcastById($request);

    if ($response->deletePodcastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitPodcast

Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, "status" in the response will be "in review", and we'll review it within 12 hours. If the podcast exists, "status" in the response will be "found". If this submission is rejected, "status" in the response will be "rejected". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SubmitPodcastRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubmitPodcastForm;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitPodcastRequest();
    $request->submitPodcastForm = new SubmitPodcastForm();
    $request->submitPodcastForm->email = 'Carroll.Lang@gmail.com';
    $request->submitPodcastForm->rss = 'sunt';
    $request->xListenAPIKey = 'quo';

    $response = $sdk->podcasterAPI->submitPodcast($request);

    if ($response->submitPodcastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
