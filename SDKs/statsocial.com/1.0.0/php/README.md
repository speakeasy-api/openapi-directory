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


### application

* `getApplicationsStatus` - Used to understand API usage

### customReports

* `getReportsCustomCreate` - Step 3 of executing custom report
* `getReportsCustomGenerate` - Step 1 of executing custom report
* `getReportsCustomInsert` - Step 2 of executing custom report
* `postReportsCustomCreate` - Step 3 of executing custom report
* `postReportsCustomGenerate` - Step 1 of executing custom report
* `postReportsCustomInsert` - Step 2 of executing custom report

### followerReports

* `getReportsTwitterCreate` - Used to create twitter follower report
* `postReportsTwitterCreate` - Used to create twitter follower report

### reports

* `getReports` - Obtain report output
* `getReportsDates` - Get report dates available for a specific report
* `getReportsStatus` - Get list of generated reports
* `postReports` - Obtain report output
* `postReportsDates` - Get report dates available for a specific report
* `postReportsStatus` - Get list of generated reports

### tweetReports

* `getReportsTweetCreate` - Used to create tweet reports
* `postReportsTweetCreate` - Used to create tweet reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
