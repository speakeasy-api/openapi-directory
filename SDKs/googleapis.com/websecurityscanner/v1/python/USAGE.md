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