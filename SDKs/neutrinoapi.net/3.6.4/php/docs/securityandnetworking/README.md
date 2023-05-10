# securityAndNetworking

### Available Operations

* [domainLookup](#domainlookup) - Domain Lookup
* [emailVerify](#emailverify) - Email Verify
* [hostReputation](#hostreputation) - Host Reputation
* [ipBlocklist](#ipblocklist) - IP Blocklist
* [ipBlocklistDownload](#ipblocklistdownload) - IP Blocklist Download
* [ipProbe](#ipprobe) - IP Probe

## domainLookup

Retrieve domain name details and detect potentially malicious or dangerous domains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainLookupRequest();
    $request->host = 'culpa';
    $request->live = false;

    $response = $sdk->securityAndNetworking->domainLookup($request);

    if ($response->domainLookupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## emailVerify

SMTP based email address verification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmailVerifyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmailVerifyRequest();
    $request->email = 'Veronica.Brakus@hotmail.com';
    $request->fixTypos = false;

    $response = $sdk->securityAndNetworking->emailVerify($request);

    if ($response->emailVerifyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hostReputation

Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HostReputationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HostReputationRequest();
    $request->host = 'culpa';
    $request->listRating = 161309;
    $request->zones = 'repellat';

    $response = $sdk->securityAndNetworking->hostReputation($request);

    if ($response->hostReputationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ipBlocklist

The IP Blocklist API will detect potentially malicious or dangerous IP addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IPBlocklistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IPBlocklistRequest();
    $request->ip = 'mollitia';
    $request->vpnLookup = false;

    $response = $sdk->securityAndNetworking->ipBlocklist($request);

    if ($response->ipBlocklistResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ipBlocklistDownload

This API is a direct feed to our IP blocklist data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IPBlocklistDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IPBlocklistDownloadRequest();
    $request->cidr = false;
    $request->format = 'occaecati';
    $request->includeVpn = false;
    $request->ip6 = false;

    $response = $sdk->securityAndNetworking->ipBlocklistDownload($request);

    if ($response->ipBlocklistDownload200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ipProbe

Execute a realtime network probe against an IPv4 or IPv6 address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\IPProbeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IPProbeRequest();
    $request->ip = 'numquam';

    $response = $sdk->securityAndNetworking->ipProbe($request);

    if ($response->ipProbeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
