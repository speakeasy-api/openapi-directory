# dataExporterConfigs

## Overview

Everything about Otoroshi data exporters

### Available Operations

* [dataExporterTemplate](#dataexportertemplate) - Get all data exporter configs
* [createBulkDataExporterConfigs](#createbulkdataexporterconfigs) - Create a new data exporter configs
* [createDataExporterConfig](#createdataexporterconfig) - Create a new data exporter config
* [deleteDataExporterConfig](#deletedataexporterconfig) - Delete a data exporter config
* [deletebulkDataExporterConfig](#deletebulkdataexporterconfig) - Delete a data exporter config
* [findAllDataExporters](#findalldataexporters) - Get all data exporter configs
* [findDataExporterConfigById](#finddataexporterconfigbyid) - Get a data exporter config
* [patchBulkDataExporterConfig](#patchbulkdataexporterconfig) - Update a data exporter configs with a diff
* [patchDataExporterConfig](#patchdataexporterconfig) - Update a data exporter config with a diff
* [updateBulkDataExporterConfig](#updatebulkdataexporterconfig) - Update a data exporter configs
* [updateDataExporterConfig](#updatedataexporterconfig) - Update a data exporter config

## dataExporterTemplate

Get all data exporter configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataExporterTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataExporterTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataExporterTemplateRequest();
    $request->type = 'quis';

    $requestSecurity = new DataExporterTemplateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->dataExporterTemplate($request, $requestSecurity);

    if ($response->dataExporterConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBulkDataExporterConfigs

Create a new data exporter configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfig;
use \OpenAPI\OpenAPI\Models\Shared\Filtering;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfigTypEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBulkDataExporterConfigsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataExporterConfig();
    $request->bufferSize = 123123;
    $request->config = new PulsarDataExporterConfig();
    $request->config->namespace = 'a string value';
    $request->config->tenant = 'a string value';
    $request->config->topic = 'a string value';
    $request->config->uri = [
        'a string value',
    ];
    $request->desc = 'a string value';
    $request->enabled = 'a string value';
    $request->filtering = new Filtering();
    $request->filtering->exclude = [
        [
            'minus' => 'quam',
        ],
    ];
    $request->filtering->include = [
        [
            'nostrum' => 'hic',
            'recusandae' => 'omnis',
            'facilis' => 'perspiciatis',
            'voluptatem' => 'porro',
        ],
    ];
    $request->groupDuration = 123;
    $request->groupSize = 123123;
    $request->id = 'a string value';
    $request->jsonWorkers = 123123;
    $request->location = new Location();
    $request->location->teams = [
        [
            'error' => 'eaque',
            'occaecati' => 'rerum',
            'adipisci' => 'asperiores',
        ],
    ];
    $request->location->tenant = 'a string value';
    $request->metadata = [
        'modi' => 'iste',
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->name = 'a string value';
    $request->projection = [
        'quaerat' => 'quos',
        'aliquid' => 'dolorem',
        'dolorem' => 'dolor',
        'qui' => 'ipsum',
    ];
    $request->sendWorkers = 123123;
    $request->typ = DataExporterConfigTypEnum::CUSTOM;

    $requestSecurity = new CreateBulkDataExporterConfigsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->createBulkDataExporterConfigs($request, $requestSecurity);

    if ($response->createBulkDataExporterConfigs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataExporterConfig

Create a new data exporter config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfig;
use \OpenAPI\OpenAPI\Models\Shared\Filtering;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfigTypEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataExporterConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataExporterConfig();
    $request->bufferSize = 123123;
    $request->config = new MailerMailgunExporterConfig();
    $request->config->apiKey = 'a string value';
    $request->config->domain = 'a string value';
    $request->config->eu = true;
    $request->config->to = [
        'admin@otoroshi.io',
        'admin@otoroshi.io',
        'admin@otoroshi.io',
    ];
    $request->config->type = MailerMailgunExporterConfigTypeEnum::MAILGUN;
    $request->desc = 'a string value';
    $request->enabled = 'a string value';
    $request->filtering = new Filtering();
    $request->filtering->exclude = [
        [
            'reiciendis' => 'amet',
            'dolorum' => 'numquam',
        ],
        [
            'ipsa' => 'ipsa',
        ],
    ];
    $request->filtering->include = [
        [
            'quaerat' => 'accusamus',
            'quidem' => 'voluptatibus',
        ],
        [
            'natus' => 'eos',
            'atque' => 'sit',
        ],
    ];
    $request->groupDuration = 123;
    $request->groupSize = 123123;
    $request->id = 'a string value';
    $request->jsonWorkers = 123123;
    $request->location = new Location();
    $request->location->teams = [
        [
            'soluta' => 'dolorum',
        ],
        [
            'voluptate' => 'dolorum',
            'deleniti' => 'omnis',
        ],
        [
            'distinctio' => 'asperiores',
            'nihil' => 'ipsum',
            'voluptate' => 'id',
            'saepe' => 'eius',
        ],
        [
            'perferendis' => 'amet',
        ],
    ];
    $request->location->tenant = 'a string value';
    $request->metadata = [
        'accusamus' => 'ad',
        'saepe' => 'suscipit',
        'deserunt' => 'provident',
        'minima' => 'repellendus',
    ];
    $request->name = 'a string value';
    $request->projection = [
        'similique' => 'alias',
        'at' => 'quaerat',
        'tempora' => 'vel',
    ];
    $request->sendWorkers = 123123;
    $request->typ = DataExporterConfigTypEnum::CONSOLE;

    $requestSecurity = new CreateDataExporterConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->createDataExporterConfig($request, $requestSecurity);

    if ($response->dataExporterConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataExporterConfig

Delete a data exporter config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataExporterConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataExporterConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataExporterConfigRequest();
    $request->dataExporterConfigId = 'officiis';

    $requestSecurity = new DeleteDataExporterConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->deleteDataExporterConfig($request, $requestSecurity);

    if ($response->deleted !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletebulkDataExporterConfig

Delete a data exporter config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeletebulkDataExporterConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new Patch(),
    ]

    $requestSecurity = new DeletebulkDataExporterConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->deletebulkDataExporterConfig($request, $requestSecurity);

    if ($response->deletebulkDataExporterConfig200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findAllDataExporters

Get all data exporter configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindAllDataExportersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FindAllDataExportersSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->findAllDataExporters($requestSecurity);

    if ($response->dataExporterConfigs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findDataExporterConfigById

Get a data exporter config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindDataExporterConfigByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindDataExporterConfigByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindDataExporterConfigByIdRequest();
    $request->dataExporterConfigId = 'dolorum';

    $requestSecurity = new FindDataExporterConfigByIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->findDataExporterConfigById($request, $requestSecurity);

    if ($response->dataExporterConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchBulkDataExporterConfig

Update a data exporter configs with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchBulkDataExporterConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new Patch(),
        new Patch(),
        new Patch(),
        new Patch(),
    ]

    $requestSecurity = new PatchBulkDataExporterConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->patchBulkDataExporterConfig($request, $requestSecurity);

    if ($response->patchBulkDataExporterConfig200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDataExporterConfig

Update a data exporter config with a diff

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchDataExporterConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchDataExporterConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDataExporterConfigRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
    ];
    $request->dataExporterConfigId = 'harum';

    $requestSecurity = new PatchDataExporterConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->patchDataExporterConfig($request, $requestSecurity);

    if ($response->dataExporterConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBulkDataExporterConfig

Update a data exporter configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfig;
use \OpenAPI\OpenAPI\Models\Shared\Filtering;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfigTypEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBulkDataExporterConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataExporterConfig();
    $request->bufferSize = 123123;
    $request->config = new MailerConsoleExporterConfig();
    $request->config->type = MailerConsoleExporterConfigTypeEnum::GENERIC;
    $request->desc = 'a string value';
    $request->enabled = 'a string value';
    $request->filtering = new Filtering();
    $request->filtering->exclude = [
        [
            'tenetur' => 'amet',
            'tempore' => 'accusamus',
            'numquam' => 'enim',
            'dolorem' => 'sapiente',
        ],
    ];
    $request->filtering->include = [
        [
            'sit' => 'expedita',
            'neque' => 'sed',
        ],
        [
            'libero' => 'voluptas',
            'deserunt' => 'quam',
        ],
        [
            'incidunt' => 'qui',
        ],
    ];
    $request->groupDuration = 123;
    $request->groupSize = 123123;
    $request->id = 'a string value';
    $request->jsonWorkers = 123123;
    $request->location = new Location();
    $request->location->teams = [
        [
            'pariatur' => 'soluta',
            'dicta' => 'laborum',
            'totam' => 'incidunt',
            'aspernatur' => 'dolores',
        ],
        [
            'facilis' => 'aliquid',
            'quam' => 'molestias',
            'temporibus' => 'qui',
        ],
        [
            'fugit' => 'magni',
        ],
    ];
    $request->location->tenant = 'a string value';
    $request->metadata = [
        'sunt' => 'ullam',
        'nam' => 'hic',
    ];
    $request->name = 'a string value';
    $request->projection = [
        'cumque' => 'soluta',
    ];
    $request->sendWorkers = 123123;
    $request->typ = DataExporterConfigTypEnum::CONSOLE;

    $requestSecurity = new UpdateBulkDataExporterConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->updateBulkDataExporterConfig($request, $requestSecurity);

    if ($response->updateBulkDataExporterConfig200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataExporterConfig

Update a data exporter config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataExporterConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfig;
use \OpenAPI\OpenAPI\Models\Shared\Filtering;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\DataExporterConfigTypEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataExporterConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataExporterConfigRequest();
    $request->dataExporterConfig = new DataExporterConfig();
    $request->dataExporterConfig->bufferSize = 123123;
    $request->dataExporterConfig->config = new KafkaConfig();
    $request->dataExporterConfig->config->keyPass = 'a string value';
    $request->dataExporterConfig->config->keyStore = 'a string value';
    $request->dataExporterConfig->config->servers = [
        'a string value',
        'a string value',
        'a string value',
        'a string value',
    ];
    $request->dataExporterConfig->config->topic = 'a string value';
    $request->dataExporterConfig->config->trustore = 'a string value';
    $request->dataExporterConfig->desc = 'a string value';
    $request->dataExporterConfig->enabled = 'a string value';
    $request->dataExporterConfig->filtering = new Filtering();
    $request->dataExporterConfig->filtering->exclude = [
        [
            'nobis' => 'quos',
        ],
    ];
    $request->dataExporterConfig->filtering->include = [
        [
            'aperiam' => 'delectus',
            'dolorem' => 'dolore',
            'labore' => 'adipisci',
        ],
        [
            'architecto' => 'quae',
            'aut' => 'quas',
            'itaque' => 'consequatur',
        ],
        [
            'repellendus' => 'porro',
            'doloribus' => 'ut',
            'facilis' => 'cupiditate',
        ],
    ];
    $request->dataExporterConfig->groupDuration = 123;
    $request->dataExporterConfig->groupSize = 123123;
    $request->dataExporterConfig->id = 'a string value';
    $request->dataExporterConfig->jsonWorkers = 123123;
    $request->dataExporterConfig->location = new Location();
    $request->dataExporterConfig->location->teams = [
        [
            'laudantium' => 'odio',
        ],
    ];
    $request->dataExporterConfig->location->tenant = 'a string value';
    $request->dataExporterConfig->metadata = [
        'voluptatibus' => 'quisquam',
        'vero' => 'omnis',
        'quis' => 'ipsum',
    ];
    $request->dataExporterConfig->name = 'a string value';
    $request->dataExporterConfig->projection = [
        'voluptate' => 'consectetur',
        'vero' => 'tenetur',
        'dignissimos' => 'hic',
        'distinctio' => 'quod',
    ];
    $request->dataExporterConfig->sendWorkers = 123123;
    $request->dataExporterConfig->typ = DataExporterConfigTypEnum::MAILER;
    $request->dataExporterConfigId = 'similique';

    $requestSecurity = new UpdateDataExporterConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->dataExporterConfigs->updateDataExporterConfig($request, $requestSecurity);

    if ($response->dataExporterConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
