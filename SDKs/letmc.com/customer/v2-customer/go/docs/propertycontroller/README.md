# PropertyController

### Available Operations

* [PropertyControllerGetPropertiesPhotos](#propertycontrollergetpropertiesphotos) - A collection showing all the photos linked to a specific block, property or room

## PropertyControllerGetPropertiesPhotos

A collection showing all the photos linked to a specific block, property or room

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
    res, err := s.PropertyController.PropertyControllerGetPropertiesPhotos(ctx, operations.PropertyControllerGetPropertiesPhotosRequest{
        Count: 697631,
        Offset: 99280,
        PropertyID: "ipsa",
        ShortName: "reiciendis",
        Token: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LandlordPhotoModelResults != nil {
        // handle response
    }
}
```
