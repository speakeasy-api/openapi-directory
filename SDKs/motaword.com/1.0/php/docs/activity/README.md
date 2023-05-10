# activity

### Available Operations

* [getActivities](#getactivities) - Monitor project activities
* [getActivity](#getactivity) - View an activity
* [getActivityComments](#getactivitycomments) - View activity comments
* [getComments](#getcomments) - View all project comments
* [getSalesActivities](#getsalesactivities) - Get sales activities for a project
* [insertSalesActivity](#insertsalesactivity) - Insert sales activity for a project
* [submitCommentJson](#submitcommentjson) - Submit comment to an activity
* [submitCommentMultipart](#submitcommentmultipart) - Submit comment to an activity

## getActivities

Get a list of real-time activities in the project, such as translation suggestion and translation approval.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActivitiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActivitiesRequest();
    $request->page = 715190;
    $request->perPage = 844266;
    $request->projectId = 602763;

    $response = $sdk->activity->getActivities($request);

    if ($response->activityList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActivity

View the details of an activity in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActivityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActivityRequest();
    $request->activityId = 857946;
    $request->projectId = 544883;

    $response = $sdk->activity->getActivity($request);

    if ($response->activity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActivityComments

View a list of comments added to this activity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActivityCommentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActivityCommentsRequest();
    $request->activityId = 847252;
    $request->projectId = 423655;

    $response = $sdk->activity->getActivityComments($request);

    if ($response->commentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComments

View a list of activity comments in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentsRequest();
    $request->page = 623564;
    $request->perPage = 645894;
    $request->projectId = 384382;

    $response = $sdk->activity->getComments($request);

    if ($response->commentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSalesActivities

Get sales activities for a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSalesActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SalesActivityTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSalesActivitiesRequest();
    $request->excludeOwner = 'iure';
    $request->id = 297534;
    $request->type = SalesActivityTypeEnum::TASK;

    $response = $sdk->activity->getSalesActivities($request);

    if ($response->salesActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insertSalesActivity

Insert sales activity for a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InsertSalesActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewSalesActivity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsertSalesActivityRequest();
    $request->newSalesActivity = new NewSalesActivity();
    $request->newSalesActivity->subject = 'ipsa';
    $request->newSalesActivity->timestamp = 963663;
    $request->newSalesActivity->type = 'tempora';
    $request->id = 383441;

    $response = $sdk->activity->insertSalesActivity($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitCommentJson

Submit a comment to an activity in the project, such as translation or editing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitCommentJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\CommentLinks;
use \OpenAPI\OpenAPI\Models\Shared\Href;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitCommentJsonRequest();
    $request->comment = new Comment();
    $request->comment->comment = 'molestiae';
    $request->comment->commentedAt = 791725;
    $request->comment->id = 812169;
    $request->comment->links = new CommentLinks();
    $request->comment->links->activity = new Href();
    $request->comment->links->activity->href = 'voluptatum';
    $request->comment->links->project = new Href();
    $request->comment->links->project->href = 'iusto';
    $request->comment->links->self = new Href();
    $request->comment->links->self->href = 'excepturi';
    $request->activityId = 392785;
    $request->projectId = 925597;

    $response = $sdk->activity->submitCommentJson($request);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitCommentMultipart

Submit a comment to an activity in the project, such as translation or editing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitCommentMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\Comment1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitCommentMultipartRequest();
    $request->comment1 = new Comment1();
    $request->comment1->comment = 'temporibus';
    $request->comment1->commentedAt = 71036;
    $request->comment1->id = 337396;
    $request->comment1->links = 'veritatis';
    $request->activityId = 648172;
    $request->projectId = 20218;

    $response = $sdk->activity->submitCommentMultipart($request);

    if ($response->comment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
