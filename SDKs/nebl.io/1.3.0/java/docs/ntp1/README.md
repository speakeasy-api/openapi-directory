# ntp1

### Available Operations

* [broadcastTx](#broadcasttx) - Broadcasts a signed raw transaction to the network
* [burnToken](#burntoken) - Builds a transaction that burns an NTP1 Token
* [getAddressInfo](#getaddressinfo) - Information On a Neblio Address
* [getTokenHolders](#gettokenholders) - Get Addresses Holding a Token
* [getTokenId](#gettokenid) - Returns the tokenId representing a token
* [getTokenMetadata](#gettokenmetadata) - Get Metadata of Token
* [getTokenMetadataOfUtxo](#gettokenmetadataofutxo) - Get UTXO Metadata of Token
* [getTransactionInfo](#gettransactioninfo) - Information On an NTP1 Transaction
* [issueToken](#issuetoken) - Builds a transaction that issues a new NTP1 Token
* [sendToken](#sendtoken) - Builds a transaction that sends an NTP1 Token

## broadcastTx

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BroadcastTxResponse;
import org.openapis.openapi.models.shared.BroadcastTxRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BroadcastTxRequest req = new BroadcastTxRequest("ab");            

            BroadcastTxResponse res = sdk.ntp1.broadcastTx(req);

            if (res.broadcastTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## burnToken

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BurnTokenResponse;
import org.openapis.openapi.models.shared.BurnTokenRequest;
import org.openapis.openapi.models.shared.BurnTokenRequestBurn;
import org.openapis.openapi.models.shared.BurnTokenRequestTransfer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BurnTokenRequest req = new BurnTokenRequest(                new org.openapis.openapi.models.shared.BurnTokenRequestBurn[]{{
                                add(new BurnTokenRequestBurn() {{
                                    amount = 871.29;
                                    tokenId = "deserunt";
                                }}),
                                add(new BurnTokenRequestBurn() {{
                                    amount = 202.18;
                                    tokenId = "ipsam";
                                }}),
                            }}, 8326.2) {{
                from = new String[]{{
                    add("quo"),
                    add("odit"),
                    add("at"),
                    add("at"),
                }};
                transfer = new org.openapis.openapi.models.shared.BurnTokenRequestTransfer[]{{
                    add(new BurnTokenRequestTransfer() {{
                        address = "7845 Parisian Course";
                        amount = 7206.33;
                        tokenId = "officia";
                    }}),
                    add(new BurnTokenRequestTransfer() {{
                        address = "1597 Breitenberg Isle";
                        amount = 4736;
                        tokenId = "modi";
                    }}),
                    add(new BurnTokenRequestTransfer() {{
                        address = "77425 Aiden Glen";
                        amount = 6176.36;
                        tokenId = "sed";
                    }}),
                    add(new BurnTokenRequestTransfer() {{
                        address = "2639 Parker Lake";
                        amount = 3595.08;
                        tokenId = "iste";
                    }}),
                }};
            }};            

            BurnTokenResponse res = sdk.ntp1.burnToken(req);

            if (res.burnTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddressInfo

Returns both NEBL and NTP1 token UTXOs held at the given address.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressInfoRequest;
import org.openapis.openapi.models.operations.GetAddressInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressInfoRequest req = new GetAddressInfoRequest("iure");            

            GetAddressInfoResponse res = sdk.ntp1.getAddressInfo(req);

            if (res.getAddressInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTokenHolders

Returns the the the addresses holding a token and how many tokens are held


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenHoldersRequest;
import org.openapis.openapi.models.operations.GetTokenHoldersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenHoldersRequest req = new GetTokenHoldersRequest("saepe");            

            GetTokenHoldersResponse res = sdk.ntp1.getTokenHolders(req);

            if (res.getTokenHoldersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTokenId

Translates a token symbol to a tokenId if a token exists with that symbol on the network


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenIdRequest;
import org.openapis.openapi.models.operations.GetTokenIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenIdRequest req = new GetTokenIdRequest("quidem");            

            GetTokenIdResponse res = sdk.ntp1.getTokenId(req);

            if (res.getTokenIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTokenMetadata

Returns the metadata associated with a token.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenMetadataRequest;
import org.openapis.openapi.models.operations.GetTokenMetadataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenMetadataRequest req = new GetTokenMetadataRequest("architecto") {{
                verbosity = 602.25;
            }};            

            GetTokenMetadataResponse res = sdk.ntp1.getTokenMetadata(req);

            if (res.getTokenMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTokenMetadataOfUtxo

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenMetadataOfUtxoRequest;
import org.openapis.openapi.models.operations.GetTokenMetadataOfUtxoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenMetadataOfUtxoRequest req = new GetTokenMetadataOfUtxoRequest("reiciendis", "est") {{
                verbosity = 6531.4;
            }};            

            GetTokenMetadataOfUtxoResponse res = sdk.ntp1.getTokenMetadataOfUtxo(req);

            if (res.getTokenMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionInfo

Returns detailed information regarding an NTP1 transaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionInfoRequest;
import org.openapis.openapi.models.operations.GetTransactionInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionInfoRequest req = new GetTransactionInfoRequest("laborum");            

            GetTransactionInfoResponse res = sdk.ntp1.getTransactionInfo(req);

            if (res.getTransactionInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueToken

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueTokenResponse;
import org.openapis.openapi.models.shared.IssueTokenRequest;
import org.openapis.openapi.models.shared.IssueTokenRequestFlags;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadata;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataEncryptions;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataRules;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesExpiration;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesFees;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesFeesItems;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesHolders;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataUrls;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataUserData;
import org.openapis.openapi.models.shared.IssueTokenRequestMetadataUserDataMeta;
import org.openapis.openapi.models.shared.IssueTokenRequestTransfer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.IssueTokenRequest req = new IssueTokenRequest(1709.09, 2103.82, 3581.52, "explicabo", false,                 new org.openapis.openapi.models.shared.IssueTokenRequestTransfer[]{{
                                add(new IssueTokenRequestTransfer() {{
                                    address = "63350 Lorenza Ways";
                                    amount = 9589.5;
                                }}),
                                add(new IssueTokenRequestTransfer() {{
                                    address = "62619 McCullough Flat";
                                    amount = 4143.69;
                                }}),
                                add(new IssueTokenRequestTransfer() {{
                                    address = "4261 Bernie Points";
                                    amount = 6563.3;
                                }}),
                                add(new IssueTokenRequestTransfer() {{
                                    address = "17193 Schuster Branch";
                                    amount = 971.01;
                                }}),
                            }}) {{
                flags = new IssueTokenRequestFlags() {{
                    splitChange = false;
                }};;
                metadata = new IssueTokenRequestMetadata() {{
                    description = "error";
                    encryptions = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataEncryptions[]{{
                        add(new IssueTokenRequestMetadataEncryptions() {{
                            format = "laborum";
                            key = "quasi";
                            pubkey = "reiciendis";
                            type = "voluptatibus";
                        }}),
                        add(new IssueTokenRequestMetadataEncryptions() {{
                            format = "vero";
                            key = "nihil";
                            pubkey = "praesentium";
                            type = "voluptatibus";
                        }}),
                        add(new IssueTokenRequestMetadataEncryptions() {{
                            format = "ipsa";
                            key = "omnis";
                            pubkey = "voluptate";
                            type = "cum";
                        }}),
                        add(new IssueTokenRequestMetadataEncryptions() {{
                            format = "perferendis";
                            key = "doloremque";
                            pubkey = "reprehenderit";
                            type = "ut";
                        }}),
                    }};
                    issuer = "maiores";
                    rules = new IssueTokenRequestMetadataRules() {{
                        expiration = new IssueTokenRequestMetadataRulesExpiration() {{
                            locked = false;
                            validUntil = 1201.96;
                        }};;
                        fees = new IssueTokenRequestMetadataRulesFees() {{
                            items = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesFeesItems[]{{
                                add(new IssueTokenRequestMetadataRulesFeesItems() {{
                                    address = "41638 Terrill Causeway";
                                    tokenId = "ipsum";
                                    value = "quidem";
                                }}),
                                add(new IssueTokenRequestMetadataRulesFeesItems() {{
                                    address = "5825 Von Cliffs";
                                    tokenId = "repudiandae";
                                    value = "sint";
                                }}),
                            }};
                            locked = false;
                        }};;
                        holders = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesHolders[]{{
                            add(new IssueTokenRequestMetadataRulesHolders() {{
                                address = "230 Spinka Courts";
                                locked = false;
                            }}),
                        }};
                    }};;
                    tokenName = "deserunt";
                    urls = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataUrls[]{{
                        add(new IssueTokenRequestMetadataUrls() {{
                            dataHash = "quibusdam";
                            mimeType = "labore";
                            name = "Tina Jacobi";
                            url = "perferendis";
                        }}),
                        add(new IssueTokenRequestMetadataUrls() {{
                            dataHash = "magni";
                            mimeType = "assumenda";
                            name = "Linda Corkery";
                            url = "tempora";
                        }}),
                        add(new IssueTokenRequestMetadataUrls() {{
                            dataHash = "facilis";
                            mimeType = "tempore";
                            name = "Lucia Kemmer";
                            url = "sint";
                        }}),
                    }};
                    userData = new IssueTokenRequestMetadataUserData() {{
                        meta = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataUserDataMeta[]{{
                            add(new IssueTokenRequestMetadataUserDataMeta() {{
                                key = "provident";
                                value = "necessitatibus";
                            }}),
                            add(new IssueTokenRequestMetadataUserDataMeta() {{
                                key = "sint";
                                value = "officia";
                            }}),
                        }};
                    }};;
                }};;
            }};            

            IssueTokenResponse res = sdk.ntp1.issueToken(req);

            if (res.issueTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendToken

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTokenResponse;
import org.openapis.openapi.models.shared.SendTokenRequest;
import org.openapis.openapi.models.shared.SendTokenRequestFlags;
import org.openapis.openapi.models.shared.SendTokenRequestMetadata;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataEncryptions;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataRules;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesExpiration;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesFees;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesFeesItems;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesHolders;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataUrls;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataUserData;
import org.openapis.openapi.models.shared.SendTokenRequestMetadataUserDataMeta;
import org.openapis.openapi.models.shared.SendTokenRequestTo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SendTokenRequest req = new SendTokenRequest(2230.81,                 new org.openapis.openapi.models.shared.SendTokenRequestTo[]{{
                                add(new SendTokenRequestTo() {{
                                    address = "644 Wolff Ramp";
                                    amount = 1162.02;
                                    tokenId = "magnam";
                                }}),
                                add(new SendTokenRequestTo() {{
                                    address = "843 Thompson Fields";
                                    amount = 5812.73;
                                    tokenId = "enim";
                                }}),
                                add(new SendTokenRequestTo() {{
                                    address = "965 Olson Lodge";
                                    amount = 5332.06;
                                    tokenId = "sapiente";
                                }}),
                                add(new SendTokenRequestTo() {{
                                    address = "63466 Aileen Lane";
                                    amount = 3015.75;
                                    tokenId = "distinctio";
                                }}),
                            }}) {{
                flags = new SendTokenRequestFlags() {{
                    splitChange = false;
                }};;
                from = new String[]{{
                    add("labore"),
                    add("labore"),
                    add("suscipit"),
                }};
                metadata = new SendTokenRequestMetadata() {{
                    description = "natus";
                    encryptions = new org.openapis.openapi.models.shared.SendTokenRequestMetadataEncryptions[]{{
                        add(new SendTokenRequestMetadataEncryptions() {{
                            format = "eum";
                            key = "vero";
                            pubkey = "aspernatur";
                            type = "architecto";
                        }}),
                        add(new SendTokenRequestMetadataEncryptions() {{
                            format = "magnam";
                            key = "et";
                            pubkey = "excepturi";
                            type = "ullam";
                        }}),
                        add(new SendTokenRequestMetadataEncryptions() {{
                            format = "provident";
                            key = "quos";
                            pubkey = "sint";
                            type = "accusantium";
                        }}),
                    }};
                    issuer = "mollitia";
                    rules = new SendTokenRequestMetadataRules() {{
                        expiration = new SendTokenRequestMetadataRulesExpiration() {{
                            locked = false;
                            validUntil = 9689.62;
                        }};;
                        fees = new SendTokenRequestMetadataRulesFees() {{
                            items = new org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesFeesItems[]{{
                                add(new SendTokenRequestMetadataRulesFeesItems() {{
                                    address = "42813 Hubert Way";
                                    tokenId = "debitis";
                                    value = "eius";
                                }}),
                                add(new SendTokenRequestMetadataRulesFeesItems() {{
                                    address = "574 Bailee Valleys";
                                    tokenId = "ullam";
                                    value = "expedita";
                                }}),
                                add(new SendTokenRequestMetadataRulesFeesItems() {{
                                    address = "9819 Bashirian Crossing";
                                    tokenId = "praesentium";
                                    value = "natus";
                                }}),
                            }};
                            locked = false;
                        }};;
                        holders = new org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesHolders[]{{
                            add(new SendTokenRequestMetadataRulesHolders() {{
                                address = "78884 Connelly Islands";
                                locked = false;
                            }}),
                        }};
                    }};;
                    tokenName = "accusantium";
                    urls = new org.openapis.openapi.models.shared.SendTokenRequestMetadataUrls[]{{
                        add(new SendTokenRequestMetadataUrls() {{
                            dataHash = "maiores";
                            mimeType = "quidem";
                            name = "Colleen Johnston PhD";
                            url = "nemo";
                        }}),
                    }};
                    userData = new SendTokenRequestMetadataUserData() {{
                        meta = new org.openapis.openapi.models.shared.SendTokenRequestMetadataUserDataMeta[]{{
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "perferendis";
                                value = "fugiat";
                            }}),
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "amet";
                                value = "aut";
                            }}),
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "cumque";
                                value = "corporis";
                            }}),
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "hic";
                                value = "libero";
                            }}),
                        }};
                    }};;
                }};;
                sendutxo = new String[]{{
                    add("dolores"),
                    add("quis"),
                    add("totam"),
                }};
            }};            

            SendTokenResponse res = sdk.ntp1.sendToken(req);

            if (res.sendTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
