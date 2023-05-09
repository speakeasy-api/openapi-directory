# DataExporterConfigs

## Overview

Everything about Otoroshi data exporters

### Available Operations

* [DataExporterTemplate](#dataexportertemplate) - Get all data exporter configs
* [CreateBulkDataExporterConfigs](#createbulkdataexporterconfigs) - Create a new data exporter configs
* [CreateDataExporterConfig](#createdataexporterconfig) - Create a new data exporter config
* [DeleteDataExporterConfig](#deletedataexporterconfig) - Delete a data exporter config
* [DeletebulkDataExporterConfig](#deletebulkdataexporterconfig) - Delete a data exporter config
* [FindAllDataExporters](#findalldataexporters) - Get all data exporter configs
* [FindDataExporterConfigByID](#finddataexporterconfigbyid) - Get a data exporter config
* [PatchBulkDataExporterConfig](#patchbulkdataexporterconfig) - Update a data exporter configs with a diff
* [PatchDataExporterConfig](#patchdataexporterconfig) - Update a data exporter config with a diff
* [UpdateBulkDataExporterConfig](#updatebulkdataexporterconfig) - Update a data exporter configs
* [UpdateDataExporterConfig](#updatedataexporterconfig) - Update a data exporter config

## DataExporterTemplate

Get all data exporter configs

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
    res, err := s.DataExporterConfigs.DataExporterTemplate(ctx, operations.DataExporterTemplateRequest{
        Type: sdk.String("veritatis"),
    }, operations.DataExporterTemplateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataExporterConfig != nil {
        // handle response
    }
}
```

## CreateBulkDataExporterConfigs

Create a new data exporter configs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataExporterConfigs.CreateBulkDataExporterConfigs(ctx, shared.DataExporterConfig{
        BufferSize: sdk.Int(123123),
        Config: &shared.DataExporterConfigConfig{},
        Desc: sdk.String("a string value"),
        Enabled: sdk.String("a string value"),
        Filtering: &shared.Filtering{
            Exclude: []map[string]string{
                map[string]string{
                    "iure": "odio",
                },
            },
            Include: []map[string]string{
                map[string]string{
                    "quidem": "voluptatibus",
                    "voluptas": "natus",
                    "eos": "atque",
                    "sit": "fugiat",
                },
                map[string]string{
                    "soluta": "dolorum",
                },
            },
        },
        GroupDuration: sdk.Int64(123),
        GroupSize: sdk.Int(123123),
        ID: sdk.String("a string value"),
        JSONWorkers: sdk.Int(123123),
        Location: &shared.Location{
            Teams: []map[string]string{
                map[string]string{
                    "dolorum": "deleniti",
                    "omnis": "necessitatibus",
                },
                map[string]string{
                    "asperiores": "nihil",
                    "ipsum": "voluptate",
                    "id": "saepe",
                },
            },
            Tenant: "a string value",
        },
        Metadata: map[string]string{
            "aspernatur": "perferendis",
            "amet": "optio",
        },
        Name: sdk.String("a string value"),
        Projection: map[string]string{
            "ad": "saepe",
            "suscipit": "deserunt",
            "provident": "minima",
            "repellendus": "totam",
        },
        SendWorkers: sdk.Int(123123),
        Typ: shared.DataExporterConfigTypEnumElastic.ToPointer(),
    }, operations.CreateBulkDataExporterConfigsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBulkDataExporterConfigs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CreateDataExporterConfig

Create a new data exporter config

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataExporterConfigs.CreateDataExporterConfig(ctx, shared.DataExporterConfig{
        BufferSize: sdk.Int(123123),
        Config: &shared.DataExporterConfigConfig{},
        Desc: sdk.String("a string value"),
        Enabled: sdk.String("a string value"),
        Filtering: &shared.Filtering{
            Exclude: []map[string]string{
                map[string]string{
                    "quaerat": "tempora",
                    "vel": "quod",
                    "officiis": "qui",
                    "dolorum": "a",
                },
            },
            Include: []map[string]string{
                map[string]string{
                    "iusto": "ipsum",
                    "quisquam": "tenetur",
                    "amet": "tempore",
                },
                map[string]string{
                    "numquam": "enim",
                    "dolorem": "sapiente",
                    "totam": "nihil",
                    "sit": "expedita",
                },
            },
        },
        GroupDuration: sdk.Int64(123),
        GroupSize: sdk.Int(123123),
        ID: sdk.String("a string value"),
        JSONWorkers: sdk.Int(123123),
        Location: &shared.Location{
            Teams: []map[string]string{
                map[string]string{
                    "vel": "libero",
                },
            },
            Tenant: "a string value",
        },
        Metadata: map[string]string{
            "deserunt": "quam",
            "ipsum": "incidunt",
        },
        Name: sdk.String("a string value"),
        Projection: map[string]string{
            "cupiditate": "maxime",
        },
        SendWorkers: sdk.Int(123123),
        Typ: shared.DataExporterConfigTypEnumCustom.ToPointer(),
    }, operations.CreateDataExporterConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataExporterConfig != nil {
        // handle response
    }
}
```

## DeleteDataExporterConfig

Delete a data exporter config

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
    res, err := s.DataExporterConfigs.DeleteDataExporterConfig(ctx, operations.DeleteDataExporterConfigRequest{
        DataExporterConfigID: "soluta",
    }, operations.DeleteDataExporterConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## DeletebulkDataExporterConfig

Delete a data exporter config

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataExporterConfigs.DeletebulkDataExporterConfig(ctx, []shared.Patch{
        shared.Patch{
            Op: shared.PatchOpEnumCopy,
            Path: "a string value",
            Value: sdk.String("totam"),
        },
    }, operations.DeletebulkDataExporterConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletebulkDataExporterConfig200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## FindAllDataExporters

Get all data exporter configs

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
    res, err := s.DataExporterConfigs.FindAllDataExporters(ctx, operations.FindAllDataExportersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataExporterConfigs != nil {
        // handle response
    }
}
```

## FindDataExporterConfigByID

Get a data exporter config

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
    res, err := s.DataExporterConfigs.FindDataExporterConfigByID(ctx, operations.FindDataExporterConfigByIDRequest{
        DataExporterConfigID: "incidunt",
    }, operations.FindDataExporterConfigByIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataExporterConfig != nil {
        // handle response
    }
}
```

## PatchBulkDataExporterConfig

Update a data exporter configs with a diff

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataExporterConfigs.PatchBulkDataExporterConfig(ctx, []shared.Patch{
        shared.Patch{
            Op: shared.PatchOpEnumAdd,
            Path: "a string value",
            Value: sdk.String("distinctio"),
        },
    }, operations.PatchBulkDataExporterConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchBulkDataExporterConfig200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## PatchDataExporterConfig

Update a data exporter config with a diff

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
    res, err := s.DataExporterConfigs.PatchDataExporterConfig(ctx, operations.PatchDataExporterConfigRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumReplace,
                Path: "a string value",
                Value: sdk.String("quam"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("temporibus"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumAdd,
                Path: "a string value",
                Value: sdk.String("neque"),
            },
        },
        DataExporterConfigID: "fugit",
    }, operations.PatchDataExporterConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataExporterConfig != nil {
        // handle response
    }
}
```

## UpdateBulkDataExporterConfig

Update a data exporter configs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DataExporterConfigs.UpdateBulkDataExporterConfig(ctx, shared.DataExporterConfig{
        BufferSize: sdk.Int(123123),
        Config: &shared.DataExporterConfigConfig{},
        Desc: sdk.String("a string value"),
        Enabled: sdk.String("a string value"),
        Filtering: &shared.Filtering{
            Exclude: []map[string]string{
                map[string]string{
                    "sunt": "ullam",
                    "nam": "hic",
                },
            },
            Include: []map[string]string{
                map[string]string{
                    "soluta": "nobis",
                    "et": "saepe",
                    "ipsum": "veritatis",
                    "nobis": "quos",
                },
            },
        },
        GroupDuration: sdk.Int64(123),
        GroupSize: sdk.Int(123123),
        ID: sdk.String("a string value"),
        JSONWorkers: sdk.Int(123123),
        Location: &shared.Location{
            Teams: []map[string]string{
                map[string]string{
                    "aperiam": "delectus",
                    "dolorem": "dolore",
                    "labore": "adipisci",
                },
                map[string]string{
                    "architecto": "quae",
                    "aut": "quas",
                    "itaque": "consequatur",
                },
                map[string]string{
                    "repellendus": "porro",
                    "doloribus": "ut",
                    "facilis": "cupiditate",
                },
            },
            Tenant: "a string value",
        },
        Metadata: map[string]string{
            "quae": "laudantium",
        },
        Name: sdk.String("a string value"),
        Projection: map[string]string{
            "occaecati": "voluptatibus",
            "quisquam": "vero",
        },
        SendWorkers: sdk.Int(123123),
        Typ: shared.DataExporterConfigTypEnumElastic.ToPointer(),
    }, operations.UpdateBulkDataExporterConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBulkDataExporterConfig200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDataExporterConfig

Update a data exporter config

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
    res, err := s.DataExporterConfigs.UpdateDataExporterConfig(ctx, operations.UpdateDataExporterConfigRequest{
        DataExporterConfig: &shared.DataExporterConfig{
            BufferSize: sdk.Int(123123),
            Config: &shared.DataExporterConfigConfig{},
            Desc: sdk.String("a string value"),
            Enabled: sdk.String("a string value"),
            Filtering: &shared.Filtering{
                Exclude: []map[string]string{
                    map[string]string{
                        "delectus": "voluptate",
                    },
                    map[string]string{
                        "vero": "tenetur",
                    },
                },
                Include: []map[string]string{
                    map[string]string{
                        "distinctio": "quod",
                        "odio": "similique",
                        "facilis": "vero",
                        "ducimus": "dolore",
                    },
                    map[string]string{
                        "illum": "sequi",
                        "natus": "impedit",
                        "aut": "voluptatibus",
                        "exercitationem": "nulla",
                    },
                },
            },
            GroupDuration: sdk.Int64(123),
            GroupSize: sdk.Int(123123),
            ID: sdk.String("a string value"),
            JSONWorkers: sdk.Int(123123),
            Location: &shared.Location{
                Teams: []map[string]string{
                    map[string]string{
                        "maiores": "doloribus",
                        "iusto": "eligendi",
                        "ducimus": "alias",
                        "officia": "tempora",
                    },
                },
                Tenant: "a string value",
            },
            Metadata: map[string]string{
                "ea": "aspernatur",
                "vel": "possimus",
            },
            Name: sdk.String("a string value"),
            Projection: map[string]string{
                "ratione": "ex",
                "laudantium": "dicta",
            },
            SendWorkers: sdk.Int(123123),
            Typ: shared.DataExporterConfigTypEnumPulsar.ToPointer(),
        },
        DataExporterConfigID: "maiores",
    }, operations.UpdateDataExporterConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataExporterConfig != nil {
        // handle response
    }
}
```
