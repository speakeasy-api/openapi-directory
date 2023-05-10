# taggedShows

### Available Operations

* [deleteUserTagsTagId](#deleteusertagstagid) - Delete a specific tag
* [deleteUserTagsTagIdShowsShowId](#deleteusertagstagidshowsshowid) - Untag a show
* [getUserTags](#getusertags) - List all tags
* [getUserTagsTagIdShows](#getusertagstagidshows) - List all shows under this tag
* [patchUserTagsTagId](#patchusertagstagid) - Update a specific tag
* [postUserTags](#postusertags) - Create a new tag
* [putUserTagsTagIdShowsShowId](#putusertagstagidshowsshowid) - Tag a show

## deleteUserTagsTagId

Delete a specific tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserTagsTagIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserTagsTagIdRequest();
    $request->tagId = 582020;

    $response = $sdk->taggedShows->deleteUserTagsTagId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserTagsTagIdShowsShowId

Untag a show

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserTagsTagIdShowsShowIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserTagsTagIdShowsShowIdRequest();
    $request->showId = 143353;
    $request->tagId = 537373;

    $response = $sdk->taggedShows->deleteUserTagsTagIdShowsShowId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserTags

List all tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->taggedShows->getUserTags();

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserTagsTagIdShows

List all shows under this tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserTagsTagIdShowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserTagsTagIdShowsEmbedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserTagsTagIdShowsRequest();
    $request->embed = GetUserTagsTagIdShowsEmbedEnum::SHOW;
    $request->tagId = 944669;

    $response = $sdk->taggedShows->getUserTagsTagIdShows($request);

    if ($response->tagInstances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchUserTagsTagId

Update a specific tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchUserTagsTagIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchUserTagsTagIdRequest();
    $request->tagInput = new TagInput();
    $request->tagInput->name = 'Everett Breitenberg';
    $request->tagId = 264555;

    $response = $sdk->taggedShows->patchUserTagsTagId($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUserTags

Create a new tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TagInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagInput();
    $request->name = 'Krista Rippin';

    $response = $sdk->taggedShows->postUserTags($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putUserTagsTagIdShowsShowId

Tag a show

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutUserTagsTagIdShowsShowIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutUserTagsTagIdShowsShowIdRequest();
    $request->showId = 568434;
    $request->tagId = 135218;

    $response = $sdk->taggedShows->putUserTagsTagIdShowsShowId($request);

    if ($response->tagInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
