# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/websecurityscanner/v1/python
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
            iap_credential=shared.IapCredential(
                iap_test_service_account_info=shared.IapTestServiceAccountInfo(
                    target_audience_client_id="magnam",
                ),
            ),
        ),
        blacklist_patterns=[
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
        ],
        display_name="molestiae",
        export_to_security_command_center="DISABLED",
        ignore_http_status_errors=False,
        managed_scan=False,
        max_qps=812169,
        name="voluptatum",
        risk_level="NORMAL",
        schedule=shared.Schedule(
            interval_duration_days=568045,
            schedule_time="nisi",
        ),
        starting_urls=[
            "temporibus",
            "ab",
            "quis",
            "veritatis",
        ],
        static_ip_scan=False,
        user_agent="CHROME_ANDROID",
    ),
    access_token="perferendis",
    alt="media",
    callback="repellendus",
    fields_="sapiente",
    key="quo",
    oauth_token="odit",
    parent="at",
    pretty_print=False,
    quota_user="at",
    upload_type="maiores",
    upload_protocol="molestiae",
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
