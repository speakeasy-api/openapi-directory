# search

## Overview

Search for entities

### Available Operations

* [getAutocomplete](#getautocomplete) - Returns list of matching concepts or entities using lexical search
* [getSearchEntities](#getsearchentities) - Returns list of matching concepts or entities using lexical search
* [getSearchHpoEntities](#getsearchhpoentities) - Returns list of matching concepts or entities using lexical search

## getAutocomplete

Returns list of matching concepts or entities using lexical search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutocompleteRequest;
import org.openapis.openapi.models.operations.GetAutocompleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutocompleteRequest req = new GetAutocompleteRequest("quibusdam") {{
                boostFx = new String[]{{
                    add("facere"),
                }};
                boostQ = new String[]{{
                    add("architecto"),
                    add("voluptatibus"),
                    add("quia"),
                }};
                category = new String[]{{
                    add("aliquam"),
                    add("velit"),
                    add("illo"),
                    add("accusantium"),
                }};
                excludeGroups = false;
                fq = new String[]{{
                    add("ea"),
                    add("beatae"),
                }};
                highlightClass = "vero";
                includeEqs = false;
                minMatch = "excepturi";
                minimalTokenizer = false;
                prefix = new String[]{{
                    add("velit"),
                    add("ut"),
                }};
                rows = 596433L;
                start = "earum";
                taxon = new String[]{{
                    add("impedit"),
                }};
            }};            

            GetAutocompleteResponse res = sdk.search.getAutocomplete(req);

            if (res.autocompleteResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchEntities

Returns list of matching concepts or entities using lexical search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchEntitiesRequest;
import org.openapis.openapi.models.operations.GetSearchEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchEntitiesRequest req = new GetSearchEntitiesRequest("voluptatibus") {{
                boostFx = new String[]{{
                    add("itaque"),
                    add("alias"),
                    add("nisi"),
                }};
                boostQ = new String[]{{
                    add("velit"),
                    add("laborum"),
                    add("non"),
                    add("dolor"),
                }};
                category = new String[]{{
                    add("sit"),
                    add("doloremque"),
                }};
                excludeGroups = false;
                fq = new String[]{{
                    add("officia"),
                }};
                highlightClass = "recusandae";
                includeEqs = false;
                minMatch = "ea";
                minimalTokenizer = false;
                prefix = new String[]{{
                    add("voluptas"),
                    add("facilis"),
                    add("placeat"),
                }};
                rows = 596065L;
                start = "expedita";
                taxon = new String[]{{
                    add("a"),
                    add("voluptate"),
                    add("ullam"),
                }};
            }};            

            GetSearchEntitiesResponse res = sdk.search.getSearchEntities(req);

            if (res.searchResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchHpoEntities

Returns list of matching concepts or entities using lexical search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchHpoEntitiesRequest;
import org.openapis.openapi.models.operations.GetSearchHpoEntitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchHpoEntitiesRequest req = new GetSearchHpoEntitiesRequest("unde") {{
                anatomicalSystem = "necessitatibus";
                anatomicalSystemLabel = "animi";
                highlightClass = "impedit";
                phenotypeGroup = "ipsam";
                phenotypeGroupLabel = "corporis";
                rows = 668234L;
                start = "error";
            }};            

            GetSearchHpoEntitiesResponse res = sdk.search.getSearchHpoEntities(req);

            if (res.layResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
