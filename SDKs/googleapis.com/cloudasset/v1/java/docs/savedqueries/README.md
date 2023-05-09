# savedQueries

### Available Operations

* [cloudassetSavedQueriesCreate](#cloudassetsavedqueriescreate) - Creates a saved query in a parent project/folder/organization.
* [cloudassetSavedQueriesDelete](#cloudassetsavedqueriesdelete) - Deletes a saved query.
* [cloudassetSavedQueriesGet](#cloudassetsavedqueriesget) - Gets details about a saved query.
* [cloudassetSavedQueriesList](#cloudassetsavedquerieslist) - Lists all saved queries in a parent project/folder/organization.
* [cloudassetSavedQueriesPatch](#cloudassetsavedqueriespatch) - Updates a saved query.

## cloudassetSavedQueriesCreate

Creates a saved query in a parent project/folder/organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesCreateRequest;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesCreateResponse;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesCreateSecurity;
import org.openapis.openapi.models.shared.AccessSelector;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConditionContext;
import org.openapis.openapi.models.shared.IamPolicyAnalysisQuery;
import org.openapis.openapi.models.shared.IdentitySelector;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.QueryContent;
import org.openapis.openapi.models.shared.ResourceSelector;
import org.openapis.openapi.models.shared.SavedQueryInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetSavedQueriesCreateRequest req = new CloudassetSavedQueriesCreateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                savedQueryInput = new SavedQueryInput() {{
                    content = new QueryContent() {{
                        iamPolicyAnalysisQuery = new IamPolicyAnalysisQuery() {{
                            accessSelector = new AccessSelector() {{
                                permissions = new String[]{{
                                    add("commodi"),
                                    add("quam"),
                                }};
                                roles = new String[]{{
                                    add("velit"),
                                    add("error"),
                                }};
                            }};;
                            conditionContext = new ConditionContext() {{
                                accessTime = "quia";
                            }};;
                            identitySelector = new IdentitySelector() {{
                                identity = "quis";
                            }};;
                            options = new Options() {{
                                analyzeServiceAccountImpersonation = false;
                                expandGroups = false;
                                expandResources = false;
                                expandRoles = false;
                                includeDenyPolicyAnalysis = false;
                                outputGroupEdges = false;
                                outputResourceEdges = false;
                            }};;
                            resourceSelector = new ResourceSelector() {{
                                fullResourceName = "vitae";
                            }};;
                            scope = "laborum";
                        }};;
                    }};;
                    description = "animi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("odit", "quo");
                        put("sequi", "tenetur");
                    }};
                    name = "Mr. Alberta Schuster";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                savedQueryId = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            CloudassetSavedQueriesCreateResponse res = sdk.savedQueries.cloudassetSavedQueriesCreate(req, new CloudassetSavedQueriesCreateSecurity("omnis", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.savedQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetSavedQueriesDelete

Deletes a saved query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesDeleteRequest;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesDeleteResponse;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetSavedQueriesDeleteRequest req = new CloudassetSavedQueriesDeleteRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            CloudassetSavedQueriesDeleteResponse res = sdk.savedQueries.cloudassetSavedQueriesDelete(req, new CloudassetSavedQueriesDeleteSecurity("harum", "enim") {{
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

## cloudassetSavedQueriesGet

Gets details about a saved query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesGetRequest;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesGetResponse;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetSavedQueriesGetRequest req = new CloudassetSavedQueriesGetRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "quidem";
                key = "molestias";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "modi";
                uploadProtocol = "praesentium";
            }};            

            CloudassetSavedQueriesGetResponse res = sdk.savedQueries.cloudassetSavedQueriesGet(req, new CloudassetSavedQueriesGetSecurity("rem", "voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.savedQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetSavedQueriesList

Lists all saved queries in a parent project/folder/organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesListRequest;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesListResponse;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetSavedQueriesListRequest req = new CloudassetSavedQueriesListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                filter = "enim";
                key = "consequatur";
                oauthToken = "est";
                pageSize = 842342L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "distinctio";
                uploadProtocol = "quibusdam";
            }};            

            CloudassetSavedQueriesListResponse res = sdk.savedQueries.cloudassetSavedQueriesList(req, new CloudassetSavedQueriesListSecurity("labore", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSavedQueriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudassetSavedQueriesPatch

Updates a saved query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesPatchRequest;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesPatchResponse;
import org.openapis.openapi.models.operations.CloudassetSavedQueriesPatchSecurity;
import org.openapis.openapi.models.shared.AccessSelector;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConditionContext;
import org.openapis.openapi.models.shared.IamPolicyAnalysisQuery;
import org.openapis.openapi.models.shared.IdentitySelector;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.QueryContent;
import org.openapis.openapi.models.shared.ResourceSelector;
import org.openapis.openapi.models.shared.SavedQueryInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetSavedQueriesPatchRequest req = new CloudassetSavedQueriesPatchRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                savedQueryInput = new SavedQueryInput() {{
                    content = new QueryContent() {{
                        iamPolicyAnalysisQuery = new IamPolicyAnalysisQuery() {{
                            accessSelector = new AccessSelector() {{
                                permissions = new String[]{{
                                    add("quos"),
                                    add("perferendis"),
                                    add("magni"),
                                }};
                                roles = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                            }};;
                            conditionContext = new ConditionContext() {{
                                accessTime = "excepturi";
                            }};;
                            identitySelector = new IdentitySelector() {{
                                identity = "tempora";
                            }};;
                            options = new Options() {{
                                analyzeServiceAccountImpersonation = false;
                                expandGroups = false;
                                expandResources = false;
                                expandRoles = false;
                                includeDenyPolicyAnalysis = false;
                                outputGroupEdges = false;
                                outputResourceEdges = false;
                            }};;
                            resourceSelector = new ResourceSelector() {{
                                fullResourceName = "facilis";
                            }};;
                            scope = "tempore";
                        }};;
                    }};;
                    description = "labore";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eum", "non");
                        put("eligendi", "sint");
                        put("aliquid", "provident");
                        put("necessitatibus", "sint");
                    }};
                    name = "Curtis Toy";
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "maiores";
                key = "rerum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "magnam";
                updateMask = "cumque";
                uploadType = "facere";
                uploadProtocol = "ea";
            }};            

            CloudassetSavedQueriesPatchResponse res = sdk.savedQueries.cloudassetSavedQueriesPatch(req, new CloudassetSavedQueriesPatchSecurity("aliquid", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.savedQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
