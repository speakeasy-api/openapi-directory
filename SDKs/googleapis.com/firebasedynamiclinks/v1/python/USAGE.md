<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebasedynamiclinksManagedShortLinksCreateRequest(
    security=operations.FirebasedynamiclinksManagedShortLinksCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.FirebasedynamiclinksManagedShortLinksCreateQueryParams(
        dollar_xgafv="1",
        access_token="ullam",
        alt="media",
        callback="mollitia",
        fields="laborum",
        key="voluptatem",
        oauth_token="libero",
        pretty_print=True,
        quota_user="velit",
        upload_type="rerum",
        upload_protocol="totam",
    ),
    request=shared.CreateManagedShortLinkRequest(
        dynamic_link_info=shared.DynamicLinkInfo(
            analytics_info=shared.AnalyticsInfo(
                google_play_analytics=shared.GooglePlayAnalytics(
                    gclid="aut",
                    utm_campaign="libero",
                    utm_content="est",
                    utm_medium="eum",
                    utm_source="quibusdam",
                    utm_term="quo",
                ),
                itunes_connect_analytics=shared.ITunesConnectAnalytics(
                    at="enim",
                    ct="enim",
                    mt="reprehenderit",
                    pt="nisi",
                ),
            ),
            android_info=shared.AndroidInfo(
                android_fallback_link="deleniti",
                android_link="maiores",
                android_min_package_version_code="cumque",
                android_package_name="aut",
            ),
            desktop_info=shared.DesktopInfo(
                desktop_fallback_link="quo",
            ),
            domain_uri_prefix="ad",
            dynamic_link_domain="ad",
            ios_info=shared.IosInfo(
                ios_app_store_id="praesentium",
                ios_bundle_id="ipsa",
                ios_custom_scheme="maiores",
                ios_fallback_link="soluta",
                ios_ipad_bundle_id="laboriosam",
                ios_ipad_fallback_link="voluptas",
                ios_minimum_version="officiis",
            ),
            link="veritatis",
            navigation_info=shared.NavigationInfo(
                enable_forced_redirect=False,
            ),
            social_meta_tag_info=shared.SocialMetaTagInfo(
                social_description="id",
                social_image_link="rerum",
                social_title="alias",
            ),
        ),
        long_dynamic_link="enim",
        name="cupiditate",
        sdk_version="ut",
        suffix=shared.Suffix(
            custom_suffix="et",
            option="UNGUESSABLE",
        ),
    ),
)
    
res = s.managed_short_links.firebasedynamiclinks_managed_short_links_create(req)

if res.create_managed_short_link_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->