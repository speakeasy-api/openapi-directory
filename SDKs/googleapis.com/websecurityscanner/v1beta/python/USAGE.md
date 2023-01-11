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
        parent="aut",
    ),
    query_params=operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="quidem",
        alt="media",
        callback="provident",
        fields="amet",
        key="repellendus",
        oauth_token="dolorem",
        pretty_print=False,
        quota_user="amet",
        upload_type="tempore",
        upload_protocol="et",
    ),
    request=shared.ScanConfig(
        authentication=shared.Authentication(
            custom_account=shared.CustomAccount(
                login_url="consectetur",
                password="dolores",
                username="ut",
            ),
            google_account=shared.GoogleAccount(
                password="nobis",
                username="eum",
            ),
            iap_credential=shared.IapCredential(
                iap_test_service_account_info=shared.IapTestServiceAccountInfo(
                    target_audience_client_id="voluptatem",
                ),
            ),
        ),
        blacklist_patterns=[
            "et",
            "quidem",
            "incidunt",
        ],
        display_name="vel",
        export_to_security_command_center="ENABLED",
        ignore_http_status_errors=True,
        latest_run=shared.ScanRun(
            end_time="voluptatem",
            error_trace=shared.ScanRunErrorTrace(
                code="SCAN_CONFIG_ISSUE",
                most_common_http_error_code=8831363343638379985,
                scan_config_error=shared.ScanConfigError(
                    code="CUSTOM_LOGIN_URL_MALFORMED",
                    field_name="quisquam",
                ),
            ),
            execution_state="QUEUED",
            has_vulnerabilities=False,
            name="inventore",
            progress_percent=3405258711522167072,
            result_state="RESULT_STATE_UNSPECIFIED",
            start_time="eos",
            urls_crawled_count="ut",
            urls_tested_count="voluptates",
            warning_traces=[
                shared.ScanRunWarningTrace(
                    code="TOO_MANY_FUZZ_TASKS",
                ),
                shared.ScanRunWarningTrace(
                    code="INSUFFICIENT_CRAWL_RESULTS",
                ),
                shared.ScanRunWarningTrace(
                    code="TOO_MANY_FUZZ_TASKS",
                ),
            ],
        ),
        managed_scan=True,
        max_qps=1770746881013234414,
        name="dolorem",
        risk_level="NORMAL",
        schedule=shared.Schedule(
            interval_duration_days=5951960727538493913,
            schedule_time="mollitia",
        ),
        starting_urls=[
            "voluptas",
            "est",
            "quibusdam",
        ],
        static_ip_scan=False,
        target_platforms=[
            "APP_ENGINE",
        ],
        user_agent="CHROME_LINUX",
    ),
)
    
res = s.projects.websecurityscanner_projects_scan_configs_create(req)

if res.scan_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->