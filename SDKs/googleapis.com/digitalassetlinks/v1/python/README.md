# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### assetlinks

* `digitalassetlinks_assetlinks_bulk_check` - Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
* `digitalassetlinks_assetlinks_check` - Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).

### statements

* `digitalassetlinks_statements_list` - Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
