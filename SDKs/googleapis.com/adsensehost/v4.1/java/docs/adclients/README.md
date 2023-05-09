# adclients

### Available Operations

* [adsensehostAdclientsGet](#adsensehostadclientsget) - Get information about one of the ad clients in the Host AdSense account.
* [adsensehostAdclientsList](#adsensehostadclientslist) - List all host ad clients in this AdSense account.

## adsensehostAdclientsGet

Get information about one of the ad clients in the Host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAdclientsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostAdclientsGetResponse;
import org.openapis.openapi.models.operations.AdsensehostAdclientsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAdclientsGetRequest req = new AdsensehostAdclientsGetRequest("hic") {{
                alt = AltEnum.JSON;
                fields = "nobis";
                key = "dolores";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                userIp = "dignissimos";
            }};            

            AdsensehostAdclientsGetResponse res = sdk.adclients.adsensehostAdclientsGet(req, new AdsensehostAdclientsGetSecurity("eaque", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adClient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAdclientsList

List all host ad clients in this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAdclientsListRequest;
import org.openapis.openapi.models.operations.AdsensehostAdclientsListResponse;
import org.openapis.openapi.models.operations.AdsensehostAdclientsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAdclientsListRequest req = new AdsensehostAdclientsListRequest() {{
                alt = AltEnum.CSV;
                fields = "eos";
                key = "perferendis";
                maxResults = 170986L;
                oauthToken = "minus";
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "dolor";
                userIp = "vero";
            }};            

            AdsensehostAdclientsListResponse res = sdk.adclients.adsensehostAdclientsList(req, new AdsensehostAdclientsListSecurity("nostrum", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adClients != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
