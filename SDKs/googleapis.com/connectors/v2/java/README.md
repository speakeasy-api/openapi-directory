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
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExecuteActionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsActionsExecuteRequest req = new ConnectorsProjectsLocationsConnectionsActionsExecuteRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                executeActionRequest = new ExecuteActionRequest() {{
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            ConnectorsProjectsLocationsConnectionsActionsExecuteResponse res = sdk.projects.connectorsProjectsLocationsConnectionsActionsExecute(req, new ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.executeActionResponse != null) {
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


### [projects](docs/projects/README.md)

* [connectorsProjectsLocationsConnectionsActionsExecute](docs/projects/README.md#connectorsprojectslocationsconnectionsactionsexecute) - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
* [connectorsProjectsLocationsConnectionsActionsList](docs/projects/README.md#connectorsprojectslocationsconnectionsactionslist) - Gets the schema of all the actions supported by the connector.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiescreate) - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesdelete) - Deletes an existing entity row matching the entity type and entity id specified in the request.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesdeleteentitieswithconditions) - Deletes entities based on conditions specified in the request and not on entity id.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesget) - Gets a single entity row matching the entity type and entity id specified in the request.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesList](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitieslist) - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiespatch) - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
* [connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesupdateentitieswithconditions) - Updates entities based on conditions specified in the request and not on entity id.
* [connectorsProjectsLocationsConnectionsEntityTypesList](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypeslist) - Lists metadata related to all entity types present in the external system.
* [connectorsProjectsLocationsConnectionsExecuteSqlQuery](docs/projects/README.md#connectorsprojectslocationsconnectionsexecutesqlquery) - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
