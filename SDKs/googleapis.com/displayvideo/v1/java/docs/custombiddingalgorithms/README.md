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
                dollarXgafv = XgafvEnum.TWO;
                customBiddingAlgorithmInput = new CustomBiddingAlgorithmInput() {{
                    advertiserId = "possimus";
                    customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum.CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED;
                    displayName = "consectetur";
                    entityStatus = CustomBiddingAlgorithmEntityStatusEnum.ENTITY_STATUS_UNSPECIFIED;
                    partnerId = "minima";
                    sharedAdvertiserIds = new String[]{{
                        add("facilis"),
                        add("deserunt"),
                        add("nisi"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "iure";
                key = "incidunt";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "ea";
                uploadProtocol = "asperiores";
            }};            

            DisplayvideoCustomBiddingAlgorithmsCreateResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsCreate(req, new DisplayvideoCustomBiddingAlgorithmsCreateSecurity("veniam", "quidem") {{
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

            DisplayvideoCustomBiddingAlgorithmsGetRequest req = new DisplayvideoCustomBiddingAlgorithmsGetRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                advertiserId = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "architecto";
                key = "expedita";
                oauthToken = "quisquam";
                partnerId = "praesentium";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "assumenda";
                uploadProtocol = "repudiandae";
            }};            

            DisplayvideoCustomBiddingAlgorithmsGetResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsGet(req, new DisplayvideoCustomBiddingAlgorithmsGetSecurity("maiores", "ipsum") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                advertiserId = "fugit";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "neque";
                filter = "quod";
                key = "eos";
                oauthToken = "alias";
                orderBy = "ad";
                pageSize = 954595L;
                pageToken = "facere";
                partnerId = "id";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "quaerat";
                uploadProtocol = "aperiam";
            }};            

            DisplayvideoCustomBiddingAlgorithmsListResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsList(req, new DisplayvideoCustomBiddingAlgorithmsListSecurity("dignissimos", "quam") {{
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

            DisplayvideoCustomBiddingAlgorithmsPatchRequest req = new DisplayvideoCustomBiddingAlgorithmsPatchRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                customBiddingAlgorithmInput = new CustomBiddingAlgorithmInput() {{
                    advertiserId = "iure";
                    customBiddingAlgorithmType = CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum.ADS_DATA_HUB_BASED;
                    displayName = "officia";
                    entityStatus = CustomBiddingAlgorithmEntityStatusEnum.ENTITY_STATUS_DRAFT;
                    partnerId = "laborum";
                    sharedAdvertiserIds = new String[]{{
                        add("ad"),
                    }};
                }};;
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "voluptas";
                key = "expedita";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "maiores";
                updateMask = "ea";
                uploadType = "vel";
                uploadProtocol = "delectus";
            }};            

            DisplayvideoCustomBiddingAlgorithmsPatchResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsPatch(req, new DisplayvideoCustomBiddingAlgorithmsPatchSecurity("accusamus", "reiciendis") {{
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

            DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest req = new DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest("consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                customBiddingScriptInput = new CustomBiddingScriptInput() {{
                    script = new CustomBiddingScriptRef() {{
                        resourceName = "accusantium";
                    }};;
                }};;
                accessToken = "voluptates";
                advertiserId = "provident";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "numquam";
                key = "non";
                oauthToken = "cum";
                partnerId = "incidunt";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "enim";
                uploadProtocol = "nihil";
            }};            

            DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsScriptsCreate(req, new DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity("libero", "omnis") {{
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

            DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest req = new DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest("excepturi", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                advertiserId = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "est";
                key = "commodi";
                oauthToken = "similique";
                partnerId = "autem";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "recusandae";
                uploadProtocol = "sapiente";
            }};            

            DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsScriptsGet(req, new DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity("id", "odit") {{
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

            DisplayvideoCustomBiddingAlgorithmsScriptsListRequest req = new DisplayvideoCustomBiddingAlgorithmsScriptsListRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                advertiserId = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "doloribus";
                key = "pariatur";
                oauthToken = "aut";
                orderBy = "similique";
                pageSize = 612181L;
                pageToken = "eveniet";
                partnerId = "nam";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "labore";
                uploadProtocol = "voluptate";
            }};            

            DisplayvideoCustomBiddingAlgorithmsScriptsListResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsScriptsList(req, new DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity("voluptatibus", "quam") {{
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

            DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest req = new DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest("nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                advertiserId = "a";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "excepturi";
                key = "aliquid";
                oauthToken = "dolore";
                partnerId = "voluptatem";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "laboriosam";
                uploadProtocol = "culpa";
            }};            

            DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse res = sdk.customBiddingAlgorithms.displayvideoCustomBiddingAlgorithmsUploadScript(req, new DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity("dicta", "atque") {{
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
