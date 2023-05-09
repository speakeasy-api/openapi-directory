# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/bigquery/v2/go
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
    res, err := s.Datasets.BigqueryDatasetsDelete(ctx, operations.BigqueryDatasetsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "corrupti",
        DeleteContents: sdk.Bool(false),
        Fields: sdk.String("provident"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "unde",
        QuotaUser: sdk.String("nulla"),
        UserIP: sdk.String("corrupti"),
    }, operations.BigqueryDatasetsDeleteSecurity{
        Option1: &operations.BigqueryDatasetsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Datasets](docs/datasets/README.md)

* [BigqueryDatasetsDelete](docs/datasets/README.md#bigquerydatasetsdelete) - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* [BigqueryDatasetsGet](docs/datasets/README.md#bigquerydatasetsget) - Returns the dataset specified by datasetID.
* [BigqueryDatasetsInsert](docs/datasets/README.md#bigquerydatasetsinsert) - Creates a new empty dataset.
* [BigqueryDatasetsList](docs/datasets/README.md#bigquerydatasetslist) - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* [BigqueryDatasetsPatch](docs/datasets/README.md#bigquerydatasetspatch) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* [BigqueryDatasetsUpdate](docs/datasets/README.md#bigquerydatasetsupdate) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

### [Jobs](docs/jobs/README.md)

* [BigqueryJobsCancel](docs/jobs/README.md#bigqueryjobscancel) - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* [BigqueryJobsDelete](docs/jobs/README.md#bigqueryjobsdelete) - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* [BigqueryJobsGet](docs/jobs/README.md#bigqueryjobsget) - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* [BigqueryJobsGetQueryResults](docs/jobs/README.md#bigqueryjobsgetqueryresults) - Retrieves the results of a query job.
* [BigqueryJobsInsert](docs/jobs/README.md#bigqueryjobsinsert) - Starts a new asynchronous job. Requires the Can View project role.
* [BigqueryJobsList](docs/jobs/README.md#bigqueryjobslist) - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* [BigqueryJobsQuery](docs/jobs/README.md#bigqueryjobsquery) - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

### [Models](docs/models/README.md)

* [BigqueryModelsDelete](docs/models/README.md#bigquerymodelsdelete) - Deletes the model specified by modelId from the dataset.
* [BigqueryModelsGet](docs/models/README.md#bigquerymodelsget) - Gets the specified model resource by model ID.
* [BigqueryModelsList](docs/models/README.md#bigquerymodelslist) - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* [BigqueryModelsPatch](docs/models/README.md#bigquerymodelspatch) - Patch specific fields in the specified model.

### [Projects](docs/projects/README.md)

* [BigqueryProjectsGetServiceAccount](docs/projects/README.md#bigqueryprojectsgetserviceaccount) - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* [BigqueryProjectsList](docs/projects/README.md#bigqueryprojectslist) - Lists all projects to which you have been granted any project role.

### [Routines](docs/routines/README.md)

* [BigqueryRoutinesDelete](docs/routines/README.md#bigqueryroutinesdelete) - Deletes the routine specified by routineId from the dataset.
* [BigqueryRoutinesGet](docs/routines/README.md#bigqueryroutinesget) - Gets the specified routine resource by routine ID.
* [BigqueryRoutinesInsert](docs/routines/README.md#bigqueryroutinesinsert) - Creates a new routine in the dataset.
* [BigqueryRoutinesList](docs/routines/README.md#bigqueryroutineslist) - Lists all routines in the specified dataset. Requires the READER dataset role.
* [BigqueryRoutinesUpdate](docs/routines/README.md#bigqueryroutinesupdate) - Updates information in an existing routine. The update method replaces the entire Routine resource.

### [RowAccessPolicies](docs/rowaccesspolicies/README.md)

* [BigqueryRowAccessPoliciesList](docs/rowaccesspolicies/README.md#bigqueryrowaccesspolicieslist) - Lists all row access policies on the specified table.

### [Tabledata](docs/tabledata/README.md)

* [BigqueryTabledataInsertAll](docs/tabledata/README.md#bigquerytabledatainsertall) - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* [BigqueryTabledataList](docs/tabledata/README.md#bigquerytabledatalist) - Retrieves table data from a specified set of rows. Requires the READER dataset role.

### [Tables](docs/tables/README.md)

* [BigqueryTablesDelete](docs/tables/README.md#bigquerytablesdelete) - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* [BigqueryTablesGet](docs/tables/README.md#bigquerytablesget) - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* [BigqueryTablesGetIamPolicy](docs/tables/README.md#bigquerytablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [BigqueryTablesInsert](docs/tables/README.md#bigquerytablesinsert) - Creates a new, empty table in the dataset.
* [BigqueryTablesList](docs/tables/README.md#bigquerytableslist) - Lists all tables in the specified dataset. Requires the READER dataset role.
* [BigqueryTablesPatch](docs/tables/README.md#bigquerytablespatch) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* [BigqueryTablesSetIamPolicy](docs/tables/README.md#bigquerytablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [BigqueryTablesTestIamPermissions](docs/tables/README.md#bigquerytablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [BigqueryTablesUpdate](docs/tables/README.md#bigquerytablesupdate) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
