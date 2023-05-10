# ssids

### Available Operations

* [createNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getNetworkApplianceSsid](#getnetworkappliancessid) - Return a single MX SSID
* [getNetworkApplianceSsids](#getnetworkappliancessids) - List the MX SSIDs in a network
* [getNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [getNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [getNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [getNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [getNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [getNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [getNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [getNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [getNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [getNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [getNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [getOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [updateNetworkApplianceSsid](#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [updateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [updateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [updateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [updateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [updateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [updateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [updateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [updateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [updateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [updateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

## createNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new CreateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'inventore';
    $request->requestBody->name = 'Gail Aufderhar';
    $request->requestBody->passphrase = 'natus';
    $request->networkId = 'modi';
    $request->number = 'ullam';

    $response = $sdk->ssids->createNetworkWirelessSsidIdentityPsk($request);

    if ($response->createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'voluptatibus';
    $request->networkId = 'nemo';
    $request->number = 'dolor';

    $response = $sdk->ssids->deleteNetworkWirelessSsidIdentityPsk($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSsid

Return a single MX SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSsidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSsidRequest();
    $request->networkId = 'quam';
    $request->number = 'incidunt';

    $response = $sdk->ssids->getNetworkApplianceSsid($request);

    if ($response->getNetworkApplianceSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkApplianceSsids

List the MX SSIDs in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceSsidsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceSsidsRequest();
    $request->networkId = 'consectetur';

    $response = $sdk->ssids->getNetworkApplianceSsids($request);

    if ($response->getNetworkApplianceSsids200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsid

Return a single MR SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidRequest();
    $request->networkId = 'eveniet';
    $request->number = 'hic';

    $response = $sdk->ssids->getNetworkWirelessSsid($request);

    if ($response->getNetworkWirelessSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidBonjourForwardingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidBonjourForwardingRequest();
    $request->networkId = 'placeat';
    $request->number = 'repudiandae';

    $response = $sdk->ssids->getNetworkWirelessSsidBonjourForwarding($request);

    if ($response->getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->networkId = 'quasi';
    $request->number = 'quae';

    $response = $sdk->ssids->getNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidEapOverrideRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidEapOverrideRequest();
    $request->networkId = 'sint';
    $request->number = 'praesentium';

    $response = $sdk->ssids->getNetworkWirelessSsidEapOverride($request);

    if ($response->getNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL3FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->networkId = 'quia';
    $request->number = 'dolores';

    $response = $sdk->ssids->getNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidFirewallL7FirewallRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->networkId = 'illo';
    $request->number = 'repellat';

    $response = $sdk->ssids->getNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidHotspot20Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidHotspot20Request();
    $request->networkId = 'iste';
    $request->number = 'libero';

    $response = $sdk->ssids->getNetworkWirelessSsidHotspot20($request);

    if ($response->getNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPskRequest();
    $request->identityPskId = 'inventore';
    $request->networkId = 'tenetur';
    $request->number = 'nihil';

    $response = $sdk->ssids->getNetworkWirelessSsidIdentityPsk($request);

    if ($response->getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidIdentityPsksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidIdentityPsksRequest();
    $request->networkId = 'fugiat';
    $request->number = 'iste';

    $response = $sdk->ssids->getNetworkWirelessSsidIdentityPsks($request);

    if ($response->getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidSchedules

List the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSchedulesRequest();
    $request->networkId = 'deserunt';
    $request->number = 'earum';

    $response = $sdk->ssids->getNetworkWirelessSsidSchedules($request);

    if ($response->getNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSplashSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSplashSettingsRequest();
    $request->networkId = 'a';
    $request->number = 'repudiandae';

    $response = $sdk->ssids->getNetworkWirelessSsidSplashSettings($request);

    if ($response->getNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidTrafficShapingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->networkId = 'eum';
    $request->number = 'omnis';

    $response = $sdk->ssids->getNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsidVpn

List the VPN settings for the SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidVpnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidVpnRequest();
    $request->networkId = 'aliquid';
    $request->number = 'blanditiis';

    $response = $sdk->ssids->getNetworkWirelessSsidVpn($request);

    if ($response->getNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkWirelessSsids

List the MR SSIDs in a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidsRequest();
    $request->networkId = 'sed';

    $response = $sdk->ssids->getNetworkWirelessSsids($request);

    if ($response->getNetworkWirelessSsids200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSummaryTopSsidsByUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSummaryTopSsidsByUsageRequest();
    $request->organizationId = 'mollitia';
    $request->t0 = 'minus';
    $request->t1 = 'recusandae';
    $request->timespan = 9261.79;

    $response = $sdk->ssids->getOrganizationSummaryTopSsidsByUsage($request);

    if ($response->getOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceSsid

Update the attributes of an MX SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyRadiusServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceSsidRequest();
    $request->requestBody = new UpdateNetworkApplianceSsidRequestBody();
    $request->requestBody->authMode = UpdateNetworkApplianceSsidRequestBodyAuthModeEnum::PSK;
    $request->requestBody->defaultVlanId = 740206;
    $request->requestBody->dhcpEnforcedDeauthentication = new UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication();
    $request->requestBody->dhcpEnforcedDeauthentication->enabled = false;
    $request->requestBody->enabled = false;
    $request->requestBody->encryptionMode = UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum::WEP;
    $request->requestBody->name = 'Lela Lemke';
    $request->requestBody->psk = 'illo';
    $request->requestBody->radiusServers = [
        new UpdateNetworkApplianceSsidRequestBodyRadiusServers(),
    ];
    $request->requestBody->visible = false;
    $request->requestBody->wpaEncryptionMode = UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum::WPA3_ONLY;
    $request->networkId = 'animi';
    $request->number = 'id';

    $response = $sdk->ssids->updateNetworkApplianceSsid($request);

    if ($response->updateNetworkApplianceSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsid

Update the attributes of an MR SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDot11r;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyDot11w;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyGre;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyGreConcentrator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdap;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLdapServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadius;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyOauth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyRadiusServers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodySpeedBurst;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidRequestBody();
    $request->requestBody->activeDirectory = new UpdateNetworkWirelessSsidRequestBodyActiveDirectory();
    $request->requestBody->activeDirectory->credentials = new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials();
    $request->requestBody->activeDirectory->credentials->logonName = 'nam';
    $request->requestBody->activeDirectory->credentials->password = 'saepe';
    $request->requestBody->activeDirectory->servers = [
        new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers(),
        new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers(),
        new UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers(),
    ];
    $request->requestBody->adultContentFilteringEnabled = false;
    $request->requestBody->apTagsAndVlanIds = [
        new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds(),
        new UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds(),
    ];
    $request->requestBody->authMode = UpdateNetworkWirelessSsidRequestBodyAuthModeEnum::EIGHT_THOUSAND_AND_TWENTY_ONEX_GOOGLE;
    $request->requestBody->availabilityTags = [
        'voluptates',
        'temporibus',
        'corporis',
    ];
    $request->requestBody->availableOnAllAps = false;
    $request->requestBody->bandSelection = 'odio';
    $request->requestBody->concentratorNetworkId = 'iste';
    $request->requestBody->defaultVlanId = 526368;
    $request->requestBody->disassociateClientsOnVpnFailover = false;
    $request->requestBody->dnsRewrite = new UpdateNetworkWirelessSsidRequestBodyDnsRewrite();
    $request->requestBody->dnsRewrite->dnsCustomNameservers = [
        'velit',
        'quas',
        'veniam',
        'illum',
    ];
    $request->requestBody->dnsRewrite->enabled = false;
    $request->requestBody->dot11r = new UpdateNetworkWirelessSsidRequestBodyDot11r();
    $request->requestBody->dot11r->adaptive = false;
    $request->requestBody->dot11r->enabled = false;
    $request->requestBody->dot11w = new UpdateNetworkWirelessSsidRequestBodyDot11w();
    $request->requestBody->dot11w->enabled = false;
    $request->requestBody->dot11w->required = false;
    $request->requestBody->enabled = false;
    $request->requestBody->encryptionMode = UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum::WEP;
    $request->requestBody->enterpriseAdminAccess = UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum::ACCESS_DISABLED;
    $request->requestBody->gre = new UpdateNetworkWirelessSsidRequestBodyGre();
    $request->requestBody->gre->concentrator = new UpdateNetworkWirelessSsidRequestBodyGreConcentrator();
    $request->requestBody->gre->concentrator->host = 'aperiam';
    $request->requestBody->gre->key = 355233;
    $request->requestBody->ipAssignmentMode = 'cupiditate';
    $request->requestBody->lanIsolationEnabled = false;
    $request->requestBody->ldap = new UpdateNetworkWirelessSsidRequestBodyLdap();
    $request->requestBody->ldap->baseDistinguishedName = 'omnis';
    $request->requestBody->ldap->credentials = new UpdateNetworkWirelessSsidRequestBodyLdapCredentials();
    $request->requestBody->ldap->credentials->distinguishedName = 'quibusdam';
    $request->requestBody->ldap->credentials->password = 'nostrum';
    $request->requestBody->ldap->serverCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate();
    $request->requestBody->ldap->serverCaCertificate->contents = 'impedit';
    $request->requestBody->ldap->servers = [
        new UpdateNetworkWirelessSsidRequestBodyLdapServers(),
    ];
    $request->requestBody->localRadius = new UpdateNetworkWirelessSsidRequestBodyLocalRadius();
    $request->requestBody->localRadius->cacheTimeout = 246585;
    $request->requestBody->localRadius->certificateAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication();
    $request->requestBody->localRadius->certificateAuthentication->clientRootCaCertificate = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate();
    $request->requestBody->localRadius->certificateAuthentication->clientRootCaCertificate->contents = 'magnam';
    $request->requestBody->localRadius->certificateAuthentication->enabled = false;
    $request->requestBody->localRadius->certificateAuthentication->ocspResponderUrl = 'cupiditate';
    $request->requestBody->localRadius->certificateAuthentication->useLdap = false;
    $request->requestBody->localRadius->certificateAuthentication->useOcsp = false;
    $request->requestBody->localRadius->passwordAuthentication = new UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication();
    $request->requestBody->localRadius->passwordAuthentication->enabled = false;
    $request->requestBody->mandatoryDhcpEnabled = false;
    $request->requestBody->minBitrate = 3641.99;
    $request->requestBody->name = 'Agnes Schumm';
    $request->requestBody->oauth = new UpdateNetworkWirelessSsidRequestBodyOauth();
    $request->requestBody->oauth->allowedDomains = [
        'accusantium',
    ];
    $request->requestBody->perClientBandwidthLimitDown = 624582;
    $request->requestBody->perClientBandwidthLimitUp = 887276;
    $request->requestBody->perSsidBandwidthLimitDown = 598714;
    $request->requestBody->perSsidBandwidthLimitUp = 670281;
    $request->requestBody->psk = 'eos';
    $request->requestBody->radiusAccountingEnabled = false;
    $request->requestBody->radiusAccountingInterimInterval = 181858;
    $request->requestBody->radiusAccountingServers = [
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers(),
    ];
    $request->requestBody->radiusAttributeForGroupPolicies = UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum::AIRESPACE_ACL_NAME;
    $request->requestBody->radiusAuthenticationNasId = 'facilis';
    $request->requestBody->radiusCalledStationId = 'aliquid';
    $request->requestBody->radiusCoaEnabled = false;
    $request->requestBody->radiusFailoverPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum::DENY_ACCESS;
    $request->requestBody->radiusFallbackEnabled = false;
    $request->requestBody->radiusGuestVlanEnabled = false;
    $request->requestBody->radiusGuestVlanId = 476388;
    $request->requestBody->radiusLoadBalancingPolicy = UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum::ROUND_ROBIN;
    $request->requestBody->radiusOverride = false;
    $request->requestBody->radiusProxyEnabled = false;
    $request->requestBody->radiusServerAttemptsLimit = 330300;
    $request->requestBody->radiusServerTimeout = 508526;
    $request->requestBody->radiusServers = [
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
        new UpdateNetworkWirelessSsidRequestBodyRadiusServers(),
    ];
    $request->requestBody->radiusTestingEnabled = false;
    $request->requestBody->secondaryConcentratorNetworkId = 'aliquid';
    $request->requestBody->speedBurst = new UpdateNetworkWirelessSsidRequestBodySpeedBurst();
    $request->requestBody->speedBurst->enabled = false;
    $request->requestBody->splashGuestSponsorDomains = [
        'earum',
        'similique',
        'officiis',
        'ipsam',
    ];
    $request->requestBody->splashPage = UpdateNetworkWirelessSsidRequestBodySplashPageEnum::SYSTEMS_MANAGER_SENTRY;
    $request->requestBody->useVlanTagging = false;
    $request->requestBody->visible = false;
    $request->requestBody->vlanId = 860443;
    $request->requestBody->walledGardenEnabled = false;
    $request->requestBody->walledGardenRanges = [
        'quidem',
        'ipsum',
    ];
    $request->requestBody->wpaEncryptionMode = UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum::WPA3192_BIT_SECURITY;
    $request->networkId = 'voluptatibus';
    $request->number = 'totam';

    $response = $sdk->ssids->updateNetworkWirelessSsid($request);

    if ($response->updateNetworkWirelessSsid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidBonjourForwardingRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidBonjourForwardingRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
        new UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(),
    ];
    $request->networkId = 'veritatis';
    $request->number = 'eius';

    $response = $sdk->ssids->updateNetworkWirelessSsidBonjourForwarding($request);

    if ($response->updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody();
    $request->requestBody->deviceTypePolicies = [
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
        new UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies(),
    ];
    $request->requestBody->enabled = false;
    $request->networkId = 'perferendis';
    $request->number = 'aliquid';

    $response = $sdk->ssids->updateNetworkWirelessSsidDeviceTypeGroupPolicies($request);

    if ($response->updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidEapOverrideRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidEapOverrideRequestBody();
    $request->requestBody->eapolKey = new UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey();
    $request->requestBody->eapolKey->retries = 448692;
    $request->requestBody->eapolKey->timeoutInMs = 550329;
    $request->requestBody->identity = new UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity();
    $request->requestBody->identity->retries = 968927;
    $request->requestBody->identity->timeout = 124065;
    $request->requestBody->maxRetries = 223411;
    $request->requestBody->timeout = 786178;
    $request->networkId = 'commodi';
    $request->number = 'laudantium';

    $response = $sdk->ssids->updateNetworkWirelessSsidEapOverride($request);

    if ($response->updateNetworkWirelessSsidEapOverride200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody();
    $request->requestBody->allowLanAccess = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'repellendus';
    $request->number = 'quos';

    $response = $sdk->ssids->updateNetworkWirelessSsidFirewallL3FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody();
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules(),
    ];
    $request->networkId = 'omnis';
    $request->number = 'earum';

    $response = $sdk->ssids->updateNetworkWirelessSsidFirewallL7FirewallRules($request);

    if ($response->updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20Request;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidHotspot20Request();
    $request->requestBody = new UpdateNetworkWirelessSsidHotspot20RequestBody();
    $request->requestBody->domains = [
        'occaecati',
        'saepe',
        'illo',
        'esse',
    ];
    $request->requestBody->enabled = false;
    $request->requestBody->mccMncs = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs(),
    ];
    $request->requestBody->naiRealms = [
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
        new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms(),
    ];
    $request->requestBody->networkAccessType = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum::WILDCARD;
    $request->requestBody->operator = new UpdateNetworkWirelessSsidHotspot20RequestBodyOperator();
    $request->requestBody->operator->name = 'Joey Altenwerth';
    $request->requestBody->roamConsortOis = [
        'enim',
        'corporis',
        'error',
        'soluta',
    ];
    $request->requestBody->venue = new UpdateNetworkWirelessSsidHotspot20RequestBodyVenue();
    $request->requestBody->venue->name = 'Denise Trantow';
    $request->requestBody->venue->type = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum::MUSEUM;
    $request->networkId = 'magnam';
    $request->number = 'vel';

    $response = $sdk->ssids->updateNetworkWirelessSsidHotspot20($request);

    if ($response->updateNetworkWirelessSsidHotspot20200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidIdentityPskRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidIdentityPskRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidIdentityPskRequestBody();
    $request->requestBody->groupPolicyId = 'accusantium';
    $request->requestBody->name = 'Betty Yundt V';
    $request->requestBody->passphrase = 'neque';
    $request->identityPskId = 'reprehenderit';
    $request->networkId = 'voluptas';
    $request->number = 'eligendi';

    $response = $sdk->ssids->updateNetworkWirelessSsidIdentityPsk($request);

    if ($response->updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSchedulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSchedulesRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->ranges = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRanges(),
    ];
    $request->requestBody->rangesInSeconds = [
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
        new UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds(),
    ];
    $request->networkId = 'earum';
    $request->number = 'at';

    $response = $sdk->ssids->updateNetworkWirelessSsidSchedules($request);

    if ($response->updateNetworkWirelessSsidSchedules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSplashSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody();
    $request->requestBody->allowSimultaneousLogins = false;
    $request->requestBody->billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling();
    $request->requestBody->billing->freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess();
    $request->requestBody->billing->freeAccess->durationInMinutes = 910382;
    $request->requestBody->billing->freeAccess->enabled = false;
    $request->requestBody->billing->prepaidAccessFastLoginEnabled = false;
    $request->requestBody->billing->replyToEmailAddress = 'vero';
    $request->requestBody->blockAllTrafficBeforeSignOn = false;
    $request->requestBody->controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum::OPEN;
    $request->requestBody->guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship();
    $request->requestBody->guestSponsorship->durationInMinutes = 400393;
    $request->requestBody->guestSponsorship->guestCanRequestTimeframe = false;
    $request->requestBody->redirectUrl = 'dignissimos';
    $request->requestBody->sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment();
    $request->requestBody->sentryEnrollment->enforcedSystems = [
        'quae',
        'recusandae',
        'temporibus',
    ];
    $request->requestBody->sentryEnrollment->strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum::CLICK_THROUGH;
    $request->requestBody->sentryEnrollment->systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork();
    $request->requestBody->sentryEnrollment->systemsManagerNetwork->id = 'c16a7ba4-7840-4448-9f67-70ef048091a2';
    $request->requestBody->splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage();
    $request->requestBody->splashImage->extension = 'soluta';
    $request->requestBody->splashImage->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage();
    $request->requestBody->splashImage->image->contents = 'culpa';
    $request->requestBody->splashImage->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum::GIF;
    $request->requestBody->splashImage->md5 = 'nemo';
    $request->requestBody->splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo();
    $request->requestBody->splashLogo->extension = 'repudiandae';
    $request->requestBody->splashLogo->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage();
    $request->requestBody->splashLogo->image->contents = 'voluptates';
    $request->requestBody->splashLogo->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum::JPG;
    $request->requestBody->splashLogo->md5 = 'minus';
    $request->requestBody->splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront();
    $request->requestBody->splashPrepaidFront->extension = 'odio';
    $request->requestBody->splashPrepaidFront->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage();
    $request->requestBody->splashPrepaidFront->image->contents = 'ad';
    $request->requestBody->splashPrepaidFront->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum::JPG;
    $request->requestBody->splashPrepaidFront->md5 = 'doloribus';
    $request->requestBody->splashTimeout = 530539;
    $request->requestBody->splashUrl = 'est';
    $request->requestBody->useRedirectUrl = false;
    $request->requestBody->useSplashUrl = false;
    $request->requestBody->welcomeMessage = 'autem';
    $request->networkId = 'perferendis';
    $request->number = 'laborum';

    $response = $sdk->ssids->updateNetworkWirelessSsidSplashSettings($request);

    if ($response->updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidTrafficShapingRulesRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody();
    $request->requestBody->defaultRulesEnabled = false;
    $request->requestBody->rules = [
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
        new UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules(),
    ];
    $request->requestBody->trafficShapingEnabled = false;
    $request->networkId = 'laborum';
    $request->number = 'eveniet';

    $response = $sdk->ssids->updateNetworkWirelessSsidTrafficShapingRules($request);

    if ($response->updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyConcentrator;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodyFailover;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidVpnRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidVpnRequestBody();
    $request->requestBody->concentrator = new UpdateNetworkWirelessSsidVpnRequestBodyConcentrator();
    $request->requestBody->concentrator->networkId = 'dolor';
    $request->requestBody->concentrator->vlanId = 295960;
    $request->requestBody->failover = new UpdateNetworkWirelessSsidVpnRequestBodyFailover();
    $request->requestBody->failover->heartbeatInterval = 425797;
    $request->requestBody->failover->idleTimeout = 926867;
    $request->requestBody->failover->requestIp = 'perferendis';
    $request->requestBody->splitTunnel = new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel();
    $request->requestBody->splitTunnel->enabled = false;
    $request->requestBody->splitTunnel->rules = [
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
        new UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules(),
    ];
    $request->networkId = 'esse';
    $request->number = 'cupiditate';

    $response = $sdk->ssids->updateNetworkWirelessSsidVpn($request);

    if ($response->updateNetworkWirelessSsidVpn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
