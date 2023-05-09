# proposals

### Available Operations

* [adexchangebuyerProposalsGet](#adexchangebuyerproposalsget) - Get a proposal given its id
* [adexchangebuyerProposalsInsert](#adexchangebuyerproposalsinsert) - Create the given list of proposals
* [adexchangebuyerProposalsPatch](#adexchangebuyerproposalspatch) - Update the given proposal. This method supports patch semantics.
* [adexchangebuyerProposalsSearch](#adexchangebuyerproposalssearch) - Search for proposals using pql query
* [adexchangebuyerProposalsSetupcomplete](#adexchangebuyerproposalssetupcomplete) - Update the given proposal to indicate that setup has been completed.
* [adexchangebuyerProposalsUpdate](#adexchangebuyerproposalsupdate) - Update the given proposal

## adexchangebuyerProposalsGet

Get a proposal given its id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProposalsGetRequest req = new AdexchangebuyerProposalsGetRequest("accusantium") {{
                alt = AltEnum.JSON;
                fields = "qui";
                key = "impedit";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "incidunt";
                userIp = "dicta";
            }};            

            AdexchangebuyerProposalsGetResponse res = sdk.proposals.adexchangebuyerProposalsGet(req, new AdexchangebuyerProposalsGetSecurity("odit", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerProposalsInsert

Create the given list of proposals

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsInsertRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsInsertResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Buyer;
import org.openapis.openapi.models.shared.ContactInformation;
import org.openapis.openapi.models.shared.CreateOrdersRequest;
import org.openapis.openapi.models.shared.MarketplaceDealParty;
import org.openapis.openapi.models.shared.MarketplaceLabel;
import org.openapis.openapi.models.shared.PrivateData;
import org.openapis.openapi.models.shared.Proposal;
import org.openapis.openapi.models.shared.Seller;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProposalsInsertRequest req = new AdexchangebuyerProposalsInsertRequest() {{
                createOrdersRequest = new CreateOrdersRequest() {{
                    proposals = new org.openapis.openapi.models.shared.Proposal[]{{
                        add(new Proposal() {{
                            billedBuyer = new Buyer() {{
                                accountId = "alias";
                            }};
                            buyer = new Buyer() {{
                                accountId = "error";
                            }};
                            buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Malika_Howell@gmail.com";
                                    name = "Dana Berge";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Cayla_Oberbrunner15@yahoo.com";
                                    name = "Kendra Hauck";
                                }}),
                            }};
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "excepturi";
                                referencePayload = "maiores";
                            }};
                            dbmAdvertiserIds = new String[]{{
                                add("velit"),
                                add("reiciendis"),
                                add("amet"),
                            }};
                            hasBuyerSignedOff = false;
                            hasSellerSignedOff = false;
                            inventorySource = "nemo";
                            isRenegotiating = false;
                            isSetupComplete = false;
                            kind = "ipsa";
                            labels = new org.openapis.openapi.models.shared.MarketplaceLabel[]{{
                                add(new MarketplaceLabel() {{
                                    accountId = "tenetur";
                                    createTimeMs = "quas";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "molestiae";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "aliquid";
                                            subAccountId = "asperiores";
                                        }};
                                    }};
                                    label = "a";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "nobis";
                                    createTimeMs = "perspiciatis";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "accusantium";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "dicta";
                                            subAccountId = "minus";
                                        }};
                                    }};
                                    label = "commodi";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "eveniet";
                                    createTimeMs = "porro";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "tempore";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "quidem";
                                            subAccountId = "modi";
                                        }};
                                    }};
                                    label = "voluptates";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "fugit";
                                    createTimeMs = "eius";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "sequi";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "eligendi";
                                            subAccountId = "asperiores";
                                        }};
                                    }};
                                    label = "esse";
                                }}),
                            }};
                            lastUpdaterOrCommentorRole = "blanditiis";
                            name = "Jerald Wilkinson";
                            negotiationId = "itaque";
                            originatorRole = "nulla";
                            privateAuctionId = "deserunt";
                            proposalId = "corporis";
                            proposalState = "velit";
                            revisionNumber = "officiis";
                            revisionTimeMs = "enim";
                            seller = new Seller() {{
                                accountId = "officia";
                                subAccountId = "saepe";
                            }};
                            sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Alford.Nienow50@hotmail.com";
                                    name = "Adrienne Daugherty";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Cara_Gutkowski@hotmail.com";
                                    name = "Byron Farrell";
                                }}),
                            }};
                        }}),
                        add(new Proposal() {{
                            billedBuyer = new Buyer() {{
                                accountId = "laborum";
                            }};
                            buyer = new Buyer() {{
                                accountId = "modi";
                            }};
                            buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Bartholome12@hotmail.com";
                                    name = "Tony Connelly";
                                }}),
                            }};
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "ipsam";
                                referencePayload = "eaque";
                            }};
                            dbmAdvertiserIds = new String[]{{
                                add("veniam"),
                                add("nihil"),
                            }};
                            hasBuyerSignedOff = false;
                            hasSellerSignedOff = false;
                            inventorySource = "ad";
                            isRenegotiating = false;
                            isSetupComplete = false;
                            kind = "nisi";
                            labels = new org.openapis.openapi.models.shared.MarketplaceLabel[]{{
                                add(new MarketplaceLabel() {{
                                    accountId = "quis";
                                    createTimeMs = "quibusdam";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "nemo";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "suscipit";
                                            subAccountId = "pariatur";
                                        }};
                                    }};
                                    label = "sit";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "quidem";
                                    createTimeMs = "repellendus";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "perferendis";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "id";
                                            subAccountId = "sapiente";
                                        }};
                                    }};
                                    label = "sed";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "possimus";
                                    createTimeMs = "repellat";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "repudiandae";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "architecto";
                                            subAccountId = "adipisci";
                                        }};
                                    }};
                                    label = "pariatur";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "harum";
                                    createTimeMs = "dolore";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "voluptatibus";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "iure";
                                            subAccountId = "explicabo";
                                        }};
                                    }};
                                    label = "minus";
                                }}),
                            }};
                            lastUpdaterOrCommentorRole = "soluta";
                            name = "Jacob Wehner";
                            negotiationId = "non";
                            originatorRole = "quasi";
                            privateAuctionId = "mollitia";
                            proposalId = "accusamus";
                            proposalState = "harum";
                            revisionNumber = "cumque";
                            revisionTimeMs = "doloremque";
                            seller = new Seller() {{
                                accountId = "expedita";
                                subAccountId = "corrupti";
                            }};
                            sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Grace27@yahoo.com";
                                    name = "Rodney Prohaska";
                                }}),
                            }};
                        }}),
                        add(new Proposal() {{
                            billedBuyer = new Buyer() {{
                                accountId = "optio";
                            }};
                            buyer = new Buyer() {{
                                accountId = "delectus";
                            }};
                            buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Kathlyn_Ziemann@hotmail.com";
                                    name = "Dr. Ruth Blanda";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Ressie.DuBuque96@hotmail.com";
                                    name = "Mrs. Eric Lueilwitz";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Ellsworth.Schaefer@gmail.com";
                                    name = "Walter Jacobs";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Gregory_Feeney52@gmail.com";
                                    name = "Sherry Walter";
                                }}),
                            }};
                            buyerPrivateData = new PrivateData() {{
                                referenceId = "numquam";
                                referencePayload = "sequi";
                            }};
                            dbmAdvertiserIds = new String[]{{
                                add("sit"),
                                add("rerum"),
                                add("veritatis"),
                            }};
                            hasBuyerSignedOff = false;
                            hasSellerSignedOff = false;
                            inventorySource = "tenetur";
                            isRenegotiating = false;
                            isSetupComplete = false;
                            kind = "autem";
                            labels = new org.openapis.openapi.models.shared.MarketplaceLabel[]{{
                                add(new MarketplaceLabel() {{
                                    accountId = "totam";
                                    createTimeMs = "porro";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "deserunt";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "magni";
                                            subAccountId = "nihil";
                                        }};
                                    }};
                                    label = "voluptas";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "animi";
                                    createTimeMs = "commodi";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "alias";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "fuga";
                                            subAccountId = "aut";
                                        }};
                                    }};
                                    label = "dolore";
                                }}),
                                add(new MarketplaceLabel() {{
                                    accountId = "maxime";
                                    createTimeMs = "aliquam";
                                    deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                        buyer = new Buyer() {{
                                            accountId = "iste";
                                        }};
                                        seller = new Seller() {{
                                            accountId = "ullam";
                                            subAccountId = "eligendi";
                                        }};
                                    }};
                                    label = "placeat";
                                }}),
                            }};
                            lastUpdaterOrCommentorRole = "voluptas";
                            name = "Austin Blanda MD";
                            negotiationId = "ipsam";
                            originatorRole = "quasi";
                            privateAuctionId = "cumque";
                            proposalId = "dicta";
                            proposalState = "harum";
                            revisionNumber = "facere";
                            revisionTimeMs = "facilis";
                            seller = new Seller() {{
                                accountId = "beatae";
                                subAccountId = "cumque";
                            }};
                            sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                                add(new ContactInformation() {{
                                    email = "Mervin_Lowe@gmail.com";
                                    name = "Felipe Stracke";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Phoebe_Schimmel56@gmail.com";
                                    name = "Wm Ryan";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Alfredo86@hotmail.com";
                                    name = "Ms. Clay Boehm";
                                }}),
                                add(new ContactInformation() {{
                                    email = "Terrance70@gmail.com";
                                    name = "Sandra Keeling";
                                }}),
                            }};
                        }}),
                    }};
                    webPropertyCode = "reprehenderit";
                }};;
                alt = AltEnum.JSON;
                fields = "voluptatum";
                key = "blanditiis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "atque";
                userIp = "rerum";
            }};            

            AdexchangebuyerProposalsInsertResponse res = sdk.proposals.adexchangebuyerProposalsInsert(req, new AdexchangebuyerProposalsInsertSecurity("deserunt", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerProposalsPatch

Update the given proposal. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsPatchRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsPatchResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsPatchSecurity;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsPatchUpdateActionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Buyer;
import org.openapis.openapi.models.shared.ContactInformation;
import org.openapis.openapi.models.shared.MarketplaceDealParty;
import org.openapis.openapi.models.shared.MarketplaceLabel;
import org.openapis.openapi.models.shared.PrivateData;
import org.openapis.openapi.models.shared.Proposal;
import org.openapis.openapi.models.shared.Seller;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProposalsPatchRequest req = new AdexchangebuyerProposalsPatchRequest("nostrum", "atque", AdexchangebuyerProposalsPatchUpdateActionEnum.ACCEPT) {{
                proposal = new Proposal() {{
                    billedBuyer = new Buyer() {{
                        accountId = "est";
                    }};;
                    buyer = new Buyer() {{
                        accountId = "enim";
                    }};;
                    buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                        add(new ContactInformation() {{
                            email = "Angelita.Lynch28@gmail.com";
                            name = "Alonzo Wintheiser";
                        }}),
                        add(new ContactInformation() {{
                            email = "Lia.Hahn88@hotmail.com";
                            name = "Noel Hauck";
                        }}),
                        add(new ContactInformation() {{
                            email = "Roslyn48@yahoo.com";
                            name = "Emmett Walsh";
                        }}),
                    }};
                    buyerPrivateData = new PrivateData() {{
                        referenceId = "dicta";
                        referencePayload = "fugit";
                    }};;
                    dbmAdvertiserIds = new String[]{{
                        add("aliquid"),
                    }};
                    hasBuyerSignedOff = false;
                    hasSellerSignedOff = false;
                    inventorySource = "necessitatibus";
                    isRenegotiating = false;
                    isSetupComplete = false;
                    kind = "sed";
                    labels = new org.openapis.openapi.models.shared.MarketplaceLabel[]{{
                        add(new MarketplaceLabel() {{
                            accountId = "sunt";
                            createTimeMs = "nesciunt";
                            deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                buyer = new Buyer() {{
                                    accountId = "delectus";
                                }};
                                seller = new Seller() {{
                                    accountId = "laborum";
                                    subAccountId = "aliquam";
                                }};
                            }};
                            label = "deserunt";
                        }}),
                        add(new MarketplaceLabel() {{
                            accountId = "modi";
                            createTimeMs = "sunt";
                            deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                buyer = new Buyer() {{
                                    accountId = "impedit";
                                }};
                                seller = new Seller() {{
                                    accountId = "eius";
                                    subAccountId = "voluptatum";
                                }};
                            }};
                            label = "ipsa";
                        }}),
                        add(new MarketplaceLabel() {{
                            accountId = "at";
                            createTimeMs = "dolorem";
                            deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                buyer = new Buyer() {{
                                    accountId = "repellat";
                                }};
                                seller = new Seller() {{
                                    accountId = "aspernatur";
                                    subAccountId = "inventore";
                                }};
                            }};
                            label = "sequi";
                        }}),
                    }};
                    lastUpdaterOrCommentorRole = "fugit";
                    name = "Moses Beatty Jr.";
                    negotiationId = "aspernatur";
                    originatorRole = "nulla";
                    privateAuctionId = "enim";
                    proposalId = "illo";
                    proposalState = "magnam";
                    revisionNumber = "delectus";
                    revisionTimeMs = "numquam";
                    seller = new Seller() {{
                        accountId = "optio";
                        subAccountId = "nobis";
                    }};;
                    sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                        add(new ContactInformation() {{
                            email = "Aniyah_Lesch56@hotmail.com";
                            name = "Irene Breitenberg";
                        }}),
                        add(new ContactInformation() {{
                            email = "Elena.West@yahoo.com";
                            name = "Dwight Koepp";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "velit";
                key = "officiis";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "rerum";
                userIp = "itaque";
            }};            

            AdexchangebuyerProposalsPatchResponse res = sdk.proposals.adexchangebuyerProposalsPatch(req, new AdexchangebuyerProposalsPatchSecurity("dignissimos", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerProposalsSearch

Search for proposals using pql query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsSearchRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsSearchResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProposalsSearchRequest req = new AdexchangebuyerProposalsSearchRequest() {{
                alt = AltEnum.JSON;
                fields = "explicabo";
                key = "impedit";
                oauthToken = "aliquid";
                pqlQuery = "quis";
                prettyPrint = false;
                quotaUser = "facilis";
                userIp = "ipsum";
            }};            

            AdexchangebuyerProposalsSearchResponse res = sdk.proposals.adexchangebuyerProposalsSearch(req, new AdexchangebuyerProposalsSearchSecurity("ut", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerProposalsSetupcomplete

Update the given proposal to indicate that setup has been completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsSetupcompleteRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsSetupcompleteResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsSetupcompleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProposalsSetupcompleteRequest req = new AdexchangebuyerProposalsSetupcompleteRequest("architecto") {{
                alt = AltEnum.JSON;
                fields = "praesentium";
                key = "eveniet";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "expedita";
                userIp = "libero";
            }};            

            AdexchangebuyerProposalsSetupcompleteResponse res = sdk.proposals.adexchangebuyerProposalsSetupcomplete(req, new AdexchangebuyerProposalsSetupcompleteSecurity("iste", "illo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerProposalsUpdate

Update the given proposal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsUpdateRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsUpdateResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsUpdateSecurity;
import org.openapis.openapi.models.operations.AdexchangebuyerProposalsUpdateUpdateActionEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Buyer;
import org.openapis.openapi.models.shared.ContactInformation;
import org.openapis.openapi.models.shared.MarketplaceDealParty;
import org.openapis.openapi.models.shared.MarketplaceLabel;
import org.openapis.openapi.models.shared.PrivateData;
import org.openapis.openapi.models.shared.Proposal;
import org.openapis.openapi.models.shared.Seller;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerProposalsUpdateRequest req = new AdexchangebuyerProposalsUpdateRequest("minus", "quos", AdexchangebuyerProposalsUpdateUpdateActionEnum.UPDATE_NON_TERMS) {{
                proposal = new Proposal() {{
                    billedBuyer = new Buyer() {{
                        accountId = "sint";
                    }};;
                    buyer = new Buyer() {{
                        accountId = "iusto";
                    }};;
                    buyerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                        add(new ContactInformation() {{
                            email = "Alvah.Von@hotmail.com";
                            name = "Guadalupe Stanton";
                        }}),
                        add(new ContactInformation() {{
                            email = "Dillon30@yahoo.com";
                            name = "Ebony Donnelly IV";
                        }}),
                    }};
                    buyerPrivateData = new PrivateData() {{
                        referenceId = "debitis";
                        referencePayload = "facere";
                    }};;
                    dbmAdvertiserIds = new String[]{{
                        add("cumque"),
                        add("aliquam"),
                        add("dolorum"),
                        add("deserunt"),
                    }};
                    hasBuyerSignedOff = false;
                    hasSellerSignedOff = false;
                    inventorySource = "ad";
                    isRenegotiating = false;
                    isSetupComplete = false;
                    kind = "reiciendis";
                    labels = new org.openapis.openapi.models.shared.MarketplaceLabel[]{{
                        add(new MarketplaceLabel() {{
                            accountId = "porro";
                            createTimeMs = "laborum";
                            deprecatedMarketplaceDealParty = new MarketplaceDealParty() {{
                                buyer = new Buyer() {{
                                    accountId = "nobis";
                                }};
                                seller = new Seller() {{
                                    accountId = "quibusdam";
                                    subAccountId = "omnis";
                                }};
                            }};
                            label = "aut";
                        }}),
                    }};
                    lastUpdaterOrCommentorRole = "ipsam";
                    name = "Kent Kihn";
                    negotiationId = "accusantium";
                    originatorRole = "ad";
                    privateAuctionId = "nisi";
                    proposalId = "molestiae";
                    proposalState = "quia";
                    revisionNumber = "laudantium";
                    revisionTimeMs = "sed";
                    seller = new Seller() {{
                        accountId = "odit";
                        subAccountId = "iusto";
                    }};;
                    sellerContacts = new org.openapis.openapi.models.shared.ContactInformation[]{{
                        add(new ContactInformation() {{
                            email = "Rick57@gmail.com";
                            name = "Tamara Bashirian";
                        }}),
                        add(new ContactInformation() {{
                            email = "Mara_Hackett53@yahoo.com";
                            name = "Jody Wolff";
                        }}),
                        add(new ContactInformation() {{
                            email = "Maria_Hodkiewicz92@yahoo.com";
                            name = "Elaine Tromp";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "laboriosam";
                key = "voluptatem";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "sequi";
                userIp = "sunt";
            }};            

            AdexchangebuyerProposalsUpdateResponse res = sdk.proposals.adexchangebuyerProposalsUpdate(req, new AdexchangebuyerProposalsUpdateSecurity("vitae", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proposal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
