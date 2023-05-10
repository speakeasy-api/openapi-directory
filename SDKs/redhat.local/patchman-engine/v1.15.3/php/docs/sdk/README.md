# SDK

## Overview

API of the Patch application on [cloud.redhat.com](cloud.redhat.com)

Syntax of the `filter[name]` query parameters is described in  [Filters documentation](https://github.com/RedHatInsights/patchman-engine/wiki/API-custom-filters)

### Available Operations

* [latestPackage](#latestpackage) - Show me metadata of selected package
* [deletesystem](#deletesystem) - Delete system by inventory id
* [detailAdvisory](#detailadvisory) - Show me details an advisory by given advisory name
* [detailSystem](#detailsystem) - Show me details about a system by given inventory id
* [exportAdvisories](#exportadvisories) - Export applicable advisories for all my systems
* [exportAdvisorySystems](#exportadvisorysystems) - Export systems for my account
* [exportPackageSystems](#exportpackagesystems) - Show me all my systems which have a package installed
* [exportPackages](#exportpackages) - Show me all installed packages across my systems
* [exportSystemAdvisories](#exportsystemadvisories) - Export applicable advisories for all my systems
* [exportSystemPackages](#exportsystempackages) - Show me details about a system packages by given inventory id
* [exportSystems](#exportsystems) - Export systems for my account
* [listAdvisories](#listadvisories) - Show me all applicable advisories for all my systems
* [listAdvisorySystems](#listadvisorysystems) - Show me systems on which the given advisory is applicable
* [listPackages](#listpackages) - Show me all installed packages across my systems
* [listSystemAdvisories](#listsystemadvisories) - Show me advisories for a system by given inventory id
* [listSystems](#listsystems) - Show me all my systems
* [packageSystems](#packagesystems) - Show me all my systems which have a package installed
* [packageVersions](#packageversions) - Show me all package versions installed on some system
* [systemPackages](#systempackages) - Show me details about a system packages by given inventory id
* [viewAdvisoriesSystems](#viewadvisoriessystems) - View advisory-system pairs for selected systems and advisories
* [viewSystemsAdvisories](#viewsystemsadvisories) - View system-advisory pairs for selected systems and advisories

## latestPackage

Show me metadata of selected package

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LatestPackageRequest;
use \OpenAPI\OpenAPI\Models\Operations\LatestPackageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LatestPackageRequest();
    $request->packageName = 'provident';

    $requestSecurity = new LatestPackageSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->latestPackage($request, $requestSecurity);

    if ($response->controllersPackageDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletesystem

Delete system by inventory id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletesystemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletesystemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletesystemRequest();
    $request->inventoryId = 'distinctio';

    $requestSecurity = new DeletesystemSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->deletesystem($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detailAdvisory

Show me details an advisory by given advisory name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DetailAdvisoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetailAdvisorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetailAdvisoryRequest();
    $request->advisoryId = 'quibusdam';

    $requestSecurity = new DetailAdvisorySecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->detailAdvisory($request, $requestSecurity);

    if ($response->controllersAdvisoryDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detailSystem

Show me details about a system by given inventory id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DetailSystemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetailSystemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetailSystemRequest();
    $request->inventoryId = 'unde';

    $requestSecurity = new DetailSystemSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->detailSystem($request, $requestSecurity);

    if ($response->controllersSystemDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAdvisories

Export applicable advisories for all my systems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAdvisoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportAdvisoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAdvisoriesRequest();
    $request->filterAdvisoryType = 'nulla';
    $request->filterApplicableSystems = 'corrupti';
    $request->filterDescription = 'illum';
    $request->filterId = 'vel';
    $request->filterPublicDate = 'error';
    $request->filterSeverity = 'deserunt';
    $request->filterSynopsis = 'suscipit';
    $request->search = 'iure';

    $requestSecurity = new ExportAdvisoriesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->exportAdvisories($request, $requestSecurity);

    if ($response->controllersAdvisoryInlineItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAdvisorySystems

Export systems for my account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAdvisorySystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportAdvisorySystemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAdvisorySystemsRequest();
    $request->advisoryId = 'magnam';
    $request->filterDisplayName = 'debitis';
    $request->filterId = 'ipsa';
    $request->filterLastEvaluation = 'delectus';
    $request->filterLastUpload = 'tempora';
    $request->filterOtherCount = 'suscipit';
    $request->filterPackagesInstalled = 'molestiae';
    $request->filterPackagesUpdatable = 'minus';
    $request->filterRhbaCount = 'placeat';
    $request->filterRheaCount = 'voluptatum';
    $request->filterRhsaCount = 'iusto';
    $request->filterStale = 'excepturi';
    $request->filterSystemProfileSapSidsIn = [
        'recusandae',
        'temporibus',
    ];
    $request->filterSystemProfileSapSystem = 'ab';
    $request->search = 'quis';
    $request->tags = [
        'deserunt',
    ];

    $requestSecurity = new ExportAdvisorySystemsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->exportAdvisorySystems($request, $requestSecurity);

    if ($response->controllersSystemInlineItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportPackageSystems

Show me all my systems which have a package installed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportPackageSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportPackageSystemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportPackageSystemsRequest();
    $request->filterSystemProfileSapSidsIn = [
        'ipsam',
    ];
    $request->filterSystemProfileSapSystem = 'repellendus';
    $request->packageName = 'sapiente';
    $request->tags = [
        'odit',
        'at',
        'at',
        'maiores',
    ];

    $requestSecurity = new ExportPackageSystemsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->exportPackageSystems($request, $requestSecurity);

    if ($response->controllersPackageSystemItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportPackages

Show me all installed packages across my systems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportPackagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportPackagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportPackagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportPackagesRequest();
    $request->filterName = 'molestiae';
    $request->filterSummary = 'quod';
    $request->filterSystemsInstalled = 'quod';
    $request->filterSystemsUpdatable = 'esse';
    $request->search = 'totam';
    $request->sort = ExportPackagesSortEnum::SYSTEMS_UPDATABLE;

    $requestSecurity = new ExportPackagesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->exportPackages($request, $requestSecurity);

    if ($response->controllersPackageItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSystemAdvisories

Export applicable advisories for all my systems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSystemAdvisoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSystemAdvisoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSystemAdvisoriesRequest();
    $request->filterAdvisoryType = 'dolorum';
    $request->filterDescription = 'dicta';
    $request->filterId = 'nam';
    $request->filterPublicDate = 'officia';
    $request->filterSeverity = 'occaecati';
    $request->filterSynopsis = 'fugit';
    $request->inventoryId = 'deleniti';
    $request->search = 'hic';

    $requestSecurity = new ExportSystemAdvisoriesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->exportSystemAdvisories($request, $requestSecurity);

    if ($response->controllersSystemAdvisoriesDBLookups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSystemPackages

Show me details about a system packages by given inventory id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSystemPackagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSystemPackagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSystemPackagesRequest();
    $request->filterDescription = 'optio';
    $request->filterEvra = 'totam';
    $request->filterName = 'beatae';
    $request->filterSummary = 'commodi';
    $request->filterUpdatable = false;
    $request->inventoryId = 'molestiae';
    $request->search = 'modi';

    $requestSecurity = new ExportSystemPackagesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->exportSystemPackages($request, $requestSecurity);

    if ($response->controllersSystemPackageInlines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSystems

Export systems for my account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSystemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSystemsRequest();
    $request->filterDisplayName = 'qui';
    $request->filterId = 'impedit';
    $request->filterLastEvaluation = 'cum';
    $request->filterLastUpload = 'esse';
    $request->filterOtherCount = 'ipsum';
    $request->filterPackagesInstalled = 'excepturi';
    $request->filterPackagesUpdatable = 'aspernatur';
    $request->filterRhbaCount = 'perferendis';
    $request->filterRheaCount = 'ad';
    $request->filterRhsaCount = 'natus';
    $request->filterStale = 'sed';
    $request->filterSystemProfileSapSidsIn = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->filterSystemProfileSapSystem = 'hic';
    $request->search = 'saepe';
    $request->tags = [
        'in',
        'corporis',
        'iste',
    ];

    $requestSecurity = new ExportSystemsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->exportSystems($request, $requestSecurity);

    if ($response->controllersSystemInlineItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAdvisories

Show me all applicable advisories for all my systems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAdvisoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAdvisoriesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAdvisoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAdvisoriesRequest();
    $request->filterAdvisoryType = 'iure';
    $request->filterApplicableSystems = 'saepe';
    $request->filterDescription = 'quidem';
    $request->filterId = 'architecto';
    $request->filterPublicDate = 'ipsa';
    $request->filterSeverity = 'reiciendis';
    $request->filterSynopsis = 'est';
    $request->filterSystemProfileSapSidsIn = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->filterSystemProfileSapSystem = 'corporis';
    $request->limit = 128926;
    $request->offset = 750686;
    $request->search = 'enim';
    $request->sort = ListAdvisoriesSortEnum::SYNOPSIS;
    $request->tags = [
        'minima',
        'excepturi',
    ];

    $requestSecurity = new ListAdvisoriesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->listAdvisories($request, $requestSecurity);

    if ($response->controllersAdvisoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAdvisorySystems

Show me systems on which the given advisory is applicable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAdvisorySystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAdvisorySystemsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAdvisorySystemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAdvisorySystemsRequest();
    $request->advisoryId = 'accusantium';
    $request->filterCreated = 'iure';
    $request->filterCulledTimestamp = 'culpa';
    $request->filterDisplayName = 'doloribus';
    $request->filterId = 'sapiente';
    $request->filterInsightsId = 'architecto';
    $request->filterLastEvaluation = 'mollitia';
    $request->filterLastUpload = 'dolorem';
    $request->filterOtherCount = 'culpa';
    $request->filterRhbaCount = 'consequuntur';
    $request->filterRheaCount = 'repellat';
    $request->filterRhsaCount = 'mollitia';
    $request->filterStale = 'occaecati';
    $request->filterStaleTimestamp = 'numquam';
    $request->filterStaleWarningTimestamp = 'commodi';
    $request->filterSystemProfileSapSidsIn = [
        'molestiae',
        'velit',
    ];
    $request->filterSystemProfileSapSystem = 'error';
    $request->limit = 158969;
    $request->offset = 338007;
    $request->search = 'vitae';
    $request->sort = ListAdvisorySystemsSortEnum::RHEA_COUNT;
    $request->tags = [
        'enim',
        'odit',
        'quo',
    ];

    $requestSecurity = new ListAdvisorySystemsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->listAdvisorySystems($request, $requestSecurity);

    if ($response->controllersAdvisorySystemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPackages

Show me all installed packages across my systems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPackagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPackagesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPackagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPackagesRequest();
    $request->filterName = 'sequi';
    $request->filterSummary = 'tenetur';
    $request->filterSystemProfileSapSidsIn = [
        'id',
        'possimus',
    ];
    $request->filterSystemProfileSapSystem = 'aut';
    $request->filterSystemsInstalled = 'quasi';
    $request->filterSystemsUpdatable = 'error';
    $request->limit = 837945;
    $request->offset = 673660;
    $request->search = 'quasi';
    $request->sort = ListPackagesSortEnum::SYSTEMS_UPDATABLE;
    $request->tags = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];

    $requestSecurity = new ListPackagesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->listPackages($request, $requestSecurity);

    if ($response->controllersPackagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSystemAdvisories

Show me advisories for a system by given inventory id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSystemAdvisoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSystemAdvisoriesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSystemAdvisoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSystemAdvisoriesRequest();
    $request->filterAdvisoryType = 'ipsa';
    $request->filterDescription = 'omnis';
    $request->filterId = 'voluptate';
    $request->filterPublicDate = 'cum';
    $request->filterSeverity = 'perferendis';
    $request->filterSynopsis = 'doloremque';
    $request->inventoryId = 'reprehenderit';
    $request->limit = 282807;
    $request->offset = 979587;
    $request->search = 'dicta';
    $request->sort = ListSystemAdvisoriesSortEnum::NAME;

    $requestSecurity = new ListSystemAdvisoriesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->listSystemAdvisories($request, $requestSecurity);

    if ($response->controllersSystemAdvisoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSystems

Show me all my systems

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSystemsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSystemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSystemsRequest();
    $request->filterCreated = 'dolore';
    $request->filterCulledTimestamp = 'iusto';
    $request->filterDisplayName = 'dicta';
    $request->filterId = 'harum';
    $request->filterInsightsId = 'enim';
    $request->filterLastEvaluation = 'accusamus';
    $request->filterLastUpload = 'commodi';
    $request->filterOtherCount = 'repudiandae';
    $request->filterPackagesInstalled = 'quae';
    $request->filterPackagesUpdatable = 'ipsum';
    $request->filterRhbaCount = 'quidem';
    $request->filterRheaCount = 'molestias';
    $request->filterRhsaCount = 'excepturi';
    $request->filterStale = 'pariatur';
    $request->filterStaleTimestamp = 'modi';
    $request->filterStaleWarningTimestamp = 'praesentium';
    $request->filterSystemProfileSapSidsIn = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->filterSystemProfileSapSystem = 'sint';
    $request->limit = 83112;
    $request->offset = 929297;
    $request->search = 'incidunt';
    $request->sort = ListSystemsSortEnum::LAST_UPLOAD;
    $request->tags = [
        'est',
    ];

    $requestSecurity = new ListSystemsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->listSystems($request, $requestSecurity);

    if ($response->controllersSystemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageSystems

Show me all my systems which have a package installed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PackageSystemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PackageSystemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageSystemsRequest();
    $request->filterSystemProfileSapSidsIn = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->filterSystemProfileSapSystem = 'labore';
    $request->limit = 264730;
    $request->offset = 183191;
    $request->packageName = 'aliquid';
    $request->tags = [
        'quos',
        'perferendis',
        'magni',
    ];

    $requestSecurity = new PackageSystemsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->packageSystems($request, $requestSecurity);

    if ($response->controllersPackageSystemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageVersions

Show me all package versions installed on some system

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PackageVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PackageVersionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageVersionsRequest();
    $request->limit = 828940;
    $request->offset = 369808;
    $request->packageName = 'alias';

    $requestSecurity = new PackageVersionsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->packageVersions($request, $requestSecurity);

    if ($response->controllersPackageVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## systemPackages

Show me details about a system packages by given inventory id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SystemPackagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SystemPackagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SystemPackagesRequest();
    $request->filterDescription = 'fugit';
    $request->filterEvra = 'dolorum';
    $request->filterName = 'excepturi';
    $request->filterSummary = 'tempora';
    $request->filterUpdatable = false;
    $request->inventoryId = 'facilis';
    $request->limit = 735194;
    $request->offset = 288476;
    $request->search = 'delectus';

    $requestSecurity = new SystemPackagesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->systemPackages($request, $requestSecurity);

    if ($response->controllersSystemPackageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## viewAdvisoriesSystems

View advisory-system pairs for selected systems and advisories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ControllersSystemsAdvisoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ViewAdvisoriesSystemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ControllersSystemsAdvisoriesRequest();
    $request->advisories = [
        'non',
        'eligendi',
    ];
    $request->systems = [
        'aliquid',
        'provident',
        'necessitatibus',
    ];

    $requestSecurity = new ViewAdvisoriesSystemsSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->viewAdvisoriesSystems($request, $requestSecurity);

    if ($response->controllersAdvisoriesSystemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## viewSystemsAdvisories

View system-advisory pairs for selected systems and advisories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ControllersSystemsAdvisoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ViewSystemsAdvisoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ControllersSystemsAdvisoriesRequest();
    $request->advisories = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->systems = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];

    $requestSecurity = new ViewSystemsAdvisoriesSecurity();
    $requestSecurity->rhIdentity = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->viewSystemsAdvisories($request, $requestSecurity);

    if ($response->controllersSystemsAdvisoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
