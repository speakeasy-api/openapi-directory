# rootCertificateAgent

### Available Operations

* [markAgentSecondaryCertificate](#markagentsecondarycertificate) - Mark a certificate to be added to agents
* [queryAgentSecondaryCertificate](#queryagentsecondarycertificate) - Get all potential agent secondary cluster certificates
* [unmarkAgentSecondaryCertificate](#unmarkagentsecondarycertificate) - Unmark a certificate that was previously marked

## markAgentSecondaryCertificate

Mark a secondary cluster certificate to be asynchronously synced to all Rubrik Backup Service instances for which this cluster is the primary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
'maiores'

    $response = $sdk->rootCertificateAgent->markAgentSecondaryCertificate($request);

    if ($response->agentSecondaryCertificateInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryAgentSecondaryCertificate

Get all certificates that have been added to the cluster and qualify to be secondary cluster certificates for the Rubrik Backup Service. This call retrieves any certificates that are detected to be Rubrik cluster certificates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryAgentSecondaryCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryAgentSecondaryCertificateRequest();
    $request->isAgentEnabled = false;

    $response = $sdk->rootCertificateAgent->queryAgentSecondaryCertificate($request);

    if ($response->agentSecondaryCertificateInfoListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unmarkAgentSecondaryCertificate

Unmark a previously marked secondary cluster certificate to be asynchronously removed from all Rubrik Backup Service instances for which this cluster is the primary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UnmarkAgentSecondaryCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnmarkAgentSecondaryCertificateRequest();
    $request->id = 'b576b0d5-f0d3-40c5-bbb2-587053202c73';

    $response = $sdk->rootCertificateAgent->unmarkAgentSecondaryCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
