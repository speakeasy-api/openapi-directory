# mylibrary

### Available Operations

* [booksMylibraryAnnotationsDelete](#booksmylibraryannotationsdelete) - Deletes an annotation.
* [booksMylibraryAnnotationsInsert](#booksmylibraryannotationsinsert) - Inserts a new annotation.
* [booksMylibraryAnnotationsList](#booksmylibraryannotationslist) - Retrieves a list of annotations, possibly filtered.
* [booksMylibraryAnnotationsSummary](#booksmylibraryannotationssummary) - Gets the summary of specified layers.
* [booksMylibraryAnnotationsUpdate](#booksmylibraryannotationsupdate) - Updates an existing annotation.
* [booksMylibraryBookshelvesAddVolume](#booksmylibrarybookshelvesaddvolume) - Adds a volume to a bookshelf.
* [booksMylibraryBookshelvesClearVolumes](#booksmylibrarybookshelvesclearvolumes) - Clears all volumes from a bookshelf.
* [booksMylibraryBookshelvesGet](#booksmylibrarybookshelvesget) - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* [booksMylibraryBookshelvesList](#booksmylibrarybookshelveslist) - Retrieves a list of bookshelves belonging to the authenticated user.
* [booksMylibraryBookshelvesMoveVolume](#booksmylibrarybookshelvesmovevolume) - Moves a volume within a bookshelf.
* [booksMylibraryBookshelvesRemoveVolume](#booksmylibrarybookshelvesremovevolume) - Removes a volume from a bookshelf.
* [booksMylibraryBookshelvesVolumesList](#booksmylibrarybookshelvesvolumeslist) - Gets volume information for volumes on a bookshelf.
* [booksMylibraryReadingpositionsGet](#booksmylibraryreadingpositionsget) - Retrieves my reading position information for a volume.
* [booksMylibraryReadingpositionsSetPosition](#booksmylibraryreadingpositionssetposition) - Sets my reading position information for a volume.

## booksMylibraryAnnotationsDelete

Deletes an annotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsDeleteRequest;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsDeleteResponse;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryAnnotationsDeleteRequest req = new BooksMylibraryAnnotationsDeleteRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "cum";
                key = "voluptate";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "reiciendis";
                source = "amet";
                uploadType = "dolorum";
                uploadProtocol = "numquam";
            }};            

            BooksMylibraryAnnotationsDeleteResponse res = sdk.mylibrary.booksMylibraryAnnotationsDelete(req, new BooksMylibraryAnnotationsDeleteSecurity("veritatis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryAnnotationsInsert

Inserts a new annotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsInsertRequest;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsInsertResponse;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Annotation;
import org.openapis.openapi.models.shared.AnnotationClientVersionRanges;
import org.openapis.openapi.models.shared.AnnotationCurrentVersionRanges;
import org.openapis.openapi.models.shared.AnnotationLayerSummary;
import org.openapis.openapi.models.shared.BooksAnnotationsRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryAnnotationsInsertRequest req = new BooksMylibraryAnnotationsInsertRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                annotation = new Annotation() {{
                    afterSelectedText = "iure";
                    beforeSelectedText = "odio";
                    clientVersionRanges = new AnnotationClientVersionRanges() {{
                        cfiRange = new BooksAnnotationsRange() {{
                            endOffset = "quaerat";
                            endPosition = "accusamus";
                            startOffset = "quidem";
                            startPosition = "voluptatibus";
                        }};;
                        contentVersion = "voluptas";
                        gbImageRange = new BooksAnnotationsRange() {{
                            endOffset = "natus";
                            endPosition = "eos";
                            startOffset = "atque";
                            startPosition = "sit";
                        }};;
                        gbTextRange = new BooksAnnotationsRange() {{
                            endOffset = "fugiat";
                            endPosition = "ab";
                            startOffset = "soluta";
                            startPosition = "dolorum";
                        }};;
                        imageCfiRange = new BooksAnnotationsRange() {{
                            endOffset = "iusto";
                            endPosition = "voluptate";
                            startOffset = "dolorum";
                            startPosition = "deleniti";
                        }};;
                    }};;
                    created = "omnis";
                    currentVersionRanges = new AnnotationCurrentVersionRanges() {{
                        cfiRange = new BooksAnnotationsRange() {{
                            endOffset = "necessitatibus";
                            endPosition = "distinctio";
                            startOffset = "asperiores";
                            startPosition = "nihil";
                        }};;
                        contentVersion = "ipsum";
                        gbImageRange = new BooksAnnotationsRange() {{
                            endOffset = "voluptate";
                            endPosition = "id";
                            startOffset = "saepe";
                            startPosition = "eius";
                        }};;
                        gbTextRange = new BooksAnnotationsRange() {{
                            endOffset = "aspernatur";
                            endPosition = "perferendis";
                            startOffset = "amet";
                            startPosition = "optio";
                        }};;
                        imageCfiRange = new BooksAnnotationsRange() {{
                            endOffset = "accusamus";
                            endPosition = "ad";
                            startOffset = "saepe";
                            startPosition = "suscipit";
                        }};;
                    }};;
                    data = "deserunt";
                    deleted = false;
                    highlightStyle = "provident";
                    id = "5d8a0d44-6ce2-4af7-a73c-f3be453f870b";
                    kind = "neque";
                    layerId = "sed";
                    layerSummary = new AnnotationLayerSummary() {{
                        allowedCharacterCount = 424685;
                        limitType = "libero";
                        remainingCharacterCount = 374170;
                    }};;
                    pageIds = new String[]{{
                        add("quam"),
                        add("ipsum"),
                        add("incidunt"),
                    }};
                    selectedText = "qui";
                    selfLink = "cupiditate";
                    updated = "maxime";
                    volumeId = "pariatur";
                }};;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                annotationId = "laborum";
                callback = "totam";
                country = "Faroe Islands";
                fields = "aspernatur";
                key = "dolores";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "facilis";
                showOnlySummaryInResponse = false;
                source = "aliquid";
                uploadType = "quam";
                uploadProtocol = "molestias";
            }};            

            BooksMylibraryAnnotationsInsertResponse res = sdk.mylibrary.booksMylibraryAnnotationsInsert(req, new BooksMylibraryAnnotationsInsertSecurity("temporibus", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.annotation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryAnnotationsList

Retrieves a list of annotations, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsListRequest;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsListResponse;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryAnnotationsListRequest req = new BooksMylibraryAnnotationsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "odio";
                contentVersion = "sunt";
                fields = "ullam";
                key = "nam";
                layerId = "hic";
                layerIds = new String[]{{
                    add("cumque"),
                }};
                maxResults = 746994L;
                oauthToken = "nobis";
                pageToken = "et";
                prettyPrint = false;
                quotaUser = "saepe";
                showDeleted = false;
                source = "ipsum";
                updatedMax = "veritatis";
                updatedMin = "nobis";
                uploadType = "quos";
                uploadProtocol = "tempore";
                volumeId = "cupiditate";
            }};            

            BooksMylibraryAnnotationsListResponse res = sdk.mylibrary.booksMylibraryAnnotationsList(req, new BooksMylibraryAnnotationsListSecurity("aperiam", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.annotations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryAnnotationsSummary

Gets the summary of specified layers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsSummaryRequest;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsSummaryResponse;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsSummarySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryAnnotationsSummaryRequest req = new BooksMylibraryAnnotationsSummaryRequest(                new String[]{{
                                add("dolore"),
                            }}, "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "aut";
                key = "quas";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "est";
                uploadProtocol = "repellendus";
            }};            

            BooksMylibraryAnnotationsSummaryResponse res = sdk.mylibrary.booksMylibraryAnnotationsSummary(req, new BooksMylibraryAnnotationsSummarySecurity("porro", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.annotationsSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryAnnotationsUpdate

Updates an existing annotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsUpdateRequest;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsUpdateResponse;
import org.openapis.openapi.models.operations.BooksMylibraryAnnotationsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Annotation;
import org.openapis.openapi.models.shared.AnnotationClientVersionRanges;
import org.openapis.openapi.models.shared.AnnotationCurrentVersionRanges;
import org.openapis.openapi.models.shared.AnnotationLayerSummary;
import org.openapis.openapi.models.shared.BooksAnnotationsRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryAnnotationsUpdateRequest req = new BooksMylibraryAnnotationsUpdateRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                annotation = new Annotation() {{
                    afterSelectedText = "cupiditate";
                    beforeSelectedText = "qui";
                    clientVersionRanges = new AnnotationClientVersionRanges() {{
                        cfiRange = new BooksAnnotationsRange() {{
                            endOffset = "quae";
                            endPosition = "laudantium";
                            startOffset = "odio";
                            startPosition = "occaecati";
                        }};;
                        contentVersion = "voluptatibus";
                        gbImageRange = new BooksAnnotationsRange() {{
                            endOffset = "quisquam";
                            endPosition = "vero";
                            startOffset = "omnis";
                            startPosition = "quis";
                        }};;
                        gbTextRange = new BooksAnnotationsRange() {{
                            endOffset = "ipsum";
                            endPosition = "delectus";
                            startOffset = "voluptate";
                            startPosition = "consectetur";
                        }};;
                        imageCfiRange = new BooksAnnotationsRange() {{
                            endOffset = "vero";
                            endPosition = "tenetur";
                            startOffset = "dignissimos";
                            startPosition = "hic";
                        }};;
                    }};;
                    created = "distinctio";
                    currentVersionRanges = new AnnotationCurrentVersionRanges() {{
                        cfiRange = new BooksAnnotationsRange() {{
                            endOffset = "quod";
                            endPosition = "odio";
                            startOffset = "similique";
                            startPosition = "facilis";
                        }};;
                        contentVersion = "vero";
                        gbImageRange = new BooksAnnotationsRange() {{
                            endOffset = "ducimus";
                            endPosition = "dolore";
                            startOffset = "quibusdam";
                            startPosition = "illum";
                        }};;
                        gbTextRange = new BooksAnnotationsRange() {{
                            endOffset = "sequi";
                            endPosition = "natus";
                            startOffset = "impedit";
                            startPosition = "aut";
                        }};;
                        imageCfiRange = new BooksAnnotationsRange() {{
                            endOffset = "voluptatibus";
                            endPosition = "exercitationem";
                            startOffset = "nulla";
                            startPosition = "fugit";
                        }};;
                    }};;
                    data = "porro";
                    deleted = false;
                    highlightStyle = "maiores";
                    id = "f7c70a45-626d-4436-813f-16d9f5fce6c5";
                    kind = "veniam";
                    layerId = "aliquid";
                    layerSummary = new AnnotationLayerSummary() {{
                        allowedCharacterCount = 81101;
                        limitType = "magnam";
                        remainingCharacterCount = 407241;
                    }};;
                    pageIds = new String[]{{
                        add("consectetur"),
                        add("recusandae"),
                        add("aspernatur"),
                        add("minima"),
                    }};
                    selectedText = "eaque";
                    selfLink = "a";
                    updated = "libero";
                    volumeId = "aut";
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "aliquam";
                key = "fugit";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "inventore";
                source = "non";
                uploadType = "et";
                uploadProtocol = "dolorum";
            }};            

            BooksMylibraryAnnotationsUpdateResponse res = sdk.mylibrary.booksMylibraryAnnotationsUpdate(req, new BooksMylibraryAnnotationsUpdateSecurity("laborum", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.annotation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryBookshelvesAddVolume

Adds a volume to a bookshelf.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesAddVolumeReasonEnum;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesAddVolumeRequest;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesAddVolumeResponse;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesAddVolumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryBookshelvesAddVolumeRequest req = new BooksMylibraryBookshelvesAddVolumeRequest("velit", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "nulla";
                key = "voluptas";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "quasi";
                reason = BooksMylibraryBookshelvesAddVolumeReasonEnum.IOS_PREX;
                source = "numquam";
                uploadType = "explicabo";
                uploadProtocol = "provident";
            }};            

            BooksMylibraryBookshelvesAddVolumeResponse res = sdk.mylibrary.booksMylibraryBookshelvesAddVolume(req, new BooksMylibraryBookshelvesAddVolumeSecurity("ipsa", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryBookshelvesClearVolumes

Clears all volumes from a bookshelf.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesClearVolumesRequest;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesClearVolumesResponse;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesClearVolumesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryBookshelvesClearVolumesRequest req = new BooksMylibraryBookshelvesClearVolumesRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "rem";
                key = "fuga";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "quidem";
                source = "fugiat";
                uploadType = "ut";
                uploadProtocol = "eum";
            }};            

            BooksMylibraryBookshelvesClearVolumesResponse res = sdk.mylibrary.booksMylibraryBookshelvesClearVolumes(req, new BooksMylibraryBookshelvesClearVolumesSecurity("suscipit", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryBookshelvesGet

Retrieves metadata for a specific bookshelf belonging to the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesGetRequest;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesGetResponse;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryBookshelvesGetRequest req = new BooksMylibraryBookshelvesGetRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quisquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "id";
                key = "quidem";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "quo";
                source = "illum";
                uploadType = "quo";
                uploadProtocol = "fuga";
            }};            

            BooksMylibraryBookshelvesGetResponse res = sdk.mylibrary.booksMylibraryBookshelvesGet(req, new BooksMylibraryBookshelvesGetSecurity("eius", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookshelf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryBookshelvesList

Retrieves a list of bookshelves belonging to the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesListRequest;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesListResponse;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryBookshelvesListRequest req = new BooksMylibraryBookshelvesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "tempora";
                key = "debitis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "aspernatur";
                source = "sequi";
                uploadType = "quo";
                uploadProtocol = "esse";
            }};            

            BooksMylibraryBookshelvesListResponse res = sdk.mylibrary.booksMylibraryBookshelvesList(req, new BooksMylibraryBookshelvesListSecurity("recusandae", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookshelves != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryBookshelvesMoveVolume

Moves a volume within a bookshelf.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesMoveVolumeRequest;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesMoveVolumeResponse;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesMoveVolumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryBookshelvesMoveVolumeRequest req = new BooksMylibraryBookshelvesMoveVolumeRequest("distinctio", "quod", 490819L) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "aliquam";
                key = "odio";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "commodi";
                source = "sapiente";
                uploadType = "dolores";
                uploadProtocol = "deserunt";
            }};            

            BooksMylibraryBookshelvesMoveVolumeResponse res = sdk.mylibrary.booksMylibraryBookshelvesMoveVolume(req, new BooksMylibraryBookshelvesMoveVolumeSecurity("molestiae", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryBookshelvesRemoveVolume

Removes a volume from a bookshelf.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesRemoveVolumeReasonEnum;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesRemoveVolumeRequest;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesRemoveVolumeResponse;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesRemoveVolumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryBookshelvesRemoveVolumeRequest req = new BooksMylibraryBookshelvesRemoveVolumeRequest("porro", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "fugit";
                key = "fuga";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "incidunt";
                reason = BooksMylibraryBookshelvesRemoveVolumeReasonEnum.ONBOARDING;
                source = "explicabo";
                uploadType = "minima";
                uploadProtocol = "nisi";
            }};            

            BooksMylibraryBookshelvesRemoveVolumeResponse res = sdk.mylibrary.booksMylibraryBookshelvesRemoveVolume(req, new BooksMylibraryBookshelvesRemoveVolumeSecurity("fugit", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryBookshelvesVolumesList

Gets volume information for volumes on a bookshelf.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesVolumesListProjectionEnum;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesVolumesListRequest;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesVolumesListResponse;
import org.openapis.openapi.models.operations.BooksMylibraryBookshelvesVolumesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryBookshelvesVolumesListRequest req = new BooksMylibraryBookshelvesVolumesListRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                country = "Mali";
                fields = "et";
                key = "esse";
                maxResults = 910545L;
                oauthToken = "accusamus";
                prettyPrint = false;
                projection = BooksMylibraryBookshelvesVolumesListProjectionEnum.PROJECTION_UNDEFINED;
                q = "esse";
                quotaUser = "quod";
                showPreorders = false;
                source = "nam";
                startIndex = 877131L;
                uploadType = "aliquid";
                uploadProtocol = "quasi";
            }};            

            BooksMylibraryBookshelvesVolumesListResponse res = sdk.mylibrary.booksMylibraryBookshelvesVolumesList(req, new BooksMylibraryBookshelvesVolumesListSecurity("saepe", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryReadingpositionsGet

Retrieves my reading position information for a volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryReadingpositionsGetRequest;
import org.openapis.openapi.models.operations.BooksMylibraryReadingpositionsGetResponse;
import org.openapis.openapi.models.operations.BooksMylibraryReadingpositionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryReadingpositionsGetRequest req = new BooksMylibraryReadingpositionsGetRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "minima";
                contentVersion = "distinctio";
                fields = "eligendi";
                key = "sit";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "tempore";
                source = "adipisci";
                uploadType = "cumque";
                uploadProtocol = "consequuntur";
            }};            

            BooksMylibraryReadingpositionsGetResponse res = sdk.mylibrary.booksMylibraryReadingpositionsGet(req, new BooksMylibraryReadingpositionsGetSecurity("consequatur", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.readingPosition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksMylibraryReadingpositionsSetPosition

Sets my reading position information for a volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksMylibraryReadingpositionsSetPositionActionEnum;
import org.openapis.openapi.models.operations.BooksMylibraryReadingpositionsSetPositionRequest;
import org.openapis.openapi.models.operations.BooksMylibraryReadingpositionsSetPositionResponse;
import org.openapis.openapi.models.operations.BooksMylibraryReadingpositionsSetPositionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksMylibraryReadingpositionsSetPositionRequest req = new BooksMylibraryReadingpositionsSetPositionRequest("quaerat", "sapiente", "consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "blanditiis";
                action = BooksMylibraryReadingpositionsSetPositionActionEnum.PREV_PAGE;
                alt = AltEnum.PROTO;
                callback = "nulla";
                contentVersion = "quas";
                deviceCookie = "esse";
                fields = "quasi";
                key = "a";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "sint";
                source = "pariatur";
                uploadType = "possimus";
                uploadProtocol = "quia";
            }};            

            BooksMylibraryReadingpositionsSetPositionResponse res = sdk.mylibrary.booksMylibraryReadingpositionsSetPosition(req, new BooksMylibraryReadingpositionsSetPositionSecurity("eveniet", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
