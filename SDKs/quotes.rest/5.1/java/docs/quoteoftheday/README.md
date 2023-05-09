# quoteOfTheDay

## Overview

Access quote of the day service. Use this to get the quote of the day in various categories. This is a free API that is available to public. You must credit They Said So if you are using the free version.

Find out more
<https://theysaidso.com/api/quote#qod>
### Available Operations

* [getQod](#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [getQodCategories](#getqodcategories) - Gets a list of `Quote of the Day` Categories.

* [getQodLanguages](#getqodlanguages) - Gets a list of supported languages for `Quote of the Day`. 


## getQod

Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day


### Example Usage

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
                category = "dolore";
                id = "iusto";
                language = "dicta";
            }};            

            GetQodResponse res = sdk.quoteOfTheDay.getQod(req, new GetQodSecurity("harum") {{
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

## getQodCategories

Gets a list of `Quote of the Day` Categories.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQodCategoriesRequest;
import org.openapis.openapi.models.operations.GetQodCategoriesResponse;
import org.openapis.openapi.models.operations.GetQodCategoriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQodCategoriesRequest req = new GetQodCategoriesRequest() {{
                detailed = false;
                language = "enim";
            }};            

            GetQodCategoriesResponse res = sdk.quoteOfTheDay.getQodCategories(req, new GetQodCategoriesSecurity("accusamus") {{
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

## getQodLanguages

Gets a list of supported languages for `Quote of the Day`. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQodLanguagesResponse;
import org.openapis.openapi.models.operations.GetQodLanguagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQodLanguagesResponse res = sdk.quoteOfTheDay.getQodLanguages(new GetQodLanguagesSecurity("commodi") {{
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
