# Projects

### Available Operations

* [VpcaccessProjectsLocationsConnectorsCreate](#vpcaccessprojectslocationsconnectorscreate) - Creates a Serverless VPC Access connector, returns an operation.
* [VpcaccessProjectsLocationsConnectorsDelete](#vpcaccessprojectslocationsconnectorsdelete) - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* [VpcaccessProjectsLocationsConnectorsList](#vpcaccessprojectslocationsconnectorslist) - Lists Serverless VPC Access connectors.
* [VpcaccessProjectsLocationsConnectorsPatch](#vpcaccessprojectslocationsconnectorspatch) - Updates a Serverless VPC Access connector, returns an operation.
* [VpcaccessProjectsLocationsList](#vpcaccessprojectslocationslist) - Lists information about the supported locations for this service.
* [VpcaccessProjectsLocationsOperationsGet](#vpcaccessprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [VpcaccessProjectsLocationsOperationsList](#vpcaccessprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## VpcaccessProjectsLocationsConnectorsCreate

Creates a Serverless VPC Access connector, returns an operation.

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
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsCreate(ctx, operations.VpcaccessProjectsLocationsConnectorsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConnectorInput: &shared.ConnectorInput{
            IPCidrRange: sdk.String("deserunt"),
            MachineType: sdk.String("perferendis"),
            MaxInstances: sdk.Int(368241),
            MaxThroughput: sdk.Int(832620),
            MinInstances: sdk.Int(957156),
            MinThroughput: sdk.Int(778157),
            Name: sdk.String("Teri Strosin"),
            Network: sdk.String("quod"),
            Subnet: &shared.Subnet{
                Name: sdk.String("Erik Lebsack"),
                ProjectID: sdk.String("dicta"),
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        ConnectorID: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.VpcaccessProjectsLocationsConnectorsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VpcaccessProjectsLocationsConnectorsDelete

Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

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
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsDelete(ctx, operations.VpcaccessProjectsLocationsConnectorsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        Name: "Brandon Auer",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.VpcaccessProjectsLocationsConnectorsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VpcaccessProjectsLocationsConnectorsList

Lists Serverless VPC Access connectors.

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
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsList(ctx, operations.VpcaccessProjectsLocationsConnectorsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        PageSize: sdk.Int64(437032),
        PageToken: sdk.String("saepe"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.VpcaccessProjectsLocationsConnectorsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorsResponse != nil {
        // handle response
    }
}
```

## VpcaccessProjectsLocationsConnectorsPatch

Updates a Serverless VPC Access connector, returns an operation.

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
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsPatch(ctx, operations.VpcaccessProjectsLocationsConnectorsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectorInput: &shared.ConnectorInput{
            IPCidrRange: sdk.String("mollitia"),
            MachineType: sdk.String("laborum"),
            MaxInstances: sdk.Int(170909),
            MaxThroughput: sdk.Int(210382),
            MinInstances: sdk.Int(358152),
            MinThroughput: sdk.Int(128926),
            Name: sdk.String("Ronnie Mohr"),
            Network: sdk.String("excepturi"),
            Subnet: &shared.Subnet{
                Name: sdk.String("Charlene Nicolas"),
                ProjectID: sdk.String("architecto"),
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("repellat"),
        Name: "Tracy Fritsch",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UpdateMask: sdk.String("error"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quis"),
    }, operations.VpcaccessProjectsLocationsConnectorsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VpcaccessProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.VpcaccessProjectsLocationsList(ctx, operations.VpcaccessProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("odit"),
        Filter: sdk.String("quo"),
        Key: sdk.String("sequi"),
        Name: "Vernon Ondricka Sr.",
        OauthToken: sdk.String("error"),
        PageSize: sdk.Int64(837945),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.VpcaccessProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## VpcaccessProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.VpcaccessProjectsLocationsOperationsGet(ctx, operations.VpcaccessProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
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
    }, operations.VpcaccessProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## VpcaccessProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.VpcaccessProjectsLocationsOperationsList(ctx, operations.VpcaccessProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Filter: sdk.String("commodi"),
        Key: sdk.String("repudiandae"),
        Name: "Edna Pouros",
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(265389),
        PageToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.VpcaccessProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```
