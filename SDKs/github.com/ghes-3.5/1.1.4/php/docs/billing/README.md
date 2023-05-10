# billing

## Overview

Monitor charges and usage from Actions and Packages.

### Available Operations

* [billingGetGithubAdvancedSecurityBillingGhe](#billinggetgithubadvancedsecuritybillingghe) - Get GitHub Advanced Security active committers for an enterprise
* [billingGetGithubAdvancedSecurityBillingOrg](#billinggetgithubadvancedsecuritybillingorg) - Get GitHub Advanced Security active committers for an organization

## billingGetGithubAdvancedSecurityBillingGhe

Gets the GitHub Advanced Security active committers for an enterprise per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingGetGithubAdvancedSecurityBillingGheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingGetGithubAdvancedSecurityBillingGheRequest();
    $request->enterprise = 'tempora';
    $request->page = 256139;
    $request->perPage = 131482;

    $response = $sdk->billing->billingGetGithubAdvancedSecurityBillingGhe($request);

    if ($response->advancedSecurityActiveCommitters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingGetGithubAdvancedSecurityBillingOrg

Gets the GitHub Advanced Security active committers for an organization per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.

If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.

The total number of repositories with committer information is tracked by the `total_count` field.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingGetGithubAdvancedSecurityBillingOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingGetGithubAdvancedSecurityBillingOrgRequest();
    $request->org = 'provident';
    $request->page = 55374;
    $request->perPage = 476477;

    $response = $sdk->billing->billingGetGithubAdvancedSecurityBillingOrg($request);

    if ($response->advancedSecurityActiveCommitters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
