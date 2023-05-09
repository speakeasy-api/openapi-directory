# hlr

### Available Operations

* [getHlr](#gethlr) - Vérifier la validité d'un numéro

## getHlr

Réalise un lookup HLR sur les numéros 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHlrResponse;
import org.openapis.openapi.models.shared.HLRrequest;
import org.openapis.openapi.models.shared.HLRrequestGetHLREnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.HLRrequest req = new HLRrequest(HLRrequestGetHLREnum.ONE, "perferendis",                 new String[]{{
                                add("repellendus"),
                                add("sapiente"),
                            }});            

            GetHlrResponse res = sdk.hlr.getHlr(req);

            if (res.hlrReponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
