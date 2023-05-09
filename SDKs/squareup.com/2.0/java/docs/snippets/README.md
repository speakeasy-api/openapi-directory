# snippets

### Available Operations

* [deleteSnippet](#deletesnippet) - DeleteSnippet
* [retrieveSnippet](#retrievesnippet) - RetrieveSnippet
* [upsertSnippet](#upsertsnippet) - UpsertSnippet

## deleteSnippet

Removes your snippet from a Square Online site.

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSnippetRequest;
import org.openapis.openapi.models.operations.DeleteSnippetResponse;
import org.openapis.openapi.models.operations.DeleteSnippetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSnippetRequest req = new DeleteSnippetRequest("doloribus");            

            DeleteSnippetResponse res = sdk.snippets.deleteSnippet(req, new DeleteSnippetSecurity("quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteSnippetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSnippet

Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application.

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSnippetRequest;
import org.openapis.openapi.models.operations.RetrieveSnippetResponse;
import org.openapis.openapi.models.operations.RetrieveSnippetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveSnippetRequest req = new RetrieveSnippetRequest("omnis");            

            RetrieveSnippetResponse res = sdk.snippets.retrieveSnippet(req, new RetrieveSnippetSecurity("cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveSnippetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertSnippet

Adds a snippet to a Square Online site or updates the existing snippet on the site. 
The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site. 

You can call [ListSites](https://developer.squareup.com/reference/square_2021-08-18/sites-api/list-sites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertSnippetRequest;
import org.openapis.openapi.models.operations.UpsertSnippetResponse;
import org.openapis.openapi.models.operations.UpsertSnippetSecurity;
import org.openapis.openapi.models.shared.Snippet;
import org.openapis.openapi.models.shared.UpsertSnippetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpsertSnippetRequest req = new UpsertSnippetRequest(                new UpsertSnippetRequest(                new Snippet("dolor") {{
                                                createdAt = "illo";
                                                id = "ec9d106c-ff2c-426a-b840-a28ea0672d6b";
                                                siteId = "molestiae";
                                                updatedAt = "neque";
                                            }};);, "dolorum");            

            UpsertSnippetResponse res = sdk.snippets.upsertSnippet(req, new UpsertSnippetSecurity("sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.upsertSnippetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
