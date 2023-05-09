# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dialogflow/v3beta1/go
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
    res, err := s.Projects.DialogflowProjectsLocationsAgentsChangelogsList(ctx, operations.DialogflowProjectsLocationsAgentsChangelogsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DialogflowProjectsLocationsAgentsChangelogsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowCxV3beta1ListChangelogsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [DialogflowProjectsLocationsAgentsChangelogsList](docs/projects/README.md#dialogflowprojectslocationsagentschangelogslist) - Returns the list of Changelogs.
* [DialogflowProjectsLocationsAgentsCreate](docs/projects/README.md#dialogflowprojectslocationsagentscreate) - Creates an agent in the specified location. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentscontinuoustestresultslist) - Fetches a list of continuous test results for a given environment.
* [DialogflowProjectsLocationsAgentsEnvironmentsCreate](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentscreate) - Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
* [DialogflowProjectsLocationsAgentsEnvironmentsDeployFlow](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentsdeployflow) - Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
* [DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentsdeploymentslist) - Returns the list of all deployments in the specified Environment.
* [DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentsexperimentscreate) - Creates an Experiment in the specified Environment.
* [DialogflowProjectsLocationsAgentsEnvironmentsExperimentsList](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentsexperimentslist) - Returns the list of all experiments in the specified Environment.
* [DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentsexperimentsstart) - Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
* [DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentsexperimentsstop) - Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
* [DialogflowProjectsLocationsAgentsEnvironmentsList](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentslist) - Returns the list of all environments in the specified Agent.
* [DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentslookupenvironmenthistory) - Looks up the history of the specified Environment.
* [DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest](docs/projects/README.md#dialogflowprojectslocationsagentsenvironmentsruncontinuoustest) - Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
* [DialogflowProjectsLocationsAgentsFlowsCreate](docs/projects/README.md#dialogflowprojectslocationsagentsflowscreate) - Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [DialogflowProjectsLocationsAgentsFlowsExport](docs/projects/README.md#dialogflowprojectslocationsagentsflowsexport) - Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
* [DialogflowProjectsLocationsAgentsFlowsImport](docs/projects/README.md#dialogflowprojectslocationsagentsflowsimport) - Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [DialogflowProjectsLocationsAgentsFlowsList](docs/projects/README.md#dialogflowprojectslocationsagentsflowslist) - Returns the list of all flows in the specified agent.
* [DialogflowProjectsLocationsAgentsFlowsPagesCreate](docs/projects/README.md#dialogflowprojectslocationsagentsflowspagescreate) - Creates a page in the specified flow.
* [DialogflowProjectsLocationsAgentsFlowsPagesList](docs/projects/README.md#dialogflowprojectslocationsagentsflowspageslist) - Returns the list of all pages in the specified flow.
* [DialogflowProjectsLocationsAgentsFlowsTrain](docs/projects/README.md#dialogflowprojectslocationsagentsflowstrain) - Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate](docs/projects/README.md#dialogflowprojectslocationsagentsflowstransitionroutegroupscreate) - Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList](docs/projects/README.md#dialogflowprojectslocationsagentsflowstransitionroutegroupslist) - Returns the list of all transition route groups in the specified flow.
* [DialogflowProjectsLocationsAgentsFlowsValidate](docs/projects/README.md#dialogflowprojectslocationsagentsflowsvalidate) - Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
* [DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions](docs/projects/README.md#dialogflowprojectslocationsagentsflowsversionscompareversions) - Compares the specified base version with target version.
* [DialogflowProjectsLocationsAgentsFlowsVersionsCreate](docs/projects/README.md#dialogflowprojectslocationsagentsflowsversionscreate) - Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
* [DialogflowProjectsLocationsAgentsFlowsVersionsList](docs/projects/README.md#dialogflowprojectslocationsagentsflowsversionslist) - Returns the list of all versions in the specified Flow.
* [DialogflowProjectsLocationsAgentsFlowsVersionsLoad](docs/projects/README.md#dialogflowprojectslocationsagentsflowsversionsload) - Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [DialogflowProjectsLocationsAgentsIntentsCreate](docs/projects/README.md#dialogflowprojectslocationsagentsintentscreate) - Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [DialogflowProjectsLocationsAgentsIntentsList](docs/projects/README.md#dialogflowprojectslocationsagentsintentslist) - Returns the list of all intents in the specified agent.
* [DialogflowProjectsLocationsAgentsList](docs/projects/README.md#dialogflowprojectslocationsagentslist) - Returns the list of all agents in the specified location.
* [DialogflowProjectsLocationsAgentsRestore](docs/projects/README.md#dialogflowprojectslocationsagentsrestore) - Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* [DialogflowProjectsLocationsAgentsSessionsDetectIntent](docs/projects/README.md#dialogflowprojectslocationsagentssessionsdetectintent) - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
* [DialogflowProjectsLocationsAgentsSessionsEntityTypesCreate](docs/projects/README.md#dialogflowprojectslocationsagentssessionsentitytypescreate) - Creates a session entity type.
* [DialogflowProjectsLocationsAgentsSessionsEntityTypesList](docs/projects/README.md#dialogflowprojectslocationsagentssessionsentitytypeslist) - Returns the list of all session entity types in the specified session.
* [DialogflowProjectsLocationsAgentsSessionsFulfillIntent](docs/projects/README.md#dialogflowprojectslocationsagentssessionsfulfillintent) - Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
* [DialogflowProjectsLocationsAgentsSessionsMatchIntent](docs/projects/README.md#dialogflowprojectslocationsagentssessionsmatchintent) - Returns preliminary intent match results, doesn't change the session status.
* [DialogflowProjectsLocationsAgentsTestCasesBatchDelete](docs/projects/README.md#dialogflowprojectslocationsagentstestcasesbatchdelete) - Batch deletes test cases.
* [DialogflowProjectsLocationsAgentsTestCasesBatchRun](docs/projects/README.md#dialogflowprojectslocationsagentstestcasesbatchrun) - Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
* [DialogflowProjectsLocationsAgentsTestCasesCalculateCoverage](docs/projects/README.md#dialogflowprojectslocationsagentstestcasescalculatecoverage) - Calculates the test coverage for an agent.
* [DialogflowProjectsLocationsAgentsTestCasesCreate](docs/projects/README.md#dialogflowprojectslocationsagentstestcasescreate) - Creates a test case for the given agent.
* [DialogflowProjectsLocationsAgentsTestCasesExport](docs/projects/README.md#dialogflowprojectslocationsagentstestcasesexport) - Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
* [DialogflowProjectsLocationsAgentsTestCasesImport](docs/projects/README.md#dialogflowprojectslocationsagentstestcasesimport) - Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
* [DialogflowProjectsLocationsAgentsTestCasesList](docs/projects/README.md#dialogflowprojectslocationsagentstestcaseslist) - Fetches a list of test cases for a given agent.
* [DialogflowProjectsLocationsAgentsTestCasesResultsList](docs/projects/README.md#dialogflowprojectslocationsagentstestcasesresultslist) - Fetches a list of results for a given test case.
* [DialogflowProjectsLocationsAgentsTestCasesRun](docs/projects/README.md#dialogflowprojectslocationsagentstestcasesrun) - Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
* [DialogflowProjectsLocationsAgentsWebhooksCreate](docs/projects/README.md#dialogflowprojectslocationsagentswebhookscreate) - Creates a webhook in the specified agent.
* [DialogflowProjectsLocationsAgentsWebhooksList](docs/projects/README.md#dialogflowprojectslocationsagentswebhookslist) - Returns the list of all webhooks in the specified agent.
* [DialogflowProjectsLocationsList](docs/projects/README.md#dialogflowprojectslocationslist) - Lists information about the supported locations for this service.
* [DialogflowProjectsLocationsSecuritySettingsCreate](docs/projects/README.md#dialogflowprojectslocationssecuritysettingscreate) - Create security settings in the specified location.
* [DialogflowProjectsLocationsSecuritySettingsDelete](docs/projects/README.md#dialogflowprojectslocationssecuritysettingsdelete) - Deletes the specified SecuritySettings.
* [DialogflowProjectsLocationsSecuritySettingsList](docs/projects/README.md#dialogflowprojectslocationssecuritysettingslist) - Returns the list of all security settings in the specified location.
* [DialogflowProjectsLocationsSecuritySettingsPatch](docs/projects/README.md#dialogflowprojectslocationssecuritysettingspatch) - Updates the specified SecuritySettings.
* [DialogflowProjectsOperationsCancel](docs/projects/README.md#dialogflowprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DialogflowProjectsOperationsGet](docs/projects/README.md#dialogflowprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DialogflowProjectsOperationsList](docs/projects/README.md#dialogflowprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
