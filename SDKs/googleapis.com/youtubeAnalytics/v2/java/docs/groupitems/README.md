# groupItems

### Available Operations

* [youtubeAnalyticsGroupItemsDelete](#youtubeanalyticsgroupitemsdelete) - Removes an item from a group.
* [youtubeAnalyticsGroupItemsInsert](#youtubeanalyticsgroupitemsinsert) - Creates a group item.
* [youtubeAnalyticsGroupItemsList](#youtubeanalyticsgroupitemslist) - Returns a collection of group items that match the API request parameters.

## youtubeAnalyticsGroupItemsDelete

Removes an item from a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupItemsDeleteRequest req = new YoutubeAnalyticsGroupItemsDeleteRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                id = "ba928fc8-1674-42cb-b392-05929396fea7";
                key = "corporis";
                oauthToken = "iste";
                onBehalfOfContentOwner = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            YoutubeAnalyticsGroupItemsDeleteResponse res = sdk.groupItems.youtubeAnalyticsGroupItemsDelete(req, new YoutubeAnalyticsGroupItemsDeleteSecurity() {{
                option1 = new YoutubeAnalyticsGroupItemsDeleteSecurityOption1("ipsa", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.emptyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeAnalyticsGroupItemsInsert

Creates a group item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsInsertSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ErrorProto;
import org.openapis.openapi.models.shared.ErrorProtoLocationTypeEnum;
import org.openapis.openapi.models.shared.Errors;
import org.openapis.openapi.models.shared.ErrorsCodeEnum;
import org.openapis.openapi.models.shared.GroupItem;
import org.openapis.openapi.models.shared.GroupItemResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupItemsInsertRequest req = new YoutubeAnalyticsGroupItemsInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                groupItem = new GroupItem() {{
                    errors = new Errors() {{
                        code = ErrorsCodeEnum.PRECONDITION_FAILED;
                        error = new org.openapis.openapi.models.shared.ErrorProto[]{{
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("dolorem"),
                                }};
                                code = "corporis";
                                debugInfo = "explicabo";
                                domain = "nobis";
                                externalErrorMessage = "enim";
                                location = "omnis";
                                locationType = ErrorProtoLocationTypeEnum.OTHER;
                            }}),
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                code = "iure";
                                debugInfo = "culpa";
                                domain = "doloribus";
                                externalErrorMessage = "sapiente";
                                location = "architecto";
                                locationType = ErrorProtoLocationTypeEnum.OTHER;
                            }}),
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("culpa"),
                                }};
                                code = "consequuntur";
                                debugInfo = "repellat";
                                domain = "mollitia";
                                externalErrorMessage = "occaecati";
                                location = "numquam";
                                locationType = ErrorProtoLocationTypeEnum.OTHER;
                            }}),
                        }};
                        requestId = "quam";
                    }};;
                    etag = "molestiae";
                    groupId = "velit";
                    id = "9251aa52-c3f5-4ad0-99da-1ffe78f097b0";
                    kind = "doloremque";
                    resource = new GroupItemResource() {{
                        id = "74f15471-b5e6-4e13-b99d-488e1e91e450";
                        kind = "est";
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                onBehalfOfContentOwner = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            YoutubeAnalyticsGroupItemsInsertResponse res = sdk.groupItems.youtubeAnalyticsGroupItemsInsert(req, new YoutubeAnalyticsGroupItemsInsertSecurity() {{
                option1 = new YoutubeAnalyticsGroupItemsInsertSecurityOption1("quos", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.groupItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeAnalyticsGroupItemsList

Returns a collection of group items that match the API request parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsListSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupItemsListRequest req = new YoutubeAnalyticsGroupItemsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                groupId = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                onBehalfOfContentOwner = "facilis";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "labore";
                uploadProtocol = "delectus";
            }};            

            YoutubeAnalyticsGroupItemsListResponse res = sdk.groupItems.youtubeAnalyticsGroupItemsList(req, new YoutubeAnalyticsGroupItemsListSecurity() {{
                option1 = new YoutubeAnalyticsGroupItemsListSecurityOption1("eum", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGroupItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
