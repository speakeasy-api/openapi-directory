# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dlp/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoTypes.DlpInfoTypesList(ctx, operations.DlpInfoTypesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        LanguageCode: sdk.String("illum"),
        LocationID: sdk.String("vel"),
        OauthToken: sdk.String("error"),
        Parent: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DlpInfoTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePrivacyDlpV2ListInfoTypesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [InfoTypes](docs/infotypes/README.md)

* [DlpInfoTypesList](docs/infotypes/README.md#dlpinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### [Locations](docs/locations/README.md)

* [DlpLocationsInfoTypesList](docs/locations/README.md#dlplocationsinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### [Projects](docs/projects/README.md)

* [DlpProjectsLocationsContentDeidentify](docs/projects/README.md#dlpprojectslocationscontentdeidentify) - De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* [DlpProjectsLocationsContentInspect](docs/projects/README.md#dlpprojectslocationscontentinspect) - Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
* [DlpProjectsLocationsContentReidentify](docs/projects/README.md#dlpprojectslocationscontentreidentify) - Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
* [DlpProjectsLocationsDeidentifyTemplatesCreate](docs/projects/README.md#dlpprojectslocationsdeidentifytemplatescreate) - Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* [DlpProjectsLocationsDeidentifyTemplatesList](docs/projects/README.md#dlpprojectslocationsdeidentifytemplateslist) - Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* [DlpProjectsLocationsDlpJobsCancel](docs/projects/README.md#dlpprojectslocationsdlpjobscancel) - Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* [DlpProjectsLocationsDlpJobsCreate](docs/projects/README.md#dlpprojectslocationsdlpjobscreate) - Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* [DlpProjectsLocationsDlpJobsFinish](docs/projects/README.md#dlpprojectslocationsdlpjobsfinish) - Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
* [DlpProjectsLocationsDlpJobsList](docs/projects/README.md#dlpprojectslocationsdlpjobslist) - Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* [DlpProjectsLocationsImageRedact](docs/projects/README.md#dlpprojectslocationsimageredact) - Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* [DlpProjectsLocationsInspectTemplatesCreate](docs/projects/README.md#dlpprojectslocationsinspecttemplatescreate) - Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* [DlpProjectsLocationsInspectTemplatesList](docs/projects/README.md#dlpprojectslocationsinspecttemplateslist) - Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* [DlpProjectsLocationsJobTriggersActivate](docs/projects/README.md#dlpprojectslocationsjobtriggersactivate) - Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
* [DlpProjectsLocationsJobTriggersCreate](docs/projects/README.md#dlpprojectslocationsjobtriggerscreate) - Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* [DlpProjectsLocationsJobTriggersHybridInspect](docs/projects/README.md#dlpprojectslocationsjobtriggershybridinspect) - Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
* [DlpProjectsLocationsJobTriggersList](docs/projects/README.md#dlpprojectslocationsjobtriggerslist) - Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* [DlpProjectsStoredInfoTypesCreate](docs/projects/README.md#dlpprojectsstoredinfotypescreate) - Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [DlpProjectsStoredInfoTypesDelete](docs/projects/README.md#dlpprojectsstoredinfotypesdelete) - Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [DlpProjectsStoredInfoTypesGet](docs/projects/README.md#dlpprojectsstoredinfotypesget) - Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [DlpProjectsStoredInfoTypesList](docs/projects/README.md#dlpprojectsstoredinfotypeslist) - Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* [DlpProjectsStoredInfoTypesPatch](docs/projects/README.md#dlpprojectsstoredinfotypespatch) - Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
