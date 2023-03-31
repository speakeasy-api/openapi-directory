# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/websecurityscanner/v1alpha/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WebsecurityscannerProjectsScanConfigsCreateRequest(
    dollar_xgafv="2",
    scan_config=shared.ScanConfig(
        authentication=shared.Authentication(
            custom_account=shared.CustomAccount(
                login_url="provident",
                password="distinctio",
                username="Rosalinda_Mitchell84",
            ),
            google_account=shared.GoogleAccount(
                password="vel",
                username="Linda.Oberbrunner",
            ),
        ),
        blacklist_patterns=[
            "debitis",
            "ipsa",
        ],
        display_name="delectus",
        latest_run=shared.ScanRun(
            end_time="tempora",
            execution_state="QUEUED",
            has_vulnerabilities=False,
            name="molestiae",
            progress_percent=791725,
            result_state="KILLED",
            start_time="voluptatum",
            urls_crawled_count="iusto",
            urls_tested_count="excepturi",
        ),
        max_qps=392785,
        name="recusandae",
        schedule=shared.Schedule(
            interval_duration_days=836079,
            schedule_time="ab",
        ),
        starting_urls=[
            "veritatis",
            "deserunt",
        ],
        target_platforms=[
            "APP_ENGINE",
        ],
        user_agent="SAFARI_IPHONE",
    ),
    access_token="sapiente",
    alt="proto",
    callback="odit",
    fields_="at",
    key="at",
    oauth_token="maiores",
    parent="molestiae",
    pretty_print=False,
    quota_user="quod",
    upload_type="quod",
    upload_protocol="esse",
)
    
res = s.projects.websecurityscanner_projects_scan_configs_create(req, operations.WebsecurityscannerProjectsScanConfigsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.scan_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `websecurityscanner_projects_scan_configs_create` - Creates a new ScanConfig.
* `websecurityscanner_projects_scan_configs_delete` - Deletes an existing ScanConfig and its child resources.
* `websecurityscanner_projects_scan_configs_list` - Lists ScanConfigs under a given project.
* `websecurityscanner_projects_scan_configs_patch` - Updates a ScanConfig. This method support partial update of a ScanConfig.
* `websecurityscanner_projects_scan_configs_scan_runs_crawled_urls_list` - List CrawledUrls under a given ScanRun.
* `websecurityscanner_projects_scan_configs_scan_runs_finding_type_stats_list` - List all FindingTypeStats under a given ScanRun.
* `websecurityscanner_projects_scan_configs_scan_runs_findings_get` - Gets a Finding.
* `websecurityscanner_projects_scan_configs_scan_runs_findings_list` - List Findings under a given ScanRun.
* `websecurityscanner_projects_scan_configs_scan_runs_list` - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* `websecurityscanner_projects_scan_configs_scan_runs_stop` - Stops a ScanRun. The stopped ScanRun is returned.
* `websecurityscanner_projects_scan_configs_start` - Start a ScanRun according to the given ScanConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
