# privateQuotes

## Overview

Create and manage your own Quotes. You need an API key to access this service.

### Available Operations

* [deleteQuote](#deletequote) - Delete a quote. The user needs to be the owner of the quote to be able to delete it.

* [getQuote](#getquote) - Gets a `Quote` with a given `id`.
* [getQuoteList](#getquotelist) - Get the list of quotes in your private collection.
* [patchQuote](#patchquote) - Update a quote
* [postQuote](#postquote) - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
* [postQuoteTagsAdd](#postquotetagsadd) - Add a tag to a given Quote.
* [postQuoteTagsRemove](#postquotetagsremove) - Remove a tag from a given quote.
* [putQuote](#putquote) - Add a new quote to your private collection.

## deleteQuote

Delete a quote. The user needs to be the owner of the quote to be able to delete it.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQuoteRequest;
import org.openapis.openapi.models.operations.DeleteQuoteResponse;
import org.openapis.openapi.models.operations.DeleteQuoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQuoteRequest req = new DeleteQuoteRequest("suscipit");            

            DeleteQuoteResponse res = sdk.privateQuotes.deleteQuote(req, new DeleteQuoteSecurity("molestiae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuote

Gets a `Quote` with a given `id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteRequest;
import org.openapis.openapi.models.operations.GetQuoteResponse;
import org.openapis.openapi.models.operations.GetQuoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteRequest req = new GetQuoteRequest() {{
                id = "minus";
            }};            

            GetQuoteResponse res = sdk.privateQuotes.getQuote(req, new GetQuoteSecurity("placeat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.quoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteList

Get the list of quotes in your private collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteListRequest;
import org.openapis.openapi.models.operations.GetQuoteListResponse;
import org.openapis.openapi.models.operations.GetQuoteListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteListRequest req = new GetQuoteListRequest() {{
                limit = 528895;
                start = 479977;
            }};            

            GetQuoteListResponse res = sdk.privateQuotes.getQuoteList(req, new GetQuoteListSecurity("excepturi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchQuote

Update a quote

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchQuoteRequest;
import org.openapis.openapi.models.operations.PatchQuoteResponse;
import org.openapis.openapi.models.operations.PatchQuoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchQuoteRequest req = new PatchQuoteRequest("nisi") {{
                author = "recusandae";
                language = "temporibus";
                quote = "ab";
                tags = "quis";
            }};            

            PatchQuoteResponse res = sdk.privateQuotes.patchQuote(req, new PatchQuoteSecurity("veritatis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuote

Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteRequest;
import org.openapis.openapi.models.operations.PostQuoteResponse;
import org.openapis.openapi.models.operations.PostQuoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteRequest req = new PostQuoteRequest("deserunt") {{
                author = "perferendis";
                language = "ipsam";
                tags = "repellendus";
            }};            

            PostQuoteResponse res = sdk.privateQuotes.postQuote(req, new PostQuoteSecurity("sapiente") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteTagsAdd

Add a tag to a given Quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteTagsAddRequest;
import org.openapis.openapi.models.operations.PostQuoteTagsAddResponse;
import org.openapis.openapi.models.operations.PostQuoteTagsAddSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteTagsAddRequest req = new PostQuoteTagsAddRequest("quo", "odit");            

            PostQuoteTagsAddResponse res = sdk.privateQuotes.postQuoteTagsAdd(req, new PostQuoteTagsAddSecurity("at") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteTagsRemove

Remove a tag from a given quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteTagsRemoveRequest;
import org.openapis.openapi.models.operations.PostQuoteTagsRemoveResponse;
import org.openapis.openapi.models.operations.PostQuoteTagsRemoveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteTagsRemoveRequest req = new PostQuoteTagsRemoveRequest("at", "maiores");            

            PostQuoteTagsRemoveResponse res = sdk.privateQuotes.postQuoteTagsRemove(req, new PostQuoteTagsRemoveSecurity("molestiae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putQuote

Add a new quote to your private collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutQuoteRequest;
import org.openapis.openapi.models.operations.PutQuoteResponse;
import org.openapis.openapi.models.operations.PutQuoteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutQuoteRequest req = new PutQuoteRequest("quod") {{
                author = "quod";
                language = "esse";
                tags = "totam";
            }};            

            PutQuoteResponse res = sdk.privateQuotes.putQuote(req, new PutQuoteSecurity("porro") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
