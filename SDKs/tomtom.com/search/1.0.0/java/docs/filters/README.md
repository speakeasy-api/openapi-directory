# filters

### Available Operations

* [getSearchVersionNumberGeometryFilterExt](#getsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~getSearchVersionNumberRoutedFilterPositionHeadingExt~~](#getsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**
* [postSearchVersionNumberGeometryFilterExt](#postsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~postSearchVersionNumberRoutedFilterPositionHeadingExt~~](#postsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**

## getSearchVersionNumberGeometryFilterExt

Geometry Filter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberGeometryFilterExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberGeometryFilterExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberGeometryFilterExtRequest req = new GetSearchVersionNumberGeometryFilterExtRequest(ExtEnum.XML, "vel", "error", VersionNumberEnum.TWO);            

            GetSearchVersionNumberGeometryFilterExtResponse res = sdk.filters.getSearchVersionNumberGeometryFilterExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getSearchVersionNumberRoutedFilterPositionHeadingExt~~

Routed Filter

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest req = new GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest(ExtEnum.JSONP, 4375.87, "magnam", "debitis", VersionNumberEnum.TWO) {{
                routingTimeout = 56713L;
            }};            

            GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse res = sdk.filters.getSearchVersionNumberRoutedFilterPositionHeadingExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSearchVersionNumberGeometryFilterExt

Geometry Filter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequest;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBody;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition;
import org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostSearchVersionNumberGeometryFilterExtRequest req = new PostSearchVersionNumberGeometryFilterExtRequest(ExtEnum.JSONP, VersionNumberEnum.TWO) {{
                requestBody = new PostSearchVersionNumberGeometryFilterExtRequestBody() {{
                    geometryList = new org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList[]{{
                        add(new PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList() {{
                            position = "molestiae";
                            radius = 791725L;
                            type = "placeat";
                            vertices = new String[]{{
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }};
                        }}),
                        add(new PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList() {{
                            position = "recusandae";
                            radius = 836079L;
                            type = "ab";
                            vertices = new String[]{{
                                add("veritatis"),
                                add("deserunt"),
                            }};
                        }}),
                    }};
                    poiList = new org.openapis.openapi.models.operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList[]{{
                        add(new PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList() {{
                            address = new PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress() {{
                                freeformAddress = "ipsam";
                            }};
                            poi = new PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi() {{
                                name = "Timmy Satterfield";
                            }};
                            position = new PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition() {{
                                lat = 8700.88;
                                lon = 9786.19;
                            }};
                        }}),
                    }};
                }};;
            }};            

            PostSearchVersionNumberGeometryFilterExtResponse res = sdk.filters.postSearchVersionNumberGeometryFilterExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~postSearchVersionNumberRoutedFilterPositionHeadingExt~~

Routed Filter

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest;
import org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody;
import org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList;
import org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress;
import org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi;
import org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition;
import org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest req = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest(ExtEnum.XML, 8009.11, "esse", VersionNumberEnum.TWO) {{
                requestBody = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody() {{
                    poiList = new org.openapis.openapi.models.operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList[]{{
                        add(new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList() {{
                            address = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress() {{
                                freeformAddress = "porro";
                            }};
                            poi = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi() {{
                                name = "Samuel Reichel";
                            }};
                            position = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition() {{
                                lat = 1433.53;
                                lon = 5373.73;
                            }};
                        }}),
                        add(new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList() {{
                            address = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress() {{
                                freeformAddress = "hic";
                            }};
                            poi = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi() {{
                                name = "Everett Breitenberg";
                            }};
                            position = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition() {{
                                lat = 2645.55;
                                lon = 1863.32;
                            }};
                        }}),
                        add(new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList() {{
                            address = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress() {{
                                freeformAddress = "impedit";
                            }};
                            poi = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi() {{
                                name = "Cory Emmerich";
                            }};
                            position = new PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition() {{
                                lat = 187.89;
                                lon = 3241.41;
                            }};
                        }}),
                    }};
                }};;
                routingTimeout = 617636L;
            }};            

            PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse res = sdk.filters.postSearchVersionNumberRoutedFilterPositionHeadingExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
