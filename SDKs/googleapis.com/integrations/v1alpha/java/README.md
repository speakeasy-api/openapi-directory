# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenProductEnum;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenRequest;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenResponse;
import org.openapis.openapi.models.operations.IntegrationsCallbackGenerateTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IntegrationsCallbackGenerateTokenRequest req = new IntegrationsCallbackGenerateTokenRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                code = "unde";
                fields = "nulla";
                gcpProjectId = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                product = IntegrationsCallbackGenerateTokenProductEnum.APIGEE;
                quotaUser = "deserunt";
                redirectUri = "suscipit";
                state = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            IntegrationsCallbackGenerateTokenResponse res = sdk.callback.integrationsCallbackGenerateToken(req, new IntegrationsCallbackGenerateTokenSecurity("ipsa", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIntegrationsV1alphaGenerateTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [callback](docs/callback/README.md)

* [integrationsCallbackGenerateToken](docs/callback/README.md#integrationscallbackgeneratetoken) - Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

### [connectorPlatformRegions](docs/connectorplatformregions/README.md)

* [integrationsConnectorPlatformRegionsEnumerate](docs/connectorplatformregions/README.md#integrationsconnectorplatformregionsenumerate) - Enumerates the regions for which Connector Platform is provisioned.

### [projects](docs/projects/README.md)

* [integrationsProjectsLocationsAppsScriptProjectsCreate](docs/projects/README.md#integrationsprojectslocationsappsscriptprojectscreate) - Creates an Apps Script project.
* [integrationsProjectsLocationsAppsScriptProjectsLink](docs/projects/README.md#integrationsprojectslocationsappsscriptprojectslink) - Links a existing Apps Script project.
* [integrationsProjectsLocationsConnectionsList](docs/projects/README.md#integrationsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [integrationsProjectsLocationsConnectionsRuntimeActionSchemasList](docs/projects/README.md#integrationsprojectslocationsconnectionsruntimeactionschemaslist) - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
* [integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList](docs/projects/README.md#integrationsprojectslocationsconnectionsruntimeentityschemaslist) - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
* [integrationsProjectsLocationsProductsAuthConfigsCreate](docs/projects/README.md#integrationsprojectslocationsproductsauthconfigscreate) - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
* [integrationsProjectsLocationsProductsAuthConfigsList](docs/projects/README.md#integrationsprojectslocationsproductsauthconfigslist) - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
* [integrationsProjectsLocationsProductsCertificatesCreate](docs/projects/README.md#integrationsprojectslocationsproductscertificatescreate) - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
* [integrationsProjectsLocationsProductsCertificatesList](docs/projects/README.md#integrationsprojectslocationsproductscertificateslist) - List all the certificates that match the filter. Restrict to certificate of current client only.
* [integrationsProjectsLocationsProductsIntegrationsExecute](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsexecute) - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsCancel](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsexecutionscancel) - Cancellation of an execution
* [integrationsProjectsLocationsProductsIntegrationsExecutionsList](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsexecutionslist) - Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslift) - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslist) - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsexecutionssuspensionsresolve) - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
* [integrationsProjectsLocationsProductsIntegrationsList](docs/projects/README.md#integrationsprojectslocationsproductsintegrationslist) - Returns the list of all integrations in the specified project.
* [integrationsProjectsLocationsProductsIntegrationsSchedule](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsschedule) - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
* [integrationsProjectsLocationsProductsIntegrationsVersionsDownload](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsversionsdownload) - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
* [integrationsProjectsLocationsProductsIntegrationsVersionsPublish](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsversionspublish) - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
* [integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsversionstakeovereditlock) - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsversionsunpublish) - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUpload](docs/projects/README.md#integrationsprojectslocationsproductsintegrationsversionsupload) - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
* [integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate](docs/projects/README.md#integrationsprojectslocationsproductsintegrationtemplatesversionscreate) - Creates an IntegrationTemplateVersion.
* [integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList](docs/projects/README.md#integrationsprojectslocationsproductsintegrationtemplatesversionslist) - Returns the list of all IntegrationTemplateVersions in the specified project.
* [integrationsProjectsLocationsSfdcInstancesCreate](docs/projects/README.md#integrationsprojectslocationssfdcinstancescreate) - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
* [integrationsProjectsLocationsSfdcInstancesList](docs/projects/README.md#integrationsprojectslocationssfdcinstanceslist) - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate](docs/projects/README.md#integrationsprojectslocationssfdcinstancessfdcchannelscreate) - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete](docs/projects/README.md#integrationsprojectslocationssfdcinstancessfdcchannelsdelete) - Deletes an sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet](docs/projects/README.md#integrationsprojectslocationssfdcinstancessfdcchannelsget) - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsList](docs/projects/README.md#integrationsprojectslocationssfdcinstancessfdcchannelslist) - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch](docs/projects/README.md#integrationsprojectslocationssfdcinstancessfdcchannelspatch) - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
