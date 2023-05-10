# osdb

### Available Operations

* [actionHelp](#actionhelp) - Action help
* [describeAction](#describeaction) - Describe action
* [describeService](#describeservice) - Describe service
* [executeAction](#executeaction) - Execute action
* [listActions](#listactions) - List actions
* [listServices](#listservices) - List services
* [loadService](#loadservice) - Load service
* [login](#login) - Login
* [logout](#logout) - Logout
* [unloadService](#unloadservice) - Unload service

## actionHelp

Returns the help text for a given service action

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionHelpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionHelpRequest();
    $request->actionId = 'distinctio';
    $request->serviceId = 'quibusdam';

    $response = $sdk->osdb->actionHelp($request);

    if ($response->actionHelpResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAction

Returns a description of a given service action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DescribeActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeActionRequest();
    $request->actionId = 'unde';
    $request->serviceId = 'nulla';

    $response = $sdk->osdb->describeAction($request);

    if ($response->describeActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeService

Returns a description of a given service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServiceRequest();
    $request->serviceId = 'corrupti';

    $response = $sdk->osdb->describeService($request);

    if ($response->describeServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeAction

Executes a registered service action and returns any output from the action.
The data returned in the POST response body may be: 
* the raw action output, 
* a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), 
* RDF generated from the action output,
* a URL to an RDF viewer's display of the generated RDF.

Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>

**Examples**
* ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
* ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteActionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecBody;
use \OpenAPI\OpenAPI\Models\Shared\ExecBodyOsdbOutputTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteActionRequest();
    $request->execBody = new ExecBody();
    $request->execBody->actionSpecificProperty1 = 'illum';
    $request->execBody->actionSpecificProperty2 = 'vel';
    $request->execBody->osdbBodyDataEncoding = 'error';
    $request->execBody->osdbBodyDataRaw = 'deserunt';
    $request->execBody->osdbBodyDataSrcUrl = 'http://innocent-effect.org';
    $request->execBody->osdbOutputType = ExecBodyOsdbOutputTypeEnum::URL_ONLY;
    $request->execBody->osdbResponseFormat = 'delectus';
    $request->actionId = 'tempora';
    $request->serviceId = 'suscipit';

    $response = $sdk->osdb->executeAction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActions

Returns an array of action descriptions for the actions supported by the given service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListActionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActionsRequest();
    $request->serviceId = 'molestiae';

    $response = $sdk->osdb->listActions($request);

    if ($response->listActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

Returns descriptions of all services registered with the OSDB server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->osdb->listServices();

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## loadService

Loads a service description into the OSDB Service Registry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LoadServiceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LoadServiceRequestBody();
    $request->serviceDescriptionUrl = 'minus';
    $request->serviceMoniker = 'placeat';

    $response = $sdk->osdb->loadService($request);

    if ($response->loadService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## login

Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->osdb->login();

    if ($response->loginResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## logout

Logs a user out of the OSDB server, ending their OSDB session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->osdb->logout();

    if ($response->logoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unloadService

Removes a service description from the OSDB Service Registry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnloadServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnloadServiceRequest();
    $request->serviceId = 'voluptatum';

    $response = $sdk->osdb->unloadService($request);

    if ($response->unloadService200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
