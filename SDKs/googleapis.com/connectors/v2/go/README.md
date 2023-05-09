# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/connectors/v2/go
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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsActionsExecute(ctx, operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExecuteActionRequest: &shared.ExecuteActionRequest{
            Parameters: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        Name: "Raquel Bednar",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.ConnectorsProjectsLocationsConnectionsActionsExecuteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteActionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [ConnectorsProjectsLocationsConnectionsActionsExecute](docs/projects/README.md#connectorsprojectslocationsconnectionsactionsexecute) - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
* [ConnectorsProjectsLocationsConnectionsActionsList](docs/projects/README.md#connectorsprojectslocationsconnectionsactionslist) - Gets the schema of all the actions supported by the connector.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiescreate) - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesdelete) - Deletes an existing entity row matching the entity type and entity id specified in the request.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesdeleteentitieswithconditions) - Deletes entities based on conditions specified in the request and not on entity id.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGet](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesget) - Gets a single entity row matching the entity type and entity id specified in the request.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesList](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitieslist) - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiespatch) - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypesentitiesupdateentitieswithconditions) - Updates entities based on conditions specified in the request and not on entity id.
* [ConnectorsProjectsLocationsConnectionsEntityTypesList](docs/projects/README.md#connectorsprojectslocationsconnectionsentitytypeslist) - Lists metadata related to all entity types present in the external system.
* [ConnectorsProjectsLocationsConnectionsExecuteSQLQuery](docs/projects/README.md#connectorsprojectslocationsconnectionsexecutesqlquery) - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
