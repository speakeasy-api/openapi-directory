# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/integrations/v1/go
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

    req := operations.IntegrationsCallbackGenerateTokenRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Code: "unde",
        Fields: "nulla",
        GcpProjectID: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        Product: "APIGEE",
        QuotaUser: "deserunt",
        RedirectURI: "suscipit",
        State: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Callback.IntegrationsCallbackGenerateToken(ctx, req, operations.IntegrationsCallbackGenerateTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaGenerateTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Callback

* `IntegrationsCallbackGenerateToken` - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

### ConnectorPlatformRegions

* `IntegrationsConnectorPlatformRegionsEnumerate` - Enumerates the regions for which Connector Platform is provisioned.

### Projects

* `IntegrationsProjectsGetClientmetadata` - Gets the metadata info for the requested client
* `IntegrationsProjectsLocationsAppsScriptProjectsCreate` - Creates an Apps Script project.
* `IntegrationsProjectsLocationsAppsScriptProjectsLink` - Links a existing Apps Script project.
* `IntegrationsProjectsLocationsClientsDeprovision` - Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.
* `IntegrationsProjectsLocationsClientsProvision` - Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.
* `IntegrationsProjectsLocationsClientsSwitch` - Update client from GMEK to CMEK
* `IntegrationsProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasList` - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
* `IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasList` - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
* `IntegrationsProjectsLocationsGetClients` - Gets the client configuration for the given project and location resource name
* `IntegrationsProjectsLocationsProductsAuthConfigsCreate` - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
* `IntegrationsProjectsLocationsProductsAuthConfigsList` - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
* `IntegrationsProjectsLocationsProductsCertificatesCreate` - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
* `IntegrationsProjectsLocationsProductsCertificatesList` - List all the certificates that match the filter. Restrict to certificate of current client only.
* `IntegrationsProjectsLocationsProductsCloudFunctionsCreate` - Creates an cloud function project.
* `IntegrationsProjectsLocationsProductsIntegrationsExecute` - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
* `IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancel` - Cancellation of an execution
* `IntegrationsProjectsLocationsProductsIntegrationsExecutionsList` - Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
* `IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift` - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
* `IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList` - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
* `IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve` - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
* `IntegrationsProjectsLocationsProductsIntegrationsList` - Returns the list of all integrations in the specified project.
* `IntegrationsProjectsLocationsProductsIntegrationsSchedule` - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
* `IntegrationsProjectsLocationsProductsIntegrationsTest` - Execute the integration in draft state
* `IntegrationsProjectsLocationsProductsIntegrationsVersionsCreate` - Create a integration with a draft version in the specified project.
* `IntegrationsProjectsLocationsProductsIntegrationsVersionsDownload` - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
* `IntegrationsProjectsLocationsProductsIntegrationsVersionsList` - Returns the list of all integration versions in the specified project.
* `IntegrationsProjectsLocationsProductsIntegrationsVersionsPublish` - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
* `IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock` - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
* `IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublish` - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
* `IntegrationsProjectsLocationsProductsIntegrationsVersionsUpload` - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
* `IntegrationsProjectsLocationsSfdcInstancesCreate` - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
* `IntegrationsProjectsLocationsSfdcInstancesList` - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
* `IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate` - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
* `IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete` - Deletes an sfdc channel.
* `IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGet` - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
* `IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsList` - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
* `IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch` - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
