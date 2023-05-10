# story

## Overview

Story

### Available Operations

* [storyGet](#storyget) - Story: Get List of User Stories
* [storyIdAnalytics](#storyidanalytics) - Story: View Analytics
* [storyIdDelete](#storyiddelete) - Story: Delete by Id
* [storyIdFileOoxmlautomationidDelete](#storyidfileooxmlautomationiddelete) - Story: Delete Subdocument
* [storyIdFileOoxmlautomationidGet](#storyidfileooxmlautomationidget) - Story: Download Updated File
* [storyIdFilePost](#storyidfilepost) - Story: Upload a File To Existing Story
* [storyIdGet](#storyidget) - Story: Get by Id
* [storyIdOutlineGet](#storyidoutlineget) - Story: Get Story Outline
* [storyIdOutlinePost](#storyidoutlinepost) - Story: Post Story Outline
* [storyIdPublic](#storyidpublic) - Story: Public Link to Story Reveal.js Document
* [storyIdPut](#storyidput) - Story: Modify
* [storyIdReveal](#storyidreveal) - Story: Get Story at Reveal.js Document
* [storyIdStatusGet](#storyidstatusget) - Story: Get Story Status
* [storyPost](#storypost) - Story: Upload
* [storyPostFile](#storypostfile) - Story: Upload a File
* [storyPostFileJson](#storypostfilejson) - Story: Upload a File (base64)

## storyGet

Returns a list of stories for this user identifie via the access token presentated to the api

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryGetRequest();
    $request->includeOutline = false;
    $request->includeRelationships = false;

    $response = $sdk->story->storyGet($request);

    if ($response->stories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdAnalytics

returns an html document containing session and event metrics for the story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdAnalyticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdAnalyticsRequest();
    $request->id = '1a8422bb-679d-4232-a715-bf0cbb1e31b8';

    $response = $sdk->story->storyIdAnalytics($request);

    if ($response->revealJsPresenationWithAnalyticsData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdDelete

Remove a story and dependant data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdDeleteRequest();
    $request->id = 'b90f3443-a110-48e0-adcf-4b921879fce9';

    $response = $sdk->story->storyIdDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdFileOoxmlautomationidDelete

Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdFileOoxmlautomationidDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdFileOoxmlautomationidDeleteRequest();
    $request->id = '53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7';
    $request->ooxmlAutomationId = 'c70a4562-6d43-4681-bf16-d9f5fce6c556';

    $response = $sdk->story->storyIdFileOoxmlautomationidDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdFileOoxmlautomationidGet

Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdFileOoxmlautomationidGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdFileOoxmlautomationidGetRequest();
    $request->id = '146c3e25-0fb0-408c-82e1-41aac366c8dd';
    $request->ooxmlAutomationId = '6b144290-7474-4778-a7bd-466d28c10ab3';

    $response = $sdk->story->storyIdFileOoxmlautomationidGet($request);

    if ($response->powerpointPresentation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdFilePost

Upload a file to an existing story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdFilePostRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdFilePostOpenOfficeXmlDocumentEGXlsxPptxFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdFilePostRequest();
    $request->requestBody = new StoryIdFilePostOpenOfficeXmlDocumentEGXlsxPptxFile();
    $request->requestBody->file = [
        'illum',
        'quo',
        'fuga',
        'eius',
    ];
    $request->id = '251904e5-23c7-4e0b-8717-8e4796f2a70c';
    $request->includeOutline = false;
    $request->obsoleteId = '688282aa-4825-462f-a22e-9817ee17cbe6';
    $request->replaceExisting = false;

    $response = $sdk->story->storyIdFilePost($request);

    if ($response->story !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdGet

Returns story metadata, inlcuding json object with story outline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdGetRequest();
    $request->full = false;
    $request->id = '1e6b7b95-bc0a-4b3c-a0c4-f3789fd871f9';
    $request->includeOutline = false;
    $request->includeRelationships = false;
    $request->refreshCache = false;

    $response = $sdk->story->storyIdGet($request);

    if ($response->story !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdOutlineGet

Returns Story's outline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdOutlineGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdOutlineGetRequest();
    $request->id = '9dd2efd1-21aa-46f1-a674-bdb04f157560';

    $response = $sdk->story->storyIdOutlineGet($request);

    if ($response->storyIdOutlineGet200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdOutlinePost

Update a story outline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdOutlinePostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdOutlinePostRequest();
    $request->requestBody = 'voluptatum';
    $request->id = '2d68ea19-f1d1-4705-9339-d08086a18403';

    $response = $sdk->story->storyIdOutlinePost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdPublic

returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdPublicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdPublicRequest();
    $request->id = '94c26071-f93f-45f0-a42d-ac7af515cc41';

    $response = $sdk->story->storyIdPublic($request);

    if ($response->revealJsPresenation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdPut

Update story metadata, including story outline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\Story;
use \OpenAPI\OpenAPI\Models\Shared\StoryCollaborator;
use \OpenAPI\OpenAPI\Models\Shared\PermissionType;
use \OpenAPI\OpenAPI\Models\Shared\OoxmlDocument;
use \OpenAPI\OpenAPI\Models\Shared\StoryOutlineHistory;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdPutRequest();
    $request->id = '3aa63aae-8d67-4864-9bb6-75fd5e60b375';
    $request->includeOutline = false;
    $request->story = new Story();
    $request->story->collaborators = [
        new StoryCollaborator(),
        new StoryCollaborator(),
        new StoryCollaborator(),
        new StoryCollaborator(),
    ];
    $request->story->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-25T07:54:13.852Z');
    $request->story->createdBy = 'f6fbee41-f333-417f-a35b-60eb1ea42655';
    $request->story->id = '5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2';
    $request->story->isPublic = false;
    $request->story->ooxmlDocuments = [
        new OoxmlDocument(),
        new OoxmlDocument(),
        new OoxmlDocument(),
        new OoxmlDocument(),
    ];
    $request->story->outline = 'facilis';
    $request->story->outlineHistory = [
        new StoryOutlineHistory(),
        new StoryOutlineHistory(),
    ];
    $request->story->revision = 709072;
    $request->story->title = 'Mr.';
    $request->story->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-01T06:14:54.164Z');
    $request->story->updatedBy = 'a276b269-16fe-41f0-8f42-94e3698f447f';

    $response = $sdk->story->storyIdPut($request);

    if ($response->story !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdReveal

returns an html document containing a reveal.js epresentation of the story

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdRevealRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdRevealRequest();
    $request->id = '603e8b44-5e80-4ca5-9efd-20e457e1858b';

    $response = $sdk->story->storyIdReveal($request);

    if ($response->revealJsPresenation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyIdStatusGet

Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryIdStatusGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryIdStatusGetRequest();
    $request->id = '6a89fbe3-a5aa-48e4-824d-0ab4075088e5';

    $response = $sdk->story->storyIdStatusGet($request);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyPost

Upload new story to presalytics api

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\Outline;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryPostRequest();
    $request->includeOutline = false;
    $request->outline = new Outline();
    $request->outline->outline = 'et';

    $response = $sdk->story->storyPost($request);

    if ($response->story !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyPostFile

Upload new story to presalytics api via an Open Office Xml file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryPostFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoryPostFileOpenOfficeXmlDocumentEGXlsxPptxFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryPostFileRequest();
    $request->requestBody = new StoryPostFileOpenOfficeXmlDocumentEGXlsxPptxFile();
    $request->requestBody->file = [
        'ex',
        'sed',
        'sit',
    ];
    $request->includeOutline = false;

    $response = $sdk->story->storyPostFile($request);

    if ($response->story !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storyPostFileJson

Upload new story to presalytics api via an Open Office Xml file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoryPostFileJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileUpload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoryPostFileJsonRequest();
    $request->fileUpload = new FileUpload();
    $request->fileUpload->contentLength = 425508;
    $request->fileUpload->file = 'nostrum';
    $request->fileUpload->fileName = 'saepe';
    $request->fileUpload->mimetype = 'error';
    $request->includeOutline = false;

    $response = $sdk->story->storyPostFileJson($request);

    if ($response->story !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
