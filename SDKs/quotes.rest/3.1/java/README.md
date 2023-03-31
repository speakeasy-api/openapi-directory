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

import org.openapis.openapi.models.operations.DeleteQuoteSecurity;
import org.openapis.openapi.models.operations.DeleteQuoteQueryParams;
import org.openapis.openapi.models.operations.DeleteQuoteRequest;
import org.openapis.openapi.models.operations.DeleteQuoteResponse;
import org.openapis.openapi.models.shared.SchemeXTheySaidSoAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQuoteRequest req = new DeleteQuoteRequest() {{
                security = new DeleteQuoteSecurity() {{
                    xTheySaidSoApiSecret = new SchemeXTheySaidSoAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DeleteQuoteQueryParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteQuoteResponse res = sdk.privateQuotes.deleteQuote(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### privateQuotes

* `deleteQuote` - Delete a quote. The user needs to be the owner of the quote to be able to delete it.

* `getQuote` - Gets a `Quote` with a given `id`.
* `getQuoteList` - Get the list of quotes in your private collection.
* `patchQuote` - Update a quote
* `postQuote` - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
* `postQuoteTagsAdd` - Add a tag to a given Quote.
* `postQuoteTagsRemove` - Remove a tag from a given quote.
* `putQuote` - Add a new quote to your private collection.

### qshow

* `deleteQshow` - Delete a qshow.

* `getQshow` - Gets a details about a qshow.

* `getQshowList` - Get the list of Qshows in They Said So platform.
* `getQshowQuotes` - Get the quotes in a given Qshow.
* `patchQshow` - Update an existing qshow.
* `postQshowQuotesAdd` - Add a quote to a given Qshow.
* `postQshowQuotesRemove` - Remove a quote to a given Qshow.
* `putQshow` - Create and add a new qshow to your private collection.

### quote

* `deleteQuoteDislike` - Remove the disLike for the given Quote as a user of the API Key.
* `deleteQuoteLike` - Remove the Like for the given Quote as a user of the API Key.
* `getQuote` - Gets a `Quote` with a given `id`.
* `getQuoteAuthorsPopular` - Gets a list of popular author names in the system. 

* `getQuoteAuthorsSearch` - Gets a list of author names in the system. 

* `getQuoteCategoriesPopular` - Gets a list of popular `Quote` Categories.

* `getQuoteCategoriesSearch` - Gets a list of `Quote` Categories matching the query string.

* `getQuoteRandom` - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
* `getQuoteSearch` - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 
* `postQuoteDislike` - Dislike the given Quote as a user of the API Key. Same as `put` but a convenient alias for those clients that don't support `put` cleanly.
* `postQuoteLike` - Like the given Quote as a user of the API Key. Same as `PUT` but a convenient alias for those clients that don't support `PUT` cleanly.
* `putQuoteDislike` - Dislike the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.
* `putQuoteLike` - Like the given Quote as a user of the API Key. Some clients don't cleanly support `PUT`, in such scenarios use the `POST` version of this.

### quoteImages

* `deleteQuoteImage` - Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.

* `deleteQuoteImageBackground` - Delete a background image file. The user needs to be the owner of the background image to be able to delete it.

* `deleteQuoteImageFont` - Delete a font file. The user needs to be the owner of the font to be able to delete it.

* `getQuoteImage` - Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`

* `getQuoteImageBackgroundList` - Lists background images in your private collection. 

* `getQuoteImageBackgroundSearch` - Searches for a background image with a given tag. 

* `getQuoteImageFontList` - Lists background images in your private collection. 

* `getQuoteImageFontSearch` - Searches for a font with a given tag. 

* `getQuoteImageSearch` - Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 

* `postQuoteImageBackground` - Add an image for use later as a quote background image.
* `postQuoteImageBackgroundTagsAdd` - Add a tag to a given Image.
* `postQuoteImageBackgroundTagsRemove` - Remove a tag from a given Image.
* `postQuoteImageFont` - Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
* `postQuoteImageFontTagsAdd` - Add a tag to a given font.
* `postQuoteImageFontTagsRemove` - Remove a tag from a given Font.
* `putQuoteImage` - Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


### quoteOfTheDay

* `getQod` - Gets `Quote of the Day`. Optional `category` param determines the category of returned quote of the day

* `getQodCategories` - Gets a list of `Quote of the Day` Categories.

* `getQodLanguages` - Gets a list of supported languages for `Quote of the Day`. 

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
