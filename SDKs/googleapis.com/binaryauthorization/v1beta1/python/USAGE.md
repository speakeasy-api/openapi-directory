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
        parent="molestias",
    ),
    query_params=operations.BinaryauthorizationProjectsAttestorsCreateQueryParams(
        dollar_xgafv="1",
        access_token="quia",
        alt="media",
        attestor_id="non",
        callback="porro",
        fields="ut",
        key="eum",
        oauth_token="est",
        pretty_print=True,
        quota_user="rerum",
        upload_type="consequatur",
        upload_protocol="provident",
    ),
    request=shared.AttestorInput(
        description="quia",
        etag="culpa",
        name="rerum",
        user_owned_drydock_note=shared.UserOwnedDrydockNoteInput(
            note_reference="dolorum",
            public_keys=[
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="perspiciatis",
                    comment="repudiandae",
                    id="non",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="veniam",
                        signature_algorithm="EC_SIGN_P256_SHA256",
                    ),
                ),
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="quia",
                    comment="non",
                    id="quisquam",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="aspernatur",
                        signature_algorithm="EC_SIGN_P521_SHA512",
                    ),
                ),
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="atque",
                    comment="pariatur",
                    id="qui",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="ipsum",
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