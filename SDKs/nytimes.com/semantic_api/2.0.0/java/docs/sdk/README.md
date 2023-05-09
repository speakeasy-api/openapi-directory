# SDK

## Overview

The Semantic API complements the Articles API. With the Semantic API, you get access to the long list of people, places, organizations and other locations, entities and descriptors that make up the controlled vocabulary used as metadata by The New York Times (sometimes referred to as Times Tags and used for Times Topics pages).

The Semantic API uses concepts which are, by definition, terms in The New York Times controlled vocabulary. Like the way facets are used in the Articles API, concepts are a good way to uncover articles of interest in The New York Times archive, and at the same time, limit the scope and number of those articles. The Semantic API maps to external semantic data resources, in a fashion consistent with the idea of linked data. The Semantic API also provides combination and relationship information to other, similar concepts in The New York Times controlled vocabulary.


<http://developer.nytimes.com/>
### Available Operations

* [getNameConceptTypeSpecificConceptJson](#getnameconcepttypespecificconceptjson)
* [getSearchJson](#getsearchjson)

## getNameConceptTypeSpecificConceptJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonFieldsEnum;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonRequest;
import org.openapis.openapi.models.operations.GetNameConceptTypeSpecificConceptJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNameConceptTypeSpecificConceptJsonRequest req = new GetNameConceptTypeSpecificConceptJsonRequest(GetNameConceptTypeSpecificConceptJsonConceptTypeEnum.NYTD_ORG, "illum", "vel") {{
                fields = GetNameConceptTypeSpecificConceptJsonFieldsEnum.GEOCODES;
            }};            

            GetNameConceptTypeSpecificConceptJsonResponse res = sdk.sdk.getNameConceptTypeSpecificConceptJson(req);

            if (res.getNameConceptTypeSpecificConceptJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchJsonFieldsEnum;
import org.openapis.openapi.models.operations.GetSearchJsonRequest;
import org.openapis.openapi.models.operations.GetSearchJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchJsonRequest req = new GetSearchJsonRequest("suscipit") {{
                fields = GetSearchJsonFieldsEnum.TAXONOMY;
                offset = 297534L;
            }};            

            GetSearchJsonResponse res = sdk.sdk.getSearchJson(req);

            if (res.getSearchJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
