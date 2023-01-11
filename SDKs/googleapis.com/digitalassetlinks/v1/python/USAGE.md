<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DigitalassetlinksAssetlinksBulkCheckRequest(
    query_params=operations.DigitalassetlinksAssetlinksBulkCheckQueryParams(
        dollar_xgafv="2",
        access_token="ut",
        alt="media",
        callback="quisquam",
        fields="quae",
        key="eum",
        oauth_token="qui",
        pretty_print=True,
        quota_user="vel",
        upload_type="minima",
        upload_protocol="qui",
    ),
    request=shared.BulkCheckRequest(
        allow_google_internal_data_sources=True,
        default_relation="dolor",
        default_source=shared.Asset(
            android_app=shared.AndroidAppAsset(
                certificate=shared.CertificateInfo(
                    sha256_fingerprint="earum",
                ),
                package_name="asperiores",
            ),
            web=shared.WebAsset(
                site="minima",
            ),
        ),
        default_target=shared.Asset(
            android_app=shared.AndroidAppAsset(
                certificate=shared.CertificateInfo(
                    sha256_fingerprint="dolores",
                ),
                package_name="vitae",
            ),
            web=shared.WebAsset(
                site="et",
            ),
        ),
        skip_cache_lookup=True,
        statements=[
            shared.StatementTemplate(
                relation="quo",
                source=shared.Asset(
                    android_app=shared.AndroidAppAsset(
                        certificate=shared.CertificateInfo(
                            sha256_fingerprint="dignissimos",
                        ),
                        package_name="quo",
                    ),
                    web=shared.WebAsset(
                        site="sint",
                    ),
                ),
                target=shared.Asset(
                    android_app=shared.AndroidAppAsset(
                        certificate=shared.CertificateInfo(
                            sha256_fingerprint="sit",
                        ),
                        package_name="ducimus",
                    ),
                    web=shared.WebAsset(
                        site="quo",
                    ),
                ),
            ),
        ],
    ),
)
    
res = s.assetlinks.digitalassetlinks_assetlinks_bulk_check(req)

if res.bulk_check_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->