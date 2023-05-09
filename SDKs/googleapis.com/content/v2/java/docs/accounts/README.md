# accounts

### Available Operations

* [contentAccountsAuthinfo](#contentaccountsauthinfo) - Returns information about the authenticated user.
* [contentAccountsClaimwebsite](#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account.
* [contentAccountsCustombatch](#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [contentAccountsDelete](#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [contentAccountsGet](#contentaccountsget) - Retrieves a Merchant Center account.
* [contentAccountsInsert](#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [contentAccountsLink](#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [contentAccountsList](#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [contentAccountsUpdate](#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

## contentAccountsAuthinfo

Returns information about the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoRequest;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoResponse;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsAuthinfoRequest req = new ContentAccountsAuthinfoRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            ContentAccountsAuthinfoResponse res = sdk.accounts.contentAccountsAuthinfo(req, new ContentAccountsAuthinfoSecurity("voluptatum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsAuthInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsClaimwebsite

Claims the website of a Merchant Center sub-account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsClaimwebsiteRequest;
import org.openapis.openapi.models.operations.ContentAccountsClaimwebsiteResponse;
import org.openapis.openapi.models.operations.ContentAccountsClaimwebsiteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsClaimwebsiteRequest req = new ContentAccountsClaimwebsiteRequest("excepturi", "nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                overwrite = false;
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            ContentAccountsClaimwebsiteResponse res = sdk.accounts.contentAccountsClaimwebsite(req, new ContentAccountsClaimwebsiteSecurity("quo", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsClaimWebsiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsCustombatch

Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsCustombatchRequest;
import org.openapis.openapi.models.operations.ContentAccountsCustombatchResponse;
import org.openapis.openapi.models.operations.ContentAccountsCustombatchSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountAddress;
import org.openapis.openapi.models.shared.AccountAdwordsLink;
import org.openapis.openapi.models.shared.AccountBusinessInformation;
import org.openapis.openapi.models.shared.AccountCustomerService;
import org.openapis.openapi.models.shared.AccountGoogleMyBusinessLink;
import org.openapis.openapi.models.shared.AccountUser;
import org.openapis.openapi.models.shared.AccountYouTubeChannelLink;
import org.openapis.openapi.models.shared.AccountsCustomBatchRequest;
import org.openapis.openapi.models.shared.AccountsCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.AccountsCustomBatchRequestEntryLinkRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsCustombatchRequest req = new ContentAccountsCustombatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accountsCustomBatchRequest = new AccountsCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.AccountsCustomBatchRequestEntry[]{{
                        add(new AccountsCustomBatchRequestEntry() {{
                            account = new Account() {{
                                adultContent = false;
                                adwordsLinks = new org.openapis.openapi.models.shared.AccountAdwordsLink[]{{
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "molestiae";
                                        status = "quod";
                                    }}),
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "quod";
                                        status = "esse";
                                    }}),
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "totam";
                                        status = "porro";
                                    }}),
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "dolorum";
                                        status = "dicta";
                                    }}),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "Puerto Rico";
                                        locality = "officia";
                                        postalCode = "15975-1442";
                                        region = "qui";
                                        streetAddress = "impedit";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Jacky.Emmerich@hotmail.com";
                                        phoneNumber = "perferendis";
                                        url = "ad";
                                    }};
                                    koreanBusinessRegistrationNumber = "natus";
                                    phoneNumber = "sed";
                                }};
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbEmail = "iste";
                                    status = "dolor";
                                }};
                                id = "natus";
                                kind = "laboriosam";
                                name = "Elias Parker";
                                reviewsUrl = "iste";
                                sellerId = "iure";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "quidem";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "architecto";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "ipsa";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "reiciendis";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                }};
                                websiteUrl = "est";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "laborum";
                                        status = "dolores";
                                    }}),
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "dolorem";
                                        status = "corporis";
                                    }}),
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "explicabo";
                                        status = "nobis";
                                    }}),
                                }};
                            }};
                            accountId = "enim";
                            batchId = 607831L;
                            force = false;
                            labelIds = new String[]{{
                                add("minima"),
                                add("excepturi"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "accusantium";
                                linkType = "iure";
                                linkedAccountId = "culpa";
                            }};
                            merchantId = "doloribus";
                            method = "sapiente";
                            overwrite = false;
                        }}),
                        add(new AccountsCustomBatchRequestEntry() {{
                            account = new Account() {{
                                adultContent = false;
                                adwordsLinks = new org.openapis.openapi.models.shared.AccountAdwordsLink[]{{
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "mollitia";
                                        status = "dolorem";
                                    }}),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "New Caledonia";
                                        locality = "consequuntur";
                                        postalCode = "65244-4261";
                                        region = "quis";
                                        streetAddress = "vitae";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Madison77@hotmail.com";
                                        phoneNumber = "sequi";
                                        url = "tenetur";
                                    }};
                                    koreanBusinessRegistrationNumber = "ipsam";
                                    phoneNumber = "id";
                                }};
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbEmail = "possimus";
                                    status = "aut";
                                }};
                                id = "quasi";
                                kind = "error";
                                name = "Neal Boyer";
                                reviewsUrl = "vero";
                                sellerId = "nihil";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "voluptatibus";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "ipsa";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "omnis";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                }};
                                websiteUrl = "voluptate";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "perferendis";
                                        status = "doloremque";
                                    }}),
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "reprehenderit";
                                        status = "ut";
                                    }}),
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "maiores";
                                        status = "dicta";
                                    }}),
                                }};
                            }};
                            accountId = "corporis";
                            batchId = 296140L;
                            force = false;
                            labelIds = new String[]{{
                                add("dicta"),
                                add("harum"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "enim";
                                linkType = "accusamus";
                                linkedAccountId = "commodi";
                            }};
                            merchantId = "repudiandae";
                            method = "quae";
                            overwrite = false;
                        }}),
                        add(new AccountsCustomBatchRequestEntry() {{
                            account = new Account() {{
                                adultContent = false;
                                adwordsLinks = new org.openapis.openapi.models.shared.AccountAdwordsLink[]{{
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "quidem";
                                        status = "molestias";
                                    }}),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "Mayotte";
                                        locality = "pariatur";
                                        postalCode = "55909";
                                        region = "sint";
                                        streetAddress = "veritatis";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Drew66@hotmail.com";
                                        phoneNumber = "quibusdam";
                                        url = "explicabo";
                                    }};
                                    koreanBusinessRegistrationNumber = "deserunt";
                                    phoneNumber = "distinctio";
                                }};
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbEmail = "quibusdam";
                                    status = "labore";
                                }};
                                id = "modi";
                                kind = "qui";
                                name = "Mr. Shelly Lueilwitz";
                                reviewsUrl = "ipsam";
                                sellerId = "alias";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "dolorum";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                }};
                                websiteUrl = "excepturi";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "facilis";
                                        status = "tempore";
                                    }}),
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "labore";
                                        status = "delectus";
                                    }}),
                                }};
                            }};
                            accountId = "eum";
                            batchId = 248753L;
                            force = false;
                            labelIds = new String[]{{
                                add("sint"),
                                add("aliquid"),
                                add("provident"),
                                add("necessitatibus"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "sint";
                                linkType = "officia";
                                linkedAccountId = "dolor";
                            }};
                            merchantId = "debitis";
                            method = "a";
                            overwrite = false;
                        }}),
                        add(new AccountsCustomBatchRequestEntry() {{
                            account = new Account() {{
                                adultContent = false;
                                adwordsLinks = new org.openapis.openapi.models.shared.AccountAdwordsLink[]{{
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "in";
                                        status = "in";
                                    }}),
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "illum";
                                        status = "maiores";
                                    }}),
                                    add(new AccountAdwordsLink() {{
                                        adwordsId = "rerum";
                                        status = "dicta";
                                    }}),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "French Guiana";
                                        locality = "cumque";
                                        postalCode = "43682-5389";
                                        region = "quidem";
                                        streetAddress = "provident";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Magdalena_Kuvalis@hotmail.com";
                                        phoneNumber = "amet";
                                        url = "deserunt";
                                    }};
                                    koreanBusinessRegistrationNumber = "nisi";
                                    phoneNumber = "vel";
                                }};
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbEmail = "natus";
                                    status = "omnis";
                                }};
                                id = "molestiae";
                                kind = "perferendis";
                                name = "Megan Rau";
                                reviewsUrl = "labore";
                                sellerId = "suscipit";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "nobis";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "eum";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "vero";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                    }}),
                                }};
                                websiteUrl = "aspernatur";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "magnam";
                                        status = "et";
                                    }}),
                                }};
                            }};
                            accountId = "excepturi";
                            batchId = 354047L;
                            force = false;
                            labelIds = new String[]{{
                                add("quos"),
                                add("sint"),
                                add("accusantium"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "mollitia";
                                linkType = "reiciendis";
                                linkedAccountId = "mollitia";
                            }};
                            merchantId = "ad";
                            method = "eum";
                            overwrite = false;
                        }}),
                    }};
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "odit";
                dryRun = false;
                fields = "nemo";
                key = "quasi";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "debitis";
                uploadProtocol = "eius";
            }};            

            ContentAccountsCustombatchResponse res = sdk.accounts.contentAccountsCustombatch(req, new ContentAccountsCustombatchSecurity("maxime", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsDelete

Deletes a Merchant Center sub-account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsDeleteRequest;
import org.openapis.openapi.models.operations.ContentAccountsDeleteResponse;
import org.openapis.openapi.models.operations.ContentAccountsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsDeleteRequest req = new ContentAccountsDeleteRequest("facilis", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "ullam";
                dryRun = false;
                fields = "expedita";
                force = false;
                key = "nihil";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "sed";
                uploadProtocol = "saepe";
            }};            

            ContentAccountsDeleteResponse res = sdk.accounts.contentAccountsDelete(req, new ContentAccountsDeleteSecurity("pariatur", "accusantium") {{
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

## contentAccountsGet

Retrieves a Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsGetRequest;
import org.openapis.openapi.models.operations.ContentAccountsGetResponse;
import org.openapis.openapi.models.operations.ContentAccountsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsGetRequest req = new ContentAccountsGetRequest("consequuntur", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "illum";
                key = "pariatur";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "excepturi";
                uploadProtocol = "odit";
            }};            

            ContentAccountsGetResponse res = sdk.accounts.contentAccountsGet(req, new ContentAccountsGetSecurity("ea", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsInsert

Creates a Merchant Center sub-account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsInsertRequest;
import org.openapis.openapi.models.operations.ContentAccountsInsertResponse;
import org.openapis.openapi.models.operations.ContentAccountsInsertSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountAddress;
import org.openapis.openapi.models.shared.AccountAdwordsLink;
import org.openapis.openapi.models.shared.AccountBusinessInformation;
import org.openapis.openapi.models.shared.AccountCustomerService;
import org.openapis.openapi.models.shared.AccountGoogleMyBusinessLink;
import org.openapis.openapi.models.shared.AccountUser;
import org.openapis.openapi.models.shared.AccountYouTubeChannelLink;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsInsertRequest req = new ContentAccountsInsertRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                account = new Account() {{
                    adultContent = false;
                    adwordsLinks = new org.openapis.openapi.models.shared.AccountAdwordsLink[]{{
                        add(new AccountAdwordsLink() {{
                            adwordsId = "ipsam";
                            status = "voluptate";
                        }}),
                        add(new AccountAdwordsLink() {{
                            adwordsId = "autem";
                            status = "nam";
                        }}),
                        add(new AccountAdwordsLink() {{
                            adwordsId = "eaque";
                            status = "pariatur";
                        }}),
                    }};
                    businessInformation = new AccountBusinessInformation() {{
                        address = new AccountAddress() {{
                            country = "Guinea-Bissau";
                            locality = "voluptatibus";
                            postalCode = "82073";
                            region = "hic";
                            streetAddress = "libero";
                        }};;
                        customerService = new AccountCustomerService() {{
                            email = "Celestine.Hayes@hotmail.com";
                            phoneNumber = "eaque";
                            url = "quis";
                        }};;
                        koreanBusinessRegistrationNumber = "nesciunt";
                        phoneNumber = "eos";
                    }};;
                    googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                        gmbEmail = "perferendis";
                        status = "dolores";
                    }};;
                    id = "minus";
                    kind = "quam";
                    name = "Eula Hegmann";
                    reviewsUrl = "omnis";
                    sellerId = "facilis";
                    users = new org.openapis.openapi.models.shared.AccountUser[]{{
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "voluptatem";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "porro";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "consequuntur";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                        }}),
                    }};
                    websiteUrl = "blanditiis";
                    youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "eaque";
                            status = "occaecati";
                        }}),
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "rerum";
                            status = "adipisci";
                        }}),
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "asperiores";
                            status = "earum";
                        }}),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                dryRun = false;
                fields = "deleniti";
                key = "pariatur";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "libero";
                uploadProtocol = "delectus";
            }};            

            ContentAccountsInsertResponse res = sdk.accounts.contentAccountsInsert(req, new ContentAccountsInsertSecurity("quaerat", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsLink

Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsLinkRequest;
import org.openapis.openapi.models.operations.ContentAccountsLinkResponse;
import org.openapis.openapi.models.operations.ContentAccountsLinkSecurity;
import org.openapis.openapi.models.shared.AccountsLinkRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsLinkRequest req = new ContentAccountsLinkRequest("aliquid", "dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accountsLinkRequest = new AccountsLinkRequest() {{
                    action = "dolor";
                    linkType = "qui";
                    linkedAccountId = "ipsum";
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "voluptate";
                key = "dignissimos";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "dolorum";
                uploadProtocol = "numquam";
            }};            

            ContentAccountsLinkResponse res = sdk.accounts.contentAccountsLink(req, new ContentAccountsLinkSecurity("veritatis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsList

Lists the sub-accounts in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsListRequest;
import org.openapis.openapi.models.operations.ContentAccountsListResponse;
import org.openapis.openapi.models.operations.ContentAccountsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsListRequest req = new ContentAccountsListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "quidem";
                key = "voluptatibus";
                maxResults = 377752L;
                oauthToken = "natus";
                pageToken = "eos";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "sit";
                uploadProtocol = "fugiat";
            }};            

            ContentAccountsListResponse res = sdk.accounts.contentAccountsList(req, new ContentAccountsListSecurity("ab", "soluta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsUpdate

Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsUpdateRequest;
import org.openapis.openapi.models.operations.ContentAccountsUpdateResponse;
import org.openapis.openapi.models.operations.ContentAccountsUpdateSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountAddress;
import org.openapis.openapi.models.shared.AccountAdwordsLink;
import org.openapis.openapi.models.shared.AccountBusinessInformation;
import org.openapis.openapi.models.shared.AccountCustomerService;
import org.openapis.openapi.models.shared.AccountGoogleMyBusinessLink;
import org.openapis.openapi.models.shared.AccountUser;
import org.openapis.openapi.models.shared.AccountYouTubeChannelLink;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsUpdateRequest req = new ContentAccountsUpdateRequest("dolorum", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                account = new Account() {{
                    adultContent = false;
                    adwordsLinks = new org.openapis.openapi.models.shared.AccountAdwordsLink[]{{
                        add(new AccountAdwordsLink() {{
                            adwordsId = "deleniti";
                            status = "omnis";
                        }}),
                        add(new AccountAdwordsLink() {{
                            adwordsId = "necessitatibus";
                            status = "distinctio";
                        }}),
                        add(new AccountAdwordsLink() {{
                            adwordsId = "asperiores";
                            status = "nihil";
                        }}),
                    }};
                    businessInformation = new AccountBusinessInformation() {{
                        address = new AccountAddress() {{
                            country = "Croatia";
                            locality = "voluptate";
                            postalCode = "92102-7839";
                            region = "suscipit";
                            streetAddress = "deserunt";
                        }};;
                        customerService = new AccountCustomerService() {{
                            email = "Ephraim_Sipes@yahoo.com";
                            phoneNumber = "alias";
                            url = "at";
                        }};;
                        koreanBusinessRegistrationNumber = "quaerat";
                        phoneNumber = "tempora";
                    }};;
                    googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                        gmbEmail = "vel";
                        status = "quod";
                    }};;
                    id = "officiis";
                    kind = "qui";
                    name = "Randal Klocko";
                    reviewsUrl = "ipsum";
                    sellerId = "quisquam";
                    users = new org.openapis.openapi.models.shared.AccountUser[]{{
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "amet";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "tempore";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "accusamus";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "numquam";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                        }}),
                    }};
                    websiteUrl = "enim";
                    youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "sapiente";
                            status = "totam";
                        }}),
                    }};
                }};;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "expedita";
                dryRun = false;
                fields = "neque";
                key = "sed";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "voluptas";
                uploadProtocol = "deserunt";
            }};            

            ContentAccountsUpdateResponse res = sdk.accounts.contentAccountsUpdate(req, new ContentAccountsUpdateSecurity("quam", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
