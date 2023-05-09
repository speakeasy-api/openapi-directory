# testnetNtp1

### Available Operations

* [testnetBroadcastTx](#testnetbroadcasttx) - Broadcasts a signed raw transaction to the network
* [testnetBurnToken](#testnetburntoken) - Builds a transaction that burns an NTP1 Token
* [testnetGetAddressInfo](#testnetgetaddressinfo) - Information On a Neblio Address
* [testnetGetTokenHolders](#testnetgettokenholders) - Get Addresses Holding a Token
* [testnetGetTokenId](#testnetgettokenid) - Returns the tokenId representing a token
* [testnetGetTokenMetadata](#testnetgettokenmetadata) - Get Metadata of Token
* [testnetGetTokenMetadataOfUtxo](#testnetgettokenmetadataofutxo) - Get UTXO Metadata of Token
* [testnetGetTransactionInfo](#testnetgettransactioninfo) - Information On an NTP1 Transaction
* [testnetIssueToken](#testnetissuetoken) - Builds a transaction that issues a new NTP1 Token
* [testnetSendToken](#testnetsendtoken) - Builds a transaction that sends an NTP1 Token

## testnetBroadcastTx

Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetBroadcastTxResponse;
import org.openapis.openapi.models.shared.BroadcastTxRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BroadcastTxRequest req = new BroadcastTxRequest("occaecati");            

            TestnetBroadcastTxResponse res = sdk.testnetNtp1.testnetBroadcastTx(req);

            if (res.broadcastTxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetBurnToken

Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetBurnTokenResponse;
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
                                    amount = 2378.93;
                                    tokenId = "asperiores";
                                }}),
                                add(new BurnTokenRequestBurn() {{
                                    amount = 9342.14;
                                    tokenId = "modi";
                                }}),
                                add(new BurnTokenRequestBurn() {{
                                    amount = 6139.66;
                                    tokenId = "dolorum";
                                }}),
                            }}, 5356.33) {{
                from = new String[]{{
                    add("provident"),
                    add("nobis"),
                    add("libero"),
                    add("delectus"),
                }};
                transfer = new org.openapis.openapi.models.shared.BurnTokenRequestTransfer[]{{
                    add(new BurnTokenRequestTransfer() {{
                        address = "3222 Dagmar Village";
                        amount = 5695.74;
                        tokenId = "cum";
                    }}),
                    add(new BurnTokenRequestTransfer() {{
                        address = "4926 Arvid Cape";
                        amount = 564.18;
                        tokenId = "iure";
                    }}),
                }};
            }};            

            TestnetBurnTokenResponse res = sdk.testnetNtp1.testnetBurnToken(req);

            if (res.burnTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetAddressInfo

Returns both NEBL and NTP1 token UTXOs held at the given address.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetAddressInfoRequest;
import org.openapis.openapi.models.operations.TestnetGetAddressInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetAddressInfoRequest req = new TestnetGetAddressInfoRequest("odio");            

            TestnetGetAddressInfoResponse res = sdk.testnetNtp1.testnetGetAddressInfo(req);

            if (res.getAddressInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetTokenHolders

Returns the the the addresses holding a token and how many tokens are held


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetTokenHoldersRequest;
import org.openapis.openapi.models.operations.TestnetGetTokenHoldersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetTokenHoldersRequest req = new TestnetGetTokenHoldersRequest("quaerat");            

            TestnetGetTokenHoldersResponse res = sdk.testnetNtp1.testnetGetTokenHolders(req);

            if (res.getTokenHoldersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetTokenId

Translates a token symbol to a tokenId if a token exists with that symbol on the network


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetTokenIdRequest;
import org.openapis.openapi.models.operations.TestnetGetTokenIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetTokenIdRequest req = new TestnetGetTokenIdRequest("accusamus");            

            TestnetGetTokenIdResponse res = sdk.testnetNtp1.testnetGetTokenId(req);

            if (res.getTokenIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetTokenMetadata

Returns the metadata associated with a token.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetTokenMetadataRequest;
import org.openapis.openapi.models.operations.TestnetGetTokenMetadataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetTokenMetadataRequest req = new TestnetGetTokenMetadataRequest("quidem") {{
                verbosity = 9764.05;
            }};            

            TestnetGetTokenMetadataResponse res = sdk.testnetNtp1.testnetGetTokenMetadata(req);

            if (res.getTokenMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetTokenMetadataOfUtxo

Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetTokenMetadataOfUtxoRequest;
import org.openapis.openapi.models.operations.TestnetGetTokenMetadataOfUtxoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetTokenMetadataOfUtxoRequest req = new TestnetGetTokenMetadataOfUtxoRequest("voluptas", "natus") {{
                verbosity = 1796.03;
            }};            

            TestnetGetTokenMetadataOfUtxoResponse res = sdk.testnetNtp1.testnetGetTokenMetadataOfUtxo(req);

            if (res.getTokenMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetGetTransactionInfo

Returns detailed information regarding an NTP1 transaction.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetGetTransactionInfoRequest;
import org.openapis.openapi.models.operations.TestnetGetTransactionInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestnetGetTransactionInfoRequest req = new TestnetGetTransactionInfoRequest("atque");            

            TestnetGetTransactionInfoResponse res = sdk.testnetNtp1.testnetGetTransactionInfo(req);

            if (res.getTransactionInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetIssueToken

Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetIssueTokenResponse;
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

            org.openapis.openapi.models.shared.IssueTokenRequest req = new IssueTokenRequest(246.78, 8546.14, 672.49, "soluta", false,                 new org.openapis.openapi.models.shared.IssueTokenRequestTransfer[]{{
                                add(new IssueTokenRequestTransfer() {{
                                    address = "4656 Rau Well";
                                    amount = 4694.97;
                                }}),
                                add(new IssueTokenRequestTransfer() {{
                                    address = "46921 Daphne Row";
                                    amount = 8815.86;
                                }}),
                                add(new IssueTokenRequestTransfer() {{
                                    address = "93653 Leannon Path";
                                    amount = 0.55;
                                }}),
                            }}) {{
                flags = new IssueTokenRequestFlags() {{
                    splitChange = false;
                }};;
                metadata = new IssueTokenRequestMetadata() {{
                    description = "at";
                    encryptions = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataEncryptions[]{{
                        add(new IssueTokenRequestMetadataEncryptions() {{
                            format = "tempora";
                            key = "vel";
                            pubkey = "quod";
                            type = "officiis";
                        }}),
                        add(new IssueTokenRequestMetadataEncryptions() {{
                            format = "qui";
                            key = "dolorum";
                            pubkey = "a";
                            type = "esse";
                        }}),
                    }};
                    issuer = "harum";
                    rules = new IssueTokenRequestMetadataRules() {{
                        expiration = new IssueTokenRequestMetadataRulesExpiration() {{
                            locked = false;
                            validUntil = 4834.09;
                        }};;
                        fees = new IssueTokenRequestMetadataRulesFees() {{
                            items = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesFeesItems[]{{
                                add(new IssueTokenRequestMetadataRulesFeesItems() {{
                                    address = "927 Funk Gardens";
                                    tokenId = "dolorem";
                                    value = "sapiente";
                                }}),
                            }};
                            locked = false;
                        }};;
                        holders = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataRulesHolders[]{{
                            add(new IssueTokenRequestMetadataRulesHolders() {{
                                address = "0721 Moriah Heights";
                                locked = false;
                            }}),
                            add(new IssueTokenRequestMetadataRulesHolders() {{
                                address = "4221 Schoen Throughway";
                                locked = false;
                            }}),
                            add(new IssueTokenRequestMetadataRulesHolders() {{
                                address = "165 Brendon Dale";
                                locked = false;
                            }}),
                        }};
                    }};;
                    tokenName = "distinctio";
                    urls = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataUrls[]{{
                        add(new IssueTokenRequestMetadataUrls() {{
                            dataHash = "aliquid";
                            mimeType = "quam";
                            name = "Marty Deckow";
                            url = "magni";
                        }}),
                        add(new IssueTokenRequestMetadataUrls() {{
                            dataHash = "odio";
                            mimeType = "sunt";
                            name = "Miss Candice Weimann";
                            url = "nobis";
                        }}),
                        add(new IssueTokenRequestMetadataUrls() {{
                            dataHash = "et";
                            mimeType = "saepe";
                            name = "Carolyn Rohan";
                            url = "cupiditate";
                        }}),
                    }};
                    userData = new IssueTokenRequestMetadataUserData() {{
                        meta = new org.openapis.openapi.models.shared.IssueTokenRequestMetadataUserDataMeta[]{{
                            add(new IssueTokenRequestMetadataUserDataMeta() {{
                                key = "delectus";
                                value = "dolorem";
                            }}),
                        }};
                    }};;
                }};;
            }};            

            TestnetIssueTokenResponse res = sdk.testnetNtp1.testnetIssueToken(req);

            if (res.issueTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testnetSendToken

Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestnetSendTokenResponse;
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

            org.openapis.openapi.models.shared.SendTokenRequest req = new SendTokenRequest(2921.47,                 new org.openapis.openapi.models.shared.SendTokenRequestTo[]{{
                                add(new SendTokenRequestTo() {{
                                    address = "61005 Altenwerth Point";
                                    amount = 8330.38;
                                    tokenId = "porro";
                                }}),
                                add(new SendTokenRequestTo() {{
                                    address = "275 Anissa Mall";
                                    amount = 4856.28;
                                    tokenId = "occaecati";
                                }}),
                            }}) {{
                flags = new SendTokenRequestFlags() {{
                    splitChange = false;
                }};;
                from = new String[]{{
                    add("quisquam"),
                    add("vero"),
                    add("omnis"),
                    add("quis"),
                }};
                metadata = new SendTokenRequestMetadata() {{
                    description = "ipsum";
                    encryptions = new org.openapis.openapi.models.shared.SendTokenRequestMetadataEncryptions[]{{
                        add(new SendTokenRequestMetadataEncryptions() {{
                            format = "voluptate";
                            key = "consectetur";
                            pubkey = "vero";
                            type = "tenetur";
                        }}),
                        add(new SendTokenRequestMetadataEncryptions() {{
                            format = "dignissimos";
                            key = "hic";
                            pubkey = "distinctio";
                            type = "quod";
                        }}),
                        add(new SendTokenRequestMetadataEncryptions() {{
                            format = "odio";
                            key = "similique";
                            pubkey = "facilis";
                            type = "vero";
                        }}),
                        add(new SendTokenRequestMetadataEncryptions() {{
                            format = "ducimus";
                            key = "dolore";
                            pubkey = "quibusdam";
                            type = "illum";
                        }}),
                    }};
                    issuer = "sequi";
                    rules = new SendTokenRequestMetadataRules() {{
                        expiration = new SendTokenRequestMetadataRulesExpiration() {{
                            locked = false;
                            validUntil = 6178.77;
                        }};;
                        fees = new SendTokenRequestMetadataRulesFees() {{
                            items = new org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesFeesItems[]{{
                                add(new SendTokenRequestMetadataRulesFeesItems() {{
                                    address = "93817 Wyman Lights";
                                    tokenId = "eligendi";
                                    value = "ducimus";
                                }}),
                                add(new SendTokenRequestMetadataRulesFeesItems() {{
                                    address = "62341 Reinhold Fort";
                                    tokenId = "ratione";
                                    value = "ex";
                                }}),
                                add(new SendTokenRequestMetadataRulesFeesItems() {{
                                    address = "1290 Sage Mountain";
                                    tokenId = "voluptatibus";
                                    value = "nostrum";
                                }}),
                                add(new SendTokenRequestMetadataRulesFeesItems() {{
                                    address = "794 Herzog Glens";
                                    tokenId = "aliquid";
                                    value = "inventore";
                                }}),
                            }};
                            locked = false;
                        }};;
                        holders = new org.openapis.openapi.models.shared.SendTokenRequestMetadataRulesHolders[]{{
                            add(new SendTokenRequestMetadataRulesHolders() {{
                                address = "7291 Amir Villages";
                                locked = false;
                            }}),
                            add(new SendTokenRequestMetadataRulesHolders() {{
                                address = "005 Haag Creek";
                                locked = false;
                            }}),
                        }};
                    }};;
                    tokenName = "accusamus";
                    urls = new org.openapis.openapi.models.shared.SendTokenRequestMetadataUrls[]{{
                        add(new SendTokenRequestMetadataUrls() {{
                            dataHash = "non";
                            mimeType = "et";
                            name = "Neal Schroeder";
                            url = "autem";
                        }}),
                    }};
                    userData = new SendTokenRequestMetadataUserData() {{
                        meta = new org.openapis.openapi.models.shared.SendTokenRequestMetadataUserDataMeta[]{{
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "quas";
                                value = "assumenda";
                            }}),
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "nulla";
                                value = "voluptas";
                            }}),
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "libero";
                                value = "quasi";
                            }}),
                            add(new SendTokenRequestMetadataUserDataMeta() {{
                                key = "tempora";
                                value = "numquam";
                            }}),
                        }};
                    }};;
                }};;
                sendutxo = new String[]{{
                    add("provident"),
                }};
            }};            

            TestnetSendTokenResponse res = sdk.testnetNtp1.testnetSendToken(req);

            if (res.sendTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
