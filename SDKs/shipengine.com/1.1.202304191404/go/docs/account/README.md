# Account

## Overview

For additional information about the ShipEngine account. 


### Available Operations

* [CreateAccountImage](#createaccountimage) - Create an Account Image
* [DeleteAccountImageByID](#deleteaccountimagebyid) - Delete Account Image By Id
* [GetAccountSettingsImagesByID](#getaccountsettingsimagesbyid) - Get Account Image By ID
* [ListAccountImages](#listaccountimages) - List Account Images
* [ListAccountSettings](#listaccountsettings) - List Account Settings
* [UpdateAccountSettingsImagesByID](#updateaccountsettingsimagesbyid) - Update Account Image By ID

## CreateAccountImage

Create an Account Image

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.CreateAccountImage(ctx, shared.CreateAccountSettingsImageRequestBodyInput{
        ImageContentType: shared.CreateAccountSettingsImageRequestBodyImageContentTypeEnumImageJpeg,
        ImageData: "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg==",
        IsDefault: sdk.Bool(false),
        Name: "My logo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsImagesResponseBody != nil {
        // handle response
    }
}
```

## DeleteAccountImageByID

Delete Account Image By Id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.DeleteAccountImageByID(ctx, operations.DeleteAccountImageByIDRequest{
        LabelImageID: "img_DtBXupDBxREpHnwEXhTfgK",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## GetAccountSettingsImagesByID

Retrieve information for an account image.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.GetAccountSettingsImagesByID(ctx, operations.GetAccountSettingsImagesByIDRequest{
        LabelImageID: "img_DtBXupDBxREpHnwEXhTfgK",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsImagesResponseBody != nil {
        // handle response
    }
}
```

## ListAccountImages

List all account images for the ShipEngine account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.ListAccountImages(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountSettingsImagesResponseBody != nil {
        // handle response
    }
}
```

## ListAccountSettings

List all account settings for the ShipEngine account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.ListAccountSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsResponseBody != nil {
        // handle response
    }
}
```

## UpdateAccountSettingsImagesByID

Update information for an account image.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.UpdateAccountSettingsImagesByID(ctx, operations.UpdateAccountSettingsImagesByIDRequest{
        LabelImageID: "img_DtBXupDBxREpHnwEXhTfgK",
        UpdateAccountSettingsImageRequestBodyInput: shared.UpdateAccountSettingsImageRequestBodyInput{
            ImageContentType: shared.UpdateAccountSettingsImageRequestBodyImageContentTypeEnumImageJpeg.ToPointer(),
            ImageData: sdk.String("iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg=="),
            IsDefault: false,
            Name: sdk.String("My logo"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
