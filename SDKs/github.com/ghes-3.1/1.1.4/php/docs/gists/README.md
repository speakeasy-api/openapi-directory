# gists

## Overview

View, modify your gists.

### Available Operations

* [gistsCheckIsStarred](#gistscheckisstarred) - Check if a gist is starred
* [gistsCreate](#gistscreate) - Create a gist
* [gistsCreateComment](#gistscreatecomment) - Create a gist comment
* [gistsDelete](#gistsdelete) - Delete a gist
* [gistsDeleteComment](#gistsdeletecomment) - Delete a gist comment
* [gistsFork](#gistsfork) - Fork a gist
* [gistsGet](#gistsget) - Get a gist
* [gistsGetComment](#gistsgetcomment) - Get a gist comment
* [gistsGetRevision](#gistsgetrevision) - Get a gist revision
* [gistsList](#gistslist) - List gists for the authenticated user
* [gistsListComments](#gistslistcomments) - List gist comments
* [gistsListCommits](#gistslistcommits) - List gist commits
* [gistsListForUser](#gistslistforuser) - List gists for a user
* [gistsListForks](#gistslistforks) - List gist forks
* [gistsListPublic](#gistslistpublic) - List public gists
* [gistsListStarred](#gistsliststarred) - List starred gists
* [gistsStar](#gistsstar) - Star a gist
* [gistsUnstar](#gistsunstar) - Unstar a gist
* [gistsUpdate](#gistsupdate) - Update a gist
* [gistsUpdateComment](#gistsupdatecomment) - Update a gist comment

## gistsCheckIsStarred

Check if a gist is starred

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#check-if-a-gist-is-starred>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsCheckIsStarredRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsCheckIsStarredRequest();
    $request->gistId = 'laboriosam';

    $response = $sdk->gists->gistsCheckIsStarred($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsCreate

Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#create-a-gist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GistsCreateRequestBodyFiles;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsCreateRequestBody();
    $request->description = 'Example Ruby script';
    $request->files = [
        'voluptates' => new GistsCreateRequestBodyFiles(),
    ];
    $request->public = GistsCreateRequestBodyPublic2Enum::TRUE;

    $response = $sdk->gists->gistsCreate($request);

    if ($response->gistSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsCreateComment

Create a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#create-a-gist-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsCreateCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GistsCreateCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsCreateCommentRequest();
    $request->requestBody = new GistsCreateCommentRequestBody();
    $request->requestBody->body = 'Body of the attachment';
    $request->gistId = 'vitae';

    $response = $sdk->gists->gistsCreateComment($request);

    if ($response->gistComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsDelete

Delete a gist

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#delete-a-gist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsDeleteRequest();
    $request->gistId = 'accusamus';

    $response = $sdk->gists->gistsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsDeleteComment

Delete a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#delete-a-gist-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsDeleteCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsDeleteCommentRequest();
    $request->commentId = 631126;
    $request->gistId = 'tempora';

    $response = $sdk->gists->gistsDeleteComment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsFork

**Note**: This was previously `/gists/:gist_id/fork`.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#fork-a-gist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsForkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsForkRequest();
    $request->gistId = 'aspernatur';

    $response = $sdk->gists->gistsFork($request);

    if ($response->baseGist !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsGet

Get a gist

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#get-a-gist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsGetRequest();
    $request->gistId = 'voluptas';

    $response = $sdk->gists->gistsGet($request);

    if ($response->gistSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsGetComment

Get a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#get-a-gist-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsGetCommentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsGetCommentRequest();
    $request->commentId = 374244;
    $request->gistId = 'voluptas';

    $response = $sdk->gists->gistsGetComment($request);

    if ($response->gistComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsGetRevision

Get a gist revision

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#get-a-gist-revision>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsGetRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsGetRevisionRequest();
    $request->gistId = 'minima';
    $request->sha = 'nobis';

    $response = $sdk->gists->gistsGetRevision($request);

    if ($response->gistSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsList

Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#list-gists-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsListRequest();
    $request->page = 680116;
    $request->perPage = 237807;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T19:42:01.136Z');

    $response = $sdk->gists->gistsList($request);

    if ($response->baseGists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsListComments

List gist comments

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#list-gist-comments>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsListCommentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsListCommentsRequest();
    $request->gistId = 'blanditiis';
    $request->page = 449292;
    $request->perPage = 296242;

    $response = $sdk->gists->gistsListComments($request);

    if ($response->gistComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsListCommits

List gist commits

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#list-gist-commits>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsListCommitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsListCommitsRequest();
    $request->gistId = 'aliquam';
    $request->page = 885963;
    $request->perPage = 839189;

    $response = $sdk->gists->gistsListCommits($request);

    if ($response->gistCommits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsListForUser

Lists public gists for the specified user:

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#list-gists-for-a-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsListForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsListForUserRequest();
    $request->page = 351870;
    $request->perPage = 237742;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-30T06:08:11.710Z');
    $request->username = 'Kaylee63';

    $response = $sdk->gists->gistsListForUser($request);

    if ($response->baseGists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsListForks

List gist forks

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#list-gist-forks>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsListForksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsListForksRequest();
    $request->gistId = 'corrupti';
    $request->page = 867290;
    $request->perPage = 519643;

    $response = $sdk->gists->gistsListForks($request);

    if ($response->gistSimples !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsListPublic

List public gists sorted by most recently updated to least recently updated.

Note: With [pagination](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#list-public-gists>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsListPublicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsListPublicRequest();
    $request->page = 940210;
    $request->perPage = 348783;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T00:59:14.180Z');

    $response = $sdk->gists->gistsListPublic($request);

    if ($response->baseGists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsListStarred

List the authenticated user's starred gists:

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#list-starred-gists>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsListStarredRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsListStarredRequest();
    $request->page = 699575;
    $request->perPage = 148829;
    $request->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T14:55:41.766Z');

    $response = $sdk->gists->gistsListStarred($request);

    if ($response->baseGists !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsStar

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#star-a-gist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsStarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsStarRequest();
    $request->gistId = 'asperiores';

    $response = $sdk->gists->gistsStar($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsUnstar

Unstar a gist

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#unstar-a-gist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsUnstarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsUnstarRequest();
    $request->gistId = 'facilis';

    $response = $sdk->gists->gistsUnstar($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsUpdate

Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists/#update-a-gist>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsUpdateRequest();
    $request->requestBody = new GistsUpdateRequestBody1();
    $request->requestBody->description = 'Example Ruby script';
    $request->requestBody->files = [
        'ab' => new GistsUpdateRequestBody1Files2(),
        'dolore' => new GistsUpdateRequestBody1Files3(),
        'sed' => new GistsUpdateRequestBody1Files2(),
    ];
    $request->gistId = 'commodi';

    $response = $sdk->gists->gistsUpdate($request);

    if ($response->gistSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gistsUpdateComment

Update a gist comment

API method documentation
<https://docs.github.com/enterprise-server@3.1/rest/reference/gists#update-a-gist-comment>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GistsUpdateCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GistsUpdateCommentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GistsUpdateCommentRequest();
    $request->requestBody = new GistsUpdateCommentRequestBody();
    $request->requestBody->body = 'Body of the attachment';
    $request->commentId = 696077;
    $request->gistId = 'explicabo';

    $response = $sdk->gists->gistsUpdateComment($request);

    if ($response->gistComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
