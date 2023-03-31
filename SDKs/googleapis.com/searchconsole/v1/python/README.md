# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/searchconsole/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WebmastersSearchanalyticsQueryRequest(
    dollar_xgafv="2",
    search_analytics_query_request=shared.SearchAnalyticsQueryRequest(
        aggregation_type="BY_PROPERTY",
        data_state="ALL",
        dimension_filter_groups=[
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="SEARCH_APPEARANCE",
                        expression="corrupti",
                        operator="EXCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="error",
                        operator="NOT_CONTAINS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="PAGE",
                        expression="iure",
                        operator="NOT_EQUALS",
                    ),
                ],
                group_type="AND",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="QUERY",
                        expression="delectus",
                        operator="NOT_EQUALS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="PAGE",
                        expression="molestiae",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="SEARCH_APPEARANCE",
                        expression="voluptatum",
                        operator="CONTAINS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="nisi",
                        operator="EXCLUDING_REGEX",
                    ),
                ],
                group_type="AND",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="QUERY",
                        expression="quis",
                        operator="EQUALS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="DEVICE",
                        expression="perferendis",
                        operator="CONTAINS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="SEARCH_APPEARANCE",
                        expression="sapiente",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="QUERY",
                        expression="at",
                        operator="EXCLUDING_REGEX",
                    ),
                ],
                group_type="AND",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="quod",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="totam",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="DEVICE",
                        expression="dicta",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="DEVICE",
                        expression="occaecati",
                        operator="EQUALS",
                    ),
                ],
                group_type="AND",
            ),
        ],
        dimensions=[
            "SEARCH_APPEARANCE",
            "DEVICE",
            "COUNTRY",
        ],
        end_date="beatae",
        row_limit=414662,
        search_type="VIDEO",
        start_date="modi",
        start_row=186332,
        type="DISCOVER",
    ),
    access_token="cum",
    alt="media",
    callback="ipsum",
    fields_="excepturi",
    key="aspernatur",
    oauth_token="perferendis",
    pretty_print=False,
    quota_user="ad",
    site_url="natus",
    upload_type="sed",
    upload_protocol="iste",
)
    
res = s.searchanalytics.webmasters_searchanalytics_query(req, operations.WebmastersSearchanalyticsQuerySecurity(
    option1=operations.WebmastersSearchanalyticsQuerySecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.search_analytics_query_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### searchanalytics

* `webmasters_searchanalytics_query` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### sitemaps

* `webmasters_sitemaps_delete` - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* `webmasters_sitemaps_get` - Retrieves information about a specific sitemap.
* `webmasters_sitemaps_list` -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* `webmasters_sitemaps_submit` - Submits a sitemap for a site.

### sites

* `webmasters_sites_add` -  Adds a site to the set of the user's sites in Search Console.
* `webmasters_sites_delete` -  Removes a site from the set of the user's Search Console sites.
* `webmasters_sites_get` -  Retrieves information about specific site.
* `webmasters_sites_list` -  Lists the user's Search Console sites.

### url_inspection

* `searchconsole_url_inspection_index_inspect` - Index inspection.

### url_testing_tools

* `searchconsole_url_testing_tools_mobile_friendly_test_run` - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
