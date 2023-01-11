<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WebsecurityscannerProjectsScanConfigsCreateRequest(
    security=operations.WebsecurityscannerProjectsScanConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.WebsecurityscannerProjectsScanConfigsCreatePathParams(
        parent="nesciunt",
    ),
    query_params=operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams(
        dollar_xgafv="2",
        access_token="rerum",
        alt="media",
        callback="quo",
        fields="et",
        key="aut",
        oauth_token="laboriosam",
        pretty_print=True,
        quota_user="voluptatem",
        upload_type="quia",
        upload_protocol="eos",
    ),
    request=shared.ScanConfig(
        authentication=shared.Authentication(
            custom_account=shared.CustomAccount(
                login_url="dolorem",
                password="quibusdam",
                username="qui",
            ),
            google_account=shared.GoogleAccount(
                password="enim",
                username="dolores",
            ),
        ),
        blacklist_patterns=[
            "earum",
        ],
        display_name="qui",
        latest_run=shared.ScanRun(
            end_time="ab",
            execution_state="QUEUED",
            has_vulnerabilities=False,
            name="voluptas",
            progress_percent=8073592271542201319,
            result_state="RESULT_STATE_UNSPECIFIED",
            start_time="voluptatem",
            urls_crawled_count="optio",
            urls_tested_count="reiciendis",
        ),
        max_qps=1508960573531668363,
        name="inventore",
        schedule=shared.Schedule(
            interval_duration_days=1097738351481424118,
            schedule_time="veritatis",
        ),
        starting_urls=[
            "quis",
        ],
        target_platforms=[
            "COMPUTE",
            "TARGET_PLATFORM_UNSPECIFIED",
            "APP_ENGINE",
        ],
        user_agent="SAFARI_IPHONE",
    ),
)
    
res = s.projects.websecurityscanner_projects_scan_configs_create(req)

if res.scan_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->