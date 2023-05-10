# export

## Overview

Requires Export Token or Organization Key

### Available Operations

* [exportAssetTopHWCSV](#exportassettophwcsv) - Top asset hardware products as CSV
* [exportAssetTopOSCSV](#exportassettoposcsv) - Top asset operating systems as CSV
* [exportAssetTopTagsCSV](#exportassettoptagscsv) - Top asset tags as CSV
* [exportAssetTopTypesCSV](#exportassettoptypescsv) - Top asset types as CSV
* [exportAssetsCSV](#exportassetscsv) - Asset inventory as CSV
* [exportAssetsJSON](#exportassetsjson) - Exports the asset inventory
* [exportAssetsJSONL](#exportassetsjsonl) - Asset inventory as JSON line-delimited
* [exportAssetsNmapXML](#exportassetsnmapxml) - Asset inventory as Nmap-style XML
* [exportServicesCSV](#exportservicescsv) - Service inventory as CSV
* [exportServicesJSON](#exportservicesjson) - Service inventory as JSON
* [exportServicesJSONL](#exportservicesjsonl) - Service inventory as JSON line-delimited
* [exportServicesTopProductsCSV](#exportservicestopproductscsv) - Top service products as CSV
* [exportServicesTopProtocolsCSV](#exportservicestopprotocolscsv) - Top service protocols as CSV
* [exportServicesTopTCPCSV](#exportservicestoptcpcsv) - Top TCP services as CSV
* [exportServicesTopUDPCSV](#exportservicestopudpcsv) - Top UDP services as CSV
* [exportSitesCSV](#exportsitescsv) - Site list as CSV
* [exportSitesJSON](#exportsitesjson) - Export all sites
* [exportSitesJSONL](#exportsitesjsonl) - Site list as JSON line-delimited
* [exportSubnetUtilizationStatsCSV](#exportsubnetutilizationstatscsv) - Subnet utilization statistics as as CSV
* [exportWirelessCSV](#exportwirelesscsv) - Wireless inventory as CSV
* [exportWirelessJSON](#exportwirelessjson) - Wireless inventory as JSON
* [exportWirelessJSONL](#exportwirelessjsonl) - Wireless inventory as JSON line-delimited

## exportAssetTopHWCSV

Top asset hardware products as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetTopHWCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportAssetTopHWCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetTopHWCSV($requestSecurity);

    if ($response->exportAssetTopHWCSV200TextCsvBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAssetTopOSCSV

Top asset operating systems as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetTopOSCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportAssetTopOSCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetTopOSCSV($requestSecurity);

    if ($response->exportAssetTopOSCSV200TextCsvBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAssetTopTagsCSV

Top asset tags as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetTopTagsCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportAssetTopTagsCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetTopTagsCSV($requestSecurity);

    if ($response->exportAssetTopTagsCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAssetTopTypesCSV

Top asset types as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetTopTypesCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportAssetTopTypesCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetTopTypesCSV($requestSecurity);

    if ($response->exportAssetTopTypesCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAssetsCSV

Asset inventory as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsCSVRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAssetsCSVRequest();
    $request->search = 'similique';

    $requestSecurity = new ExportAssetsCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetsCSV($request, $requestSecurity);

    if ($response->exportAssetsCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAssetsJSON

Exports the asset inventory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsJSONRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAssetsJSONRequest();
    $request->fields = 'culpa';
    $request->search = 'aliquid';

    $requestSecurity = new ExportAssetsJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetsJSON($request, $requestSecurity);

    if ($response->assets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAssetsJSONL

Asset inventory as JSON line-delimited

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsJSONLRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsJSONLSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAssetsJSONLRequest();
    $request->fields = 'tenetur';
    $request->search = 'quae';

    $requestSecurity = new ExportAssetsJSONLSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetsJSONL($request, $requestSecurity);

    if ($response->exportAssetsJSONL200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportAssetsNmapXML

Asset inventory as Nmap-style XML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsNmapXMLRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportAssetsNmapXMLSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportAssetsNmapXMLRequest();
    $request->search = 'earum';

    $requestSecurity = new ExportAssetsNmapXMLSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportAssetsNmapXML($request, $requestSecurity);

    if ($response->exportAssetsNmapXML200TextXMLBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportServicesCSV

Service inventory as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesCSVRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportServicesCSVRequest();
    $request->search = 'vel';

    $requestSecurity = new ExportServicesCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportServicesCSV($request, $requestSecurity);

    if ($response->exportServicesCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportServicesJSON

Service inventory as JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesJSONRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportServicesJSONRequest();
    $request->fields = 'in';
    $request->search = 'eius';

    $requestSecurity = new ExportServicesJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportServicesJSON($request, $requestSecurity);

    if ($response->services !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportServicesJSONL

Service inventory as JSON line-delimited

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesJSONLRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesJSONLSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportServicesJSONLRequest();
    $request->fields = 'libero';
    $request->search = 'illum';

    $requestSecurity = new ExportServicesJSONLSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportServicesJSONL($request, $requestSecurity);

    if ($response->exportServicesJSONL200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportServicesTopProductsCSV

Top service products as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesTopProductsCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportServicesTopProductsCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportServicesTopProductsCSV($requestSecurity);

    if ($response->exportServicesTopProductsCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportServicesTopProtocolsCSV

Top service protocols as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesTopProtocolsCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportServicesTopProtocolsCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportServicesTopProtocolsCSV($requestSecurity);

    if ($response->exportServicesTopProtocolsCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportServicesTopTCPCSV

Top TCP services as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesTopTCPCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportServicesTopTCPCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportServicesTopTCPCSV($requestSecurity);

    if ($response->exportServicesTopTCPCSV200TextCsvBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportServicesTopUDPCSV

Top UDP services as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportServicesTopUDPCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportServicesTopUDPCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportServicesTopUDPCSV($requestSecurity);

    if ($response->exportServicesTopUDPCSV200TextCsvBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSitesCSV

Site list as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSitesCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ExportSitesCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportSitesCSV($requestSecurity);

    if ($response->exportSitesCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSitesJSON

Export all sites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSitesJSONRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSitesJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSitesJSONRequest();
    $request->fields = 'soluta';
    $request->search = 'accusantium';

    $requestSecurity = new ExportSitesJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportSitesJSON($request, $requestSecurity);

    if ($response->sites !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSitesJSONL

Site list as JSON line-delimited

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSitesJSONLRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSitesJSONLSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSitesJSONLRequest();
    $request->fields = 'aliquam';
    $request->search = 'sapiente';

    $requestSecurity = new ExportSitesJSONLSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportSitesJSONL($request, $requestSecurity);

    if ($response->exportSitesJSONL200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportSubnetUtilizationStatsCSV

Subnet utilization statistics as as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportSubnetUtilizationStatsCSVRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportSubnetUtilizationStatsCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportSubnetUtilizationStatsCSVRequest();
    $request->mask = 'dicta';

    $requestSecurity = new ExportSubnetUtilizationStatsCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportSubnetUtilizationStatsCSV($request, $requestSecurity);

    if ($response->exportSubnetUtilizationStatsCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportWirelessCSV

Wireless inventory as CSV

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportWirelessCSVRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportWirelessCSVSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportWirelessCSVRequest();
    $request->search = 'ullam';

    $requestSecurity = new ExportWirelessCSVSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportWirelessCSV($request, $requestSecurity);

    if ($response->exportWirelessCSV200TextCSVBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportWirelessJSON

Wireless inventory as JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportWirelessJSONRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportWirelessJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportWirelessJSONRequest();
    $request->fields = 'reprehenderit';
    $request->search = 'ullam';

    $requestSecurity = new ExportWirelessJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportWirelessJSON($request, $requestSecurity);

    if ($response->wirelesses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportWirelessJSONL

Wireless inventory as JSON line-delimited

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportWirelessJSONLRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportWirelessJSONLSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportWirelessJSONLRequest();
    $request->fields = 'nisi';
    $request->search = 'aut';

    $requestSecurity = new ExportWirelessJSONLSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->export->exportWirelessJSONL($request, $requestSecurity);

    if ($response->exportWirelessJSONL200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
