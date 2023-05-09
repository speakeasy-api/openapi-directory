# groups

### Available Operations

* [youtubeAnalyticsGroupsDelete](#youtubeanalyticsgroupsdelete) - Deletes a group.
* [youtubeAnalyticsGroupsInsert](#youtubeanalyticsgroupsinsert) - Creates a group.
* [youtubeAnalyticsGroupsList](#youtubeanalyticsgroupslist) - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* [youtubeAnalyticsGroupsUpdate](#youtubeanalyticsgroupsupdate) - Modifies a group. For example, you could change a group's title.

## youtubeAnalyticsGroupsDelete

Deletes a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsDeleteSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupsDeleteRequest req = new YoutubeAnalyticsGroupsDeleteRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                id = "9a3efa77-dfb1-44cd-a6ae-395efb9ba88f";
                key = "amet";
                oauthToken = "deserunt";
                onBehalfOfContentOwner = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "natus";
                uploadProtocol = "omnis";
            }};            

            YoutubeAnalyticsGroupsDeleteResponse res = sdk.groups.youtubeAnalyticsGroupsDelete(req, new YoutubeAnalyticsGroupsDeleteSecurity() {{
                option1 = new YoutubeAnalyticsGroupsDeleteSecurityOption1("molestiae", "perferendis") {{
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

## youtubeAnalyticsGroupsInsert

Creates a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsInsertSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ErrorProto;
import org.openapis.openapi.models.shared.ErrorProtoLocationTypeEnum;
import org.openapis.openapi.models.shared.Errors;
import org.openapis.openapi.models.shared.ErrorsCodeEnum;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupContentDetails;
import org.openapis.openapi.models.shared.GroupSnippet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupsInsertRequest req = new YoutubeAnalyticsGroupsInsertRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                group = new Group() {{
                    contentDetails = new GroupContentDetails() {{
                        itemCount = "magnam";
                        itemType = "distinctio";
                    }};;
                    errors = new Errors() {{
                        code = ErrorsCodeEnum.PRECONDITION_FAILED;
                        error = new org.openapis.openapi.models.shared.ErrorProto[]{{
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("suscipit"),
                                    add("natus"),
                                }};
                                code = "nobis";
                                debugInfo = "eum";
                                domain = "vero";
                                externalErrorMessage = "aspernatur";
                                location = "architecto";
                                locationType = ErrorProtoLocationTypeEnum.PATH;
                            }}),
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("excepturi"),
                                }};
                                code = "ullam";
                                debugInfo = "provident";
                                domain = "quos";
                                externalErrorMessage = "sint";
                                location = "accusantium";
                                locationType = ErrorProtoLocationTypeEnum.OTHER;
                            }}),
                        }};
                        requestId = "reiciendis";
                    }};;
                    etag = "mollitia";
                    id = "563e2516-fe4c-48b7-91e5-b7fd2ed02892";
                    kind = "sunt";
                    snippet = new GroupSnippet() {{
                        publishedAt = "quo";
                        title = "Dr.";
                    }};;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                onBehalfOfContentOwner = "accusantium";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            YoutubeAnalyticsGroupsInsertResponse res = sdk.groups.youtubeAnalyticsGroupsInsert(req, new YoutubeAnalyticsGroupsInsertSecurity() {{
                option1 = new YoutubeAnalyticsGroupsInsertSecurityOption1("ipsam", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeAnalyticsGroupsList

Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsListSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupsListRequest req = new YoutubeAnalyticsGroupsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "nemo";
                id = "f0d30c5f-bb25-4870-9320-2c73d5fe9b90";
                key = "porro";
                mine = false;
                oauthToken = "consequuntur";
                onBehalfOfContentOwner = "blanditiis";
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "occaecati";
                uploadProtocol = "rerum";
            }};            

            YoutubeAnalyticsGroupsListResponse res = sdk.groups.youtubeAnalyticsGroupsList(req, new YoutubeAnalyticsGroupsListSecurity() {{
                option1 = new YoutubeAnalyticsGroupsListSecurityOption1("adipisci", "asperiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeAnalyticsGroupsUpdate

Modifies a group. For example, you could change a group's title.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupsUpdateSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ErrorProto;
import org.openapis.openapi.models.shared.ErrorProtoLocationTypeEnum;
import org.openapis.openapi.models.shared.Errors;
import org.openapis.openapi.models.shared.ErrorsCodeEnum;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupContentDetails;
import org.openapis.openapi.models.shared.GroupSnippet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupsUpdateRequest req = new YoutubeAnalyticsGroupsUpdateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                group = new Group() {{
                    contentDetails = new GroupContentDetails() {{
                        itemCount = "modi";
                        itemType = "iste";
                    }};;
                    errors = new Errors() {{
                        code = ErrorsCodeEnum.PRECONDITION_FAILED;
                        error = new org.openapis.openapi.models.shared.ErrorProto[]{{
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("provident"),
                                    add("nobis"),
                                    add("libero"),
                                    add("delectus"),
                                }};
                                code = "quaerat";
                                debugInfo = "quos";
                                domain = "aliquid";
                                externalErrorMessage = "dolorem";
                                location = "dolorem";
                                locationType = ErrorProtoLocationTypeEnum.PATH;
                            }}),
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("ipsum"),
                                }};
                                code = "hic";
                                debugInfo = "excepturi";
                                domain = "cum";
                                externalErrorMessage = "voluptate";
                                location = "dignissimos";
                                locationType = ErrorProtoLocationTypeEnum.PARAMETER;
                            }}),
                            add(new ErrorProto() {{
                                argument = new String[]{{
                                    add("dolorum"),
                                }};
                                code = "numquam";
                                debugInfo = "veritatis";
                                domain = "ipsa";
                                externalErrorMessage = "ipsa";
                                location = "iure";
                                locationType = ErrorProtoLocationTypeEnum.OTHER;
                            }}),
                        }};
                        requestId = "quaerat";
                    }};;
                    etag = "accusamus";
                    id = "bf69280d-1ba7-47a8-9ebf-737ae4203ce5";
                    kind = "saepe";
                    snippet = new GroupSnippet() {{
                        publishedAt = "suscipit";
                        title = "Miss";
                    }};;
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "repellendus";
                fields = "totam";
                key = "similique";
                oauthToken = "alias";
                onBehalfOfContentOwner = "at";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "tempora";
                uploadProtocol = "vel";
            }};            

            YoutubeAnalyticsGroupsUpdateResponse res = sdk.groups.youtubeAnalyticsGroupsUpdate(req, new YoutubeAnalyticsGroupsUpdateSecurity() {{
                option1 = new YoutubeAnalyticsGroupsUpdateSecurityOption1("quod", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
