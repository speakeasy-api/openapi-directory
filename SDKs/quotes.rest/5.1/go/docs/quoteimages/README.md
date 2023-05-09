# QuoteImages

## Overview

Create beatiful quote images or get one of the premade images. You need an API key to access this service.

Find out more about image
<https://theysaidso.com/api/quote#image>
### Available Operations

* [DeleteQuoteImage](#deletequoteimage) - Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.

* [DeleteQuoteImageBackground](#deletequoteimagebackground) - Delete a background image file. The user needs to be the owner of the background image to be able to delete it.

* [DeleteQuoteImageFont](#deletequoteimagefont) - Delete a font file. The user needs to be the owner of the font to be able to delete it.

* [GetQuoteImage](#getquoteimage) - Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`

* [GetQuoteImageBackgroundList](#getquoteimagebackgroundlist) - Lists background images in your private collection. 

* [GetQuoteImageBackgroundSearch](#getquoteimagebackgroundsearch) - Searches for a background image with a given tag. 

* [GetQuoteImageFontList](#getquoteimagefontlist) - Lists background images in your private collection. 

* [GetQuoteImageFontSearch](#getquoteimagefontsearch) - Searches for a font with a given tag. 

* [GetQuoteImageSearch](#getquoteimagesearch) - Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 

* [PostQuoteImageBackground](#postquoteimagebackground) - Add an image for use later as a quote background image.
* [PostQuoteImageBackgroundTagsAdd](#postquoteimagebackgroundtagsadd) - Add a tag to a given Image.
* [PostQuoteImageBackgroundTagsRemove](#postquoteimagebackgroundtagsremove) - Remove a tag from a given Image.
* [PostQuoteImageFont](#postquoteimagefont) - Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
* [PostQuoteImageFontTagsAdd](#postquoteimagefonttagsadd) - Add a tag to a given font.
* [PostQuoteImageFontTagsRemove](#postquoteimagefonttagsremove) - Remove a tag from a given Font.
* [PutQuoteImage](#putquoteimage) - Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


## DeleteQuoteImage

Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.


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
    res, err := s.QuoteImages.DeleteQuoteImage(ctx, operations.DeleteQuoteImageRequest{
        ID: "in",
    }, operations.DeleteQuoteImageSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteQuoteImageBackground

Delete a background image file. The user needs to be the owner of the background image to be able to delete it.


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
    res, err := s.QuoteImages.DeleteQuoteImageBackground(ctx, operations.DeleteQuoteImageBackgroundRequest{
        ID: "corporis",
    }, operations.DeleteQuoteImageBackgroundSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteQuoteImageFont

Delete a font file. The user needs to be the owner of the font to be able to delete it.


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
    res, err := s.QuoteImages.DeleteQuoteImageFont(ctx, operations.DeleteQuoteImageFontRequest{
        ID: "iste",
    }, operations.DeleteQuoteImageFontSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuoteImage

Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`


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
    res, err := s.QuoteImages.GetQuoteImage(ctx, operations.GetQuoteImageRequest{
        Binary: sdk.Bool(false),
        ID: "iure",
    }, operations.GetQuoteImageSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuoteImageBackgroundList

Lists background images in your private collection. 


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
    res, err := s.QuoteImages.GetQuoteImageBackgroundList(ctx, operations.GetQuoteImageBackgroundListRequest{
        Start: sdk.Int64(902349),
    }, operations.GetQuoteImageBackgroundListSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuoteImageBackgroundSearch

Searches for a background image with a given tag. 


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
    res, err := s.QuoteImages.GetQuoteImageBackgroundSearch(ctx, operations.GetQuoteImageBackgroundSearchRequest{
        Query: sdk.String("quidem"),
    }, operations.GetQuoteImageBackgroundSearchSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuoteImageFontList

Lists background images in your private collection. 


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
    res, err := s.QuoteImages.GetQuoteImageFontList(ctx, operations.GetQuoteImageFontListRequest{
        Start: sdk.Int64(99280),
    }, operations.GetQuoteImageFontListSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuoteImageFontSearch

Searches for a font with a given tag. 


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
    res, err := s.QuoteImages.GetQuoteImageFontSearch(ctx, operations.GetQuoteImageFontSearchRequest{
        Query: sdk.String("ipsa"),
    }, operations.GetQuoteImageFontSearchSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuoteImageSearch

Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 


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
    res, err := s.QuoteImages.GetQuoteImageSearch(ctx, operations.GetQuoteImageSearchRequest{
        Author: sdk.String("reiciendis"),
        Category: sdk.String("est"),
        Private: sdk.Bool(false),
    }, operations.GetQuoteImageSearchSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQuoteImageBackground

Add an image for use later as a quote background image.

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
    res, err := s.QuoteImages.PostQuoteImageBackground(ctx, operations.PostQuoteImageBackgroundRequestBody{
        Image: operations.PostQuoteImageBackgroundRequestBodyImage{
            Content: []byte("mollitia"),
            Image: "laborum",
        },
        Tags: sdk.String("dolores"),
    }, operations.PostQuoteImageBackgroundSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQuoteImageBackgroundTagsAdd

Add a tag to a given Image.

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
    res, err := s.QuoteImages.PostQuoteImageBackgroundTagsAdd(ctx, operations.PostQuoteImageBackgroundTagsAddRequest{
        ID: "dolorem",
        Tags: "corporis",
    }, operations.PostQuoteImageBackgroundTagsAddSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQuoteImageBackgroundTagsRemove

Remove a tag from a given Image.

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
    res, err := s.QuoteImages.PostQuoteImageBackgroundTagsRemove(ctx, operations.PostQuoteImageBackgroundTagsRemoveRequest{
        ID: "explicabo",
        Tags: "nobis",
    }, operations.PostQuoteImageBackgroundTagsRemoveSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQuoteImageFont

Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.

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
    res, err := s.QuoteImages.PostQuoteImageFont(ctx, operations.PostQuoteImageFontRequestBody{
        Font: operations.PostQuoteImageFontRequestBodyFont{
            Content: []byte("enim"),
            Font: "omnis",
        },
        Tags: sdk.String("nemo"),
    }, operations.PostQuoteImageFontSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQuoteImageFontTagsAdd

Add a tag to a given font.

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
    res, err := s.QuoteImages.PostQuoteImageFontTagsAdd(ctx, operations.PostQuoteImageFontTagsAddRequest{
        ID: "minima",
        Tags: "excepturi",
    }, operations.PostQuoteImageFontTagsAddSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQuoteImageFontTagsRemove

Remove a tag from a given Font.

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
    res, err := s.QuoteImages.PostQuoteImageFontTagsRemove(ctx, operations.PostQuoteImageFontTagsRemoveRequest{
        ID: "accusantium",
        Tags: "iure",
    }, operations.PostQuoteImageFontTagsRemoveSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutQuoteImage

Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


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
    res, err := s.QuoteImages.PutQuoteImage(ctx, operations.PutQuoteImageRequest{
        BgColor: sdk.String("culpa"),
        BgimageID: sdk.String("doloribus"),
        Branding: sdk.Bool(false),
        FontID: sdk.String("sapiente"),
        Halign: sdk.String("architecto"),
        Height: sdk.Int64(652790),
        IncludeTransparentLayer: sdk.Bool(false),
        QuoteID: "dolorem",
        TextColor: sdk.String("culpa"),
        TextSize: sdk.String("consequuntur"),
        Valign: sdk.String("repellat"),
        Width: sdk.Int64(653108),
    }, operations.PutQuoteImageSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
