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