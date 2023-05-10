# placementGroups

## Overview

Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different instances within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of instances within our infrastructure, availability can be influenced in a way that fits your needs best.

In `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some instances might fail together.


### Available Operations

* [deletePlacementGroupsId](#deleteplacementgroupsid) - Delete a PlacementGroup
* [getPlacementGroups](#getplacementgroups) - Get all PlacementGroups
* [getPlacementGroupsId](#getplacementgroupsid) - Get a PlacementGroup
* [postPlacementGroups](#postplacementgroups) - Create a PlacementGroup
* [putPlacementGroupsId](#putplacementgroupsid) - Update a PlacementGroup

## deletePlacementGroupsId

Deletes a PlacementGroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePlacementGroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePlacementGroupsIdRequest();
    $request->id = 19193;

    $response = $sdk->placementGroups->deletePlacementGroupsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlacementGroups

Returns all PlacementGroup objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsTypeParameterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlacementGroupsRequest();
    $request->labelSelector = 'nihil';
    $request->name = 'Verna Olson';
    $request->sort = GetPlacementGroupsSortEnum::NAME;
    $request->type = GetPlacementGroupsTypeParameterTypeEnum::SPREAD;

    $response = $sdk->placementGroups->getPlacementGroups($request);

    if ($response->placementGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlacementGroupsId

Gets a specific PlacementGroup object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlacementGroupsIdRequest();
    $request->id = 618016;

    $response = $sdk->placementGroups->getPlacementGroupsId($request);

    if ($response->placementGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPlacementGroups

Creates a new PlacementGroup.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsCreatePlacementGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsCreatePlacementGroupRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPlacementGroupsCreatePlacementGroupRequest();
    $request->labels = [
        'eum' => 'vero',
        'aspernatur' => 'architecto',
        'magnam' => 'et',
    ];
    $request->name = 'my Placement Group';
    $request->type = PostPlacementGroupsCreatePlacementGroupRequestTypeEnum::SPREAD;

    $response = $sdk->placementGroups->postPlacementGroups($request);

    if ($response->createPlacementGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPlacementGroupsId

Updates the PlacementGroup properties.

Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdUpdatePlacementGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPlacementGroupsIdRequest();
    $request->requestBody = new PutPlacementGroupsIdUpdatePlacementGroupRequest();
    $request->requestBody->labels = [
        'ullam' => 'provident',
        'quos' => 'sint',
        'accusantium' => 'mollitia',
    ];
    $request->requestBody->name = 'my Placement Group';
    $request->id = 968962;

    $response = $sdk->placementGroups->putPlacementGroupsId($request);

    if ($response->placementGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
