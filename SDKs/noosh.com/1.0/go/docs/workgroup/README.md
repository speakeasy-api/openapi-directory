# Workgroup

### Available Operations

* [GetClientWorkgroupList](#getclientworkgrouplist) - List client workgroups
* [GetSpecificClientWorkgroup](#getspecificclientworkgroup) - Get a specific client workgroups
* [GetSupplierWorkgroupDetail](#getsupplierworkgroupdetail) - Get the specific supplier of My Group
* [GetSupplierWorkgroupList](#getsupplierworkgrouplist) - List supplier workgroups
* [GetWorkgroupDetail](#getworkgroupdetail) - Detail workgroup info
* [GetWorkgroupList](#getworkgrouplist) - List the workgroups
* [PutWorkgroupJSON](#putworkgroupjson) - Update a specific Workgroup
* [PutWorkgroupRaw](#putworkgroupraw) - Update a specific Workgroup

## GetClientWorkgroupList

List client workgroups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.GetClientWorkgroupList(ctx, operations.GetClientWorkgroupListRequest{
        WorkgroupID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpecificClientWorkgroup

Get a specific client workgroups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.GetSpecificClientWorkgroup(ctx, operations.GetSpecificClientWorkgroupRequest{
        ClientWorkgroupID: "ducimus",
        WorkgroupID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSupplierWorkgroupDetail

Get the specific supplier of My Group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.GetSupplierWorkgroupDetail(ctx, operations.GetSupplierWorkgroupDetailRequest{
        BuSupplierWorkgroupID: "quibusdam",
        WorkgroupID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSupplierWorkgroupList

List supplier workgroups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.GetSupplierWorkgroupList(ctx, operations.GetSupplierWorkgroupListRequest{
        WorkgroupID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetWorkgroupDetail

Detail workgroup info

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.GetWorkgroupDetail(ctx, operations.GetWorkgroupDetailRequest{
        WorkgroupID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetWorkgroupList

List the workgroups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.GetWorkgroupList(ctx, operations.GetWorkgroupListRequest{
        WorkgroupName: sdk.String("impedit"),
        WorkgroupTypes: []string{
            "voluptatibus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutWorkgroupJSON

Update a specific Workgroup

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.PutWorkgroupJSON(ctx, operations.PutWorkgroupJSONRequest{
        WorkgroupUpdPersistVO: &shared.WorkgroupUpdPersistVO{
            AddressLine1: sdk.String("sample address_line1"),
            AddressLine2: sdk.String("sample address_line2"),
            AddressLine3: sdk.String("sample address_line3"),
            City: sdk.String("sample city"),
            Country: sdk.String("sample country"),
            CustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-07-22"),
                    NumberValue: sdk.String("porro"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2020-01-18"),
                    NumberValue: sdk.String("iusto"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            DecimalPlaces: sdk.Int64(1),
            Postal: sdk.String("sample postal"),
            State: sdk.String("sample state"),
            WorkgroupName: sdk.String("sample workgroup_name"),
        },
        WorkgroupID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutWorkgroupRaw

Update a specific Workgroup

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Workgroup.PutWorkgroupRaw(ctx, operations.PutWorkgroupRawRequest{
        RequestBody: []byte("ducimus"),
        WorkgroupID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
