# MeterFolderInformation

### Available Operations

* [MeterFolderInformationGet](#meterfolderinformationget) - Beta: Gets the General Information for a Meter or a Folder
* [MeterFolderInformationPostForm](#meterfolderinformationpostform) - Sets the Name of a Meter or a Folder
* [MeterFolderInformationPostJSON](#meterfolderinformationpostjson) - Sets the Name of a Meter or a Folder
* [MeterFolderInformationPostRaw](#meterfolderinformationpostraw) - Sets the Name of a Meter or a Folder

## MeterFolderInformationGet

Beta: Gets the General Information for a Meter or a Folder

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
    res, err := s.MeterFolderInformation.MeterFolderInformationGet(ctx, operations.MeterFolderInformationGetRequest{
        ID: "26555ba3-c287-444e-953b-88f3a8d8f5c0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MeterFolderInformation != nil {
        // handle response
    }
}
```

## MeterFolderInformationPostForm

Sets the Name of a Meter or a Folder

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
    res, err := s.MeterFolderInformation.MeterFolderInformationPostForm(ctx, shared.MeterFolderInformationToPost{
        ID: sdk.String("b2f2fb7b-194a-4276-b269-16fe1f08f429"),
        Name: sdk.String("Jana Emard"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MeterFolderInformationPostJSON

Sets the Name of a Meter or a Folder

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
    res, err := s.MeterFolderInformation.MeterFolderInformationPostJSON(ctx, shared.MeterFolderInformationToPost{
        ID: sdk.String("8f447f60-3e8b-4445-a80c-a55efd20e457"),
        Name: sdk.String("Jack Langworth"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MeterFolderInformationPostRaw

Sets the Name of a Meter or a Folder

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
    res, err := s.MeterFolderInformation.MeterFolderInformationPostRaw(ctx, []byte("cum"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
