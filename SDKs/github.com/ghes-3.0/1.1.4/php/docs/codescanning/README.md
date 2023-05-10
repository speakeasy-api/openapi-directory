# codeScanning

## Overview

Retrieve code scanning alerts from a repository.

### Available Operations

* [codeScanningGetAlert](#codescanninggetalert) - Get a code scanning alert
* [codeScanningListAlertsForRepo](#codescanninglistalertsforrepo) - List code scanning alerts for a repository
* [codeScanningListRecentAnalyses](#codescanninglistrecentanalyses) - List code scanning analyses for a repository
* [codeScanningUpdateAlert](#codescanningupdatealert) - Update a code scanning alert
* [codeScanningUploadSarif](#codescanninguploadsarif) - Upload an analysis as SARIF data

## codeScanningGetAlert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#get-a-code-scanning-alert>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodeScanningGetAlertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodeScanningGetAlertRequest();
    $request->alertNumber = 981830;
    $request->owner = 'doloribus';
    $request->repo = 'iusto';

    $response = $sdk->codeScanning->codeScanningGetAlert($request);

    if ($response->codeScanningAlert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codeScanningListAlertsForRepo

Lists all open code scanning alerts for the default branch (usually `main`
or `master`). You must use an access token with the `security_events` scope to use
this endpoint. GitHub Apps must have the `security_events` read permission to use
this endpoint.

The response includes a `most_recent_instance` object.
This provides details of the most recent instance of this alert
for the default branch or for the specified Git reference
(if you used `ref` in the request).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodeScanningListAlertsForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\CodeScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodeScanningListAlertsForRepoRequest();
    $request->owner = 'eligendi';
    $request->page = 497391;
    $request->perPage = 4048;
    $request->ref = 'officia';
    $request->repo = 'tempora';
    $request->state = CodeScanningAlertStateEnum::CLOSED;
    $request->toolGuid = 'ea';
    $request->toolName = 'aspernatur';

    $response = $sdk->codeScanning->codeScanningListAlertsForRepo($request);

    if ($response->codeScanningAlertItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codeScanningListRecentAnalyses

Lists the details of all code scanning analyses for a repository,
starting with the most recent.
The response is paginated and you can use the `page` and `per_page` parameters
to list the analyses you're interested in.
By default 30 analyses are listed per page.

The `rules_count` field in the response give the number of rules
that were run in the analysis.
For very old analyses this data is not available,
and `0` is returned in this field.

You must use an access token with the `security_events` scope to use this endpoint.
GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodeScanningListRecentAnalysesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodeScanningListRecentAnalysesRequest();
    $request->owner = 'vel';
    $request->page = 822118;
    $request->perPage = 297842;
    $request->ref = 'ratione';
    $request->repo = 'ex';
    $request->sarifId = '6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53';
    $request->toolGuid = 'laudantium';
    $request->toolName = 'dicta';

    $response = $sdk->codeScanning->codeScanningListRecentAnalyses($request);

    if ($response->codeScanningAnalyses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codeScanningUpdateAlert

Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#update-a-code-scanning-alert>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodeScanningUpdateAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodeScanningUpdateAlertRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CodeScanningAlertDismissedReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\CodeScanningAlertSetStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodeScanningUpdateAlertRequest();
    $request->requestBody = new CodeScanningUpdateAlertRequestBody();
    $request->requestBody->dismissedReason = CodeScanningAlertDismissedReasonEnum::LESS_THAN_NIL_GREATER_THAN;
    $request->requestBody->state = CodeScanningAlertSetStateEnum::DISMISSED;
    $request->alertNumber = 97844;
    $request->owner = 'ex';
    $request->repo = 'nulla';

    $response = $sdk->codeScanning->codeScanningUpdateAlert($request);

    if ($response->codeScanningAlert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codeScanningUploadSarif

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

There are two places where you can upload code scanning results.
 - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
 - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:

```
gzip -c analysis-data.sarif | base64 -w0
```

SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.

The `202 Accepted`, response includes an `id` value.
You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#upload-a-sarif-file>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodeScanningUploadSarifRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodeScanningUploadSarifRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodeScanningUploadSarifRequest();
    $request->requestBody = new CodeScanningUploadSarifRequestBody();
    $request->requestBody->checkoutUri = 'file:///github/workspace/';
    $request->requestBody->commitSha = 'excepturi';
    $request->requestBody->ref = 'voluptatibus';
    $request->requestBody->sarif = 'nostrum';
    $request->requestBody->startedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-20T04:25:24.387Z');
    $request->requestBody->toolName = 'saepe';
    $request->owner = 'ea';
    $request->repo = 'impedit';

    $response = $sdk->codeScanning->codeScanningUploadSarif($request);

    if ($response->codeScanningSarifsReceipt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
