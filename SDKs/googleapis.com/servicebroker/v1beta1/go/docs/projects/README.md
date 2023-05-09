# Projects

### Available Operations

* [ServicebrokerProjectsBrokersCreate](#servicebrokerprojectsbrokerscreate) - CreateBroker creates a Broker.
* [ServicebrokerProjectsBrokersInstancesBindingsList](#servicebrokerprojectsbrokersinstancesbindingslist) - Lists all the bindings in the instance.
* [ServicebrokerProjectsBrokersInstancesList](#servicebrokerprojectsbrokersinstanceslist) - Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* [ServicebrokerProjectsBrokersList](#servicebrokerprojectsbrokerslist) - ListBrokers lists brokers.
* [ServicebrokerProjectsBrokersV2CatalogList](#servicebrokerprojectsbrokersv2cataloglist) - Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.
* [ServicebrokerProjectsBrokersV2ServiceInstancesCreate](#servicebrokerprojectsbrokersv2serviceinstancescreate) - Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.
* [ServicebrokerProjectsBrokersV2ServiceInstancesPatch](#servicebrokerprojectsbrokersv2serviceinstancespatch) - Updates an existing service instance.
See CreateServiceInstance for possible response codes.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingscreate) - CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsdelete) - Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsget) - GetBinding returns the binding information.
* [ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsgetlastoperation) - Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

## ServicebrokerProjectsBrokersCreate

CreateBroker creates a Broker.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersCreate(ctx, operations.ServicebrokerProjectsBrokersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudServicebrokerV1beta1Broker: &shared.GoogleCloudServicebrokerV1beta1Broker{
            CreateTime: sdk.String("minus"),
            Name: sdk.String("Ken Kshlerin"),
            Title: sdk.String("Dr."),
            URL: sdk.String("temporibus"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
    }, operations.ServicebrokerProjectsBrokersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersInstancesBindingsList

Lists all the bindings in the instance.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersInstancesBindingsList(ctx, operations.ServicebrokerProjectsBrokersInstancesBindingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("quod"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("esse"),
        PageSize: sdk.Int64(520478),
        PageToken: sdk.String("porro"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ServicebrokerProjectsBrokersInstancesBindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersInstancesList

Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersInstancesList(ctx, operations.ServicebrokerProjectsBrokersInstancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        PageSize: sdk.Int64(414662),
        PageToken: sdk.String("molestiae"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.ServicebrokerProjectsBrokersInstancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersList

ListBrokers lists brokers.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersList(ctx, operations.ServicebrokerProjectsBrokersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.ServicebrokerProjectsBrokersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersV2CatalogList

Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersV2CatalogList(ctx, operations.ServicebrokerProjectsBrokersV2CatalogListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(697631),
        PageToken: sdk.String("architecto"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.ServicebrokerProjectsBrokersV2CatalogListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersV2ServiceInstancesCreate

Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersV2ServiceInstancesCreate(ctx, operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudServicebrokerV1beta1ServiceInstance: &shared.GoogleCloudServicebrokerV1beta1ServiceInstance{
            Context: map[string]interface{}{
                "dolorem": "corporis",
            },
            CreateTime: sdk.String("explicabo"),
            DeploymentName: sdk.String("nobis"),
            Description: sdk.String("enim"),
            InstanceID: sdk.String("omnis"),
            OrganizationGUID: sdk.String("nemo"),
            Parameters: map[string]interface{}{
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            PlanID: sdk.String("doloribus"),
            PreviousValues: map[string]interface{}{
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
            },
            ResourceName: sdk.String("numquam"),
            ServiceID: sdk.String("commodi"),
            SpaceGUID: sdk.String("quam"),
        },
        AcceptsIncomplete: sdk.Bool(false),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        InstanceID: "quis",
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        Parent: "animi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("quo"),
    }, operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersV2ServiceInstancesPatch

Updates an existing service instance.
See CreateServiceInstance for possible response codes.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersV2ServiceInstancesPatch(ctx, operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudServicebrokerV1beta1ServiceInstance: &shared.GoogleCloudServicebrokerV1beta1ServiceInstance{
            Context: map[string]interface{}{
                "ipsam": "id",
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
            CreateTime: sdk.String("quasi"),
            DeploymentName: sdk.String("reiciendis"),
            Description: sdk.String("voluptatibus"),
            InstanceID: sdk.String("vero"),
            OrganizationGUID: sdk.String("nihil"),
            Parameters: map[string]interface{}{
                "voluptatibus": "ipsa",
                "omnis": "voluptate",
                "cum": "perferendis",
            },
            PlanID: sdk.String("doloremque"),
            PreviousValues: map[string]interface{}{
                "ut": "maiores",
                "dicta": "corporis",
            },
            ResourceName: sdk.String("dolore"),
            ServiceID: sdk.String("iusto"),
            SpaceGUID: sdk.String("dicta"),
        },
        AcceptsIncomplete: sdk.Bool(false),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("repudiandae"),
        Name: "Edna Pouros",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
    }, operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate

CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(ctx, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudServicebrokerV1beta1Binding: &shared.GoogleCloudServicebrokerV1beta1Binding{
            BindResource: map[string]interface{}{
                "repudiandae": "sint",
            },
            BindingID: sdk.String("veritatis"),
            CreateTime: sdk.String("itaque"),
            DeploymentName: sdk.String("incidunt"),
            Parameters: map[string]interface{}{
                "consequatur": "est",
                "quibusdam": "explicabo",
            },
            PlanID: sdk.String("deserunt"),
            ResourceName: sdk.String("distinctio"),
            ServiceID: sdk.String("quibusdam"),
        },
        AcceptsIncomplete: sdk.Bool(false),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BindingID: "qui",
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
    }, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete

Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete(ctx, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AcceptsIncomplete: sdk.Bool(false),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        Name: "Lucia Kemmer",
        OauthToken: sdk.String("sint"),
        PlanID: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        ServiceID: sdk.String("necessitatibus"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet

GetBinding returns the binding information.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(ctx, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("in"),
        Key: sdk.String("in"),
        Name: "Mrs. Emilio Price",
        OauthToken: sdk.String("facere"),
        PlanID: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        ServiceID: sdk.String("laborum"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("non"),
    }, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation

Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

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
    res, err := s.Projects.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(ctx, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("provident"),
        Name: "Lynn Kuvalis",
        OauthToken: sdk.String("amet"),
        Operation: sdk.String("deserunt"),
        PlanID: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        ServiceID: sdk.String("natus"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
