# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQodRequest;
import org.openapis.openapi.models.operations.GetQodResponse;
import org.openapis.openapi.models.operations.GetQodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQodRequest req = new GetQodRequest() {{
                category = "corrupti";
                id = "provident";
                language = "distinctio";
            }};            

            GetQodResponse res = sdk.privateQOD.getQod(req, new GetQodSecurity("quibusdam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.qodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [privateQOD](docs/privateqod/README.md)

* [getQod](docs/privateqod/README.md#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [patchQod](docs/privateqod/README.md#patchqod) - Update an existing private `Quote of the Day` definition.

* [putQod](docs/privateqod/README.md#putqod) - Create a private `Quote of the Day` service. 


### [privateQuotes](docs/privatequotes/README.md)

* [deleteQuote](docs/privatequotes/README.md#deletequote) - Delete a quote. The user needs to be the owner of the quote to be able to delete it.

* [getQuote](docs/privatequotes/README.md#getquote) - Gets a `Quote` with a given `id`.
* [getQuoteList](docs/privatequotes/README.md#getquotelist) - Get the list of quotes in your private collection.
* [patchQuote](docs/privatequotes/README.md#patchquote) - Update a quote
* [postQuote](docs/privatequotes/README.md#postquote) - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
* [postQuoteTagsAdd](docs/privatequotes/README.md#postquotetagsadd) - Add a tag to a given Quote.
* [postQuoteTagsRemove](docs/privatequotes/README.md#postquotetagsremove) - Remove a tag from a given quote.
* [putQuote](docs/privatequotes/README.md#putquote) - Add a new quote to your private collection.

### [qshow](docs/qshow/README.md)

* [deleteQshow](docs/qshow/README.md#deleteqshow) - Delete a qshow.

* [getQshow](docs/qshow/README.md#getqshow) - Gets a details about a qshow.

* [getQshowList](docs/qshow/README.md#getqshowlist) - Get the list of Qshows in They Said So platform.
* [getQshowQuotes](docs/qshow/README.md#getqshowquotes) - Get the quotes in a given Qshow.
* [patchQshow](docs/qshow/README.md#patchqshow) - Update an existing qshow.
* [postQshowQuotesAdd](docs/qshow/README.md#postqshowquotesadd) - Add a quote to a given Qshow.
* [postQshowQuotesRemove](docs/qshow/README.md#postqshowquotesremove) - Remove a quote to a given Qshow.
* [putQshow](docs/qshow/README.md#putqshow) - Create and add a new qshow to your private collection.

### [quote](docs/quote/README.md)

* [getQuote](docs/quote/README.md#getquote) - Gets a `Quote` with a given `id`.
* [getQuoteAuthorsPopular](docs/quote/README.md#getquoteauthorspopular) - Gets a list of popular author names in the system. 

* [getQuoteAuthorsSearch](docs/quote/README.md#getquoteauthorssearch) - Gets a list of author names in the system. 

* [getQuoteBookmarkToggle](docs/quote/README.md#getquotebookmarktoggle) - Toggle the user bookmark of the given Quote as a user of the API Key.
* [getQuoteCategoriesPopular](docs/quote/README.md#getquotecategoriespopular) - Gets a list of popular `Quote` Categories.

* [getQuoteCategoriesSearch](docs/quote/README.md#getquotecategoriessearch) - Gets a list of `Quote` Categories matching the query string.

* [getQuoteLikeToggle](docs/quote/README.md#getquoteliketoggle) - Toggle the user like of the given Quote as a user of the API Key.
* [getQuoteRandom](docs/quote/README.md#getquoterandom) - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
* [getQuoteSearch](docs/quote/README.md#getquotesearch) - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

### [quoteImages](docs/quoteimages/README.md)

* [deleteQuoteImage](docs/quoteimages/README.md#deletequoteimage) - Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.

* [deleteQuoteImageBackground](docs/quoteimages/README.md#deletequoteimagebackground) - Delete a background image file. The user needs to be the owner of the background image to be able to delete it.

* [deleteQuoteImageFont](docs/quoteimages/README.md#deletequoteimagefont) - Delete a font file. The user needs to be the owner of the font to be able to delete it.

* [getQuoteImage](docs/quoteimages/README.md#getquoteimage) - Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`

* [getQuoteImageBackgroundList](docs/quoteimages/README.md#getquoteimagebackgroundlist) - Lists background images in your private collection. 

* [getQuoteImageBackgroundSearch](docs/quoteimages/README.md#getquoteimagebackgroundsearch) - Searches for a background image with a given tag. 

* [getQuoteImageFontList](docs/quoteimages/README.md#getquoteimagefontlist) - Lists background images in your private collection. 

* [getQuoteImageFontSearch](docs/quoteimages/README.md#getquoteimagefontsearch) - Searches for a font with a given tag. 

* [getQuoteImageSearch](docs/quoteimages/README.md#getquoteimagesearch) - Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 

* [postQuoteImageBackground](docs/quoteimages/README.md#postquoteimagebackground) - Add an image for use later as a quote background image.
* [postQuoteImageBackgroundTagsAdd](docs/quoteimages/README.md#postquoteimagebackgroundtagsadd) - Add a tag to a given Image.
* [postQuoteImageBackgroundTagsRemove](docs/quoteimages/README.md#postquoteimagebackgroundtagsremove) - Remove a tag from a given Image.
* [postQuoteImageFont](docs/quoteimages/README.md#postquoteimagefont) - Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
* [postQuoteImageFontTagsAdd](docs/quoteimages/README.md#postquoteimagefonttagsadd) - Add a tag to a given font.
* [postQuoteImageFontTagsRemove](docs/quoteimages/README.md#postquoteimagefonttagsremove) - Remove a tag from a given Font.
* [putQuoteImage](docs/quoteimages/README.md#putquoteimage) - Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


### [quoteOfTheDay](docs/quoteoftheday/README.md)

* [getQod](docs/quoteoftheday/README.md#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [getQodCategories](docs/quoteoftheday/README.md#getqodcategories) - Gets a list of `Quote of the Day` Categories.

* [getQodLanguages](docs/quoteoftheday/README.md#getqodlanguages) - Gets a list of supported languages for `Quote of the Day`. 

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
