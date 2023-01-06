# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteQuoteRequest{
        Security: operations.DeleteQuoteSecurity{
            XTheySaidSoAPISecret: shared.SchemeXTheySaidSoAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.DeleteQuoteQueryParams{
            ID: "nihil",
        },
    }
    
    res, err := s.PrivateQuotes.DeleteQuote(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Private Quotes

* `DeleteQuote` - Delete a quote. The user needs to be the owner of the quote to be able to delete it.

* `GetQuote` - Gets a `Quote` with a given `id`.
* `GetQuoteList` - Get the list of quotes in your private collection.
* `PatchQuote` - Update a quote
* `PostQuote` - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
* `PostQuoteTagsAdd` - Add a tag to a given Quote.
* `PostQuoteTagsRemove` - Remove a tag from a given quote.
* `PutQuote` - Add a new quote to your private collection.

### Qshow

* `DeleteQshow` - Delete a qshow.

* `GetQshow` - Gets a details about a qshow.

* `GetQshowList` - Get the list of Qshows in They Said So platform.
* `GetQshowQuotes` - Get the quotes in a given Qshow.
* `PatchQshow` - Update an existing qshow.
* `PostQshowQuotesAdd` - Add a quote to a given Qshow.
* `PostQshowQuotesRemove` - Remove a quote to a given Qshow.
* `PutQshow` - Create and add a new qshow to your private collection.

### Quote

* `DeleteQuoteDislike` - Remove the disLike for the given Quote as a user of the API Key.
* `DeleteQuoteLike` - Remove the Like for the given Quote as a user of the API Key.
* `GetQuote` - Gets a `Quote` with a given `id`.
* `GetQuoteAuthorsPopular` - Gets a list of popular author names in the system. 

* `GetQuoteAuthorsSearch` - Gets a list of author names in the system. 

* `GetQuoteCategoriesPopular` - Gets a list of popular `Quote` Categories.

* `GetQuoteCategoriesSearch` - Gets a list of `Quote` Categories matching the query string.

* `GetQuoteRandom` - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
* `GetQuoteSearch` - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 
* `PostQuoteDislike` - Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.
* `PostQuoteLike` - Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.
* `PutQuoteDislike` - Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
* `PutQuoteLike` - Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.

### Quote Images

* `DeleteQuoteImage` - Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.

* `DeleteQuoteImageBackground` - Delete a background image file. The user needs to be the owner of the background image to be able to delete it.

* `DeleteQuoteImageFont` - Delete a font file. The user needs to be the owner of the font to be able to delete it.

* `GetQuoteImage` - Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`

* `GetQuoteImageBackgroundList` - Lists background images in your private collection. 

* `GetQuoteImageBackgroundSearch` - Searches for a background image with a given tag. 

* `GetQuoteImageFontList` - Lists background images in your private collection. 

* `GetQuoteImageFontSearch` - Searches for a font with a given tag. 

* `GetQuoteImageSearch` - Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 

* `PostQuoteImageBackground` - Add an image for use later as a quote background image.
* `PostQuoteImageBackgroundTagsAdd` - Add a tag to a given Image.
* `PostQuoteImageBackgroundTagsRemove` - Remove a tag from a given Image.
* `PostQuoteImageFont` - Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
* `PostQuoteImageFontTagsAdd` - Add a tag to a given font.
* `PostQuoteImageFontTagsRemove` - Remove a tag from a given Font.
* `PutQuoteImage` - Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


### Quote of the day

* `GetQod` - Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day

* `GetQodCategories` - Gets a list of `Quote of the Day` Categories.

* `GetQodLanguages` - Gets a list of supported languages for `Quote of the Day`. 


<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
