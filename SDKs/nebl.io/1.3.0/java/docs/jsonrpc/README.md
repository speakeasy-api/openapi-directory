# jsonRpc

### Available Operations

* [jsonRpc](#jsonrpc) - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

## jsonRpc

Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JsonRpcResponse;
import org.openapis.openapi.models.operations.JsonRpcSecurity;
import org.openapis.openapi.models.shared.RpcRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RpcRequest req = new RpcRequest("neblio-apis", "1.0", "getstakinginfo",                 new String[]{{
                                add("excepturi"),
                                add("nisi"),
                            }});            

            JsonRpcResponse res = sdk.jsonRpc.jsonRpc(req, new JsonRpcSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.rpcResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
