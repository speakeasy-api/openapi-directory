# wikis

### Available Operations

* [wikiContent](#wikicontent) - Retrieve the Content of a Wiki
* [wikiRead](#wikiread) - Retrieve a Wiki

## wikiContent

Retrieves the plaintext content of a wiki in markdown format.
#### Returns
Returns `text/markdown` of the wiki content itself.
If the request is unsuccessful, plaintext with the error message will be displayed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WikiContentRequest;
import org.openapis.openapi.models.operations.WikiContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WikiContentRequest req = new WikiContentRequest("dolorum");            

            WikiContentResponse res = sdk.wikis.wikiContent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## wikiRead

Retrieves the details about a specific wiki.
A wiki is a collection of markdown text pages that can be used to describe the project or dataset of contained in the attached node.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested wiki, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WikiReadRequest;
import org.openapis.openapi.models.operations.WikiReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WikiReadRequest req = new WikiReadRequest("deleniti");            

            WikiReadResponse res = sdk.wikis.wikiRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
