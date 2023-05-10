# projects

### Available Operations

* [cloudtraceProjectsTraceSinksCreate](#cloudtraceprojectstracesinkscreate) - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
* [cloudtraceProjectsTraceSinksDelete](#cloudtraceprojectstracesinksdelete) - Deletes a sink.
* [cloudtraceProjectsTraceSinksGet](#cloudtraceprojectstracesinksget) - Get a trace sink by name under the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksList](#cloudtraceprojectstracesinkslist) - List all sinks for the parent resource (GCP project).
* [cloudtraceProjectsTraceSinksPatch](#cloudtraceprojectstracesinkspatch) - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).

## cloudtraceProjectsTraceSinksCreate

Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TraceSinkInput;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTraceSinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->traceSinkInput = new TraceSinkInput();
    $request->traceSinkInput->name = 'Minnie Schiller';
    $request->traceSinkInput->outputConfig = new OutputConfig();
    $request->traceSinkInput->outputConfig->destination = 'iusto';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new CloudtraceProjectsTraceSinksCreateSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTraceSinksCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTraceSinksCreate($request, $requestSecurity);

    if ($response->traceSink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtraceProjectsTraceSinksDelete

Deletes a sink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTraceSinksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->name = 'Javier Schmidt';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new CloudtraceProjectsTraceSinksDeleteSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTraceSinksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTraceSinksDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtraceProjectsTraceSinksGet

Get a trace sink by name under the parent resource (GCP project).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTraceSinksGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->name = 'Everett Breitenberg';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new CloudtraceProjectsTraceSinksGetSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTraceSinksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTraceSinksGet($request, $requestSecurity);

    if ($response->traceSink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtraceProjectsTraceSinksList

List all sinks for the parent resource (GCP project).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTraceSinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new CloudtraceProjectsTraceSinksListSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTraceSinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTraceSinksList($request, $requestSecurity);

    if ($response->listTraceSinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudtraceProjectsTraceSinksPatch

Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TraceSinkInput;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudtraceProjectsTraceSinksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudtraceProjectsTraceSinksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->traceSinkInput = new TraceSinkInput();
    $request->traceSinkInput->name = 'Harvey Hessel';
    $request->traceSinkInput->outputConfig = new OutputConfig();
    $request->traceSinkInput->outputConfig->destination = 'saepe';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->name = 'Cameron Dach';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->updateMask = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new CloudtraceProjectsTraceSinksPatchSecurity();
    $requestSecurity->option1 = new CloudtraceProjectsTraceSinksPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudtraceProjectsTraceSinksPatch($request, $requestSecurity);

    if ($response->traceSink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
