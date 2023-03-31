# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastore/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DatastoreProjectsExportRequest{
        DollarXgafv: "2",
        GoogleDatastoreAdminV1beta1ExportEntitiesRequest: &shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1beta1EntityFilter{
                Kinds: []string{
                    "distinctio",
                    "quibusdam",
                    "unde",
                },
                NamespaceIds: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
            },
            Labels: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            OutputURLPrefix: "tempora",
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "minus",
        Fields: "placeat",
        Key: "voluptatum",
        OauthToken: "iusto",
        PrettyPrint: false,
        ProjectID: "excepturi",
        QuotaUser: "nisi",
        UploadType: "recusandae",
        UploadProtocol: "temporibus",
    }

    ctx := context.Background()
    res, err := s.Projects.DatastoreProjectsExport(ctx, req, operations.DatastoreProjectsExportSecurity{
        Option1: &operations.DatastoreProjectsExportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DatastoreProjectsExport` - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `DatastoreProjectsImport` - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
