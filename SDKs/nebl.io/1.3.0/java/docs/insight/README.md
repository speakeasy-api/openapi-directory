# insight

### Available Operations

* [getAddress](#getaddress) - Returns address object
* [getAddressBalance](#getaddressbalance) - Returns address balance in sats
* [getAddressTotalReceived](#getaddresstotalreceived) - Returns total received by address in sats
* [getAddressTotalSent](#getaddresstotalsent) - Returns total sent by address in sats
* [getAddressUnconfirmedBalance](#getaddressunconfirmedbalance) - Returns address unconfirmed balance in sats
* [getAddressUtxos](#getaddressutxos) - Returns all UTXOs at a given address
* [getBlock](#getblock) - Returns information regarding a Neblio block
* [getBlockIndex](#getblockindex) - Returns block hash of block
* [getRawTx](#getrawtx) - Returns raw transaction hex
* [getStatus](#getstatus) - Utility API for calling several blockchain node functions
* [getSync](#getsync) - Get node sync status
* [getTx](#gettx) - Returns transaction object
* [getTxs](#gettxs) - Get transactions by block or address
* [sendTx](#sendtx) - Broadcasts a signed raw transaction to the network (not NTP1 specific)

## getAddress

Returns NEBL address object containing information on a specific address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressRequest;
import org.openapis.openapi.models.operations.GetAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressRequest req = new GetAddressRequest("provident");            

            GetAddressResponse res = sdk.insight.getAddress(req);

            if (res.getAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddressBalance

Returns NEBL address balance in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressBalanceRequest;
import org.openapis.openapi.models.operations.GetAddressBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressBalanceRequest req = new GetAddressBalanceRequest("distinctio");            

            GetAddressBalanceResponse res = sdk.insight.getAddressBalance(req);

            if (res.getAddressBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddressTotalReceived

Returns total NEBL received by address in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressTotalReceivedRequest;
import org.openapis.openapi.models.operations.GetAddressTotalReceivedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressTotalReceivedRequest req = new GetAddressTotalReceivedRequest("quibusdam");            

            GetAddressTotalReceivedResponse res = sdk.insight.getAddressTotalReceived(req);

            if (res.getAddressTotalReceivedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddressTotalSent

Returns total NEBL sent by address in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressTotalSentRequest;
import org.openapis.openapi.models.operations.GetAddressTotalSentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressTotalSentRequest req = new GetAddressTotalSentRequest("unde");            

            GetAddressTotalSentResponse res = sdk.insight.getAddressTotalSent(req);

            if (res.getAddressTotalSentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddressUnconfirmedBalance

Returns NEBL address unconfirmed balance in satoshis

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressUnconfirmedBalanceRequest;
import org.openapis.openapi.models.operations.GetAddressUnconfirmedBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressUnconfirmedBalanceRequest req = new GetAddressUnconfirmedBalanceRequest("nulla");            

            GetAddressUnconfirmedBalanceResponse res = sdk.insight.getAddressUnconfirmedBalance(req);

            if (res.getAddressUnconfirmedBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddressUtxos

Returns information on each Unspent Transaction Output contained at an address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressUtxosRequest;
import org.openapis.openapi.models.operations.GetAddressUtxosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressUtxosRequest req = new GetAddressUtxosRequest("corrupti");            

            GetAddressUtxosResponse res = sdk.insight.getAddressUtxos(req);

            if (res.getAddressUtxosResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlock

Returns blockchain data for a given block based upon the block hash

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockRequest;
import org.openapis.openapi.models.operations.GetBlockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockRequest req = new GetBlockRequest("illum");            

            GetBlockResponse res = sdk.insight.getBlock(req);

            if (res.getBlockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockIndex

Returns the block hash of a block at a given block index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockIndexRequest;
import org.openapis.openapi.models.operations.GetBlockIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockIndexRequest req = new GetBlockIndexRequest(4236.55);            

            GetBlockIndexResponse res = sdk.insight.getBlockIndex(req);

            if (res.getBlockIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRawTx

Returns raw transaction hex representing a NEBL transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRawTxRequest;
import org.openapis.openapi.models.operations.GetRawTxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRawTxRequest req = new GetRawTxRequest("error");            

            GetRawTxResponse res = sdk.insight.getRawTx(req);

            if (res.getRawTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatus

Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatusRequest;
import org.openapis.openapi.models.operations.GetStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatusRequest req = new GetStatusRequest() {{
                q = "deserunt";
            }};            

            GetStatusResponse res = sdk.insight.getStatus(req);

            if (res.getStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSync

Returns information on the node's sync progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyncResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSyncResponse res = sdk.insight.getSync();

            if (res.getSyncResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTx

Returns NEBL transaction object representing a NEBL transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTxRequest;
import org.openapis.openapi.models.operations.GetTxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTxRequest req = new GetTxRequest("suscipit");            

            GetTxResponse res = sdk.insight.getTx(req);

            if (res.getTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTxs

Returns all transactions by block or address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTxsRequest;
import org.openapis.openapi.models.operations.GetTxsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTxsRequest req = new GetTxsRequest() {{
                address = "2809 Geraldine Lights";
                block = "minus";
                pageNum = 8121.69;
            }};            

            GetTxsResponse res = sdk.insight.getTxs(req);

            if (res.getTxsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendTx

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTxResponse;
import org.openapis.openapi.models.shared.SendTxRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SendTxRequest req = new SendTxRequest("voluptatum");            

            SendTxResponse res = sdk.insight.sendTx(req);

            if (res.broadcastTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
