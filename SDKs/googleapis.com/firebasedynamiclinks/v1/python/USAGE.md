<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebasedynamiclinksManagedShortLinksCreateRequest(
    dollar_xgafv="2",
    create_managed_short_link_request=shared.CreateManagedShortLinkRequest(
        dynamic_link_info=shared.DynamicLinkInfo(
            analytics_info=shared.AnalyticsInfo(
                google_play_analytics=shared.GooglePlayAnalytics(
                    gclid="provident",
                    utm_campaign="distinctio",
                    utm_content="quibusdam",
                    utm_medium="unde",
                    utm_source="nulla",
                    utm_term="corrupti",
                ),
                itunes_connect_analytics=shared.ITunesConnectAnalytics(
                    at="illum",
                    ct="vel",
                    mt="error",
                    pt="deserunt",
                ),
            ),
            android_info=shared.AndroidInfo(
                android_fallback_link="suscipit",
                android_link="iure",
                android_min_package_version_code="magnam",
                android_package_name="debitis",
            ),
            desktop_info=shared.DesktopInfo(
                desktop_fallback_link="ipsa",
            ),
            domain_uri_prefix="delectus",
            dynamic_link_domain="tempora",
            ios_info=shared.IosInfo(
                ios_app_store_id="suscipit",
                ios_bundle_id="molestiae",
                ios_custom_scheme="minus",
                ios_fallback_link="placeat",
                ios_ipad_bundle_id="voluptatum",
                ios_ipad_fallback_link="iusto",
                ios_minimum_version="excepturi",
            ),
            link="nisi",
            navigation_info=shared.NavigationInfo(
                enable_forced_redirect=False,
            ),
            social_meta_tag_info=shared.SocialMetaTagInfo(
                social_description="recusandae",
                social_image_link="temporibus",
                social_title="ab",
            ),
        ),
        long_dynamic_link="quis",
        name="veritatis",
        sdk_version="deserunt",
        suffix=shared.Suffix(
            custom_suffix="perferendis",
            option="UNGUESSABLE",
        ),
    ),
    access_token="repellendus",
    alt="proto",
    callback="quo",
    fields_="odit",
    key="at",
    oauth_token="at",
    pretty_print=False,
    quota_user="maiores",
    upload_type="molestiae",
    upload_protocol="quod",
)
    
res = s.managed_short_links.firebasedynamiclinks_managed_short_links_create(req, operations.FirebasedynamiclinksManagedShortLinksCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.create_managed_short_link_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->