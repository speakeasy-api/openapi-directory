# Spec

### Available Operations

* [GetProductTypeListOfWorkgroup](#getproducttypelistofworkgroup) - Get product type of workgroup level
* [GetSpec](#getspec) - List a specific spec of project Level
* [GetSpecList](#getspeclist) - List specs of project Level
* [GetSpecProductTypeListOfWorkgroup](#getspecproducttypelistofworkgroup) - Get product type of spec level by workgroupId
* [GetSpecTypeFields](#getspectypefields) - Get Spec Type Fields
* [GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecID](#getv1workgroupsworkgroupidprojectsprojectidspecsspecid) - List a specific spec of project Level
* [GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFields](#getv1workgroupsworkgroupidspectypesspectypeidspectypefields) - Get Spec Type Fields
* [PostSpecProductTypeListOfWorkgroupJSON](#postspecproducttypelistofworkgroupjson) - Register product types for spec types
* [PostSpecProductTypeListOfWorkgroupRaw](#postspecproducttypelistofworkgroupraw) - Register product types for spec types
* [PostSpecJSON](#postspecjson) - Create a Spec
* [PostSpecRaw](#postspecraw) - Create a Spec
* [PutSpecJSON](#putspecjson) - Update a specific Spec
* [PutSpecRaw](#putspecraw) - Update a specific Spec
* [PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDJSON](#putv1workgroupsworkgroupidprojectsprojectidspecsspecidjson) - Update a specific Spec
* [PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRaw](#putv1workgroupsworkgroupidprojectsprojectidspecsspecidraw) - Update a specific Spec

## GetProductTypeListOfWorkgroup

Get product type of workgroup level

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
    res, err := s.Spec.GetProductTypeListOfWorkgroup(ctx, operations.GetProductTypeListOfWorkgroupRequest{
        WorkgroupID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpec

List a specific spec of project Level

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
    res, err := s.Spec.GetSpec(ctx, operations.GetSpecRequest{
        ProjectID: "quidem",
        SpecID: "voluptatibus",
        WorkgroupID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpecList

List specs of project Level

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
    res, err := s.Spec.GetSpecList(ctx, operations.GetSpecListRequest{
        ProjectID: "natus",
        WorkgroupID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpecProductTypeListOfWorkgroup

Get product type of spec level by workgroupId

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
    res, err := s.Spec.GetSpecProductTypeListOfWorkgroup(ctx, operations.GetSpecProductTypeListOfWorkgroupRequest{
        WorkgroupID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSpecTypeFields

Get Spec Type Fields

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
    res, err := s.Spec.GetSpecTypeFields(ctx, operations.GetSpecTypeFieldsRequest{
        SpecTypeID: "sit",
        WorkgroupID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecID

List a specific spec of project Level

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
    res, err := s.Spec.GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecID(ctx, operations.GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest{
        ProjectID: "ab",
        SpecID: "soluta",
        WorkgroupID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFields

Get Spec Type Fields

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
    res, err := s.Spec.GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFields(ctx, operations.GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsRequest{
        SpecTypeID: "iusto",
        WorkgroupID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostSpecProductTypeListOfWorkgroupJSON

Register product types for spec types

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
    res, err := s.Spec.PostSpecProductTypeListOfWorkgroupJSON(ctx, operations.PostSpecProductTypeListOfWorkgroupJSONRequest{
        WgSpecPrdTypeRegPersistVO: &shared.WgSpecPrdTypeRegPersistVO{
            EnableDifferentiatePrdTypePreference: sdk.Bool(true),
            SpecPrdTypeList: []shared.SpecTypePersistVO{
                shared.SpecTypePersistVO{
                    PrdTypeLabels: []string{
                        "sample prdType_labels",
                        "sample prdType_labels",
                        "sample prdType_labels",
                    },
                    SpecTypeID: sdk.Int64(1),
                },
                shared.SpecTypePersistVO{
                    PrdTypeLabels: []string{
                        "sample prdType_labels",
                        "sample prdType_labels",
                        "sample prdType_labels",
                    },
                    SpecTypeID: sdk.Int64(1),
                },
                shared.SpecTypePersistVO{
                    PrdTypeLabels: []string{
                        "sample prdType_labels",
                        "sample prdType_labels",
                        "sample prdType_labels",
                        "sample prdType_labels",
                    },
                    SpecTypeID: sdk.Int64(1),
                },
            },
        },
        WorkgroupID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostSpecProductTypeListOfWorkgroupRaw

Register product types for spec types

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
    res, err := s.Spec.PostSpecProductTypeListOfWorkgroupRaw(ctx, operations.PostSpecProductTypeListOfWorkgroupRawRequest{
        RequestBody: []byte("asperiores"),
        WorkgroupID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostSpecJSON

Create a Spec

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
    res, err := s.Spec.PostSpecJSON(ctx, operations.PostSpecJSONRequest{
        SpecPersistVO: &shared.SpecPersistVO{
            JSONBody: sdk.Bool(true),
            ProductTypeID: sdk.Int64(1),
            Quantity1: sdk.Int64(1),
            Quantity2: sdk.Int64(1),
            Quantity3: sdk.Int64(1),
            Quantity4: sdk.Int64(1),
            Quantity5: sdk.Int64(1),
            Sku: sdk.String("sample sku"),
            SpecName: sdk.String("sample spec_name"),
            SpecTemplateID: sdk.Int64(1),
            SpecTypeID: sdk.Int64(1),
            Versions: []shared.SpecVersionPersistVO{
                shared.SpecVersionPersistVO{
                    Description: sdk.String("sample description"),
                    Qty: sdk.Int64(1),
                },
            },
        },
        ProjectID: "voluptate",
        WorkgroupID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostSpecRaw

Create a Spec

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
    res, err := s.Spec.PostSpecRaw(ctx, operations.PostSpecRawRequest{
        RequestBody: []byte("saepe"),
        ProjectID: "eius",
        WorkgroupID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutSpecJSON

Update a specific Spec

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
    res, err := s.Spec.PutSpecJSON(ctx, operations.PutSpecJSONRequest{
        V1X1SpecUpdatingPO: &shared.V1X1SpecUpdatingPO{
            FirstLevelCustomFields: &shared.V1x1ProperyPO{
                PropertyAttributes: []shared.V1x1SpecPamAndAttPO{
                    shared.V1x1SpecPamAndAttPO{
                        AttributeID: sdk.Int64(1),
                        AttributeValue: sdk.String("amet"),
                        Label: sdk.String("sample label"),
                        ParamID: sdk.Int64(1),
                        ParamName: sdk.String("sample param_name"),
                    },
                },
                PropertyID: sdk.Int64(1),
                PropertyName: sdk.String("sample property_name"),
            },
            HeaderCustomFields: &shared.V1x1ProperyPO{
                PropertyAttributes: []shared.V1x1SpecPamAndAttPO{
                    shared.V1x1SpecPamAndAttPO{
                        AttributeID: sdk.Int64(1),
                        AttributeValue: sdk.String("accusamus"),
                        Label: sdk.String("sample label"),
                        ParamID: sdk.Int64(1),
                        ParamName: sdk.String("sample param_name"),
                    },
                    shared.V1x1SpecPamAndAttPO{
                        AttributeID: sdk.Int64(1),
                        AttributeValue: sdk.String("ad"),
                        Label: sdk.String("sample label"),
                        ParamID: sdk.Int64(1),
                        ParamName: sdk.String("sample param_name"),
                    },
                    shared.V1x1SpecPamAndAttPO{
                        AttributeID: sdk.Int64(1),
                        AttributeValue: sdk.String("saepe"),
                        Label: sdk.String("sample label"),
                        ParamID: sdk.Int64(1),
                        ParamName: sdk.String("sample param_name"),
                    },
                    shared.V1x1SpecPamAndAttPO{
                        AttributeID: sdk.Int64(1),
                        AttributeValue: sdk.String("suscipit"),
                        Label: sdk.String("sample label"),
                        ParamID: sdk.Int64(1),
                        ParamName: sdk.String("sample param_name"),
                    },
                },
                PropertyID: sdk.Int64(1),
                PropertyName: sdk.String("sample property_name"),
            },
            ProductTypeID: sdk.Int64(1),
            Quantity1: sdk.Int64(1),
            Quantity2: sdk.Int64(1),
            Quantity3: sdk.Int64(1),
            Quantity4: sdk.Int64(1),
            Quantity5: sdk.Int64(1),
            SecondLevelCustomFields: []shared.V1x1ProperyPO{
                shared.V1x1ProperyPO{
                    PropertyAttributes: []shared.V1x1SpecPamAndAttPO{
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("minima"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("repellendus"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("totam"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                    },
                    PropertyID: sdk.Int64(1),
                    PropertyName: sdk.String("sample property_name"),
                },
                shared.V1x1ProperyPO{
                    PropertyAttributes: []shared.V1x1SpecPamAndAttPO{
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("alias"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("at"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("quaerat"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                    },
                    PropertyID: sdk.Int64(1),
                    PropertyName: sdk.String("sample property_name"),
                },
                shared.V1x1ProperyPO{
                    PropertyAttributes: []shared.V1x1SpecPamAndAttPO{
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("vel"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                        shared.V1x1SpecPamAndAttPO{
                            AttributeID: sdk.Int64(1),
                            AttributeValue: sdk.String("quod"),
                            Label: sdk.String("sample label"),
                            ParamID: sdk.Int64(1),
                            ParamName: sdk.String("sample param_name"),
                        },
                    },
                    PropertyID: sdk.Int64(1),
                    PropertyName: sdk.String("sample property_name"),
                },
            },
            Sku: sdk.String("sample sku"),
            SpecName: sdk.String("sample spec_name"),
            SpecTypeID: sdk.Int64(1),
            Versions: []shared.SpecVersionPersistVO{
                shared.SpecVersionPersistVO{
                    Description: sdk.String("sample description"),
                    Qty: sdk.Int64(1),
                },
                shared.SpecVersionPersistVO{
                    Description: sdk.String("sample description"),
                    Qty: sdk.Int64(1),
                },
                shared.SpecVersionPersistVO{
                    Description: sdk.String("sample description"),
                    Qty: sdk.Int64(1),
                },
                shared.SpecVersionPersistVO{
                    Description: sdk.String("sample description"),
                    Qty: sdk.Int64(1),
                },
            },
        },
        ProjectID: "qui",
        SpecID: "dolorum",
        WorkgroupID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutSpecRaw

Update a specific Spec

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
    res, err := s.Spec.PutSpecRaw(ctx, operations.PutSpecRawRequest{
        RequestBody: []byte("esse"),
        ProjectID: "harum",
        SpecID: "iusto",
        WorkgroupID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDJSON

Update a specific Spec

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
    res, err := s.Spec.PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDJSON(ctx, operations.PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDJSONRequest{
        SpecUpdatePersistVO: &shared.SpecUpdatePersistVO{
            InksAndPaper: []shared.PropertyPersistVO{
                shared.PropertyPersistVO{
                    CustomFields: []shared.CustomFieldPersistVO{
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-04-09"),
                            NumberValue: sdk.String("accusamus"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-09-08"),
                            NumberValue: sdk.String("dolorem"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2021-06-12"),
                            NumberValue: sdk.String("nihil"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-04-16"),
                            NumberValue: sdk.String("neque"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                    },
                    PaperID: sdk.Int64(1),
                },
                shared.PropertyPersistVO{
                    CustomFields: []shared.CustomFieldPersistVO{
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-04-09"),
                            NumberValue: sdk.String("voluptas"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                    },
                    PaperID: sdk.Int64(1),
                },
                shared.PropertyPersistVO{
                    CustomFields: []shared.CustomFieldPersistVO{
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-10-14"),
                            NumberValue: sdk.String("incidunt"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-05-31"),
                            NumberValue: sdk.String("maxime"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2020-10-04"),
                            NumberValue: sdk.String("dicta"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                    },
                    PaperID: sdk.Int64(1),
                },
                shared.PropertyPersistVO{
                    CustomFields: []shared.CustomFieldPersistVO{
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-06-12"),
                            NumberValue: sdk.String("aspernatur"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-04-14"),
                            NumberValue: sdk.String("facilis"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                        shared.CustomFieldPersistVO{
                            DateValue: types.MustDateFromString("2022-07-15"),
                            NumberValue: sdk.String("molestias"),
                            ParamName: sdk.String("sample param_name"),
                            StringValue: sdk.String("sample string_value"),
                        },
                    },
                    PaperID: sdk.Int64(1),
                },
            },
            ProductTypeID: sdk.Int64(1),
            Quantity1: sdk.Int64(1),
            Quantity2: sdk.Int64(1),
            Quantity3: sdk.Int64(1),
            Quantity4: sdk.Int64(1),
            Quantity5: sdk.Int64(1),
            Sku: sdk.String("sample sku"),
            SpecName: sdk.String("sample spec_name"),
        },
        ProjectID: "temporibus",
        SpecID: "qui",
        WorkgroupID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRaw

Update a specific Spec

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
    res, err := s.Spec.PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRaw(ctx, operations.PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRawRequest{
        RequestBody: []byte("fugit"),
        ProjectID: "magni",
        SpecID: "odio",
        WorkgroupID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
