# captions

### Available Operations

* [youtubeCaptionsDelete](#youtubecaptionsdelete) - Deletes a resource.
* [youtubeCaptionsDownload](#youtubecaptionsdownload) - Downloads a caption track.
* [youtubeCaptionsInsert](#youtubecaptionsinsert) - Inserts a new resource into this collection.
* [youtubeCaptionsList](#youtubecaptionslist) - Retrieves a list of resources, possibly filtered.
* [youtubeCaptionsUpdate](#youtubecaptionsupdate) - Updates an existing resource.

## youtubeCaptionsDelete

Deletes a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCaptionsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeCaptionsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeCaptionsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeCaptionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeCaptionsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCaptionsDeleteRequest req = new YoutubeCaptionsDeleteRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "incidunt";
                key = "aspernatur";
                oauthToken = "dolores";
                onBehalfOf = "distinctio";
                onBehalfOfContentOwner = "facilis";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "quam";
                uploadProtocol = "molestias";
            }};            

            YoutubeCaptionsDeleteResponse res = sdk.captions.youtubeCaptionsDelete(req, new YoutubeCaptionsDeleteSecurity() {{
                option1 = new YoutubeCaptionsDeleteSecurityOption1("temporibus", "qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## youtubeCaptionsDownload

Downloads a caption track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCaptionsDownloadRequest;
import org.openapis.openapi.models.operations.YoutubeCaptionsDownloadResponse;
import org.openapis.openapi.models.operations.YoutubeCaptionsDownloadSecurity;
import org.openapis.openapi.models.operations.YoutubeCaptionsDownloadSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeCaptionsDownloadSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCaptionsDownloadRequest req = new YoutubeCaptionsDownloadRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "sunt";
                fields = "ullam";
                key = "nam";
                oauthToken = "hic";
                onBehalfOf = "voluptatem";
                onBehalfOfContentOwner = "cumque";
                prettyPrint = false;
                quotaUser = "soluta";
                tfmt = "nobis";
                tlang = "et";
                uploadType = "saepe";
                uploadProtocol = "ipsum";
            }};            

            YoutubeCaptionsDownloadResponse res = sdk.captions.youtubeCaptionsDownload(req, new YoutubeCaptionsDownloadSecurity() {{
                option1 = new YoutubeCaptionsDownloadSecurityOption1("veritatis", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## youtubeCaptionsInsert

Inserts a new resource into this collection.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCaptionsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeCaptionsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeCaptionsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeCaptionsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeCaptionsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Caption;
import org.openapis.openapi.models.shared.CaptionSnippet;
import org.openapis.openapi.models.shared.CaptionSnippetAudioTrackTypeEnum;
import org.openapis.openapi.models.shared.CaptionSnippetFailureReasonEnum;
import org.openapis.openapi.models.shared.CaptionSnippetStatusEnum;
import org.openapis.openapi.models.shared.CaptionSnippetTrackKindEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCaptionsInsertRequest req = new YoutubeCaptionsInsertRequest(                new String[]{{
                                add("tempore"),
                                add("cupiditate"),
                                add("aperiam"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "dolorem".getBytes();
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "dolorum";
                key = "architecto";
                oauthToken = "quae";
                onBehalfOf = "aut";
                onBehalfOfContentOwner = "quas";
                prettyPrint = false;
                quotaUser = "itaque";
                sync = false;
                uploadType = "consequatur";
                uploadProtocol = "est";
            }};            

            YoutubeCaptionsInsertResponse res = sdk.captions.youtubeCaptionsInsert(req, new YoutubeCaptionsInsertSecurity() {{
                option1 = new YoutubeCaptionsInsertSecurityOption1("repellendus", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.caption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeCaptionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCaptionsListRequest;
import org.openapis.openapi.models.operations.YoutubeCaptionsListResponse;
import org.openapis.openapi.models.operations.YoutubeCaptionsListSecurity;
import org.openapis.openapi.models.operations.YoutubeCaptionsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeCaptionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCaptionsListRequest req = new YoutubeCaptionsListRequest(                new String[]{{
                                add("ut"),
                                add("facilis"),
                                add("cupiditate"),
                                add("qui"),
                            }}, "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "quisquam";
                id = new String[]{{
                    add("omnis"),
                    add("quis"),
                    add("ipsum"),
                    add("delectus"),
                }};
                key = "voluptate";
                oauthToken = "consectetur";
                onBehalfOf = "vero";
                onBehalfOfContentOwner = "tenetur";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "hic";
                uploadProtocol = "distinctio";
            }};            

            YoutubeCaptionsListResponse res = sdk.captions.youtubeCaptionsList(req, new YoutubeCaptionsListSecurity() {{
                option1 = new YoutubeCaptionsListSecurityOption1("quod", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.captionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeCaptionsUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeCaptionsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeCaptionsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeCaptionsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubeCaptionsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeCaptionsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Caption;
import org.openapis.openapi.models.shared.CaptionSnippet;
import org.openapis.openapi.models.shared.CaptionSnippetAudioTrackTypeEnum;
import org.openapis.openapi.models.shared.CaptionSnippetFailureReasonEnum;
import org.openapis.openapi.models.shared.CaptionSnippetStatusEnum;
import org.openapis.openapi.models.shared.CaptionSnippetTrackKindEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeCaptionsUpdateRequest req = new YoutubeCaptionsUpdateRequest(                new String[]{{
                                add("facilis"),
                                add("vero"),
                                add("ducimus"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "quibusdam".getBytes();
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "impedit";
                key = "aut";
                oauthToken = "voluptatibus";
                onBehalfOf = "exercitationem";
                onBehalfOfContentOwner = "nulla";
                prettyPrint = false;
                quotaUser = "fugit";
                sync = false;
                uploadType = "porro";
                uploadProtocol = "maiores";
            }};            

            YoutubeCaptionsUpdateResponse res = sdk.captions.youtubeCaptionsUpdate(req, new YoutubeCaptionsUpdateSecurity() {{
                option1 = new YoutubeCaptionsUpdateSecurityOption1("doloribus", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.caption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
