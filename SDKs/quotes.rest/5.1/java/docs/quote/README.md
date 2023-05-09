# quote

## Overview

Access random quote service. Use this to get random quotes , quotes filtered by authors or tags etc. You need an API key to access this service.

### Available Operations

* [getQuote](#getquote) - Gets a `Quote` with a given `id`.
* [getQuoteAuthorsPopular](#getquoteauthorspopular) - Gets a list of popular author names in the system. 

* [getQuoteAuthorsSearch](#getquoteauthorssearch) - Gets a list of author names in the system. 

* [getQuoteBookmarkToggle](#getquotebookmarktoggle) - Toggle the user bookmark of the given Quote as a user of the API Key.
* [getQuoteCategoriesPopular](#getquotecategoriespopular) - Gets a list of popular `Quote` Categories.

* [getQuoteCategoriesSearch](#getquotecategoriessearch) - Gets a list of `Quote` Categories matching the query string.

* [getQuoteLikeToggle](#getquoteliketoggle) - Toggle the user like of the given Quote as a user of the API Key.
* [getQuoteRandom](#getquoterandom) - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
* [getQuoteSearch](#getquotesearch) - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

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
                id = "dolor";
            }};            

            GetQuoteResponse res = sdk.quote.getQuote(req, new GetQuoteSecurity("natus") {{
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

## getQuoteAuthorsPopular

Gets a list of popular author names in the system. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteAuthorsPopularRequest;
import org.openapis.openapi.models.operations.GetQuoteAuthorsPopularResponse;
import org.openapis.openapi.models.operations.GetQuoteAuthorsPopularSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteAuthorsPopularRequest req = new GetQuoteAuthorsPopularRequest() {{
                detailed = false;
                language = "laboriosam";
                limit = 943749;
                start = 902599;
            }};            

            GetQuoteAuthorsPopularResponse res = sdk.quote.getQuoteAuthorsPopular(req, new GetQuoteAuthorsPopularSecurity("fuga") {{
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

## getQuoteAuthorsSearch

Gets a list of author names in the system. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteAuthorsSearchRequest;
import org.openapis.openapi.models.operations.GetQuoteAuthorsSearchResponse;
import org.openapis.openapi.models.operations.GetQuoteAuthorsSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteAuthorsSearchRequest req = new GetQuoteAuthorsSearchRequest() {{
                detailed = false;
                language = "in";
                limit = 359508;
                query = "iste";
                start = 437032;
            }};            

            GetQuoteAuthorsSearchResponse res = sdk.quote.getQuoteAuthorsSearch(req, new GetQuoteAuthorsSearchSecurity("saepe") {{
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

## getQuoteBookmarkToggle

Toggle the user bookmark of the given Quote as a user of the API Key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteBookmarkToggleRequest;
import org.openapis.openapi.models.operations.GetQuoteBookmarkToggleResponse;
import org.openapis.openapi.models.operations.GetQuoteBookmarkToggleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteBookmarkToggleRequest req = new GetQuoteBookmarkToggleRequest("quidem");            

            GetQuoteBookmarkToggleResponse res = sdk.quote.getQuoteBookmarkToggle(req, new GetQuoteBookmarkToggleSecurity("architecto") {{
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

## getQuoteCategoriesPopular

Gets a list of popular `Quote` Categories.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteCategoriesPopularRequest;
import org.openapis.openapi.models.operations.GetQuoteCategoriesPopularResponse;
import org.openapis.openapi.models.operations.GetQuoteCategoriesPopularSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteCategoriesPopularRequest req = new GetQuoteCategoriesPopularRequest() {{
                limit = 60225;
                start = 969810;
            }};            

            GetQuoteCategoriesPopularResponse res = sdk.quote.getQuoteCategoriesPopular(req, new GetQuoteCategoriesPopularSecurity("est") {{
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

## getQuoteCategoriesSearch

Gets a list of `Quote` Categories matching the query string.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteCategoriesSearchRequest;
import org.openapis.openapi.models.operations.GetQuoteCategoriesSearchResponse;
import org.openapis.openapi.models.operations.GetQuoteCategoriesSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteCategoriesSearchRequest req = new GetQuoteCategoriesSearchRequest() {{
                limit = 653140;
                query = "laborum";
                start = 170909;
            }};            

            GetQuoteCategoriesSearchResponse res = sdk.quote.getQuoteCategoriesSearch(req, new GetQuoteCategoriesSearchSecurity("dolorem") {{
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

## getQuoteLikeToggle

Toggle the user like of the given Quote as a user of the API Key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteLikeToggleRequest;
import org.openapis.openapi.models.operations.GetQuoteLikeToggleResponse;
import org.openapis.openapi.models.operations.GetQuoteLikeToggleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteLikeToggleRequest req = new GetQuoteLikeToggleRequest("corporis");            

            GetQuoteLikeToggleResponse res = sdk.quote.getQuoteLikeToggle(req, new GetQuoteLikeToggleSecurity("explicabo") {{
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

## getQuoteRandom

Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteRandomRequest;
import org.openapis.openapi.models.operations.GetQuoteRandomResponse;
import org.openapis.openapi.models.operations.GetQuoteRandomSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteRandomRequest req = new GetQuoteRandomRequest() {{
                language = "nobis";
                limit = 315428L;
            }};            

            GetQuoteRandomResponse res = sdk.quote.getQuoteRandom(req, new GetQuoteRandomSecurity("omnis") {{
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

## getQuoteSearch

Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteSearchRequest;
import org.openapis.openapi.models.operations.GetQuoteSearchResponse;
import org.openapis.openapi.models.operations.GetQuoteSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteSearchRequest req = new GetQuoteSearchRequest() {{
                author = "nemo";
                category = "minima";
                language = "excepturi";
                limit = 38425L;
                maxlength = 438601;
                minlength = 634274;
                private_ = false;
                query = "doloribus";
                sfw = false;
            }};            

            GetQuoteSearchResponse res = sdk.quote.getQuoteSearch(req, new GetQuoteSearchSecurity("sapiente") {{
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
