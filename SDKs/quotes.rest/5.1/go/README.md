# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/quotes.rest/5.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.PrivateQOD.GetQod(ctx, operations.GetQodRequest{
        Category: sdk.String("corrupti"),
        ID: sdk.String("provident"),
        Language: sdk.String("distinctio"),
    }, operations.GetQodSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QODResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [PrivateQOD](docs/privateqod/README.md)

* [GetQod](docs/privateqod/README.md#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [PatchQod](docs/privateqod/README.md#patchqod) - Update an existing private `Quote of the Day` definition.

* [PutQod](docs/privateqod/README.md#putqod) - Create a private `Quote of the Day` service. 


### [PrivateQuotes](docs/privatequotes/README.md)

* [DeleteQuote](docs/privatequotes/README.md#deletequote) - Delete a quote. The user needs to be the owner of the quote to be able to delete it.

* [GetQuote](docs/privatequotes/README.md#getquote) - Gets a `Quote` with a given `id`.
* [GetQuoteList](docs/privatequotes/README.md#getquotelist) - Get the list of quotes in your private collection.
* [PatchQuote](docs/privatequotes/README.md#patchquote) - Update a quote
* [PostQuote](docs/privatequotes/README.md#postquote) - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
* [PostQuoteTagsAdd](docs/privatequotes/README.md#postquotetagsadd) - Add a tag to a given Quote.
* [PostQuoteTagsRemove](docs/privatequotes/README.md#postquotetagsremove) - Remove a tag from a given quote.
* [PutQuote](docs/privatequotes/README.md#putquote) - Add a new quote to your private collection.

### [Qshow](docs/qshow/README.md)

* [DeleteQshow](docs/qshow/README.md#deleteqshow) - Delete a qshow.

* [GetQshow](docs/qshow/README.md#getqshow) - Gets a details about a qshow.

* [GetQshowList](docs/qshow/README.md#getqshowlist) - Get the list of Qshows in They Said So platform.
* [GetQshowQuotes](docs/qshow/README.md#getqshowquotes) - Get the quotes in a given Qshow.
* [PatchQshow](docs/qshow/README.md#patchqshow) - Update an existing qshow.
* [PostQshowQuotesAdd](docs/qshow/README.md#postqshowquotesadd) - Add a quote to a given Qshow.
* [PostQshowQuotesRemove](docs/qshow/README.md#postqshowquotesremove) - Remove a quote to a given Qshow.
* [PutQshow](docs/qshow/README.md#putqshow) - Create and add a new qshow to your private collection.

### [Quote](docs/quote/README.md)

* [GetQuote](docs/quote/README.md#getquote) - Gets a `Quote` with a given `id`.
* [GetQuoteAuthorsPopular](docs/quote/README.md#getquoteauthorspopular) - Gets a list of popular author names in the system. 

* [GetQuoteAuthorsSearch](docs/quote/README.md#getquoteauthorssearch) - Gets a list of author names in the system. 

* [GetQuoteBookmarkToggle](docs/quote/README.md#getquotebookmarktoggle) - Toggle the user bookmark of the given Quote as a user of the API Key.
* [GetQuoteCategoriesPopular](docs/quote/README.md#getquotecategoriespopular) - Gets a list of popular `Quote` Categories.

* [GetQuoteCategoriesSearch](docs/quote/README.md#getquotecategoriessearch) - Gets a list of `Quote` Categories matching the query string.

* [GetQuoteLikeToggle](docs/quote/README.md#getquoteliketoggle) - Toggle the user like of the given Quote as a user of the API Key.
* [GetQuoteRandom](docs/quote/README.md#getquoterandom) - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
* [GetQuoteSearch](docs/quote/README.md#getquotesearch) - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

### [QuoteImages](docs/quoteimages/README.md)

* [DeleteQuoteImage](docs/quoteimages/README.md#deletequoteimage) - Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.

* [DeleteQuoteImageBackground](docs/quoteimages/README.md#deletequoteimagebackground) - Delete a background image file. The user needs to be the owner of the background image to be able to delete it.

* [DeleteQuoteImageFont](docs/quoteimages/README.md#deletequoteimagefont) - Delete a font file. The user needs to be the owner of the font to be able to delete it.

* [GetQuoteImage](docs/quoteimages/README.md#getquoteimage) - Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`

* [GetQuoteImageBackgroundList](docs/quoteimages/README.md#getquoteimagebackgroundlist) - Lists background images in your private collection. 

* [GetQuoteImageBackgroundSearch](docs/quoteimages/README.md#getquoteimagebackgroundsearch) - Searches for a background image with a given tag. 

* [GetQuoteImageFontList](docs/quoteimages/README.md#getquoteimagefontlist) - Lists background images in your private collection. 

* [GetQuoteImageFontSearch](docs/quoteimages/README.md#getquoteimagefontsearch) - Searches for a font with a given tag. 

* [GetQuoteImageSearch](docs/quoteimages/README.md#getquoteimagesearch) - Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 

* [PostQuoteImageBackground](docs/quoteimages/README.md#postquoteimagebackground) - Add an image for use later as a quote background image.
* [PostQuoteImageBackgroundTagsAdd](docs/quoteimages/README.md#postquoteimagebackgroundtagsadd) - Add a tag to a given Image.
* [PostQuoteImageBackgroundTagsRemove](docs/quoteimages/README.md#postquoteimagebackgroundtagsremove) - Remove a tag from a given Image.
* [PostQuoteImageFont](docs/quoteimages/README.md#postquoteimagefont) - Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
* [PostQuoteImageFontTagsAdd](docs/quoteimages/README.md#postquoteimagefonttagsadd) - Add a tag to a given font.
* [PostQuoteImageFontTagsRemove](docs/quoteimages/README.md#postquoteimagefonttagsremove) - Remove a tag from a given Font.
* [PutQuoteImage](docs/quoteimages/README.md#putquoteimage) - Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


### [QuoteOfTheDay](docs/quoteoftheday/README.md)

* [GetQod](docs/quoteoftheday/README.md#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [GetQodCategories](docs/quoteoftheday/README.md#getqodcategories) - Gets a list of `Quote of the Day` Categories.

* [GetQodLanguages](docs/quoteoftheday/README.md#getqodlanguages) - Gets a list of supported languages for `Quote of the Day`. 

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
