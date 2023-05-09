# Projects

### Available Operations

* [ConnectorsProjectsLocationsConnectionsActionsExecute](#connectorsprojectslocationsconnectionsactionsexecute) - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
* [ConnectorsProjectsLocationsConnectionsActionsList](#connectorsprojectslocationsconnectionsactionslist) - Gets the schema of all the actions supported by the connector.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate](#connectorsprojectslocationsconnectionsentitytypesentitiescreate) - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete](#connectorsprojectslocationsconnectionsentitytypesentitiesdelete) - Deletes an existing entity row matching the entity type and entity id specified in the request.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions](#connectorsprojectslocationsconnectionsentitytypesentitiesdeleteentitieswithconditions) - Deletes entities based on conditions specified in the request and not on entity id.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGet](#connectorsprojectslocationsconnectionsentitytypesentitiesget) - Gets a single entity row matching the entity type and entity id specified in the request.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesList](#connectorsprojectslocationsconnectionsentitytypesentitieslist) - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch](#connectorsprojectslocationsconnectionsentitytypesentitiespatch) - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
* [ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions](#connectorsprojectslocationsconnectionsentitytypesentitiesupdateentitieswithconditions) - Updates entities based on conditions specified in the request and not on entity id.
* [ConnectorsProjectsLocationsConnectionsEntityTypesList](#connectorsprojectslocationsconnectionsentitytypeslist) - Lists metadata related to all entity types present in the external system.
* [ConnectorsProjectsLocationsConnectionsExecuteSQLQuery](#connectorsprojectslocationsconnectionsexecutesqlquery) - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

## ConnectorsProjectsLocationsConnectionsActionsExecute

Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.

### Example Usage

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
                "excepturi": "nisi",
                "recusandae": "temporibus",
            },
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
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

## ConnectorsProjectsLocationsConnectionsActionsList

Gets the schema of all the actions supported by the connector.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsActionsList(ctx, operations.ConnectorsProjectsLocationsConnectionsActionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(720633),
        PageToken: sdk.String("officia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
    }, operations.ConnectorsProjectsLocationsConnectionsActionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActionsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate

Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EntityInput: &shared.EntityInput{
            Fields: map[string]interface{}{
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        Parent: "ad",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("iste"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Entity != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete

Deletes an existing entity row matching the entity type and entity id specified in the request.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        Name: "Stacy Moore",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions

Deletes entities based on conditions specified in the request and not on entity id.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Conditions: sdk.String("dolorem"),
        EntityType: "corporis",
        Fields: sdk.String("explicabo"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGet

Gets a single entity row matching the entity type and entity id specified in the request.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGet(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        Name: "Angie Durgan",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Entity != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesList

Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesList(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Conditions: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        PageSize: sdk.Int64(674752),
        PageToken: sdk.String("animi"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        SortBy: []string{
            "sequi",
            "tenetur",
            "ipsam",
            "id",
        },
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("aut"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntitiesResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch

Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EntityInput: &shared.EntityInput{
            Fields: map[string]interface{}{
                "temporibus": "laborum",
                "quasi": "reiciendis",
                "voluptatibus": "vero",
            },
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("omnis"),
        Name: "Ms. Karla Aufderhar",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Entity != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions

Updates entities based on conditions specified in the request and not on entity id.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EntityInput: &shared.EntityInput{
            Fields: map[string]interface{}{
                "harum": "enim",
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Conditions: sdk.String("quae"),
        EntityType: "ipsum",
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEntitiesWithConditionsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsEntityTypesList

Lists metadata related to all entity types present in the external system.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsEntityTypesList(ctx, operations.ConnectorsProjectsLocationsConnectionsEntityTypesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("sint"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("itaque"),
        PageSize: sdk.Int64(277718),
        PageToken: sdk.String("enim"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.ConnectorsProjectsLocationsConnectionsEntityTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntityTypesResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsExecuteSQLQuery

Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsExecuteSQLQuery(ctx, operations.ConnectorsProjectsLocationsConnectionsExecuteSQLQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExecuteSQLQueryRequest: &shared.ExecuteSQLQueryRequest{
            Query: &shared.Query{
                Query: sdk.String("distinctio"),
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Connection: "qui",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("assumenda"),
    }, operations.ConnectorsProjectsLocationsConnectionsExecuteSQLQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteSQLQueryResponse != nil {
        // handle response
    }
}
```
