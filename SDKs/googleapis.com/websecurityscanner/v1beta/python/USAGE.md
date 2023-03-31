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
        latest_run=shared.ScanRun(
            end_time="placeat",
            error_trace=shared.ScanRunErrorTrace(
                code="TIMED_OUT_WHILE_SCANNING",
                most_common_http_error_code=479977,
                scan_config_error=shared.ScanConfigError(
                    code="MALFORMED_RESOURCE_NAME",
                    field_name="nisi",
                ),
            ),
            execution_state="FINISHED",
            has_vulnerabilities=False,
            name="temporibus",
            progress_percent=71036,
            result_state="SUCCESS",
            start_time="veritatis",
            urls_crawled_count="deserunt",
            urls_tested_count="perferendis",
            warning_traces=[
                shared.ScanRunWarningTrace(
                    code="BLOCKED_BY_IAP",
                ),
                shared.ScanRunWarningTrace(
                    code="NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN",
                ),
            ],
        ),
        managed_scan=False,
        max_qps=778157,
        name="odit",
        risk_level="LOW",
        schedule=shared.Schedule(
            interval_duration_days=870088,
            schedule_time="maiores",
        ),
        starting_urls=[
            "quod",
            "quod",
        ],
        static_ip_scan=False,
        target_platforms=[
            "COMPUTE",
            "CLOUD_RUN",
        ],
        user_agent="CHROME_ANDROID",
    ),
    access_token="dicta",
    alt="proto",
    callback="officia",
    fields_="occaecati",
    key="fugit",
    oauth_token="deleniti",
    parent="hic",
    pretty_print=False,
    quota_user="optio",
    upload_type="totam",
    upload_protocol="beatae",
)
    
res = s.projects.websecurityscanner_projects_scan_configs_create(req, operations.WebsecurityscannerProjectsScanConfigsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.scan_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->