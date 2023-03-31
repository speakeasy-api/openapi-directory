<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest(
    dollar_xgafv="2",
    google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest(
        display_name="provident",
        id_token="distinctio",
        phone_verification_info=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo(
            android_verification_proof="quibusdam",
            code="unde",
            phone_number="nulla",
            session_info="corrupti",
        ),
        tenant_id="illum",
        totp_verification_info=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo(
            session_info="vel",
            verification_code="error",
        ),
    ),
    access_token="deserunt",
    alt="media",
    callback="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.accounts.identitytoolkit_accounts_mfa_enrollment_finalize(req, operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->