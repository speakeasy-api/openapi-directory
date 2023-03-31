<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DigitalassetlinksAssetlinksBulkCheckRequest(
    dollar_xgafv="2",
    bulk_check_request=shared.BulkCheckRequest(
        allow_google_internal_data_sources=False,
        default_relation="provident",
        default_source=shared.Asset(
            android_app=shared.AndroidAppAsset(
                certificate=shared.CertificateInfo(
                    sha256_fingerprint="distinctio",
                ),
                package_name="quibusdam",
            ),
            web=shared.WebAsset(
                site="unde",
            ),
        ),
        default_target=shared.Asset(
            android_app=shared.AndroidAppAsset(
                certificate=shared.CertificateInfo(
                    sha256_fingerprint="nulla",
                ),
                package_name="corrupti",
            ),
            web=shared.WebAsset(
                site="illum",
            ),
        ),
        skip_cache_lookup=False,
        statements=[
            shared.StatementTemplate(
                relation="error",
                source=shared.Asset(
                    android_app=shared.AndroidAppAsset(
                        certificate=shared.CertificateInfo(
                            sha256_fingerprint="deserunt",
                        ),
                        package_name="suscipit",
                    ),
                    web=shared.WebAsset(
                        site="iure",
                    ),
                ),
                target=shared.Asset(
                    android_app=shared.AndroidAppAsset(
                        certificate=shared.CertificateInfo(
                            sha256_fingerprint="magnam",
                        ),
                        package_name="debitis",
                    ),
                    web=shared.WebAsset(
                        site="ipsa",
                    ),
                ),
            ),
            shared.StatementTemplate(
                relation="delectus",
                source=shared.Asset(
                    android_app=shared.AndroidAppAsset(
                        certificate=shared.CertificateInfo(
                            sha256_fingerprint="tempora",
                        ),
                        package_name="suscipit",
                    ),
                    web=shared.WebAsset(
                        site="molestiae",
                    ),
                ),
                target=shared.Asset(
                    android_app=shared.AndroidAppAsset(
                        certificate=shared.CertificateInfo(
                            sha256_fingerprint="minus",
                        ),
                        package_name="placeat",
                    ),
                    web=shared.WebAsset(
                        site="voluptatum",
                    ),
                ),
            ),
        ],
    ),
    access_token="iusto",
    alt="media",
    callback="nisi",
    fields_="recusandae",
    key="temporibus",
    oauth_token="ab",
    pretty_print=False,
    quota_user="quis",
    upload_type="veritatis",
    upload_protocol="deserunt",
)
    
res = s.assetlinks.digitalassetlinks_assetlinks_bulk_check(req)

if res.bulk_check_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->