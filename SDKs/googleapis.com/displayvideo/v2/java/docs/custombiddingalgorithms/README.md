# customBiddingAlgorithms

### Available Operations

* [displayvideoCustomBiddingAlgorithmsCreate](#displayvideocustombiddingalgorithmscreate) - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
* [displayvideoCustomBiddingAlgorithmsGet](#displayvideocustombiddingalgorithmsget) - Gets a custom bidding algorithm.
* [displayvideoCustomBiddingAlgorithmsList](#displayvideocustombiddingalgorithmslist) - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
* [displayvideoCustomBiddingAlgorithmsPatch](#displayvideocustombiddingalgorithmspatch) - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
* [displayvideoCustomBiddingAlgorithmsScriptsCreate](#displayvideocustombiddingalgorithmsscriptscreate) - Creates a new custom bidding script. Returns the newly created script if successful.
* [displayvideoCustomBiddingAlgorithmsScriptsGet](#displayvideocustombiddingalgorithmsscriptsget) - Gets a custom bidding script.
* [displayvideoCustomBiddingAlgorithmsScriptsList](#displayvideocustombiddingalgorithmsscriptslist) - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
* [displayvideoCustomBiddingAlgorithmsUploadScript](#displayvideocustombiddingalgorithmsuploadscript) - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

## displayvideoCustomBiddingAlgorithmsCreate

Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
import org.openapis.openapi.models.shared.CustomBiddingAlgorithmEntityStatusEnum;
import org.openapis.openapi.models.shared.CustomBiddingAlgorithmInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsCreateRequest req = new DisplayvideoCustomBiddingAlgorithmsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                customBiddingAlgorithmInput = new CustomBiddingAlgorithmInput() {{
                    advertiserId = "doloribus";
                    customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum.GOAL_BUILDER_BASED;
                    displayName = "sapiente";
                    entityStatus = CustomBiddingAlgorithmEntityStatusEnum.ENTITY_STATUS_UNSPECIFIED;
                    partnerId = "impedit";
                    sharedAdvertiserIds = new String[]{{
                        add("aspernatur"),
                        add("nobis"),
                    }};
                }};;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "vitae";
                key = "ullam";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "voluptas";
                uploadProtocol = "ratione";
            }};            

            DisplayvideoCustomBiddingAlgorithmsCreateResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsCreate(req, new DisplayvideoCustomBiddingAlgorithmsCreateSecurity("excepturi", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customBiddingAlgorithm != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomBiddingAlgorithmsGet

Gets a custom bidding algorithm.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsGetRequest req = new DisplayvideoCustomBiddingAlgorithmsGetRequest("est") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                advertiserId = "impedit";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "nisi";
                key = "dolor";
                oauthToken = "fugit";
                partnerId = "dolore";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "maxime";
                uploadProtocol = "expedita";
            }};            

            DisplayvideoCustomBiddingAlgorithmsGetResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsGet(req, new DisplayvideoCustomBiddingAlgorithmsGetSecurity("accusantium", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customBiddingAlgorithm != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomBiddingAlgorithmsList

Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsListRequest req = new DisplayvideoCustomBiddingAlgorithmsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                advertiserId = "optio";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "consequuntur";
                filter = "repellendus";
                key = "sit";
                oauthToken = "dolores";
                orderBy = "enim";
                pageSize = 136432L;
                pageToken = "perspiciatis";
                partnerId = "magni";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "alias";
                uploadProtocol = "quidem";
            }};            

            DisplayvideoCustomBiddingAlgorithmsListResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsList(req, new DisplayvideoCustomBiddingAlgorithmsListSecurity("deleniti", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCustomBiddingAlgorithmsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomBiddingAlgorithmsPatch

Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
import org.openapis.openapi.models.shared.CustomBiddingAlgorithmEntityStatusEnum;
import org.openapis.openapi.models.shared.CustomBiddingAlgorithmInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsPatchRequest req = new DisplayvideoCustomBiddingAlgorithmsPatchRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                customBiddingAlgorithmInput = new CustomBiddingAlgorithmInput() {{
                    advertiserId = "fugit";
                    customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum.CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED;
                    displayName = "at";
                    entityStatus = CustomBiddingAlgorithmEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    partnerId = "praesentium";
                    sharedAdvertiserIds = new String[]{{
                        add("exercitationem"),
                        add("cum"),
                        add("voluptatum"),
                    }};
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "dolores";
                key = "dolore";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "facilis";
                updateMask = "cupiditate";
                uploadType = "nemo";
                uploadProtocol = "natus";
            }};            

            DisplayvideoCustomBiddingAlgorithmsPatchResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsPatch(req, new DisplayvideoCustomBiddingAlgorithmsPatchSecurity("nisi", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customBiddingAlgorithm != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomBiddingAlgorithmsScriptsCreate

Creates a new custom bidding script. Returns the newly created script if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomBiddingScriptInput;
import org.openapis.openapi.models.shared.CustomBiddingScriptRef;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest req = new DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                customBiddingScriptInput = new CustomBiddingScriptInput() {{
                    script = new CustomBiddingScriptRef() {{
                        resourceName = "nostrum";
                    }};;
                }};;
                accessToken = "qui";
                advertiserId = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "ullam";
                key = "velit";
                oauthToken = "adipisci";
                partnerId = "cupiditate";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "fugiat";
            }};            

            DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsScriptsCreate(req, new DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity("molestiae", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customBiddingScript != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomBiddingAlgorithmsScriptsGet

Gets a custom bidding script.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest req = new DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest("repellendus", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                advertiserId = "vel";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "nesciunt";
                key = "corrupti";
                oauthToken = "cupiditate";
                partnerId = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "dolorum";
                uploadProtocol = "soluta";
            }};            

            DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsScriptsGet(req, new DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity("cum", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customBiddingScript != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomBiddingAlgorithmsScriptsList

Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsScriptsListRequest req = new DisplayvideoCustomBiddingAlgorithmsScriptsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                advertiserId = "fugit";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "doloremque";
                key = "est";
                oauthToken = "qui";
                orderBy = "praesentium";
                pageSize = 237189L;
                pageToken = "totam";
                partnerId = "qui";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "eligendi";
                uploadProtocol = "incidunt";
            }};            

            DisplayvideoCustomBiddingAlgorithmsScriptsListResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsScriptsList(req, new DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity("deleniti", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCustomBiddingScriptsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoCustomBiddingAlgorithmsUploadScript

Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse;
import org.openapis.openapi.models.operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest req = new DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                advertiserId = "odit";
                alt = AltEnum.JSON;
                callback = "inventore";
                fields = "minima";
                key = "facilis";
                oauthToken = "facilis";
                partnerId = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "ipsam";
                uploadProtocol = "voluptatem";
            }};            

            DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsUploadScript(req, new DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity("illo", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customBiddingScriptRef != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
