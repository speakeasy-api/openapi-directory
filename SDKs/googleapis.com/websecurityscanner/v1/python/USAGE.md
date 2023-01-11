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
        parent="facilis",
    ),
    query_params=operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="culpa",
        alt="proto",
        callback="quis",
        fields="repellat",
        key="qui",
        oauth_token="ea",
        pretty_print=True,
        quota_user="laudantium",
        upload_type="earum",
        upload_protocol="eligendi",
    ),
    request=shared.ScanConfig(
        authentication=shared.Authentication(
            custom_account=shared.CustomAccount(
                login_url="ut",
                password="eveniet",
                username="quos",
            ),
            google_account=shared.GoogleAccount(
                password="consectetur",
                username="rem",
            ),
            iap_credential=shared.IapCredential(
                iap_test_service_account_info=shared.IapTestServiceAccountInfo(
                    target_audience_client_id="et",
                ),
            ),
        ),
        blacklist_patterns=[
            "sed",
            "sint",
            "suscipit",
        ],
        display_name="voluptatum",
        export_to_security_command_center="EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
        ignore_http_status_errors=True,
        managed_scan=True,
        max_qps=1531485269277272612,
        name="quam",
        risk_level="LOW",
        schedule=shared.Schedule(
            interval_duration_days=1862485506550677711,
            schedule_time="ipsam",
        ),
        starting_urls=[
            "reiciendis",
        ],
        static_ip_scan=True,
        user_agent="USER_AGENT_UNSPECIFIED",
    ),
)
    
res = s.projects.websecurityscanner_projects_scan_configs_create(req)

if res.scan_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->