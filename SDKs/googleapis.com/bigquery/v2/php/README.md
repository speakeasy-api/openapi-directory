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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\BigqueryDatasetsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BigqueryDatasetsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->datasetId = 'corrupti';
    $request->deleteContents = false;
    $request->fields = 'provident';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->projectId = 'unde';
    $request->quotaUser = 'nulla';
    $request->userIp = 'corrupti';

    $requestSecurity = new BigqueryDatasetsDeleteSecurity();
    $requestSecurity->option1 = new BigqueryDatasetsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datasets->bigqueryDatasetsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [datasets](docs/datasets/README.md)

* [bigqueryDatasetsDelete](docs/datasets/README.md#bigquerydatasetsdelete) - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* [bigqueryDatasetsGet](docs/datasets/README.md#bigquerydatasetsget) - Returns the dataset specified by datasetID.
* [bigqueryDatasetsInsert](docs/datasets/README.md#bigquerydatasetsinsert) - Creates a new empty dataset.
* [bigqueryDatasetsList](docs/datasets/README.md#bigquerydatasetslist) - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* [bigqueryDatasetsPatch](docs/datasets/README.md#bigquerydatasetspatch) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* [bigqueryDatasetsUpdate](docs/datasets/README.md#bigquerydatasetsupdate) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

### [jobs](docs/jobs/README.md)

* [bigqueryJobsCancel](docs/jobs/README.md#bigqueryjobscancel) - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
* [bigqueryJobsDelete](docs/jobs/README.md#bigqueryjobsdelete) - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
* [bigqueryJobsGet](docs/jobs/README.md#bigqueryjobsget) - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
* [bigqueryJobsGetQueryResults](docs/jobs/README.md#bigqueryjobsgetqueryresults) - Retrieves the results of a query job.
* [bigqueryJobsInsert](docs/jobs/README.md#bigqueryjobsinsert) - Starts a new asynchronous job. Requires the Can View project role.
* [bigqueryJobsList](docs/jobs/README.md#bigqueryjobslist) - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
* [bigqueryJobsQuery](docs/jobs/README.md#bigqueryjobsquery) - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.

### [models](docs/models/README.md)

* [bigqueryModelsDelete](docs/models/README.md#bigquerymodelsdelete) - Deletes the model specified by modelId from the dataset.
* [bigqueryModelsGet](docs/models/README.md#bigquerymodelsget) - Gets the specified model resource by model ID.
* [bigqueryModelsList](docs/models/README.md#bigquerymodelslist) - Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
* [bigqueryModelsPatch](docs/models/README.md#bigquerymodelspatch) - Patch specific fields in the specified model.

### [projects](docs/projects/README.md)

* [bigqueryProjectsGetServiceAccount](docs/projects/README.md#bigqueryprojectsgetserviceaccount) - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* [bigqueryProjectsList](docs/projects/README.md#bigqueryprojectslist) - Lists all projects to which you have been granted any project role.

### [routines](docs/routines/README.md)

* [bigqueryRoutinesDelete](docs/routines/README.md#bigqueryroutinesdelete) - Deletes the routine specified by routineId from the dataset.
* [bigqueryRoutinesGet](docs/routines/README.md#bigqueryroutinesget) - Gets the specified routine resource by routine ID.
* [bigqueryRoutinesInsert](docs/routines/README.md#bigqueryroutinesinsert) - Creates a new routine in the dataset.
* [bigqueryRoutinesList](docs/routines/README.md#bigqueryroutineslist) - Lists all routines in the specified dataset. Requires the READER dataset role.
* [bigqueryRoutinesUpdate](docs/routines/README.md#bigqueryroutinesupdate) - Updates information in an existing routine. The update method replaces the entire Routine resource.

### [rowAccessPolicies](docs/rowaccesspolicies/README.md)

* [bigqueryRowAccessPoliciesList](docs/rowaccesspolicies/README.md#bigqueryrowaccesspolicieslist) - Lists all row access policies on the specified table.

### [tabledata](docs/tabledata/README.md)

* [bigqueryTabledataInsertAll](docs/tabledata/README.md#bigquerytabledatainsertall) - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
* [bigqueryTabledataList](docs/tabledata/README.md#bigquerytabledatalist) - Retrieves table data from a specified set of rows. Requires the READER dataset role.

### [tables](docs/tables/README.md)

* [bigqueryTablesDelete](docs/tables/README.md#bigquerytablesdelete) - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
* [bigqueryTablesGet](docs/tables/README.md#bigquerytablesget) - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
* [bigqueryTablesGetIamPolicy](docs/tables/README.md#bigquerytablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [bigqueryTablesInsert](docs/tables/README.md#bigquerytablesinsert) - Creates a new, empty table in the dataset.
* [bigqueryTablesList](docs/tables/README.md#bigquerytableslist) - Lists all tables in the specified dataset. Requires the READER dataset role.
* [bigqueryTablesPatch](docs/tables/README.md#bigquerytablespatch) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
* [bigqueryTablesSetIamPolicy](docs/tables/README.md#bigquerytablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [bigqueryTablesTestIamPermissions](docs/tables/README.md#bigquerytablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [bigqueryTablesUpdate](docs/tables/README.md#bigquerytablesupdate) - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
