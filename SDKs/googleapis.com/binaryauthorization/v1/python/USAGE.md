<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BinaryauthorizationProjectsAttestorsCreateRequest(
    security=operations.BinaryauthorizationProjectsAttestorsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BinaryauthorizationProjectsAttestorsCreatePathParams(
        parent="et",
    ),
    query_params=operations.BinaryauthorizationProjectsAttestorsCreateQueryParams(
        dollar_xgafv="2",
        access_token="sint",
        alt="media",
        attestor_id="cumque",
        callback="fuga",
        fields="est",
        key="voluptas",
        oauth_token="ullam",
        pretty_print=True,
        quota_user="sapiente",
        upload_type="numquam",
        upload_protocol="est",
    ),
    request=shared.AttestorInput(
        description="voluptatem",
        etag="vero",
        name="quaerat",
        user_owned_grafeas_note=shared.UserOwnedGrafeasNoteInput(
            note_reference="quia",
            public_keys=[
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="corporis",
                    comment="nesciunt",
                    id="at",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="enim",
                        signature_algorithm="EC_SIGN_P521_SHA512",
                    ),
                ),
            ],
        ),
    ),
)
    
res = s.projects.binaryauthorization_projects_attestors_create(req)

if res.attestor is not None:
    # handle response
```
<!-- End SDK Example Usage -->