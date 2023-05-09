# testnetInsight

### Available Operations

* [testnetGetAddress](#testnetgetaddress) - Returns address object
* [testnetGetAddressBalance](#testnetgetaddressbalance) - Returns address balance in sats
* [testnetGetAddressTotalReceived](#testnetgetaddresstotalreceived) - Returns total received by address in sats
* [testnetGetAddressTotalSent](#testnetgetaddresstotalsent) - Returns total sent by address in sats
* [testnetGetAddressUnconfirmedBalance](#testnetgetaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [testnetGetAddressUtxos](#testnetgetaddressutxos) - Returns all UTXOs at a given address
* [testnetGetBlock](#testnetgetblock) - Returns information regarding a Neblio block
* [testnetGetBlockIndex](#testnetgetblockindex) - Returns block hash of block
* [testnetGetRawTx](#testnetgetrawtx) - Returns raw transaction hex
* [testnetGetStatus](#testnetgetstatus) - Utility API for calling several blockchain node functions
* [testnetGetSync](#testnetgetsync) - Get node sync status
* [testnetGetTx](#testnetgettx) - Returns transaction object
* [testnetGetTxs](#testnetgettxs) - Get transactions by block or address
* [testnetSendTx](#testnetsendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

## testnetGetAddress

Returns NEBL address object containing information on a specific address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetAddressRequest;
import org.openapis.openapi.models.operations.TestnetGetAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetAddressRequest req = new TestnetGetAddressRequest("quis");            

            TestnetGetAddressResponse res = sdk.testnetInsight.testnetGetAddress(req);

            if (res.getAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetAddressBalance

Returns NEBL address balance in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetAddressBalanceRequest;
import org.openapis.openapi.models.operations.TestnetGetAddressBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetAddressBalanceRequest req = new TestnetGetAddressBalanceRequest("nesciunt");            

            TestnetGetAddressBalanceResponse res = sdk.testnetInsight.testnetGetAddressBalance(req);

            if (res.getAddressBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetAddressTotalReceived

Returns total NEBL received by address in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetAddressTotalReceivedRequest;
import org.openapis.openapi.models.operations.TestnetGetAddressTotalReceivedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetAddressTotalReceivedRequest req = new TestnetGetAddressTotalReceivedRequest("eos");            

            TestnetGetAddressTotalReceivedResponse res = sdk.testnetInsight.testnetGetAddressTotalReceived(req);

            if (res.getAddressTotalReceivedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetAddressTotalSent

Returns total NEBL sent by address in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetAddressTotalSentRequest;
import org.openapis.openapi.models.operations.TestnetGetAddressTotalSentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetAddressTotalSentRequest req = new TestnetGetAddressTotalSentRequest("perferendis");            

            TestnetGetAddressTotalSentResponse res = sdk.testnetInsight.testnetGetAddressTotalSent(req);

            if (res.getAddressTotalSentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetAddressUnconfirmedBalance

Returns NEBL address unconfirmed balance in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetAddressUnconfirmedBalanceRequest;
import org.openapis.openapi.models.operations.TestnetGetAddressUnconfirmedBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetAddressUnconfirmedBalanceRequest req = new TestnetGetAddressUnconfirmedBalanceRequest("dolores");            

            TestnetGetAddressUnconfirmedBalanceResponse res = sdk.testnetInsight.testnetGetAddressUnconfirmedBalance(req);

            if (res.getAddressUnconfirmedBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetAddressUtxos

Returns information on each Unspent Transaction Output contained at an address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetAddressUtxosRequest;
import org.openapis.openapi.models.operations.TestnetGetAddressUtxosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetAddressUtxosRequest req = new TestnetGetAddressUtxosRequest("minus");            

            TestnetGetAddressUtxosResponse res = sdk.testnetInsight.testnetGetAddressUtxos(req);

            if (res.getAddressUtxosResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetBlock

Returns blockchain data for a given block based upon the block hash

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetBlockRequest;
import org.openapis.openapi.models.operations.TestnetGetBlockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetBlockRequest req = new TestnetGetBlockRequest("quam");            

            TestnetGetBlockResponse res = sdk.testnetInsight.testnetGetBlock(req);

            if (res.getBlockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetBlockIndex

Returns the block hash of a block at a given block index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetBlockIndexRequest;
import org.openapis.openapi.models.operations.TestnetGetBlockIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetBlockIndexRequest req = new TestnetGetBlockIndexRequest(2239.24);            

            TestnetGetBlockIndexResponse res = sdk.testnetInsight.testnetGetBlockIndex(req);

            if (res.getBlockIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetRawTx

Returns raw transaction hex representing a NEBL transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetRawTxRequest;
import org.openapis.openapi.models.operations.TestnetGetRawTxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetRawTxRequest req = new TestnetGetRawTxRequest("vero");            

            TestnetGetRawTxResponse res = sdk.testnetInsight.testnetGetRawTx(req);

            if (res.getRawTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetStatus

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetStatusRequest;
import org.openapis.openapi.models.operations.TestnetGetStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetStatusRequest req = new TestnetGetStatusRequest() {{
                q = "nostrum";
            }};            

            TestnetGetStatusResponse res = sdk.testnetInsight.testnetGetStatus(req);

            if (res.getStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetSync

Returns information on the node's sync progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetSyncResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetSyncResponse res = sdk.testnetInsight.testnetGetSync();

            if (res.getSyncResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetTx

Returns NEBL transaction object representing a NEBL transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetTxRequest;
import org.openapis.openapi.models.operations.TestnetGetTxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetTxRequest req = new TestnetGetTxRequest("hic");            

            TestnetGetTxResponse res = sdk.testnetInsight.testnetGetTx(req);

            if (res.getTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetTxs

Returns all transactions by block or address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetTxsRequest;
import org.openapis.openapi.models.operations.TestnetGetTxsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetTxsRequest req = new TestnetGetTxsRequest() {{
                address = "675 Ottilie Crossroad";
                block = "blanditiis";
                pageNum = 6214.79;
            }};            

            TestnetGetTxsResponse res = sdk.testnetInsight.testnetGetTxs(req);

            if (res.getTxsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetSendTx

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetSendTxResponse;
import org.openapis.openapi.models.shared.SendTxRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SendTxRequest req = new SendTxRequest("eaque");            

            TestnetSendTxResponse res = sdk.testnetInsight.testnetSendTx(req);

            if (res.broadcastTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
