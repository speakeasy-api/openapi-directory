<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BinaryauthorizationProjectsAttestorsCreateRequest(
    dollar_xgafv="2",
    attestor_input=shared.AttestorInput(
        description="provident",
        etag="distinctio",
        name="quibusdam",
        user_owned_grafeas_note=shared.UserOwnedGrafeasNoteInput(
            note_reference="unde",
            public_keys=[
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="corrupti",
                    comment="illum",
                    id="vel",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="error",
                        signature_algorithm="RSA_SIGN_PKCS1_4096_SHA512",
                    ),
                ),
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="suscipit",
                    comment="iure",
                    id="magnam",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="debitis",
                        signature_algorithm="RSA_PSS_2048_SHA256",
                    ),
                ),
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="delectus",
                    comment="tempora",
                    id="suscipit",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="molestiae",
                        signature_algorithm="ECDSA_P384_SHA384",
                    ),
                ),
                shared.AttestorPublicKey(
                    ascii_armored_pgp_public_key="placeat",
                    comment="voluptatum",
                    id="iusto",
                    pkix_public_key=shared.PkixPublicKey(
                        public_key_pem="excepturi",
                        signature_algorithm="RSA_PSS_4096_SHA512",
                    ),
                ),
            ],
        ),
    ),
    access_token="recusandae",
    alt="proto",
    attestor_id="ab",
    callback="quis",
    fields_="veritatis",
    key="deserunt",
    oauth_token="perferendis",
    parent="ipsam",
    pretty_print=False,
    quota_user="repellendus",
    upload_type="sapiente",
    upload_protocol="quo",
)
    
res = s.projects.binaryauthorization_projects_attestors_create(req, operations.BinaryauthorizationProjectsAttestorsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.attestor is not None:
    # handle response
```
<!-- End SDK Example Usage -->