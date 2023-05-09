# layers

### Available Operations

* [booksLayersAnnotationDataGet](#bookslayersannotationdataget) - Gets the annotation data.
* [booksLayersAnnotationDataList](#bookslayersannotationdatalist) - Gets the annotation data for a volume and layer.
* [booksLayersGet](#bookslayersget) - Gets the layer summary for a volume.
* [booksLayersList](#bookslayerslist) - List the layer summaries for a volume.
* [booksLayersVolumeAnnotationsGet](#bookslayersvolumeannotationsget) - Gets the volume annotation.
* [booksLayersVolumeAnnotationsList](#bookslayersvolumeannotationslist) - Gets the volume annotations for a volume and layer.

## booksLayersAnnotationDataGet

Gets the annotation data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksLayersAnnotationDataGetRequest;
import org.openapis.openapi.models.operations.BooksLayersAnnotationDataGetResponse;
import org.openapis.openapi.models.operations.BooksLayersAnnotationDataGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksLayersAnnotationDataGetRequest req = new BooksLayersAnnotationDataGetRequest("quidem", "molestias", "excepturi", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                allowWebDefinitions = false;
                alt = AltEnum.MEDIA;
                callback = "voluptates";
                fields = "quasi";
                h = 921158L;
                key = "sint";
                locale = "veritatis";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "incidunt";
                scale = 318569L;
                source = "consequatur";
                uploadType = "est";
                uploadProtocol = "quibusdam";
                w = 131797L;
            }};            

            BooksLayersAnnotationDataGetResponse res = sdk.layers.booksLayersAnnotationDataGet(req, new BooksLayersAnnotationDataGetSecurity("deserunt", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dictionaryAnnotationdata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksLayersAnnotationDataList

Gets the annotation data for a volume and layer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksLayersAnnotationDataListRequest;
import org.openapis.openapi.models.operations.BooksLayersAnnotationDataListResponse;
import org.openapis.openapi.models.operations.BooksLayersAnnotationDataListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksLayersAnnotationDataListRequest req = new BooksLayersAnnotationDataListRequest("quibusdam", "labore", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                annotationDataId = new String[]{{
                    add("perferendis"),
                    add("magni"),
                    add("assumenda"),
                }};
                callback = "ipsam";
                fields = "alias";
                h = 146441L;
                key = "dolorum";
                locale = "excepturi";
                maxResults = 270008L;
                oauthToken = "facilis";
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "labore";
                scale = 962189L;
                source = "eum";
                updatedMax = "non";
                updatedMin = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
                w = 592042L;
            }};            

            BooksLayersAnnotationDataListResponse res = sdk.layers.booksLayersAnnotationDataList(req, new BooksLayersAnnotationDataListSecurity("necessitatibus", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.annotationsdata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksLayersGet

Gets the layer summary for a volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksLayersGetRequest;
import org.openapis.openapi.models.operations.BooksLayersGetResponse;
import org.openapis.openapi.models.operations.BooksLayersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksLayersGetRequest req = new BooksLayersGetRequest("officia", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "in";
                contentVersion = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                source = "magnam";
                uploadType = "cumque";
                uploadProtocol = "facere";
            }};            

            BooksLayersGetResponse res = sdk.layers.booksLayersGet(req, new BooksLayersGetSecurity("ea", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.layersummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksLayersList

List the layer summaries for a volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksLayersListRequest;
import org.openapis.openapi.models.operations.BooksLayersListResponse;
import org.openapis.openapi.models.operations.BooksLayersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksLayersListRequest req = new BooksLayersListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "enim";
                contentVersion = "accusamus";
                fields = "delectus";
                key = "quidem";
                maxResults = 588465L;
                oauthToken = "nam";
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "blanditiis";
                source = "deleniti";
                uploadType = "sapiente";
                uploadProtocol = "amet";
            }};            

            BooksLayersListResponse res = sdk.layers.booksLayersList(req, new BooksLayersListSecurity("deserunt", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.layersummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksLayersVolumeAnnotationsGet

Gets the volume annotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksLayersVolumeAnnotationsGetRequest;
import org.openapis.openapi.models.operations.BooksLayersVolumeAnnotationsGetResponse;
import org.openapis.openapi.models.operations.BooksLayersVolumeAnnotationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksLayersVolumeAnnotationsGetRequest req = new BooksLayersVolumeAnnotationsGetRequest("vel", "natus", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "distinctio";
                key = "id";
                locale = "labore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "suscipit";
                source = "natus";
                uploadType = "nobis";
                uploadProtocol = "eum";
            }};            

            BooksLayersVolumeAnnotationsGetResponse res = sdk.layers.booksLayersVolumeAnnotationsGet(req, new BooksLayersVolumeAnnotationsGetSecurity("vero", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumeannotation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksLayersVolumeAnnotationsList

Gets the volume annotations for a volume and layer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksLayersVolumeAnnotationsListRequest;
import org.openapis.openapi.models.operations.BooksLayersVolumeAnnotationsListResponse;
import org.openapis.openapi.models.operations.BooksLayersVolumeAnnotationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksLayersVolumeAnnotationsListRequest req = new BooksLayersVolumeAnnotationsListRequest("architecto", "magnam", "et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "quos";
                endOffset = "sint";
                endPosition = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                locale = "mollitia";
                maxResults = 320997L;
                oauthToken = "eum";
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                showDeleted = false;
                source = "odit";
                startOffset = "nemo";
                startPosition = "quasi";
                updatedMax = "iure";
                updatedMin = "doloribus";
                uploadType = "debitis";
                uploadProtocol = "eius";
                volumeAnnotationsVersion = "maxime";
            }};            

            BooksLayersVolumeAnnotationsListResponse res = sdk.layers.booksLayersVolumeAnnotationsList(req, new BooksLayersVolumeAnnotationsListSecurity("deleniti", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumeannotations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
