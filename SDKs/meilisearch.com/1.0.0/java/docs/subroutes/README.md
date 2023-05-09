# subRoutes

### Available Operations

* [getDisplayedAttributes](#getdisplayedattributes) - Get displayed attributes
* [getDistinctAttribute](#getdistinctattribute) - Get distinct attribute
* [getFaceting](#getfaceting) - Get faceting
* [getFilterableAttributes](#getfilterableattributes) - Get filterable attributes
* [getPagination](#getpagination) - Get pagination
* [getRankingRules](#getrankingrules) - Get ranking rules
* [getSearchableAttributes](#getsearchableattributes) - Get searchable attributes
* [getSortableAttributes](#getsortableattributes) - Get sortable attributes
* [getStopWords](#getstopwords) - Get stop-words
* [getSynonyms](#getsynonyms) - Get synonyms
* [getTypoTolerance](#gettypotolerance) - Get typo-tolerance
* [resetDisplayedAttributes](#resetdisplayedattributes) - Reset displayed attributes
* [resetDistinctAttribute](#resetdistinctattribute) - Reset distinct attribute
* [resetFaceting](#resetfaceting) - Reset faceting
* [resetFilterableAttributes](#resetfilterableattributes) - Reset filterable attributes
* [resetPagination](#resetpagination) - Reset pagination
* [resetRankingRules](#resetrankingrules) - Reset ranking rules
* [resetSearchableAttributes](#resetsearchableattributes) - Reset searchable attributes
* [resetSortableAttributes](#resetsortableattributes) - Reset sortable attributes
* [resetStopWords](#resetstopwords) - Reset stop-words
* [resetSynonyms](#resetsynonyms) - Reset synonyms
* [resetTypoTolerance](#resettypotolerance) - Reset typo-tolerance
* [updateDisplayedAttributes](#updatedisplayedattributes) - Update displayed attributes
* [updateDistinctAttribute](#updatedistinctattribute) - Update distinct attribute
* [updateFaceting](#updatefaceting) - Update faceting
* [updateFilterableAttributes](#updatefilterableattributes) - Update filterable attributes
* [updatePagination](#updatepagination) - Update pagination
* [updateRankingRules](#updaterankingrules) - Update ranking rules
* [updateSearchableAttributes](#updatesearchableattributes) - Update searchable attributes
* [updateSortableAttributes](#updatesortableattributes) - Update sortable attributes
* [updateStopWords](#updatestopwords) - Update stop-words
* [updateSynonyms](#updatesynonyms) - Update synonyms
* [updateTypoTolerance](#updatetypotolerance) - Update typo-tolerance

## getDisplayedAttributes

Get displayed attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDisplayedAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDisplayedAttributesResponse res = sdk.subRoutes.getDisplayedAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistinctAttribute

Get distinct attribute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistinctAttributeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistinctAttributeResponse res = sdk.subRoutes.getDistinctAttribute();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFaceting

Get faceting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFacetingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFacetingResponse res = sdk.subRoutes.getFaceting();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilterableAttributes

Get filterable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilterableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilterableAttributesResponse res = sdk.subRoutes.getFilterableAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPagination

Get pagination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaginationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaginationResponse res = sdk.subRoutes.getPagination();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRankingRules

Get ranking rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRankingRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRankingRulesResponse res = sdk.subRoutes.getRankingRules();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchableAttributes

Get searchable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchableAttributesResponse res = sdk.subRoutes.getSearchableAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSortableAttributes

Get sortable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSortableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSortableAttributesResponse res = sdk.subRoutes.getSortableAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopWords

Get stop-words

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStopWordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("the"),
                add("the"),
                add("the"),
                add("the"),
            }}            

            GetStopWordsResponse res = sdk.subRoutes.getStopWords(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSynonyms

Get synonyms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSynonymsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSynonymsResponse res = sdk.subRoutes.getSynonyms();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTypoTolerance

Get typo-tolerance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTypoToleranceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTypoToleranceResponse res = sdk.subRoutes.getTypoTolerance();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetDisplayedAttributes

Reset displayed attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetDisplayedAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetDisplayedAttributesResponse res = sdk.subRoutes.resetDisplayedAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetDistinctAttribute

Reset distinct attribute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetDistinctAttributeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetDistinctAttributeResponse res = sdk.subRoutes.resetDistinctAttribute();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetFaceting

Reset faceting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetFacetingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetFacetingResponse res = sdk.subRoutes.resetFaceting();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetFilterableAttributes

Reset filterable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetFilterableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetFilterableAttributesResponse res = sdk.subRoutes.resetFilterableAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetPagination

Reset pagination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetPaginationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetPaginationResponse res = sdk.subRoutes.resetPagination();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetRankingRules

Reset ranking rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetRankingRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetRankingRulesResponse res = sdk.subRoutes.resetRankingRules();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetSearchableAttributes

Reset searchable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetSearchableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetSearchableAttributesResponse res = sdk.subRoutes.resetSearchableAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetSortableAttributes

Reset sortable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetSortableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetSortableAttributesResponse res = sdk.subRoutes.resetSortableAttributes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetStopWords

Reset stop-words

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetStopWordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetStopWordsResponse res = sdk.subRoutes.resetStopWords();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetSynonyms

Reset synonyms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetSynonymsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "odit".getBytes()            

            ResetSynonymsResponse res = sdk.subRoutes.resetSynonyms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetTypoTolerance

Reset typo-tolerance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetTypoToleranceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetTypoToleranceResponse res = sdk.subRoutes.resetTypoTolerance();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDisplayedAttributes

Update displayed attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDisplayedAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("title"),
                add("title"),
                add("title"),
                add("title"),
            }}            

            UpdateDisplayedAttributesResponse res = sdk.subRoutes.updateDisplayedAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDistinctAttribute

Update distinct attribute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDistinctAttributeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "at".getBytes()            

            UpdateDistinctAttributeResponse res = sdk.subRoutes.updateDistinctAttribute(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFaceting

Update faceting

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFacetingRequestBody;
import org.openapis.openapi.models.operations.UpdateFacetingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFacetingRequestBody req = new UpdateFacetingRequestBody() {{
                maxValuesPerFacet = 3000;
            }};            

            UpdateFacetingResponse res = sdk.subRoutes.updateFaceting(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFilterableAttributes

Update filterable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFilterableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("genre"),
                add("genre"),
                add("genre"),
                add("genre"),
            }}            

            UpdateFilterableAttributesResponse res = sdk.subRoutes.updateFilterableAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePagination

Update pagination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaginationRequestBody;
import org.openapis.openapi.models.operations.UpdatePaginationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaginationRequestBody req = new UpdatePaginationRequestBody() {{
                maxTotalHits = 2000;
            }};            

            UpdatePaginationResponse res = sdk.subRoutes.updatePagination(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRankingRules

Update ranking rules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRankingRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("typo"),
                add("typo"),
            }}            

            UpdateRankingRulesResponse res = sdk.subRoutes.updateRankingRules(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSearchableAttributes

Update searchable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSearchableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("title"),
                add("title"),
                add("title"),
                add("title"),
            }}            

            UpdateSearchableAttributesResponse res = sdk.subRoutes.updateSearchableAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSortableAttributes

Update sortable attributes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSortableAttributesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("price"),
                add("price"),
                add("price"),
                add("price"),
            }}            

            UpdateSortableAttributesResponse res = sdk.subRoutes.updateSortableAttributes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStopWords

Update stop-words

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStopWordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("the"),
                add("the"),
            }}            

            UpdateStopWordsResponse res = sdk.subRoutes.updateStopWords(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSynonyms

Update synonyms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSynonymsRequestBody;
import org.openapis.openapi.models.operations.UpdateSynonymsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSynonymsRequestBody req = new UpdateSynonymsRequestBody() {{
                harryPotter = new String[]{{
                    add("hp"),
                    add("hp"),
                    add("hp"),
                }};
                hp = new String[]{{
                    add("harry potter"),
                    add("harry potter"),
                    add("harry potter"),
                    add("harry potter"),
                }};
            }};            

            UpdateSynonymsResponse res = sdk.subRoutes.updateSynonyms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTypoTolerance

Update typo-tolerance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTypoToleranceRequestBody;
import org.openapis.openapi.models.operations.UpdateTypoToleranceRequestBodyMinWordSizeForTypos;
import org.openapis.openapi.models.operations.UpdateTypoToleranceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTypoToleranceRequestBody req = new UpdateTypoToleranceRequestBody() {{
                disableOnAttributes = new String[]{{
                    add("genre"),
                    add("genre"),
                    add("genre"),
                }};
                disableOnWords = new String[]{{
                    add("Prince"),
                }};
                minWordSizeForTypos = new UpdateTypoToleranceRequestBodyMinWordSizeForTypos() {{
                    oneTypo = 2;
                    twoTypos = 11;
                }};;
            }};            

            UpdateTypoToleranceResponse res = sdk.subRoutes.updateTypoTolerance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
