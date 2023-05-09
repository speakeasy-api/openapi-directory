# customchannels

### Available Operations

* [adsensehostCustomchannelsDelete](#adsensehostcustomchannelsdelete) - Delete a specific custom channel from the host AdSense account.
* [adsensehostCustomchannelsGet](#adsensehostcustomchannelsget) - Get a specific custom channel from the host AdSense account.
* [adsensehostCustomchannelsInsert](#adsensehostcustomchannelsinsert) - Add a new custom channel to the host AdSense account.
* [adsensehostCustomchannelsList](#adsensehostcustomchannelslist) - List all host custom channels in this AdSense account.
* [adsensehostCustomchannelsPatch](#adsensehostcustomchannelspatch) - Update a custom channel in the host AdSense account. This method supports patch semantics.
* [adsensehostCustomchannelsUpdate](#adsensehostcustomchannelsupdate) - Update a custom channel in the host AdSense account.

## adsensehostCustomchannelsDelete

Delete a specific custom channel from the host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsDeleteRequest;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsDeleteResponse;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostCustomchannelsDeleteRequest req = new AdsensehostCustomchannelsDeleteRequest("aliquid", "dolorem") {{
                alt = AltEnum.CSV;
                fields = "dolor";
                key = "qui";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "hic";
                userIp = "excepturi";
            }};            

            AdsensehostCustomchannelsDeleteResponse res = sdk.customchannels.adsensehostCustomchannelsDelete(req, new AdsensehostCustomchannelsDeleteSecurity("cum", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostCustomchannelsGet

Get a specific custom channel from the host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsGetResponse;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostCustomchannelsGetRequest req = new AdsensehostCustomchannelsGetRequest("dignissimos", "reiciendis") {{
                alt = AltEnum.CSV;
                fields = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "ipsa";
                userIp = "ipsa";
            }};            

            AdsensehostCustomchannelsGetResponse res = sdk.customchannels.adsensehostCustomchannelsGet(req, new AdsensehostCustomchannelsGetSecurity("iure", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostCustomchannelsInsert

Add a new custom channel to the host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsInsertRequest;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsInsertResponse;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomChannel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostCustomchannelsInsertRequest req = new AdsensehostCustomchannelsInsertRequest("quaerat") {{
                customChannel = new CustomChannel() {{
                    code = "accusamus";
                    id = "bf69280d-1ba7-47a8-9ebf-737ae4203ce5";
                    kind = "saepe";
                    name = "Rosie McKenzie";
                }};;
                alt = AltEnum.JSON;
                fields = "similique";
                key = "alias";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "quaerat";
                userIp = "tempora";
            }};            

            AdsensehostCustomchannelsInsertResponse res = sdk.customchannels.adsensehostCustomchannelsInsert(req, new AdsensehostCustomchannelsInsertSecurity("vel", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostCustomchannelsList

List all host custom channels in this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsListRequest;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsListResponse;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostCustomchannelsListRequest req = new AdsensehostCustomchannelsListRequest("officiis") {{
                alt = AltEnum.CSV;
                fields = "dolorum";
                key = "a";
                maxResults = 456130L;
                oauthToken = "harum";
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "ipsum";
                userIp = "quisquam";
            }};            

            AdsensehostCustomchannelsListResponse res = sdk.customchannels.adsensehostCustomchannelsList(req, new AdsensehostCustomchannelsListSecurity("tenetur", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customChannels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostCustomchannelsPatch

Update a custom channel in the host AdSense account. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsPatchRequest;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsPatchResponse;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomChannel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostCustomchannelsPatchRequest req = new AdsensehostCustomchannelsPatchRequest("tempore", "accusamus") {{
                customChannel = new CustomChannel() {{
                    code = "numquam";
                    id = "53f870b3-26b5-4a73-829c-db1a8422bb67";
                    kind = "molestias";
                    name = "Shawn Doyle";
                }};;
                alt = AltEnum.CSV;
                fields = "sunt";
                key = "ullam";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "hic";
                userIp = "voluptatem";
            }};            

            AdsensehostCustomchannelsPatchResponse res = sdk.customchannels.adsensehostCustomchannelsPatch(req, new AdsensehostCustomchannelsPatchSecurity("cumque", "soluta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostCustomchannelsUpdate

Update a custom channel in the host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsUpdateRequest;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsUpdateResponse;
import org.openapis.openapi.models.operations.AdsensehostCustomchannelsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomChannel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostCustomchannelsUpdateRequest req = new AdsensehostCustomchannelsUpdateRequest("nobis") {{
                customChannel = new CustomChannel() {{
                    code = "et";
                    id = "e31b8b90-f344-43a1-908e-0adcf4b92187";
                    kind = "occaecati";
                    name = "Wilson Terry";
                }};;
                alt = AltEnum.CSV;
                fields = "delectus";
                key = "voluptate";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "vero";
                userIp = "tenetur";
            }};            

            AdsensehostCustomchannelsUpdateResponse res = sdk.customchannels.adsensehostCustomchannelsUpdate(req, new AdsensehostCustomchannelsUpdateSecurity("dignissimos", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
