# FolderMenu

### Available Operations

* [FolderMenuGet](#foldermenuget) - Gets the folder menu items (each item might contain child items)
* [FolderMenuPostForm](#foldermenupostform) - Creates and updates the folder menu items
* [FolderMenuPostJSON](#foldermenupostjson) - Creates and updates the folder menu items
* [FolderMenuPostRaw](#foldermenupostraw) - Creates and updates the folder menu items

## FolderMenuGet

Gets the folder menu items (each item might contain child items)

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
    res, err := s.FolderMenu.FolderMenuGet(ctx, operations.FolderMenuGetRequest{
        Filter: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FolderMenuConfiguration != nil {
        // handle response
    }
}
```

## FolderMenuPostForm

Creates and updates the folder menu items

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FolderMenu.FolderMenuPostForm(ctx, shared.FolderMenuConfiguration{
        BrowserTimeZoneName: sdk.String("neque"),
        BrowserUtcTime: sdk.String("fugit"),
        Items: []shared.FolderMenuItem{
            shared.FolderMenuItem{
                AutoExportSettings: &shared.AutoExportSettings{
                    ExportFormat: sdk.String("odio"),
                    ExportInterval: shared.AutoExportSettingsExportIntervalEnumNoExport.ToPointer(),
                    MeterPointID: sdk.String("ullam"),
                    UploadType: sdk.String("nam"),
                },
                Children: []shared.FolderMenuItem{
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                },
                Description: sdk.String("voluptatem"),
                FolderType: shared.FolderMenuItemFolderTypeEnumCar.ToPointer(),
                Icon: sdk.String("soluta"),
                ID: sdk.String("b1e31b8b-90f3-4443-a110-8e0adcf4b921"),
                MeterSerialNumber: sdk.String("laudantium"),
                Name: sdk.String("Toni Wolff"),
                UserID: sdk.String("omnis"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FolderMenuPostJSON

Creates and updates the folder menu items

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FolderMenu.FolderMenuPostJSON(ctx, shared.FolderMenuConfiguration{
        BrowserTimeZoneName: sdk.String("quis"),
        BrowserUtcTime: sdk.String("ipsum"),
        Items: []shared.FolderMenuItem{
            shared.FolderMenuItem{
                AutoExportSettings: &shared.AutoExportSettings{
                    ExportFormat: sdk.String("voluptate"),
                    ExportInterval: shared.AutoExportSettingsExportIntervalEnumHourly.ToPointer(),
                    MeterPointID: sdk.String("vero"),
                    UploadType: sdk.String("tenetur"),
                },
                Children: []shared.FolderMenuItem{
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                },
                Description: sdk.String("hic"),
                FolderType: shared.FolderMenuItemFolderTypeEnumCoffee.ToPointer(),
                Icon: sdk.String("quod"),
                ID: sdk.String("7abd74dd-39c0-4f5d-acff-7c70a45626d4"),
                MeterSerialNumber: sdk.String("ratione"),
                Name: sdk.String("Mabel Cartwright"),
                UserID: sdk.String("quasi"),
            },
            shared.FolderMenuItem{
                AutoExportSettings: &shared.AutoExportSettings{
                    ExportFormat: sdk.String("ex"),
                    ExportInterval: shared.AutoExportSettingsExportIntervalEnumHalfYearly.ToPointer(),
                    MeterPointID: sdk.String("excepturi"),
                    UploadType: sdk.String("voluptatibus"),
                },
                Children: []shared.FolderMenuItem{
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                },
                Description: sdk.String("sapiente"),
                FolderType: shared.FolderMenuItemFolderTypeEnumCar.ToPointer(),
                Icon: sdk.String("saepe"),
                ID: sdk.String("6c556146-c3e2-450f-b008-c42e141aac36"),
                MeterSerialNumber: sdk.String("autem"),
                Name: sdk.String("Clifton Simonis"),
                UserID: sdk.String("libero"),
            },
            shared.FolderMenuItem{
                AutoExportSettings: &shared.AutoExportSettings{
                    ExportFormat: sdk.String("quasi"),
                    ExportInterval: shared.AutoExportSettingsExportIntervalEnumDaily.ToPointer(),
                    MeterPointID: sdk.String("numquam"),
                    UploadType: sdk.String("explicabo"),
                },
                Children: []shared.FolderMenuItem{
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                },
                Description: sdk.String("ipsa"),
                FolderType: shared.FolderMenuItemFolderTypeEnumTemperatureFolder.ToPointer(),
                Icon: sdk.String("magnam"),
                ID: sdk.String("74778a7b-d466-4d28-810a-b3cdca425190"),
                MeterSerialNumber: sdk.String("tempora"),
                Name: sdk.String("Roberto Collier"),
                UserID: sdk.String("esse"),
            },
            shared.FolderMenuItem{
                AutoExportSettings: &shared.AutoExportSettings{
                    ExportFormat: sdk.String("recusandae"),
                    ExportInterval: shared.AutoExportSettingsExportIntervalEnumNoExport.ToPointer(),
                    MeterPointID: sdk.String("distinctio"),
                    UploadType: sdk.String("quod"),
                },
                Children: []shared.FolderMenuItem{
                    shared.FolderMenuItem{},
                    shared.FolderMenuItem{},
                },
                Description: sdk.String("inventore"),
                FolderType: shared.FolderMenuItemFolderTypeEnumTemperatureFolder.ToPointer(),
                Icon: sdk.String("totam"),
                ID: sdk.String("e4796f2a-70c6-4882-82aa-482562f222e9"),
                MeterSerialNumber: sdk.String("atque"),
                Name: sdk.String("Tamara Vandervort IV"),
                UserID: sdk.String("quod"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FolderMenuPostRaw

Creates and updates the folder menu items

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FolderMenu.FolderMenuPostRaw(ctx, []byte("nam"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
