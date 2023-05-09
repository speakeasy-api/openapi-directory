# SDK

## Overview

PlaceKit OpenAPI Specifications ([repository](https://github.com/placekit/api-reference))

### Available Operations

* [reverse](#reverse) - Reverse geocoding
* [search](#search) - Search for addresses

## reverse

Performs a reverse geocoding search.

It will return the closest results around `coordinates`.\
If `coordinates` are not set, it will use the user's IP to approximate its coordinates but results will be less accurate (city level accuracy instead of street level accuracy).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReverseRequestBody;
import org.openapis.openapi.models.operations.ReverseRequestBodyLanguageEnum;
import org.openapis.openapi.models.operations.ReverseResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReverseRequestBody req = new ReverseRequestBody() {{
                coordinates = "48.873662, 2.295063";
                countries = new String[]{{
                    add("iure"),
                    add("magnam"),
                }};
                countryByIP = false;
                language = ReverseRequestBodyLanguageEnum.FR;
                maxResults = 891773L;
                types = new org.openapis.openapi.models.shared.TypesEnum[]{{
                    add(TypesEnum.MINUS_TRAIN),
                }};
            }};            

            ReverseResponse res = sdk.sdk.reverse(req);

            if (res.results != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## search

Performs a forward geocoding search.

It will return results around `coordinates` (if provided) and the best matching textual relevance.

**It is highly recommended** to set the `countries` parameter with the country you need results from for the best accuracy and revelance possible.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchRequestBody;
import org.openapis.openapi.models.operations.SearchRequestBodyLanguageEnum;
import org.openapis.openapi.models.operations.SearchResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchRequestBody req = new SearchRequestBody() {{
                coordinates = "48.873662, 2.295063";
                countries = new String[]{{
                    add("molestiae"),
                    add("minus"),
                }};
                countryByIP = false;
                language = SearchRequestBodyLanguageEnum.FR;
                maxResults = 812169L;
                query = "42 avenue Champs Elysees Paris";
                types = new org.openapis.openapi.models.shared.TypesEnum[]{{
                    add(TypesEnum.MINUS_COUNTRY),
                    add(TypesEnum.MINUS_STREET),
                    add(TypesEnum.COUNTRY),
                }};
            }};            

            SearchResponse res = sdk.sdk.search(req);

            if (res.results != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
