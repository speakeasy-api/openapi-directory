# account

### Available Operations

* [createAccountCredential](#createaccountcredential) - Create a new credential
* [createAccountGroup](#createaccountgroup) - Create a new group
* [createAccountGroupMapping](#createaccountgroupmapping) - Create a new SSO group mapping
* [createAccountKey](#createaccountkey) - Create a new key
* [createAccountOrganization](#createaccountorganization) - Create a new organization
* [createAccountScanTemplate](#createaccountscantemplate) - Create a new scan template
* [createAccountUser](#createaccountuser) - Create a new user account
* [createAccountUserInvite](#createaccountuserinvite) - Create a new user account and send an email invite
* [deleteAccountOrganizationExportToken](#deleteaccountorganizationexporttoken) - Removes the export token from the specified organization
* [exportEventsJSON](#exporteventsjson) - System event log as JSON
* [exportEventsJSONL](#exporteventsjsonl) - System event log as JSON line-delimited
* [getAccountAgents](#getaccountagents) - Get all agents across all organizations
* [getAccountCredential](#getaccountcredential) - Get credential details
* [getAccountCredentials](#getaccountcredentials) - Get all account credentials
* [getAccountGroup](#getaccountgroup) - Get group details
* [getAccountGroupMapping](#getaccountgroupmapping) - Get SSO group mapping details
* [getAccountGroupMappings](#getaccountgroupmappings) - Get all SSO group mappings
* [getAccountGroups](#getaccountgroups) - Get all groups
* [getAccountKey](#getaccountkey) - Get key details
* [getAccountKeys](#getaccountkeys) - Get all active API keys
* [getAccountLicense](#getaccountlicense) - Get license details
* [getAccountOrganization](#getaccountorganization) - Get organization details
* [getAccountOrganizations](#getaccountorganizations) - Get all organization details
* [getAccountScanTemplate](#getaccountscantemplate) - Get scan template details
* [getAccountScanTemplates](#getaccountscantemplates) - Get all scan templates across all organizations (up to 1000)
* [getAccountSites](#getaccountsites) - Get all sites details across all organizations
* [getAccountTasks](#getaccounttasks) - Get all task details across all organizations (up to 1000)
* [getAccountUser](#getaccountuser) - Get user details
* [getAccountUsers](#getaccountusers) - Get all users
* [removeAccountCredential](#removeaccountcredential) - Remove this credential
* [removeAccountGroup](#removeaccountgroup) - Remove this group
* [removeAccountGroupMapping](#removeaccountgroupmapping) - Remove this SSO group mapping
* [removeAccountKey](#removeaccountkey) - Remove this key
* [removeAccountOrganization](#removeaccountorganization) - Remove this organization
* [removeAccountScanTemplate](#removeaccountscantemplate) - Remove scan template
* [removeAccountUser](#removeaccountuser) - Remove this user
* [resetAccountUserLockout](#resetaccountuserlockout) - Resets the user's lockout status
* [resetAccountUserMFA](#resetaccountusermfa) - Resets the user's MFA tokens
* [resetAccountUserPassword](#resetaccountuserpassword) - Sends the user a password reset email
* [rotateAccountKey](#rotateaccountkey) - Rotates the key secret
* [rotateAccountOrganizationExportToken](#rotateaccountorganizationexporttoken) - Rotates the organization export token and returns the updated organization
* [updateAccountGroup](#updateaccountgroup) - Update an existing group
* [updateAccountGroupMapping](#updateaccountgroupmapping) - Update an existing SSO group mapping
* [updateAccountOrganization](#updateaccountorganization) - Update organization details
* [updateAccountScanTemplate](#updateaccountscantemplate) - Update scan template
* [updateAccountUser](#updateaccountuser) - Update a user's details

## createAccountCredential

Create a new credential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CredentialOptions;
use \OpenAPI\OpenAPI\Models\Shared\CredentialOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CredentialOptions();
    $request->acl = [
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->cidrs = '10.0.0.17/32, 192.168.1.0/24';
    $request->global = false;
    $request->name = 'credentials_name';
    $request->secret = new AzureClientSecretCredentialFields();
    $request->secret->clientId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->secret->clientSecret = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->secret->multiSubscription = 'true';
    $request->secret->subscriptionId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->secret->tenantId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->type = CredentialOptionsTypeEnum::MIRADORE_API_KEY_V1;

    $requestSecurity = new CreateAccountCredentialSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountCredential($request, $requestSecurity);

    if ($response->credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountGroup

Create a new group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GroupPost;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupPost();
    $request->description = 'Viewers Group';
    $request->expiresAt = 1576300370;
    $request->name = 'Viewers';
    $request->orgDefaultRole = 'admin';
    $request->orgRoles = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];

    $requestSecurity = new CreateAccountGroupSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountGroup($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountGroupMapping

Create a new SSO group mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GroupMapping;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountGroupMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupMapping();
    $request->createdAt = 1576300370;
    $request->createdByEmail = 'jsmith@example.com';
    $request->description = 'Maps basic-attribute to Viewers Group';
    $request->groupId = '2b096711-4d28-4417-8635-64af4f62c1ae';
    $request->groupName = 'Viewers Group';
    $request->id = 'f6cfb91a-52ea-4a86-bf9a-5a891a26f52b';
    $request->ssoAttribute = 'basic-attribute';
    $request->ssoValue = 'basic-attribute-value';
    $request->updatedAt = 1576300370;

    $requestSecurity = new CreateAccountGroupMappingSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountGroupMapping($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountKey

Create a new key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\APIKeyOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new APIKeyOptions();
    $request->comment = 'Splunk integration key';
    $request->organizationId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';

    $requestSecurity = new CreateAccountKeySecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountKey($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountOrganization

Create a new organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OrgOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountOrganizationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrgOptions();
    $request->description = 'Wobbly Widgets, Inc.';
    $request->expirationAssetsOffline = '365';
    $request->expirationAssetsStale = '365';
    $request->expirationScans = '365';
    $request->exportToken = 'ETXXXXXXXXXXXXXXXX';
    $request->name = 'My Organization';
    $request->parentId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->project = 'iusto';

    $requestSecurity = new CreateAccountOrganizationSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountOrganization($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountScanTemplate

Create a new scan template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScanTemplateOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountScanTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanTemplateOptions();
    $request->acl = [
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
        'quis' => 'veritatis',
    ];
    $request->description = 'My Scan Template';
    $request->global = false;
    $request->name = 'My Scan Template';
    $request->params = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];

    $requestSecurity = new CreateAccountScanTemplateSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountScanTemplate($request, $requestSecurity);

    if ($response->scanTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountUser

Create a new user account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UserOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserOptions();
    $request->clientAdmin = true;
    $request->email = 'jsmith@example.com';
    $request->firstName = 'James';
    $request->lastName = 'Smith';
    $request->orgDefaultRole = 'admin';
    $request->orgRoles = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];

    $requestSecurity = new CreateAccountUserSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountUser($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccountUserInvite

Create a new user account and send an email invite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UserInviteOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountUserInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserInviteOptions();
    $request->clientAdmin = true;
    $request->email = 'jsmith@example.com';
    $request->firstName = 'James';
    $request->lastName = 'Smith';
    $request->message = 'You have been invited to the Rumble Network Discovery platform';
    $request->orgDefaultRole = 'admin';
    $request->orgRoles = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ];
    $request->subject = 'Welcome to Rumble';

    $requestSecurity = new CreateAccountUserInviteSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountUserInvite($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccountOrganizationExportToken

Removes the export token from the specified organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountOrganizationExportTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountOrganizationExportTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountOrganizationExportTokenRequest();
    $request->orgId = 'fc816742-cb73-4920-9929-396fea7596eb';

    $requestSecurity = new DeleteAccountOrganizationExportTokenSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->deleteAccountOrganizationExportToken($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportEventsJSON

System event log as JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportEventsJSONRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportEventsJSONSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportEventsJSONRequest();
    $request->fields = 'architecto';
    $request->search = 'ipsa';

    $requestSecurity = new ExportEventsJSONSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->exportEventsJSON($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportEventsJSONL

System event log as JSON line-delimited

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportEventsJSONLRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportEventsJSONLSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportEventsJSONLRequest();
    $request->fields = 'reiciendis';
    $request->search = 'est';

    $requestSecurity = new ExportEventsJSONLSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->exportEventsJSONL($request, $requestSecurity);

    if ($response->events !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountAgents

Get all agents across all organizations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountAgentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountAgentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountAgentsRequest();
    $request->search = 'mollitia';

    $requestSecurity = new GetAccountAgentsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountAgents($request, $requestSecurity);

    if ($response->agents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountCredential

Get credential details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountCredentialRequest();
    $request->credentialId = 'a2352c59-5590-47af-b1a3-a2fa94677392';

    $requestSecurity = new GetAccountCredentialSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountCredential($request, $requestSecurity);

    if ($response->credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountCredentials

Get all account credentials

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountCredentialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountCredentialsRequest();
    $request->search = 'quis';

    $requestSecurity = new GetAccountCredentialsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountCredentials($request, $requestSecurity);

    if ($response->credentials !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountGroup

Get group details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountGroupRequest();
    $request->groupId = '1aa52c3f-5ad0-419d-a1ff-e78f097b0074';

    $requestSecurity = new GetAccountGroupSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountGroup($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountGroupMapping

Get SSO group mapping details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountGroupMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountGroupMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountGroupMappingRequest();
    $request->groupMappingId = 'f15471b5-e6e1-43b9-9d48-8e1e91e450ad';

    $requestSecurity = new GetAccountGroupMappingSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountGroupMapping($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountGroupMappings

Get all SSO group mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountGroupMappingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAccountGroupMappingsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountGroupMappings($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountGroups

Get all groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAccountGroupsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountGroups($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountKey

Get key details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountKeyRequest();
    $request->keyId = '2abd4426-9802-4d50-aa94-bb4f63c969e9';

    $requestSecurity = new GetAccountKeySecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountKey($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountKeys

Get all active API keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAccountKeysSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountKeys($requestSecurity);

    if ($response->apiKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountLicense

Get license details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountLicenseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAccountLicenseSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountLicense($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountOrganization

Get organization details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountOrganizationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountOrganizationRequest();
    $request->orgId = 'a3efa77d-fb14-4cd6-aae3-95efb9ba88f3';

    $requestSecurity = new GetAccountOrganizationSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountOrganization($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountOrganizations

Get all organization details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountOrganizationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountOrganizationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountOrganizationsRequest();
    $request->search = 'deserunt';

    $requestSecurity = new GetAccountOrganizationsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountOrganizations($request, $requestSecurity);

    if ($response->organizations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountScanTemplate

Get scan template details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountScanTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountScanTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountScanTemplateRequest();
    $request->scanTemplateId = '66997074-ba44-469b-ae21-41959890afa5';

    $requestSecurity = new GetAccountScanTemplateSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountScanTemplate($request, $requestSecurity);

    if ($response->scanTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountScanTemplates

Get all scan templates across all organizations (up to 1000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountScanTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountScanTemplatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountScanTemplatesRequest();
    $request->search = 'eum';

    $requestSecurity = new GetAccountScanTemplatesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountScanTemplates($request, $requestSecurity);

    if ($response->scanTemplates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountSites

Get all sites details across all organizations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSitesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSitesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountSitesRequest();
    $request->search = 'dolor';

    $requestSecurity = new GetAccountSitesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountSites($request, $requestSecurity);

    if ($response->sites !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountTasks

Get all task details across all organizations (up to 1000)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTasksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountTasksRequest();
    $request->search = 'necessitatibus';

    $requestSecurity = new GetAccountTasksSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountTasks($request, $requestSecurity);

    if ($response->tasks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountUser

Get user details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountUserRequest();
    $request->userId = '2516fe4c-8b71-41e5-b7fd-2ed028921cdd';

    $requestSecurity = new GetAccountUserSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountUser($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountUsers

Get all users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountUsersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAccountUsersSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->getAccountUsers($requestSecurity);

    if ($response->users !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAccountCredential

Remove this credential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAccountCredentialRequest();
    $request->credentialId = 'c692601f-b576-4b0d-9f0d-30c5fbb25870';

    $requestSecurity = new RemoveAccountCredentialSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->removeAccountCredential($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAccountGroup

Remove this group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAccountGroupRequest();
    $request->groupId = '53202c73-d5fe-49b9-8c28-909b3fe49a8d';

    $requestSecurity = new RemoveAccountGroupSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->removeAccountGroup($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAccountGroupMapping

Remove this SSO group mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountGroupMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountGroupMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAccountGroupMappingRequest();
    $request->groupMappingId = '9cbf4863-3323-4f9b-b7f3-a4100674ebf6';

    $requestSecurity = new RemoveAccountGroupMappingSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->removeAccountGroupMapping($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAccountKey

Remove this key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAccountKeyRequest();
    $request->keyId = '9280d1ba-77a8-49eb-b737-ae4203ce5e6a';

    $requestSecurity = new RemoveAccountKeySecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->removeAccountKey($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAccountOrganization

Remove this organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountOrganizationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAccountOrganizationRequest();
    $request->orgId = '95d8a0d4-46ce-42af-ba73-cf3be453f870';

    $requestSecurity = new RemoveAccountOrganizationSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->removeAccountOrganization($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAccountScanTemplate

Remove scan template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountScanTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountScanTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAccountScanTemplateRequest();
    $request->scanTemplateId = 'b326b5a7-3429-4cdb-9a84-22bb679d2322';

    $requestSecurity = new RemoveAccountScanTemplateSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->removeAccountScanTemplate($request, $requestSecurity);

    if ($response->scanTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAccountUser

Remove this user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAccountUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAccountUserRequest();
    $request->userId = '715bf0cb-b1e3-41b8-b90f-3443a1108e0a';

    $requestSecurity = new RemoveAccountUserSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->removeAccountUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetAccountUserLockout

Resets the user's lockout status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetAccountUserLockoutRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetAccountUserLockoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetAccountUserLockoutRequest();
    $request->userId = 'dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7';

    $requestSecurity = new ResetAccountUserLockoutSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->resetAccountUserLockout($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetAccountUserMFA

Resets the user's MFA tokens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetAccountUserMFARequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetAccountUserMFASecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetAccountUserMFARequest();
    $request->userId = '4dd39c0f-5d2c-4ff7-870a-45626d436813';

    $requestSecurity = new ResetAccountUserMFASecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->resetAccountUserMFA($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetAccountUserPassword

Sends the user a password reset email

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetAccountUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetAccountUserPasswordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetAccountUserPasswordRequest();
    $request->userId = 'f16d9f5f-ce6c-4556-946c-3e250fb008c4';

    $requestSecurity = new ResetAccountUserPasswordSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->resetAccountUserPassword($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotateAccountKey

Rotates the key secret

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RotateAccountKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\RotateAccountKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotateAccountKeyRequest();
    $request->keyId = '2e141aac-366c-48dd-ab14-42907474778a';

    $requestSecurity = new RotateAccountKeySecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->rotateAccountKey($request, $requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotateAccountOrganizationExportToken

Rotates the organization export token and returns the updated organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RotateAccountOrganizationExportTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\RotateAccountOrganizationExportTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotateAccountOrganizationExportTokenRequest();
    $request->orgId = '7bd466d2-8c10-4ab3-8dca-4251904e523c';

    $requestSecurity = new RotateAccountOrganizationExportTokenSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->rotateAccountOrganizationExportToken($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountGroup

Update an existing group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GroupPut;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupPut();
    $request->description = 'Viewers Group';
    $request->expiresAt = 1576300370;
    $request->id = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->name = 'Viewers';
    $request->orgDefaultRole = 'admin';
    $request->orgRoles = [
        'recusandae' => 'aperiam',
        'distinctio' => 'quod',
    ];

    $requestSecurity = new UpdateAccountGroupSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->updateAccountGroup($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountGroupMapping

Update an existing SSO group mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GroupMapping;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountGroupMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupMapping();
    $request->createdAt = 1576300370;
    $request->createdByEmail = 'jsmith@example.com';
    $request->description = 'Maps basic-attribute to Viewers Group';
    $request->groupId = '2b096711-4d28-4417-8635-64af4f62c1ae';
    $request->groupName = 'Viewers Group';
    $request->id = 'f6cfb91a-52ea-4a86-bf9a-5a891a26f52b';
    $request->ssoAttribute = 'basic-attribute';
    $request->ssoValue = 'basic-attribute-value';
    $request->updatedAt = 1576300370;

    $requestSecurity = new UpdateAccountGroupMappingSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->updateAccountGroupMapping($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountOrganization

Update organization details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrgOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountOrganizationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountOrganizationRequest();
    $request->orgOptions = new OrgOptions();
    $request->orgOptions->description = 'Wobbly Widgets, Inc.';
    $request->orgOptions->expirationAssetsOffline = '365';
    $request->orgOptions->expirationAssetsStale = '365';
    $request->orgOptions->expirationScans = '365';
    $request->orgOptions->exportToken = 'ETXXXXXXXXXXXXXXXX';
    $request->orgOptions->name = 'My Organization';
    $request->orgOptions->parentId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->orgOptions->project = 'dignissimos';
    $request->orgId = '178e4796-f2a7-40c6-8828-2aa482562f22';

    $requestSecurity = new UpdateAccountOrganizationSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->updateAccountOrganization($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountScanTemplate

Update scan template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScanTemplate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountScanTemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanTemplate();
    $request->acl = [
        'saepe' => 'occaecati',
    ];
    $request->agentId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->clientId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->createdAt = 1576300370;
    $request->createdBy = 'user@example.com';
    $request->createdByUserId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->cruncherId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->description = 'My Scan Template';
    $request->error = 'agent unavailable';
    $request->global = false;
    $request->gracePeriod = '4';
    $request->hidden = false;
    $request->hostedZoneId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->id = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->linkedTaskCount = 1;
    $request->name = 'My Scan Template';
    $request->organizationId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->params = [
        'et' => 'esse',
        'eveniet' => 'accusamus',
        'veritatis' => 'esse',
    ];
    $request->parentId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->recur = false;
    $request->recurFrequency = 'hour';
    $request->recurLast = 1576300370;
    $request->recurLastTaskId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->recurNext = 1576300370;
    $request->siteId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->sizeData = 800379;
    $request->sizeResults = 724168;
    $request->sizeSite = 877131;
    $request->sourceId = '1';
    $request->startTime = 1576300370;
    $request->stats = [
        'quasi' => 'saepe',
        'vel' => 'harum',
    ];
    $request->status = 'processed';
    $request->templateId = 'e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8';
    $request->type = 'scan';
    $request->updatedAt = 1576300370;

    $requestSecurity = new UpdateAccountScanTemplateSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->updateAccountScanTemplate($request, $requestSecurity);

    if ($response->scanTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccountUser

Update a user's details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserOptions;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountUserRequest();
    $request->userOptions = new UserOptions();
    $request->userOptions->clientAdmin = true;
    $request->userOptions->email = 'jsmith@example.com';
    $request->userOptions->firstName = 'James';
    $request->userOptions->lastName = 'Smith';
    $request->userOptions->orgDefaultRole = 'admin';
    $request->userOptions->orgRoles = [
        'rerum' => 'occaecati',
        'minima' => 'distinctio',
    ];
    $request->userId = 'c0ab3c20-c4f3-4789-bd87-1f99dd2efd12';

    $requestSecurity = new UpdateAccountUserSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->updateAccountUser($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
