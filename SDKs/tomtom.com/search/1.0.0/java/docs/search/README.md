# search

### Available Operations

* [~~getSearchVersionNumberCSCategoryExt~~](#getsearchversionnumbercscategoryext) - Low Bandwith Category Search :warning: **Deprecated**
* [getSearchVersionNumberCategorySearchQueryExt](#getsearchversionnumbercategorysearchqueryext) - Category Search
* [getSearchVersionNumberGeometrySearchQueryExt](#getsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [getSearchVersionNumberNearbySearchExt](#getsearchversionnumbernearbysearchext) - Nearby Search
* [getSearchVersionNumberPoiSearchQueryExt](#getsearchversionnumberpoisearchqueryext) - Points of Interest Search
* [~~getSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~](#getsearchversionnumberroutedsearchquerypositionheadingext) - Routed Search :warning: **Deprecated**
* [~~getSearchVersionNumberSQueryExt~~](#getsearchversionnumbersqueryext) - Low bandwith Search :warning: **Deprecated**
* [getSearchVersionNumberSearchQueryExt](#getsearchversionnumbersearchqueryext) - Fuzzy Search
* [postSearchVersionNumberGeometrySearchQueryExt](#postsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [postSearchVersionNumberSearchAlongRouteQueryExt](#postsearchversionnumbersearchalongroutequeryext) - Along Route Search

## ~~getSearchVersionNumberCSCategoryExt~~

Low Bandwith Category Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberCSCategoryExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberCSCategoryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberCSCategoryExtRequest req = new GetSearchVersionNumberCSCategoryExtRequest("vitae", ExtEnum.JS, VersionNumberEnum.TWO) {{
                btmRight = "animi";
                countrySet = "enim";
                idxSet = "odit";
                language = "quo";
                lat = 1965.82;
                limit = 949572L;
                lon = 3687.25;
                ofs = 662527L;
                radius = 820994L;
                topLeft = "aut";
                typeahead = false;
                view = ViewEnum.UNIFIED;
            }};            

            GetSearchVersionNumberCSCategoryExtResponse res = sdk.search.getSearchVersionNumberCSCategoryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchVersionNumberCategorySearchQueryExt

Category Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberCategorySearchQueryExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberCategorySearchQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberCategorySearchQueryExtRequest req = new GetSearchVersionNumberCategorySearchQueryExtRequest(ExtEnum.XML, "laborum", VersionNumberEnum.TWO) {{
                btmRight = "quasi";
                countrySet = "reiciendis";
                extendedPostalCodesFor = "voluptatibus";
                language = "vero";
                lat = 4686.51;
                limit = 509624L;
                lon = 9767.62;
                ofs = 55714L;
                radius = 604846L;
                topLeft = "voluptate";
                typeahead = false;
                view = ViewEnum.IL;
            }};            

            GetSearchVersionNumberCategorySearchQueryExtResponse res = sdk.search.getSearchVersionNumberCategorySearchQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchVersionNumberGeometrySearchQueryExt

Geometry Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberGeometrySearchQueryExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberGeometrySearchQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberGeometrySearchQueryExtRequest req = new GetSearchVersionNumberGeometrySearchQueryExtRequest(ExtEnum.JSON, "reprehenderit", VersionNumberEnum.TWO) {{
                extendedPostalCodesFor = "ut";
                geometryList = "maiores";
                idxSet = "dicta";
                language = "corporis";
                limit = 296140L;
            }};            

            GetSearchVersionNumberGeometrySearchQueryExtResponse res = sdk.search.getSearchVersionNumberGeometrySearchQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchVersionNumberNearbySearchExt

Nearby Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberNearbySearchExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberNearbySearchExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberNearbySearchExtRequest req = new GetSearchVersionNumberNearbySearchExtRequest(ExtEnum.JSON, 6886.61, 3179.83, VersionNumberEnum.TWO) {{
                btmRight = "accusamus";
                countrySet = "commodi";
                extendedPostalCodesFor = "repudiandae";
                idxSet = "quae";
                language = "ipsum";
                limit = 692472L;
                maxFuzzyLevel = 565189L;
                minFuzzyLevel = 566602L;
                ofs = 865103L;
                radius = 265389L;
                topLeft = "praesentium";
                view = ViewEnum.PK;
            }};            

            GetSearchVersionNumberNearbySearchExtResponse res = sdk.search.getSearchVersionNumberNearbySearchExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchVersionNumberPoiSearchQueryExt

Points of Interest Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberPoiSearchQueryExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberPoiSearchQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberPoiSearchQueryExtRequest req = new GetSearchVersionNumberPoiSearchQueryExtRequest(ExtEnum.JSON, "repudiandae", VersionNumberEnum.TWO) {{
                btmRight = "sint";
                countrySet = "veritatis";
                extendedPostalCodesFor = "itaque";
                language = "incidunt";
                lat = 3185.69;
                limit = 9356L;
                lon = 6674.11;
                ofs = 842342L;
                radius = 131797L;
                topLeft = "deserunt";
                typeahead = false;
                view = ViewEnum.IL;
            }};            

            GetSearchVersionNumberPoiSearchQueryExtResponse res = sdk.search.getSearchVersionNumberPoiSearchQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~

Routed Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest req = new GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest(ExtEnum.JSONP, 2647.3, "qui", "aliquid", VersionNumberEnum.TWO) {{
                extendedPostalCodesFor = "cupiditate";
                idxSet = "quos";
                language = "perferendis";
                limit = 164940L;
                multiplier = 828940L;
                routingTimeout = 369808L;
                typeahead = false;
            }};            

            GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse res = sdk.search.getSearchVersionNumberRoutedSearchQueryPositionHeadingExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getSearchVersionNumberSQueryExt~~

Low bandwith Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberSQueryExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberSQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberSQueryExtRequest req = new GetSearchVersionNumberSQueryExtRequest(ExtEnum.JSON, "dolorum", VersionNumberEnum.TWO) {{
                btmRight = "excepturi";
                countrySet = "tempora";
                idxSet = "facilis";
                language = "tempore";
                lat = 2884.76;
                limit = 962189L;
                lon = 4332.88;
                ofs = 248753L;
                radius = 756107L;
                topLeft = "sint";
                typeahead = false;
                view = ViewEnum.IN;
            }};            

            GetSearchVersionNumberSQueryExtResponse res = sdk.search.getSearchVersionNumberSQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchVersionNumberSearchQueryExt

Fuzzy Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberSearchQueryExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberSearchQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberSearchQueryExtRequest req = new GetSearchVersionNumberSearchQueryExtRequest(ExtEnum.XML, "sint", VersionNumberEnum.TWO) {{
                btmRight = "officia";
                countrySet = "dolor";
                extendedPostalCodesFor = "debitis";
                idxSet = "a";
                language = "dolorum";
                lat = 4471.25;
                limit = 449198L;
                lon = 8464.09;
                maxFuzzyLevel = 978571L;
                minFuzzyLevel = 699479L;
                ofs = 116202L;
                radius = 297437L;
                topLeft = "cumque";
                typeahead = false;
                view = ViewEnum.MA;
            }};            

            GetSearchVersionNumberSearchQueryExtResponse res = sdk.search.getSearchVersionNumberSearchQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSearchVersionNumberGeometrySearchQueryExt

Geometry Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometrySearchQueryExtRequest;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBody;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometrySearchQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostSearchVersionNumberGeometrySearchQueryExtRequest req = new PostSearchVersionNumberGeometrySearchQueryExtRequest(ExtEnum.JSONP, "laborum", VersionNumberEnum.TWO) {{
                requestBody = new PostSearchVersionNumberGeometrySearchQueryExtRequestBody() {{
                    geometryList = new org.openapis.openapi.models.operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList[]{{
                        add(new PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList() {{
                            position = "non";
                            radius = 581273L;
                            type = "enim";
                            vertices = new String[]{{
                                add("delectus"),
                                add("quidem"),
                                add("provident"),
                                add("nam"),
                            }};
                        }}),
                        add(new PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList() {{
                            position = "id";
                            radius = 501324L;
                            type = "deleniti";
                            vertices = new String[]{{
                                add("amet"),
                                add("deserunt"),
                                add("nisi"),
                                add("vel"),
                            }};
                        }}),
                        add(new PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList() {{
                            position = "natus";
                            radius = 606393L;
                            type = "molestiae";
                            vertices = new String[]{{
                                add("nihil"),
                            }};
                        }}),
                        add(new PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList() {{
                            position = "magnam";
                            radius = 716075L;
                            type = "id";
                            vertices = new String[]{{
                                add("labore"),
                                add("suscipit"),
                            }};
                        }}),
                    }};
                }};;
                extendedPostalCodesFor = "natus";
                idxSet = "nobis";
                language = "eum";
                limit = 878453L;
            }};            

            PostSearchVersionNumberGeometrySearchQueryExtResponse res = sdk.search.postSearchVersionNumberGeometrySearchQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSearchVersionNumberSearchAlongRouteQueryExt

Along Route Search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest;
import org.openapis.openapi.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
import org.openapis.openapi.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
import org.openapis.openapi.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints;
import org.openapis.openapi.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostSearchVersionNumberSearchAlongRouteQueryExtRequest req = new PostSearchVersionNumberSearchAlongRouteQueryExtRequest(ExtEnum.JSON, 298282L, "et", VersionNumberEnum.TWO) {{
                requestBody = new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody() {{
                    route = new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute() {{
                        points = new org.openapis.openapi.models.operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints[]{{
                            add(new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints() {{
                                lat = 3540.47;
                                lon = 5908.73;
                            }}),
                            add(new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints() {{
                                lat = 5518.16;
                                lon = 5743.25;
                            }}),
                            add(new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints() {{
                                lat = 336.25;
                                lon = 6532.01;
                            }}),
                        }};
                    }};;
                }};;
                limit = 968962L;
            }};            

            PostSearchVersionNumberSearchAlongRouteQueryExtResponse res = sdk.search.postSearchVersionNumberSearchAlongRouteQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
