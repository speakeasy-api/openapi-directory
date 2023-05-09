# testnetFaucet

### Available Operations

* [testnetGetFaucet](#testnetgetfaucet) - Withdraws testnet NEBL to the specified address

## testnetGetFaucet

Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetFaucetRequest;
import org.openapis.openapi.models.operations.TestnetGetFaucetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetFaucetRequest req = new TestnetGetFaucetRequest("dignissimos") {{
                amount = 543.38;
            }};            

            TestnetGetFaucetResponse res = sdk.testnetFaucet.testnetGetFaucet(req);

            if (res.getFaucetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
