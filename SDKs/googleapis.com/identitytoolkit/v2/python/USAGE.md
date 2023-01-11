<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest(
    security=operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams(
        dollar_xgafv="2",
        access_token="in",
        alt="proto",
        callback="et",
        fields="nisi",
        key="aspernatur",
        oauth_token="et",
        pretty_print=False,
        quota_user="nobis",
        upload_type="ex",
        upload_protocol="repellat",
    ),
    request=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest(
        display_name="in",
        id_token="voluptatibus",
        phone_verification_info=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo(
            android_verification_proof="consequatur",
            code="et",
            phone_number="nihil",
            session_info="in",
        ),
        tenant_id="dolorum",
    ),
)
    
res = s.accounts.identitytoolkit_accounts_mfa_enrollment_finalize(req)

if res.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->