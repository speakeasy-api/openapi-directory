# rootCluster

## Overview

Cluster configuration and health.

### Available Operations

* [addKmipServer](#addkmipserver) - Add a KMIP server
* [addSyslogExportRule](#addsyslogexportrule) - Add a new syslog export rule
* [availableVersion](#availableversion) - Retrieve CDM versions available for upgrade
* [changeClusterNodeHostnames](#changeclusternodehostnames) - Change hostname for nodes in a Rubrik cluster
* [deleteKmipServer](#deletekmipserver) - Remove the specified KMIP server
* [deleteSyslogExportRule](#deletesyslogexportrule) - Delete the specified syslog export rule
* [getAsyncRequestStatusForUpgrade](#getasyncrequeststatusforupgrade) - Get asynchronous request details
* [getClusterApiVersion](#getclusterapiversion) - Get cluster REST API version
* [getClusterCertificate](#getclustercertificate) - Get the cluster certificate
* [getClusterNodeHostnames](#getclusternodehostnames) - Get the node ID to hostname mapping for all the nodes in a Rubrik cluster

* [getClusterNodeIds](#getclusternodeids) - Get the name of the nodes in the cluster
* [getClusterVersion](#getclusterversion) - Get cluster software version
* [getCorsConfiguration](#getcorsconfiguration) - Get CORS configuration
* [getEncryptionStatus](#getencryptionstatus) - Get encryption at rest status
* [getFips](#getfips) - Get FIPS enablement status
* [getKmipClient](#getkmipclient) - Get the KMIP client configuration
* [getKmipServer](#getkmipserver) - Get KMIP server information
* [getPeriodicUpgradePrechecksStatus](#getperiodicupgradeprechecksstatus) - Get the result of the latest run of the upgrade prechecks
* [getPublicClusterInfo](#getpublicclusterinfo) - Get cluster details
* [getRubrikSnmpMibDownloadLink](#getrubriksnmpmibdownloadlink) - Get the link for Rubrik SNMP MIB file
* [getSyslogExportRule](#getsyslogexportrule) - Get the specified syslog export rule
* [getSyslogExportRules](#getsyslogexportrules) - Get the configured syslog export rules
* [getSyslogMsgSnmpMibDownloadLink](#getsyslogmsgsnmpmibdownloadlink) - Get the link for SYSLOG-MSG-MIB file
* [getSyslogTcSnmpMibDownloadLink](#getsyslogtcsnmpmibdownloadlink) - Get the link for SYSLOG-TC-MIB file
* [getTotpGlobalSetting](#gettotpglobalsetting) - Get global TOTP setting
* [getTruststores](#gettruststores) - Get summary of all truststores
* [getWebSignedCertificate](#getwebsignedcertificate) - Get the signed certificate for Web server
* [hasRubrikSupportPortalCredentials](#hasrubriksupportportalcredentials) - Check credentials to the Rubrik support portal
* [manualDiscover](#manualdiscover) - Manually discover nodes
* [manualDiscoverIpv4](#manualdiscoveripv4) - Manually discover nodes over IPv4 address
* [monitorEvents](#monitorevents) - Get event notifications
* [patchPasswordRequirements](#patchpasswordrequirements) - Set password requirements
* [queryPasswordRequirements](#querypasswordrequirements) - Get password requirements
* [resetWebSignedCertificate](#resetwebsignedcertificate) - Reset the signed certificate for Web server
* [runPeriodicUpgradePrechecks](#runperiodicupgradeprechecks) - Start an on demand run of the prechecks
* [setKmipClient](#setkmipclient) - Specify KMIP client credentials for nodes
* [setTruststoreCertificate](#settruststorecertificate) - Set certificates for one or more truststores
* [setWebSignedCertificate](#setwebsignedcertificate) - Set a signed certificate for Web server
* [stageCdmSoftware](#stagecdmsoftware) - Stage software on CDM for upgrade
* [testSyslogExportRule](#testsyslogexportrule) - Test the specified syslog export rule
* [unsetTruststoreCertificate](#unsettruststorecertificate) - Remove certificate associated with specified truststore
* [updateCluster](#updatecluster) - Change Rubrik cluster properties
* [updateCorsConfiguration](#updatecorsconfiguration) - Update CORS configuration
* [updateFips](#updatefips) - Update FIPS enablement status
* [updateRubrikSupportPortalCredentials](#updaterubriksupportportalcredentials) - Update credentials to the Rubrik support portal
* [updateSyslogExportRule](#updatesyslogexportrule) - Update the specified syslog export rule
* [updateTotpGlobalSetting](#updatetotpglobalsetting) - Update TOTP global setting

## addKmipServer

Add the specified KMIP server to the set of active KMIP servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\AddKmipServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\KmipServerConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddKmipServerRequest();
    $request->kmipServerConfiguration = new KmipServerConfiguration();
    $request->kmipServerConfiguration->serverAddress = 'dolorem';
    $request->kmipServerConfiguration->serverCertificateId = 'dolor';
    $request->kmipServerConfiguration->serverPort = 186193;
    $request->id = '3f9b77f3-a410-4067-8ebf-69280d1ba77a';

    $response = $sdk->rootCluster->addKmipServer($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addSyslogExportRule

Adds a new rule specifying where to export the specified syslog information.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\SyslogExportRuleFull;
use \OpenAPI\OpenAPI\Models\Shared\SyslogFacilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransportLayerProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyslogSeverityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SyslogExportRuleFull();
    $request->certificateId = 'deleniti';
    $request->enableTls = false;
    $request->facility = SyslogFacilityEnum::NTP;
    $request->hostname = 'unlucky-quotation.org';
    $request->port = 469497;
    $request->protocol = TransportLayerProtocolEnum::TCP;
    $request->severity = SyslogSeverityEnum::WARNING;

    $response = $sdk->rootCluster->addSyslogExportRule($request);

    if ($response->syslogExportRuleSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## availableVersion

Retrieve a list of Rubrik CDM versions available to upgrade the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\AvailableVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvailableVersionRequest();
    $request->downloadJobInstanceId = 'id';
    $request->fetchLinks = false;
    $request->filterUpgradable = false;
    $request->filterVersion = 'saepe';
    $request->id = '4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf';
    $request->ignoreDownloading = false;
    $request->ignoreLocal = false;
    $request->ignoreRemote = false;
    $request->showAll = false;
    $request->sourceVersion = 'amet';

    $response = $sdk->rootCluster->availableVersion($request);

    if ($response->availableVersionInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeClusterNodeHostnames

Change hostnames for multiple nodes at a time, for a specified Rubrik cluster.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ChangeClusterNodeHostnamesRequest;
use \OpenAPI\OpenAPI\Models\Shared\NodeHostnameInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeClusterNodeHostnamesRequest();
    $request->requestBody = [
        new NodeHostnameInfo(),
        new NodeHostnameInfo(),
        new NodeHostnameInfo(),
    ];
    $request->id = 'e453f870-b326-4b5a-b342-9cdb1a8422bb';

    $response = $sdk->rootCluster->changeClusterNodeHostnames($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKmipServer

Remove the server with the specified server address from the set of active KMIP servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKmipServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKmipServerRequest();
    $request->id = '679d2322-715b-4f0c-bb1e-31b8b90f3443';
    $request->serverAddress = 'dolorum';

    $response = $sdk->rootCluster->deleteKmipServer($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyslogExportRule

Delete the syslog export rule specified by the given id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyslogExportRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyslogExportRuleRequest();
    $request->id = '1108e0ad-cf4b-4921-879f-ce953f73ef7f';

    $response = $sdk->rootCluster->deleteSyslogExportRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAsyncRequestStatusForUpgrade

Get asynchronous request details for an upgrade request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetAsyncRequestStatusForUpgradeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAsyncRequestStatusForUpgradeRequest();
    $request->id = 'bc7abd74-dd39-4c0f-9d2c-ff7c70a45626';
    $request->requestId = 'possimus';

    $response = $sdk->rootCluster->getAsyncRequestStatusForUpgrade($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterApiVersion

Retrieves software version of the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterApiVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterApiVersionRequest();
    $request->id = '436813f1-6d9f-45fc-a6c5-56146c3e250f';

    $response = $sdk->rootCluster->getClusterApiVersion($request);

    if ($response->clusterApiVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterCertificate

Returns the cluster certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterCertificateRequest();
    $request->id = 'b008c42e-141a-4ac3-a6c8-dd6b14429074';

    $response = $sdk->rootCluster->getClusterCertificate($request);

    if ($response->clusterCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterNodeHostnames

Retrieve the ID to hostname mapping for all the nodes that belong to a specified Rubrik cluster.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterNodeHostnamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterNodeHostnamesRequest();
    $request->id = '74778a7b-d466-4d28-810a-b3cdca425190';

    $response = $sdk->rootCluster->getClusterNodeHostnames($request);

    if ($response->nodeHostnameInfoListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterNodeIds

Retrieve the list of node IDs for the nodes in this Rubrik CDM cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterNodeIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterNodeIdsRequest();
    $request->id = '4e523c7e-0bc7-4178-a479-6f2a70c68828';

    $response = $sdk->rootCluster->getClusterNodeIds($request);

    if ($response->nodeIds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterVersion

Retrieves software version of the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterVersionRequest();
    $request->id = '2aa48256-2f22-42e9-817e-e17cbe61e6b7';

    $response = $sdk->rootCluster->getClusterVersion($request);

    if ($response->clusterVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorsConfiguration

Get the current CORS support configuration for a web server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetCorsConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorsConfigurationRequest();
    $request->id = 'b95bc0ab-3c20-4c4f-b789-fd871f99dd2e';

    $response = $sdk->rootCluster->getCorsConfiguration($request);

    if ($response->corsConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEncryptionStatus

Get the current encryption at rest status of the cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetEncryptionStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEncryptionStatusRequest();
    $request->id = 'fd121aa6-f1e6-474b-9b04-f15756082d68';

    $response = $sdk->rootCluster->getEncryptionStatus($request);

    if ($response->encryptionStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFips

Returns the current status of FIPS on the specified cluster. When the status is true, FIPS is enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFipsRequest();
    $request->id = 'ea19f1d1-7051-4339-9080-86a1840394c2';

    $response = $sdk->rootCluster->getFips($request);

    if ($response->fipsStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKmipClient

Return the currently configured KMIP client information. The response object contains empty fields when KMIP is not configured.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetKmipClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKmipClientRequest();
    $request->id = '6071f93f-5f06-442d-ac7a-f515cc413aa6';

    $response = $sdk->rootCluster->getKmipClient($request);

    if ($response->kmipClientDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKmipServer

Returns the KMIP server information for the specified server address. When no server address is specified, this call returns information on all active KMIP servers. The response array is empty when KMIP is not configured or when the server address cannot be found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetKmipServerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKmipServerRequest();
    $request->id = '3aae8d67-864d-4bb6-b5fd-5e60b375ed4f';
    $request->serverAddress = 'suscipit';

    $response = $sdk->rootCluster->getKmipServer($request);

    if ($response->kmipServerDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPeriodicUpgradePrechecksStatus

Get the result of the latest run of the upgrade prechecks.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPeriodicUpgradePrechecksStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPeriodicUpgradePrechecksStatusRequest();
    $request->fetchNextRunInfo = false;
    $request->id = 'fbee41f3-3317-4fe3-9b60-eb1ea426555b';

    $response = $sdk->rootCluster->getPeriodicUpgradePrechecksStatus($request);

    if ($response->precheckStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicClusterInfo

Retrieve public information about the Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicClusterInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicClusterInfoRequest();
    $request->id = 'a3c28744-ed53-4b88-b3a8-d8f5c0b2f2fb';

    $response = $sdk->rootCluster->getPublicClusterInfo($request);

    if ($response->clusterInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRubrikSnmpMibDownloadLink

Retrieve the download link for the Rubrik SNMP MIB file. The retrieval is a synchronous operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRubrikSnmpMibDownloadLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRubrikSnmpMibDownloadLinkRequest();
    $request->id = '7b194a27-6b26-4916-be1f-08f4294e3698';

    $response = $sdk->rootCluster->getRubrikSnmpMibDownloadLink($request);

    if ($response->rubrikMibFileDownloadLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyslogExportRule

Get the summary of the syslog export rule specified by the given id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSyslogExportRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyslogExportRuleRequest();
    $request->id = 'f447f603-e8b4-445e-80ca-55efd20e457e';

    $response = $sdk->rootCluster->getSyslogExportRule($request);

    if ($response->syslogExportRuleSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyslogExportRules

Return the list of all configured syslog export rules.

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
    $response = $sdk->rootCluster->getSyslogExportRules();

    if ($response->syslogExportRuleSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyslogMsgSnmpMibDownloadLink

Retrieve the download link for the SYSLOG-MSG-MIB file. The retrieval is a synchronous operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSyslogMsgSnmpMibDownloadLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyslogMsgSnmpMibDownloadLinkRequest();
    $request->id = '1858b6a8-9fbe-43a5-aa8e-4824d0ab4075';

    $response = $sdk->rootCluster->getSyslogMsgSnmpMibDownloadLink($request);

    if ($response->syslogMsgMibFileDownloadLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyslogTcSnmpMibDownloadLink

Retrieve the download link for the SYSLOG-TC-MIB file. The retrieval is a synchronous operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetSyslogTcSnmpMibDownloadLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyslogTcSnmpMibDownloadLinkRequest();
    $request->id = '088e5186-2065-4e90-8f3b-1194b8abf603';

    $response = $sdk->rootCluster->getSyslogTcSnmpMibDownloadLink($request);

    if ($response->syslogTcMibFileDownloadLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTotpGlobalSetting

Returns TOTP global setting, including whether TOTP is enforced or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetTotpGlobalSettingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTotpGlobalSettingRequest();
    $request->id = 'a79f9dfe-0ab7-4da8-a50c-e187f86bc173';

    $response = $sdk->rootCluster->getTotpGlobalSetting($request);

    if ($response->totpGlobalSetting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruststores

Get summary of all truststores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetTruststoresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTruststoresRequest();
    $request->id = 'd689eee9-526f-48d9-86e8-81ead4f0e101';

    $response = $sdk->rootCluster->getTruststores($request);

    if ($response->truststoreSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebSignedCertificate

If the web server uses a signed certificate, fetch it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetWebSignedCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebSignedCertificateRequest();
    $request->id = '2563f94e-29e9-473e-922a-57a15be3e060';

    $response = $sdk->rootCluster->getWebSignedCertificate($request);

    if ($response->webServerCertificateSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hasRubrikSupportPortalCredentials

Check whether the specified Rubrik cluster has an existing set of credentials for the Rubrik support portal.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\HasRubrikSupportPortalCredentialsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HasRubrikSupportPortalCredentialsRequest();
    $request->id = '807e2b6e-3ab8-4845-b059-7a60ff2a54a3';

    $response = $sdk->rootCluster->hasRubrikSupportPortalCredentials($request);

    if ($response->booleanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manualDiscover

Manually specifies mDNS discovery data. Output for this endpoint is identical to the output of the 'discover' endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ManualDiscoverRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManualDiscoveryNodeInfo;
use \OpenAPI\OpenAPI\Models\Shared\BootstrappableNodeInfoV1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManualDiscoverRequest();
    $request->manualDiscoveryNodeInfo = new ManualDiscoveryNodeInfo();
    $request->manualDiscoveryNodeInfo->nodeInfo = [
        new BootstrappableNodeInfoV1(),
    ];
    $request->id = 'e94764a3-e865-4e79-96f9-251a5a9da660';

    $response = $sdk->rootCluster->manualDiscover($request);

    if ($response->manualDiscoveryNodeInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## manualDiscoverIpv4

Manually specifies discovery data. This endpoint output is identical to the output of the 'discover' endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ManualDiscoverIpv4Request;
use \OpenAPI\OpenAPI\Models\Shared\ManualDiscoveryNodeIpv4Info;
use \OpenAPI\OpenAPI\Models\Shared\BootstrappableNodeIpv4Info;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ManualDiscoverIpv4Request();
    $request->manualDiscoveryNodeIpv4Info = new ManualDiscoveryNodeIpv4Info();
    $request->manualDiscoveryNodeIpv4Info->nodeInfo = [
        new BootstrappableNodeIpv4Info(),
        new BootstrappableNodeIpv4Info(),
        new BootstrappableNodeIpv4Info(),
        new BootstrappableNodeIpv4Info(),
    ];
    $request->id = 'f57bfaad-4f9e-4fc1-b451-2c1032648dc2';

    $response = $sdk->rootCluster->manualDiscoverIpv4($request);

    if ($response->manualDiscoveryNodeIpv4Info !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitorEvents

Gets notifications about events from a specified set of possible events.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\MonitorEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitorEventsRequest();
    $request->eventNotificationQuery = [
        'eum',
        'dicta',
        'minima',
        'beatae',
    ];

    $response = $sdk->rootCluster->monitorEvents($request);

    if ($response->eventNotifications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPasswordRequirements

Update user password requirements for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PatchPasswordRequirementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PasswordRequirementsPatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPasswordRequirementsRequest();
    $request->passwordRequirementsPatchRequest = new PasswordRequirementsPatchRequest();
    $request->passwordRequirementsPatchRequest->blockPreviousPasswords = false;
    $request->passwordRequirementsPatchRequest->clearApiTokens = false;
    $request->passwordRequirementsPatchRequest->clearWebSessions = false;
    $request->passwordRequirementsPatchRequest->minLength = 583404;
    $request->passwordRequirementsPatchRequest->minLowerCase = 589695;
    $request->passwordRequirementsPatchRequest->minNumerics = 936469;
    $request->passwordRequirementsPatchRequest->minSpecial = 745398;
    $request->passwordRequirementsPatchRequest->minUpperCase = 940782;
    $request->passwordRequirementsPatchRequest->useZxcvbn = false;
    $request->id = 'd0e9fe6c-632c-4a3a-ad01-17996312fde0';

    $response = $sdk->rootCluster->patchPasswordRequirements($request);

    if ($response->passwordRequirementsSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPasswordRequirements

Query user password requirements for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryPasswordRequirementsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPasswordRequirementsRequest();
    $request->id = '4771778f-f61d-4017-8763-60a15db6a660';

    $response = $sdk->rootCluster->queryPasswordRequirements($request);

    if ($response->passwordRequirementsSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetWebSignedCertificate

Resetting the customer-given certificate for each node's web server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\ResetWebSignedCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetWebSignedCertificateRequest();
    $request->id = '659a1ade-aab5-4851-96c6-45b08b61891b';

    $response = $sdk->rootCluster->resetWebSignedCertificate($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runPeriodicUpgradePrechecks

Start an on demand run of the prechecks.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RunPeriodicUpgradePrechecksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunPeriodicUpgradePrechecksRequest();
    $request->id = 'aa0fe1ad-e008-4e6f-8c5f-350d8cdb5a34';

    $response = $sdk->rootCluster->runPeriodicUpgradePrechecks($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setKmipClient

Specify KMIP client credentials for each of the Rubrik cluster nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SetKmipClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\KmipClientConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetKmipClientRequest();
    $request->kmipClientConfiguration = new KmipClientConfiguration();
    $request->kmipClientConfiguration->clientCertificateId = 'inventore';
    $request->kmipClientConfiguration->password = 'deleniti';
    $request->kmipClientConfiguration->username = 'Arvid0';
    $request->id = '10421813-d520-48ec-a7e2-53b668451c6c';

    $response = $sdk->rootCluster->setKmipClient($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTruststoreCertificate

Setting the given certificate for each node's truststores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SetTruststoreCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TruststorePayload;
use \OpenAPI\OpenAPI\Models\Shared\TruststoreTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTruststoreCertificateRequest();
    $request->requestBody = [
        new TruststorePayload(),
        new TruststorePayload(),
    ];
    $request->id = 'e205e16d-eab3-4fec-9578-a64584273a84';

    $response = $sdk->rootCluster->setTruststoreCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setWebSignedCertificate

Setting the given certificate for each node's web server to use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\SetWebSignedCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebServerCertificatePayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetWebSignedCertificateRequest();
    $request->webServerCertificatePayload = new WebServerCertificatePayload();
    $request->webServerCertificatePayload->certificateId = 'quasi';
    $request->id = '8d162309-fb09-4299-a1ae-fb9f58c4d86e';

    $response = $sdk->rootCluster->setWebSignedCertificate($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stageCdmSoftware

Stage software corresponding to a given CDM version on the cluster, in preparation for an upgrade.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\StageCdmSoftwareRequest;
use \OpenAPI\OpenAPI\Models\Shared\StageCdmSoftwareInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StageCdmSoftwareRequest();
    $request->stageCdmSoftwareInfo = new StageCdmSoftwareInfo();
    $request->stageCdmSoftwareInfo->md5sum = 'commodi';
    $request->stageCdmSoftwareInfo->packageUrl = 'totam';
    $request->stageCdmSoftwareInfo->size = 936618;
    $request->stageCdmSoftwareInfo->skipDownload = false;
    $request->stageCdmSoftwareInfo->version = 'modi';
    $request->id = 'be056013-f59d-4a75-ba59-ecfef66ef1ca';

    $response = $sdk->rootCluster->stageCdmSoftware($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testSyslogExportRule

Send a test message using the syslog export rule specified by the given id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\SyslogExportRuleFull;
use \OpenAPI\OpenAPI\Models\Shared\SyslogFacilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransportLayerProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyslogSeverityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SyslogExportRuleFull();
    $request->certificateId = 'laborum';
    $request->enableTls = false;
    $request->facility = SyslogFacilityEnum::AUTH;
    $request->hostname = 'even-mankind.biz';
    $request->port = 773035;
    $request->protocol = TransportLayerProtocolEnum::TCP;
    $request->severity = SyslogSeverityEnum::INFORMATIONAL;

    $response = $sdk->rootCluster->testSyslogExportRule($request);

    if ($response->syslogServerTestResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsetTruststoreCertificate

Remove certificate associated with specified truststore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UnsetTruststoreCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnsetTruststoreCertificateTruststoresEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsetTruststoreCertificateRequest();
    $request->id = 'eb477373-c8d7-42f6-8d1d-b1f2c4310661';
    $request->truststores = [
        UnsetTruststoreCertificateTruststoresEnum::GCP,
        UnsetTruststoreCertificateTruststoresEnum::SYSTEM,
        UnsetTruststoreCertificateTruststoresEnum::SYSTEM,
        UnsetTruststoreCertificateTruststoresEnum::SYSTEM,
    ];

    $response = $sdk->rootCluster->unsetTruststoreCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCluster

Change the properties of a specified Rubrik cluster. Changes to cluster name could take upto 10 minutes to be propagated to all nodes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ClusterGeolocation;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTimezone;
use \OpenAPI\OpenAPI\Models\Shared\ClusterTimezoneTimezoneEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClusterRequest();
    $request->clusterUpdate = new ClusterUpdate();
    $request->clusterUpdate->acceptedEulaVersion = 'perspiciatis';
    $request->clusterUpdate->geolocation = new ClusterGeolocation();
    $request->clusterUpdate->geolocation->address = '179 Watsica Alley';
    $request->clusterUpdate->name = 'Lorena Flatley';
    $request->clusterUpdate->timezone = new ClusterTimezone();
    $request->clusterUpdate->timezone->timezone = ClusterTimezoneTimezoneEnum::AMERICA_PANAMA;
    $request->id = '7000ae6b-6bc9-4b8f-b59e-ac55a9741d31';

    $response = $sdk->rootCluster->updateCluster($request);

    if ($response->clusterInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCorsConfiguration

Update the CORS support configuration for a web server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCorsConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CorsConfigurationPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCorsConfigurationRequest();
    $request->corsConfigurationPatch = new CorsConfigurationPatch();
    $request->corsConfigurationPatch->allowedHeaders = 'inventore';
    $request->corsConfigurationPatch->allowedOrigins = 'dolorem';
    $request->corsConfigurationPatch->isEnabled = false;
    $request->id = '52965bb8-a720-4261-9435-e139dbc2259b';

    $response = $sdk->rootCluster->updateCorsConfiguration($request);

    if ($response->corsConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFips

Update the current FIPS enablement status for a cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFipsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FipsStatusPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFipsRequest();
    $request->fipsStatusPatch = new FipsStatusPatch();
    $request->fipsStatusPatch->isEnabledInFlight = false;
    $request->id = '1abda8c0-70e1-4084-8b06-72d1ad879eeb';

    $response = $sdk->rootCluster->updateFips($request);

    if ($response->fipsStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRubrikSupportPortalCredentials

Update credentials for the specified Rubrik cluster to connect to the Rubrik support portal.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRubrikSupportPortalCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommunityUserCredentials;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRubrikSupportPortalCredentialsRequest();
    $request->communityUserCredentials = new CommunityUserCredentials();
    $request->communityUserCredentials->password = 'sint';
    $request->communityUserCredentials->username = 'Halie_Jones';
    $request->id = '85efbd02-bae0-4be2-9782-259e3ea4b519';

    $response = $sdk->rootCluster->updateRubrikSupportPortalCredentials($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyslogExportRule

Update the syslog export rule specified by the given id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyslogExportRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyslogExportRulePartial;
use \OpenAPI\OpenAPI\Models\Shared\SyslogFacilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransportLayerProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyslogSeverityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyslogExportRuleRequest();
    $request->syslogExportRulePartial = new SyslogExportRulePartial();
    $request->syslogExportRulePartial->certificateId = 'molestiae';
    $request->syslogExportRulePartial->enableTls = false;
    $request->syslogExportRulePartial->facility = SyslogFacilityEnum::ALL;
    $request->syslogExportRulePartial->hostname = 'offbeat-chap.biz';
    $request->syslogExportRulePartial->port = 256916;
    $request->syslogExportRulePartial->protocol = TransportLayerProtocolEnum::TCP;
    $request->syslogExportRulePartial->severity = SyslogSeverityEnum::DEBUG;
    $request->id = 'a7ce52b8-95c5-437c-a454-efb0b34896c3';

    $response = $sdk->rootCluster->updateSyslogExportRule($request);

    if ($response->syslogExportRuleSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTotpGlobalSetting

Update TOTP global setting, including whether TOTP is enforced or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTotpGlobalSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\TotpGlobalSettingUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTotpGlobalSettingRequest();
    $request->totpGlobalSettingUpdate = new TotpGlobalSettingUpdate();
    $request->totpGlobalSettingUpdate->isEnforced = false;
    $request->id = 'ca5acfbe-2fd5-4707-9779-29177deac646';

    $response = $sdk->rootCluster->updateTotpGlobalSetting($request);

    if ($response->totpGlobalSetting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
