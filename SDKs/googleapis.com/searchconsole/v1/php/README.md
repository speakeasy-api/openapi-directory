# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### searchanalytics

* `webmastersSearchanalyticsQuery` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### sitemaps

* `webmastersSitemapsDelete` - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* `webmastersSitemapsGet` - Retrieves information about a specific sitemap.
* `webmastersSitemapsList` -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* `webmastersSitemapsSubmit` - Submits a sitemap for a site.

### sites

* `webmastersSitesAdd` -  Adds a site to the set of the user's sites in Search Console.
* `webmastersSitesDelete` -  Removes a site from the set of the user's Search Console sites.
* `webmastersSitesGet` -  Retrieves information about specific site.
* `webmastersSitesList` -  Lists the user's Search Console sites.

### urlInspection

* `searchconsoleUrlInspectionIndexInspect` - Index inspection.

### urlTestingTools

* `searchconsoleUrlTestingToolsMobileFriendlyTestRun` - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
