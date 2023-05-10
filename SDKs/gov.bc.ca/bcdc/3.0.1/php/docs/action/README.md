# action

## Overview

CKAN's Action API is a powerful, RPC-style API that exposes all of CKAN's core features to API clients.

Find out more
<http://docs.ckan.org/en/ckan-2.5.3/api/index.html>
### Available Operations

* [getActionOrganizationActivityList](#getactionorganizationactivitylist) - Get the activity stream of an organization
* [getActionOrganizationActivityListHtml](#getactionorganizationactivitylisthtml) - Get the activity stream of an organization, HTML format
* [getActionOrganizationAutocomplete](#getactionorganizationautocomplete) - Get names of organizations that match a query string
* [getActionOrganizationFollowerCount](#getactionorganizationfollowercount) - Get number of followers of an organization
* [getActionOrganizationFollowerList](#getactionorganizationfollowerlist) - Get users following an organization
* [getActionOrganizationList](#getactionorganizationlist) - Get names of all organizations
* [getActionOrganizationListForUser](#getactionorganizationlistforuser) - Get organizations that a user has a given permission for
* [getActionOrganizationRevisionList](#getactionorganizationrevisionlist) - Get organization revisions
* [getActionOrganizationShow](#getactionorganizationshow) - Get details of a specific organization
* [getActionPackageActivityList](#getactionpackageactivitylist) - Get the activity stream of a package (dataset)
* [getActionPackageActivityListHtml](#getactionpackageactivitylisthtml) - Get the activity stream of a package (dataset), HTML format
* [getActionPackageAutocomplete](#getactionpackageautocomplete) - Find packages (datasets) matching a query
* [getActionPackageList](#getactionpackagelist) - Get a list of all packages (datasets)
* [getActionPackageRelationshipsList](#getactionpackagerelationshipslist) - Get package (dataset) relationships
* [getActionPackageRevisionList](#getactionpackagerevisionlist) - Get list of revisions for a package (dataset)
* [getActionPackageSearch](#getactionpackagesearch) - Find packages (datasets) matching query terms
* [getActionPackageShow](#getactionpackageshow) - Get metadata about one specific package (dataset)
* [getActionRelatedList](#getactionrelatedlist) - Gets items related to a package (dataset)
* [getActionResourceSearch](#getactionresourcesearch) - Find resources
* [getActionResourceShow](#getactionresourceshow) - Get metadata for a specific resource
* [getActionStatusShow](#getactionstatusshow) - Get the site status
* [getActionTagList](#getactiontaglist) - Get a list of tags

## getActionOrganizationActivityList

Return an organization's activity stream

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationActivityListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationActivityListRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->action->getActionOrganizationActivityList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationActivityListHtml

Return an organization's activity stream as HTML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationActivityListHtmlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationActivityListHtmlRequest();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $response = $sdk->action->getActionOrganizationActivityListHtml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationAutocomplete

Return a list of organization names that contain a string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationAutocompleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationAutocompleteRequest();
    $request->limit = 358152;
    $request->q = 'explicabo';

    $response = $sdk->action->getActionOrganizationAutocomplete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationFollowerCount

Return the number of followers of an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationFollowerCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationFollowerCountRequest();
    $request->id = 'c5955907-aff1-4a3a-afa9-467739251aa5';

    $response = $sdk->action->getActionOrganizationFollowerCount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationFollowerList

Return a list of users that are following a given organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationFollowerListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationFollowerListRequest();
    $request->id = '2c3f5ad0-19da-41ff-a78f-097b0074f154';

    $response = $sdk->action->getActionOrganizationFollowerList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationList

Returns the names of all indexed organizations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationListRequest();
    $request->limit = 480894;
    $request->offset = 118727;

    $response = $sdk->action->getActionOrganizationList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationListForUser

Return the organizations that the user has a given permission for

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationListForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationListForUserRequest();
    $request->permission = 'harum';

    $response = $sdk->action->getActionOrganizationListForUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationRevisionList

Return an organization's revisions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationRevisionListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationRevisionListRequest();
    $request->id = '5e6e13b9-9d48-48e1-a91e-450ad2abd442';

    $response = $sdk->action->getActionOrganizationRevisionList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionOrganizationShow

Return the details of an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationShowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationShowRequest();
    $request->id = '69802d50-2a94-4bb4-b63c-969e9a3efa77';
    $request->includeDatasets = false;

    $response = $sdk->action->getActionOrganizationShow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageActivityList

Returns a package's activity stream

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageActivityListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageActivityListRequest();
    $request->id = 'dfb14cd6-6ae3-495e-bb9b-a88f3a669970';
    $request->limit = 470132;
    $request->offset = 301575;

    $response = $sdk->action->getActionPackageActivityList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageActivityListHtml

The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageActivityListHtmlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageActivityListHtmlRequest();
    $request->id = 'ba4469b6-e214-4195-9890-afa563e2516f';
    $request->limit = 891924;
    $request->offset = 260341;

    $response = $sdk->action->getActionPackageActivityListHtml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageAutocomplete

Return a list of datasets that match a string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageAutocompleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageAutocompleteRequest();
    $request->limit = 806194;
    $request->q = 'deleniti';

    $response = $sdk->action->getActionPackageAutocomplete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageList

Returns the names of all indexed packages (datasets)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageListRequest();
    $request->limit = 703889;
    $request->offset = 447926;

    $response = $sdk->action->getActionPackageList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageRelationshipsList

Return a dataset's relationships

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageRelationshipsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageRelationshipsListRequest();
    $request->id = '11e5b7fd-2ed0-4289-a1cd-dc692601fb57';
    $request->id2 = 'autem';
    $request->rel = 'nam';

    $response = $sdk->action->getActionPackageRelationshipsList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageRevisionList

Return a dataset's revision as a list of dictionaries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageRevisionListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageRevisionListRequest();
    $request->id = '0d5f0d30-c5fb-4b25-8705-3202c73d5fe9';

    $response = $sdk->action->getActionPackageRevisionList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageSearch

Searches for packages (datasets) matching the specified query terms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageSearchRequest();
    $request->q = 'facilis';

    $response = $sdk->action->getActionPackageSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionPackageShow

Returns metadata about the package (dataset) corresponding to the specified unique name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionPackageShowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionPackageShowRequest();
    $request->id = '90c28909-b3fe-449a-8d9c-bf48633323f9';

    $response = $sdk->action->getActionPackageShow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionRelatedList

Returns a dataset's related items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionRelatedListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionRelatedListRequest();
    $request->dataset = 'cum';
    $request->featured = 'voluptate';
    $request->id = '7f3a4100-674e-4bf6-9280-d1ba77a89ebf';
    $request->sort = 'nihil';
    $request->typeFilter = 'ipsum';

    $response = $sdk->action->getActionRelatedList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionResourceSearch

Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionResourceSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionResourceSearchRequest();
    $request->fields = 'voluptate';
    $request->limit = 663078;
    $request->offset = 906418;
    $request->orderBy = 'eius';
    $request->query = 'aspernatur';

    $response = $sdk->action->getActionResourceSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionResourceShow

Return the metadata of a resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionResourceShowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionResourceShowRequest();
    $request->id = '03ce5e6a-95d8-4a0d-846c-e2af7a73cf3b';
    $request->includeTracking = false;

    $response = $sdk->action->getActionResourceShow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionStatusShow

Returns the site status

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
    $response = $sdk->action->getActionStatusShow();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionTagList

Returns the names of all indexed tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionTagListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionTagListRequest();
    $request->limit = 880298;
    $request->offset = 253941;

    $response = $sdk->action->getActionTagList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
