# FolderSettings

### Available Operations

* [FolderSettingsDelete](#foldersettingsdelete) - Deletes a folder
* [FolderSettingsGet](#foldersettingsget) - Gets the settings of a folder or meter
* [FolderSettingsPostForm](#foldersettingspostform) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [FolderSettingsPostJSON](#foldersettingspostjson) - Add or edit a folder or a meter. To add a new folder use and empty ID
* [FolderSettingsPostRaw](#foldersettingspostraw) - Add or edit a folder or a meter. To add a new folder use and empty ID

## FolderSettingsDelete

Deletes a folder

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
    res, err := s.FolderSettings.FolderSettingsDelete(ctx, operations.FolderSettingsDeleteRequest{
        ID: "e61e6b7b-95bc-40ab-bc20-c4f3789fd871",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FolderSettingsGet

Gets the settings of a folder or meter

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
    res, err := s.FolderSettings.FolderSettingsGet(ctx, operations.FolderSettingsGetRequest{
        ID: "f99dd2ef-d121-4aa6-b1e6-74bdb04f1575",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FolderSettings != nil {
        // handle response
    }
}
```

## FolderSettingsPostForm

Add or edit a folder or a meter. To add a new folder use and empty ID

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
    res, err := s.FolderSettings.FolderSettingsPostForm(ctx, operations.FolderSettingsPostFormRequest{
        FolderSettings: shared.FolderSettings{
            Description: sdk.String("nisi"),
            Enable: sdk.Bool(false),
            FolderType: shared.FolderSettingsFolderTypeEnumFolder.ToPointer(),
            Name: sdk.String("Clarence Sporer"),
            ParentFolderID: sdk.String("itaque"),
            SerialNumber: sdk.Int64(680270),
            UseableForVirtualBillingMeters: sdk.Bool(false),
            ValueCorrection: sdk.Float64(996.15),
            ValueCorrectionParentFolder: sdk.Float64(6091.78),
            VisualizationName: sdk.String("tenetur"),
        },
        ID: "1d170513-39d0-4808-aa18-40394c26071f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FolderMenuItem != nil {
        // handle response
    }
}
```

## FolderSettingsPostJSON

Add or edit a folder or a meter. To add a new folder use and empty ID

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
    res, err := s.FolderSettings.FolderSettingsPostJSON(ctx, operations.FolderSettingsPostJSONRequest{
        FolderSettings: shared.FolderSettings{
            Description: sdk.String("natus"),
            Enable: sdk.Bool(false),
            FolderType: shared.FolderSettingsFolderTypeEnumMachine.ToPointer(),
            Name: sdk.String("Ms. Glen Zboncak"),
            ParentFolderID: sdk.String("consequuntur"),
            SerialNumber: sdk.Int64(831520),
            UseableForVirtualBillingMeters: sdk.Bool(false),
            ValueCorrection: sdk.Float64(6387.62),
            ValueCorrectionParentFolder: sdk.Float64(8070.23),
            VisualizationName: sdk.String("dignissimos"),
        },
        ID: "af515cc4-13aa-463a-ae8d-67864dbb675f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FolderMenuItem != nil {
        // handle response
    }
}
```

## FolderSettingsPostRaw

Add or edit a folder or a meter. To add a new folder use and empty ID

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
    res, err := s.FolderSettings.FolderSettingsPostRaw(ctx, operations.FolderSettingsPostRawRequest{
        RequestBody: []byte("assumenda"),
        ID: "5e60b375-ed4f-46fb-ae41-f33317fe35b6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FolderMenuItem != nil {
        // handle response
    }
}
```
