# accounts

### Available Operations

* [contentAccountsAuthinfo](#contentaccountsauthinfo) - Returns information about the authenticated user.
* [contentAccountsClaimwebsite](#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
* [contentAccountsCredentialsCreate](#contentaccountscredentialscreate) - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* [contentAccountsCustombatch](#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [contentAccountsDelete](#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [contentAccountsGet](#contentaccountsget) - Retrieves a Merchant Center account.
* [contentAccountsInsert](#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [contentAccountsLabelsCreate](#contentaccountslabelscreate) - Creates a new label, not assigned to any account.
* [contentAccountsLabelsDelete](#contentaccountslabelsdelete) - Deletes a label and removes it from all accounts to which it was assigned.
* [contentAccountsLabelsList](#contentaccountslabelslist) - Lists the labels assigned to an account.
* [contentAccountsLabelsPatch](#contentaccountslabelspatch) - Updates a label.
* [contentAccountsLink](#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [contentAccountsList](#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [contentAccountsListlinks](#contentaccountslistlinks) - Returns the list of accounts linked to your Merchant Center account.
* [contentAccountsRequestphoneverification](#contentaccountsrequestphoneverification) - Request verification code to start phone verification.
* [contentAccountsReturncarrierCreate](#contentaccountsreturncarriercreate) - Links return carrier to a merchant account.
* [contentAccountsReturncarrierDelete](#contentaccountsreturncarrierdelete) - Delete a return carrier in the merchant account.
* [contentAccountsReturncarrierList](#contentaccountsreturncarrierlist) - Lists available return carriers in the merchant account.
* [contentAccountsReturncarrierPatch](#contentaccountsreturncarrierpatch) - Updates a return carrier in the merchant account.
* [contentAccountsUpdate](#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* [contentAccountsUpdatelabels](#contentaccountsupdatelabels) - Updates labels that are assigned to the Merchant Center account by CSS user.
* [contentAccountsVerifyphonenumber](#contentaccountsverifyphonenumber) - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

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

Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.

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

## contentAccountsCredentialsCreate

Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsCredentialsCreateRequest;
import org.openapis.openapi.models.operations.ContentAccountsCredentialsCreateResponse;
import org.openapis.openapi.models.operations.ContentAccountsCredentialsCreateSecurity;
import org.openapis.openapi.models.shared.AccountCredentials;
import org.openapis.openapi.models.shared.AccountCredentialsPurposeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsCredentialsCreateRequest req = new ContentAccountsCredentialsCreateRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accountCredentials = new AccountCredentials() {{
                    accessToken = "maiores";
                    expiresIn = "molestiae";
                    purpose = AccountCredentialsPurposeEnum.SHOPIFY_INTEGRATION;
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            ContentAccountsCredentialsCreateResponse res = sdk.accounts.contentAccountsCredentialsCreate(req, new ContentAccountsCredentialsCreateSecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountCredentials != null) {
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
import org.openapis.openapi.models.shared.AccountAddress;
import org.openapis.openapi.models.shared.AccountAdsLink;
import org.openapis.openapi.models.shared.AccountAutomaticImprovementsInput;
import org.openapis.openapi.models.shared.AccountBusinessInformation;
import org.openapis.openapi.models.shared.AccountConversionSettings;
import org.openapis.openapi.models.shared.AccountCustomerService;
import org.openapis.openapi.models.shared.AccountGoogleMyBusinessLink;
import org.openapis.openapi.models.shared.AccountImageImprovementsInput;
import org.openapis.openapi.models.shared.AccountImageImprovementsSettings;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.AccountItemUpdatesInput;
import org.openapis.openapi.models.shared.AccountItemUpdatesSettings;
import org.openapis.openapi.models.shared.AccountShippingImprovements;
import org.openapis.openapi.models.shared.AccountUser;
import org.openapis.openapi.models.shared.AccountYouTubeChannelLink;
import org.openapis.openapi.models.shared.AccountsCustomBatchRequestEntryInput;
import org.openapis.openapi.models.shared.AccountsCustomBatchRequestEntryLinkRequest;
import org.openapis.openapi.models.shared.AccountsCustomBatchRequestInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsCustombatchRequest req = new ContentAccountsCustombatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accountsCustomBatchRequestInput = new AccountsCustomBatchRequestInput() {{
                    entries = new org.openapis.openapi.models.shared.AccountsCustomBatchRequestEntryInput[]{{
                        add(new AccountsCustomBatchRequestEntryInput() {{
                            account = new AccountInput() {{
                                adsLinks = new org.openapis.openapi.models.shared.AccountAdsLink[]{{
                                    add(new AccountAdsLink() {{
                                        adsId = "beatae";
                                        status = "commodi";
                                    }}),
                                    add(new AccountAdsLink() {{
                                        adsId = "molestiae";
                                        status = "modi";
                                    }}),
                                    add(new AccountAdsLink() {{
                                        adsId = "qui";
                                        status = "impedit";
                                    }}),
                                }};
                                adultContent = false;
                                automaticImprovements = new AccountAutomaticImprovementsInput() {{
                                    imageImprovements = new AccountImageImprovementsInput() {{
                                        accountImageImprovementsSettings = new AccountImageImprovementsSettings() {{
                                            allowAutomaticImageImprovements = false;
                                        }};
                                    }};
                                    itemUpdates = new AccountItemUpdatesInput() {{
                                        accountItemUpdatesSettings = new AccountItemUpdatesSettings() {{
                                            allowAvailabilityUpdates = false;
                                            allowConditionUpdates = false;
                                            allowPriceUpdates = false;
                                            allowStrictAvailabilityUpdates = false;
                                        }};
                                    }};
                                    shippingImprovements = new AccountShippingImprovements() {{
                                        allowShippingImprovements = false;
                                    }};
                                }};
                                automaticLabelIds = new String[]{{
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "Bulgaria";
                                        locality = "perferendis";
                                        postalCode = "61626";
                                        region = "laboriosam";
                                        streetAddress = "hic";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Marisa_Kirlin@hotmail.com";
                                        phoneNumber = "iure";
                                        url = "saepe";
                                    }};
                                    koreanBusinessRegistrationNumber = "quidem";
                                    phoneNumber = "architecto";
                                    phoneVerificationStatus = "ipsa";
                                }};
                                conversionSettings = new AccountConversionSettings() {{
                                    freeListingsAutoTaggingEnabled = false;
                                }};
                                cssId = "reiciendis";
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbAccountId = "est";
                                    gmbEmail = "mollitia";
                                    status = "laborum";
                                }};
                                id = "dolores";
                                kind = "dolorem";
                                labelIds = new String[]{{
                                    add("explicabo"),
                                    add("nobis"),
                                }};
                                name = "Guadalupe Hickle";
                                sellerId = "accusantium";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "culpa";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "doloribus";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                }};
                                websiteUrl = "sapiente";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "mollitia";
                                        status = "dolorem";
                                    }}),
                                }};
                            }};
                            accountId = "culpa";
                            batchId = 161309L;
                            force = false;
                            labelIds = new String[]{{
                                add("mollitia"),
                                add("occaecati"),
                                add("numquam"),
                                add("commodi"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "quam";
                                linkType = "molestiae";
                                linkedAccountId = "velit";
                                services = new String[]{{
                                    add("quia"),
                                    add("quis"),
                                    add("vitae"),
                                }};
                            }};
                            merchantId = "laborum";
                            method = "animi";
                            overwrite = false;
                            view = "enim";
                        }}),
                        add(new AccountsCustomBatchRequestEntryInput() {{
                            account = new AccountInput() {{
                                adsLinks = new org.openapis.openapi.models.shared.AccountAdsLink[]{{
                                    add(new AccountAdsLink() {{
                                        adsId = "quo";
                                        status = "sequi";
                                    }}),
                                }};
                                adultContent = false;
                                automaticImprovements = new AccountAutomaticImprovementsInput() {{
                                    imageImprovements = new AccountImageImprovementsInput() {{
                                        accountImageImprovementsSettings = new AccountImageImprovementsSettings() {{
                                            allowAutomaticImageImprovements = false;
                                        }};
                                    }};
                                    itemUpdates = new AccountItemUpdatesInput() {{
                                        accountItemUpdatesSettings = new AccountItemUpdatesSettings() {{
                                            allowAvailabilityUpdates = false;
                                            allowConditionUpdates = false;
                                            allowPriceUpdates = false;
                                            allowStrictAvailabilityUpdates = false;
                                        }};
                                    }};
                                    shippingImprovements = new AccountShippingImprovements() {{
                                        allowShippingImprovements = false;
                                    }};
                                }};
                                automaticLabelIds = new String[]{{
                                    add("ipsam"),
                                    add("id"),
                                    add("possimus"),
                                    add("aut"),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "Bermuda";
                                        locality = "error";
                                        postalCode = "60998-4590";
                                        region = "omnis";
                                        streetAddress = "voluptate";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Aiyana.Batz@hotmail.com";
                                        phoneNumber = "maiores";
                                        url = "dicta";
                                    }};
                                    koreanBusinessRegistrationNumber = "corporis";
                                    phoneNumber = "dolore";
                                    phoneVerificationStatus = "iusto";
                                }};
                                conversionSettings = new AccountConversionSettings() {{
                                    freeListingsAutoTaggingEnabled = false;
                                }};
                                cssId = "dicta";
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbAccountId = "harum";
                                    gmbEmail = "enim";
                                    status = "accusamus";
                                }};
                                id = "commodi";
                                kind = "repudiandae";
                                labelIds = new String[]{{
                                    add("ipsum"),
                                }};
                                name = "Virgil Mante";
                                sellerId = "praesentium";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "voluptates";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "quasi";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "repudiandae";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                }};
                                websiteUrl = "sint";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "itaque";
                                        status = "incidunt";
                                    }}),
                                }};
                            }};
                            accountId = "enim";
                            batchId = 9356L;
                            force = false;
                            labelIds = new String[]{{
                                add("quibusdam"),
                                add("explicabo"),
                                add("deserunt"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "distinctio";
                                linkType = "quibusdam";
                                linkedAccountId = "labore";
                                services = new String[]{{
                                    add("qui"),
                                    add("aliquid"),
                                }};
                            }};
                            merchantId = "cupiditate";
                            method = "quos";
                            overwrite = false;
                            view = "perferendis";
                        }}),
                        add(new AccountsCustomBatchRequestEntryInput() {{
                            account = new AccountInput() {{
                                adsLinks = new org.openapis.openapi.models.shared.AccountAdsLink[]{{
                                    add(new AccountAdsLink() {{
                                        adsId = "assumenda";
                                        status = "ipsam";
                                    }}),
                                }};
                                adultContent = false;
                                automaticImprovements = new AccountAutomaticImprovementsInput() {{
                                    imageImprovements = new AccountImageImprovementsInput() {{
                                        accountImageImprovementsSettings = new AccountImageImprovementsSettings() {{
                                            allowAutomaticImageImprovements = false;
                                        }};
                                    }};
                                    itemUpdates = new AccountItemUpdatesInput() {{
                                        accountItemUpdatesSettings = new AccountItemUpdatesSettings() {{
                                            allowAvailabilityUpdates = false;
                                            allowConditionUpdates = false;
                                            allowPriceUpdates = false;
                                            allowStrictAvailabilityUpdates = false;
                                        }};
                                    }};
                                    shippingImprovements = new AccountShippingImprovements() {{
                                        allowShippingImprovements = false;
                                    }};
                                }};
                                automaticLabelIds = new String[]{{
                                    add("fugit"),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "Palau";
                                        locality = "excepturi";
                                        postalCode = "77294";
                                        region = "non";
                                        streetAddress = "eligendi";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Grace_Medhurst63@yahoo.com";
                                        phoneNumber = "dolor";
                                        url = "debitis";
                                    }};
                                    koreanBusinessRegistrationNumber = "a";
                                    phoneNumber = "dolorum";
                                    phoneVerificationStatus = "in";
                                }};
                                conversionSettings = new AccountConversionSettings() {{
                                    freeListingsAutoTaggingEnabled = false;
                                }};
                                cssId = "in";
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbAccountId = "illum";
                                    gmbEmail = "maiores";
                                    status = "rerum";
                                }};
                                id = "dicta";
                                kind = "magnam";
                                labelIds = new String[]{{
                                    add("facere"),
                                    add("ea"),
                                    add("aliquid"),
                                    add("laborum"),
                                }};
                                name = "Alfred McClure";
                                sellerId = "delectus";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "provident";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "nam";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "id";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                }};
                                websiteUrl = "blanditiis";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "sapiente";
                                        status = "amet";
                                    }}),
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "deserunt";
                                        status = "nisi";
                                    }}),
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "vel";
                                        status = "natus";
                                    }}),
                                }};
                            }};
                            accountId = "omnis";
                            batchId = 474867L;
                            force = false;
                            labelIds = new String[]{{
                                add("nihil"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "magnam";
                                linkType = "distinctio";
                                linkedAccountId = "id";
                                services = new String[]{{
                                    add("labore"),
                                    add("suscipit"),
                                }};
                            }};
                            merchantId = "natus";
                            method = "nobis";
                            overwrite = false;
                            view = "eum";
                        }}),
                        add(new AccountsCustomBatchRequestEntryInput() {{
                            account = new AccountInput() {{
                                adsLinks = new org.openapis.openapi.models.shared.AccountAdsLink[]{{
                                    add(new AccountAdsLink() {{
                                        adsId = "aspernatur";
                                        status = "architecto";
                                    }}),
                                    add(new AccountAdsLink() {{
                                        adsId = "magnam";
                                        status = "et";
                                    }}),
                                    add(new AccountAdsLink() {{
                                        adsId = "excepturi";
                                        status = "ullam";
                                    }}),
                                    add(new AccountAdsLink() {{
                                        adsId = "provident";
                                        status = "quos";
                                    }}),
                                }};
                                adultContent = false;
                                automaticImprovements = new AccountAutomaticImprovementsInput() {{
                                    imageImprovements = new AccountImageImprovementsInput() {{
                                        accountImageImprovementsSettings = new AccountImageImprovementsSettings() {{
                                            allowAutomaticImageImprovements = false;
                                        }};
                                    }};
                                    itemUpdates = new AccountItemUpdatesInput() {{
                                        accountItemUpdatesSettings = new AccountItemUpdatesSettings() {{
                                            allowAvailabilityUpdates = false;
                                            allowConditionUpdates = false;
                                            allowPriceUpdates = false;
                                            allowStrictAvailabilityUpdates = false;
                                        }};
                                    }};
                                    shippingImprovements = new AccountShippingImprovements() {{
                                        allowShippingImprovements = false;
                                    }};
                                }};
                                automaticLabelIds = new String[]{{
                                    add("accusantium"),
                                    add("mollitia"),
                                    add("reiciendis"),
                                }};
                                businessInformation = new AccountBusinessInformation() {{
                                    address = new AccountAddress() {{
                                        country = "Niue";
                                        locality = "ad";
                                        postalCode = "28130";
                                        region = "iure";
                                        streetAddress = "doloribus";
                                    }};
                                    customerService = new AccountCustomerService() {{
                                        email = "Devante_Schoen@hotmail.com";
                                        phoneNumber = "in";
                                        url = "architecto";
                                    }};
                                    koreanBusinessRegistrationNumber = "architecto";
                                    phoneNumber = "repudiandae";
                                    phoneVerificationStatus = "ullam";
                                }};
                                conversionSettings = new AccountConversionSettings() {{
                                    freeListingsAutoTaggingEnabled = false;
                                }};
                                cssId = "expedita";
                                googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                                    gmbAccountId = "nihil";
                                    gmbEmail = "repellat";
                                    status = "quibusdam";
                                }};
                                id = "sed";
                                kind = "saepe";
                                labelIds = new String[]{{
                                    add("accusantium"),
                                    add("consequuntur"),
                                    add("praesentium"),
                                    add("natus"),
                                }};
                                name = "Joan Satterfield";
                                sellerId = "maxime";
                                users = new org.openapis.openapi.models.shared.AccountUser[]{{
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "excepturi";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                    add(new AccountUser() {{
                                        admin = false;
                                        emailAddress = "odit";
                                        orderManager = false;
                                        paymentsAnalyst = false;
                                        paymentsManager = false;
                                        reportingManager = false;
                                    }}),
                                }};
                                websiteUrl = "ea";
                                youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                                    add(new AccountYouTubeChannelLink() {{
                                        channelId = "ab";
                                        status = "maiores";
                                    }}),
                                }};
                            }};
                            accountId = "quidem";
                            batchId = 373291L;
                            force = false;
                            labelIds = new String[]{{
                                add("autem"),
                                add("nam"),
                            }};
                            linkRequest = new AccountsCustomBatchRequestEntryLinkRequest() {{
                                action = "eaque";
                                linkType = "pariatur";
                                linkedAccountId = "nemo";
                                services = new String[]{{
                                    add("perferendis"),
                                    add("fugiat"),
                                    add("amet"),
                                    add("aut"),
                                }};
                            }};
                            merchantId = "cumque";
                            method = "corporis";
                            overwrite = false;
                            view = "hic";
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "quis";
                key = "totam";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "quis";
                uploadProtocol = "nesciunt";
            }};            

            ContentAccountsCustombatchResponse res = sdk.accounts.contentAccountsCustombatch(req, new ContentAccountsCustombatchSecurity("eos", "perferendis") {{
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

            ContentAccountsDeleteRequest req = new ContentAccountsDeleteRequest("dolores", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "hic";
                force = false;
                key = "recusandae";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "perspiciatis";
                uploadProtocol = "voluptatem";
            }};            

            ContentAccountsDeleteResponse res = sdk.accounts.contentAccountsDelete(req, new ContentAccountsDeleteSecurity("porro", "consequuntur") {{
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
import org.openapis.openapi.models.operations.ContentAccountsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsGetRequest req = new ContentAccountsGetRequest("blanditiis", "error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "asperiores";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
                view = ContentAccountsGetViewEnum.CSS;
            }};            

            ContentAccountsGetResponse res = sdk.accounts.contentAccountsGet(req, new ContentAccountsGetSecurity("provident", "nobis") {{
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
import org.openapis.openapi.models.shared.AccountAddress;
import org.openapis.openapi.models.shared.AccountAdsLink;
import org.openapis.openapi.models.shared.AccountAutomaticImprovementsInput;
import org.openapis.openapi.models.shared.AccountBusinessInformation;
import org.openapis.openapi.models.shared.AccountConversionSettings;
import org.openapis.openapi.models.shared.AccountCustomerService;
import org.openapis.openapi.models.shared.AccountGoogleMyBusinessLink;
import org.openapis.openapi.models.shared.AccountImageImprovementsInput;
import org.openapis.openapi.models.shared.AccountImageImprovementsSettings;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.AccountItemUpdatesInput;
import org.openapis.openapi.models.shared.AccountItemUpdatesSettings;
import org.openapis.openapi.models.shared.AccountShippingImprovements;
import org.openapis.openapi.models.shared.AccountUser;
import org.openapis.openapi.models.shared.AccountYouTubeChannelLink;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsInsertRequest req = new ContentAccountsInsertRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                accountInput = new AccountInput() {{
                    adsLinks = new org.openapis.openapi.models.shared.AccountAdsLink[]{{
                        add(new AccountAdsLink() {{
                            adsId = "quos";
                            status = "aliquid";
                        }}),
                        add(new AccountAdsLink() {{
                            adsId = "dolorem";
                            status = "dolorem";
                        }}),
                    }};
                    adultContent = false;
                    automaticImprovements = new AccountAutomaticImprovementsInput() {{
                        imageImprovements = new AccountImageImprovementsInput() {{
                            accountImageImprovementsSettings = new AccountImageImprovementsSettings() {{
                                allowAutomaticImageImprovements = false;
                            }};;
                        }};;
                        itemUpdates = new AccountItemUpdatesInput() {{
                            accountItemUpdatesSettings = new AccountItemUpdatesSettings() {{
                                allowAvailabilityUpdates = false;
                                allowConditionUpdates = false;
                                allowPriceUpdates = false;
                                allowStrictAvailabilityUpdates = false;
                            }};;
                        }};;
                        shippingImprovements = new AccountShippingImprovements() {{
                            allowShippingImprovements = false;
                        }};;
                    }};;
                    automaticLabelIds = new String[]{{
                        add("qui"),
                    }};
                    businessInformation = new AccountBusinessInformation() {{
                        address = new AccountAddress() {{
                            country = "Cuba";
                            locality = "hic";
                            postalCode = "74492-6200";
                            region = "ipsa";
                            streetAddress = "iure";
                        }};;
                        customerService = new AccountCustomerService() {{
                            email = "Elvie_Thompson37@yahoo.com";
                            phoneNumber = "natus";
                            url = "eos";
                        }};;
                        koreanBusinessRegistrationNumber = "atque";
                        phoneNumber = "sit";
                        phoneVerificationStatus = "fugiat";
                    }};;
                    conversionSettings = new AccountConversionSettings() {{
                        freeListingsAutoTaggingEnabled = false;
                    }};;
                    cssId = "ab";
                    googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                        gmbAccountId = "soluta";
                        gmbEmail = "dolorum";
                        status = "iusto";
                    }};;
                    id = "voluptate";
                    kind = "dolorum";
                    labelIds = new String[]{{
                        add("omnis"),
                        add("necessitatibus"),
                        add("distinctio"),
                    }};
                    name = "Jessie Emmerich";
                    sellerId = "saepe";
                    users = new org.openapis.openapi.models.shared.AccountUser[]{{
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "aspernatur";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                            reportingManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "perferendis";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                            reportingManager = false;
                        }}),
                    }};
                    websiteUrl = "amet";
                    youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "accusamus";
                            status = "ad";
                        }}),
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "saepe";
                            status = "suscipit";
                        }}),
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "deserunt";
                            status = "provident";
                        }}),
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "minima";
                            status = "repellendus";
                        }}),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "at";
                key = "quaerat";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "quod";
                uploadProtocol = "officiis";
            }};            

            ContentAccountsInsertResponse res = sdk.accounts.contentAccountsInsert(req, new ContentAccountsInsertSecurity("qui", "dolorum") {{
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

## contentAccountsLabelsCreate

Creates a new label, not assigned to any account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsLabelsCreateRequest;
import org.openapis.openapi.models.operations.ContentAccountsLabelsCreateResponse;
import org.openapis.openapi.models.operations.ContentAccountsLabelsCreateSecurity;
import org.openapis.openapi.models.shared.AccountLabelInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsLabelsCreateRequest req = new ContentAccountsLabelsCreateRequest("a") {{
                dollarXgafv = XgafvEnum.ONE;
                accountLabelInput = new AccountLabelInput() {{
                    accountId = "harum";
                    description = "iusto";
                    name = "Rosalie White";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "dolorem";
                key = "sapiente";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "sit";
                uploadProtocol = "expedita";
            }};            

            ContentAccountsLabelsCreateResponse res = sdk.accounts.contentAccountsLabelsCreate(req, new ContentAccountsLabelsCreateSecurity("neque", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountLabel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsLabelsDelete

Deletes a label and removes it from all accounts to which it was assigned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsLabelsDeleteRequest;
import org.openapis.openapi.models.operations.ContentAccountsLabelsDeleteResponse;
import org.openapis.openapi.models.operations.ContentAccountsLabelsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsLabelsDeleteRequest req = new ContentAccountsLabelsDeleteRequest("vel", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "incidunt";
                key = "qui";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "pariatur";
                uploadProtocol = "soluta";
            }};            

            ContentAccountsLabelsDeleteResponse res = sdk.accounts.contentAccountsLabelsDelete(req, new ContentAccountsLabelsDeleteSecurity("dicta", "laborum") {{
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

## contentAccountsLabelsList

Lists the labels assigned to an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsLabelsListRequest;
import org.openapis.openapi.models.operations.ContentAccountsLabelsListResponse;
import org.openapis.openapi.models.operations.ContentAccountsLabelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsLabelsListRequest req = new ContentAccountsLabelsListRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "facilis";
                key = "aliquid";
                oauthToken = "quam";
                pageSize = 565421L;
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "neque";
                uploadProtocol = "fugit";
            }};            

            ContentAccountsLabelsListResponse res = sdk.accounts.contentAccountsLabelsList(req, new ContentAccountsLabelsListSecurity("magni", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAccountLabelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsLabelsPatch

Updates a label.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsLabelsPatchRequest;
import org.openapis.openapi.models.operations.ContentAccountsLabelsPatchResponse;
import org.openapis.openapi.models.operations.ContentAccountsLabelsPatchSecurity;
import org.openapis.openapi.models.shared.AccountLabelInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsLabelsPatchRequest req = new ContentAccountsLabelsPatchRequest("sunt", "ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accountLabelInput = new AccountLabelInput() {{
                    accountId = "hic";
                    description = "voluptatem";
                    name = "Dr. Dominic Rohan";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "quos";
                fields = "tempore";
                key = "cupiditate";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "dolorem";
                uploadProtocol = "dolore";
            }};            

            ContentAccountsLabelsPatchResponse res = sdk.accounts.contentAccountsLabelsPatch(req, new ContentAccountsLabelsPatchSecurity("labore", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountLabel != null) {
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
import org.openapis.openapi.models.shared.ECommercePlatformLinkInfo;
import org.openapis.openapi.models.shared.PaymentServiceProviderLinkInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsLinkRequest req = new ContentAccountsLinkRequest("dolorum", "architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accountsLinkRequest = new AccountsLinkRequest() {{
                    action = "aut";
                    eCommercePlatformLinkInfo = new ECommercePlatformLinkInfo() {{
                        externalAccountId = "quas";
                    }};;
                    linkType = "itaque";
                    linkedAccountId = "consequatur";
                    paymentServiceProviderLinkInfo = new PaymentServiceProviderLinkInfo() {{
                        externalAccountBusinessCountry = "est";
                        externalAccountId = "repellendus";
                    }};;
                    services = new String[]{{
                        add("doloribus"),
                        add("ut"),
                        add("facilis"),
                        add("cupiditate"),
                    }};
                }};;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "odio";
                key = "occaecati";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "vero";
                uploadProtocol = "omnis";
            }};            

            ContentAccountsLinkResponse res = sdk.accounts.contentAccountsLink(req, new ContentAccountsLinkSecurity("quis", "ipsum") {{
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
import org.openapis.openapi.models.operations.ContentAccountsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsListRequest req = new ContentAccountsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "dignissimos";
                key = "hic";
                label = "distinctio";
                maxResults = 799203L;
                name = "Harriet Quitzon";
                oauthToken = "dolore";
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "sequi";
                uploadProtocol = "natus";
                view = ContentAccountsListViewEnum.CSS;
            }};            

            ContentAccountsListResponse res = sdk.accounts.contentAccountsList(req, new ContentAccountsListSecurity("aut", "voluptatibus") {{
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

## contentAccountsListlinks

Returns the list of accounts linked to your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsListlinksRequest;
import org.openapis.openapi.models.operations.ContentAccountsListlinksResponse;
import org.openapis.openapi.models.operations.ContentAccountsListlinksSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsListlinksRequest req = new ContentAccountsListlinksRequest("exercitationem", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "iusto";
                key = "eligendi";
                maxResults = 497391L;
                oauthToken = "alias";
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "ipsam";
                uploadProtocol = "ea";
            }};            

            ContentAccountsListlinksResponse res = sdk.accounts.contentAccountsListlinks(req, new ContentAccountsListlinksSecurity("aspernatur", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsListLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsRequestphoneverification

Request verification code to start phone verification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsRequestphoneverificationRequest;
import org.openapis.openapi.models.operations.ContentAccountsRequestphoneverificationResponse;
import org.openapis.openapi.models.operations.ContentAccountsRequestphoneverificationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RequestPhoneVerificationRequest;
import org.openapis.openapi.models.shared.RequestPhoneVerificationRequestPhoneVerificationMethodEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsRequestphoneverificationRequest req = new ContentAccountsRequestphoneverificationRequest("possimus", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestPhoneVerificationRequest = new RequestPhoneVerificationRequest() {{
                    languageCode = "ex";
                    phoneNumber = "laudantium";
                    phoneRegionCode = "dicta";
                    phoneVerificationMethod = RequestPhoneVerificationRequestPhoneVerificationMethodEnum.PHONE_VERIFICATION_METHOD_UNSPECIFIED;
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "nulla";
                key = "excepturi";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "sapiente";
                uploadProtocol = "quisquam";
            }};            

            ContentAccountsRequestphoneverificationResponse res = sdk.accounts.contentAccountsRequestphoneverification(req, new ContentAccountsRequestphoneverificationSecurity("saepe", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.requestPhoneVerificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsReturncarrierCreate

Links return carrier to a merchant account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierCreateRequest;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierCreateResponse;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierCreateSecurity;
import org.openapis.openapi.models.shared.AccountReturnCarrierCarrierCodeEnum;
import org.openapis.openapi.models.shared.AccountReturnCarrierInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsReturncarrierCreateRequest req = new ContentAccountsReturncarrierCreateRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accountReturnCarrierInput = new AccountReturnCarrierInput() {{
                    carrierAccountName = "veniam";
                    carrierAccountNumber = "aliquid";
                    carrierCode = AccountReturnCarrierCarrierCodeEnum.CARRIER_CODE_UNSPECIFIED;
                }};;
                accessToken = "magnam";
                alt = AltEnum.MEDIA;
                callback = "quo";
                fields = "consectetur";
                key = "recusandae";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "eaque";
                uploadProtocol = "a";
            }};            

            ContentAccountsReturncarrierCreateResponse res = sdk.accounts.contentAccountsReturncarrierCreate(req, new ContentAccountsReturncarrierCreateSecurity("libero", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountReturnCarrier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsReturncarrierDelete

Delete a return carrier in the merchant account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierDeleteRequest;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierDeleteResponse;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsReturncarrierDeleteRequest req = new ContentAccountsReturncarrierDeleteRequest("aut", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "inventore";
                key = "non";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "laborum";
                uploadProtocol = "placeat";
            }};            

            ContentAccountsReturncarrierDeleteResponse res = sdk.accounts.contentAccountsReturncarrierDelete(req, new ContentAccountsReturncarrierDeleteSecurity("velit", "eum") {{
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

## contentAccountsReturncarrierList

Lists available return carriers in the merchant account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierListRequest;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierListResponse;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsReturncarrierListRequest req = new ContentAccountsReturncarrierListRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "voluptas";
                key = "libero";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "numquam";
                uploadProtocol = "explicabo";
            }};            

            ContentAccountsReturncarrierListResponse res = sdk.accounts.contentAccountsReturncarrierList(req, new ContentAccountsReturncarrierListSecurity("provident", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAccountReturnCarrierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsReturncarrierPatch

Updates a return carrier in the merchant account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierPatchRequest;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierPatchResponse;
import org.openapis.openapi.models.operations.ContentAccountsReturncarrierPatchSecurity;
import org.openapis.openapi.models.shared.AccountReturnCarrierCarrierCodeEnum;
import org.openapis.openapi.models.shared.AccountReturnCarrierInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsReturncarrierPatchRequest req = new ContentAccountsReturncarrierPatchRequest("molestiae", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accountReturnCarrierInput = new AccountReturnCarrierInput() {{
                    carrierAccountName = "eius";
                    carrierAccountNumber = "esse";
                    carrierCode = AccountReturnCarrierCarrierCodeEnum.FEDEX;
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "quidem";
                key = "fugiat";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "suscipit";
                uploadProtocol = "assumenda";
            }};            

            ContentAccountsReturncarrierPatchResponse res = sdk.accounts.contentAccountsReturncarrierPatch(req, new ContentAccountsReturncarrierPatchSecurity("eos", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountReturnCarrier != null) {
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
import org.openapis.openapi.models.shared.AccountAddress;
import org.openapis.openapi.models.shared.AccountAdsLink;
import org.openapis.openapi.models.shared.AccountAutomaticImprovementsInput;
import org.openapis.openapi.models.shared.AccountBusinessInformation;
import org.openapis.openapi.models.shared.AccountConversionSettings;
import org.openapis.openapi.models.shared.AccountCustomerService;
import org.openapis.openapi.models.shared.AccountGoogleMyBusinessLink;
import org.openapis.openapi.models.shared.AccountImageImprovementsInput;
import org.openapis.openapi.models.shared.AccountImageImprovementsSettings;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.AccountItemUpdatesInput;
import org.openapis.openapi.models.shared.AccountItemUpdatesSettings;
import org.openapis.openapi.models.shared.AccountShippingImprovements;
import org.openapis.openapi.models.shared.AccountUser;
import org.openapis.openapi.models.shared.AccountYouTubeChannelLink;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsUpdateRequest req = new ContentAccountsUpdateRequest("quisquam", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accountInput = new AccountInput() {{
                    adsLinks = new org.openapis.openapi.models.shared.AccountAdsLink[]{{
                        add(new AccountAdsLink() {{
                            adsId = "quidem";
                            status = "neque";
                        }}),
                        add(new AccountAdsLink() {{
                            adsId = "quo";
                            status = "illum";
                        }}),
                        add(new AccountAdsLink() {{
                            adsId = "quo";
                            status = "fuga";
                        }}),
                    }};
                    adultContent = false;
                    automaticImprovements = new AccountAutomaticImprovementsInput() {{
                        imageImprovements = new AccountImageImprovementsInput() {{
                            accountImageImprovementsSettings = new AccountImageImprovementsSettings() {{
                                allowAutomaticImageImprovements = false;
                            }};;
                        }};;
                        itemUpdates = new AccountItemUpdatesInput() {{
                            accountItemUpdatesSettings = new AccountItemUpdatesSettings() {{
                                allowAvailabilityUpdates = false;
                                allowConditionUpdates = false;
                                allowPriceUpdates = false;
                                allowStrictAvailabilityUpdates = false;
                            }};;
                        }};;
                        shippingImprovements = new AccountShippingImprovements() {{
                            allowShippingImprovements = false;
                        }};;
                    }};;
                    automaticLabelIds = new String[]{{
                        add("eos"),
                        add("voluptas"),
                    }};
                    businessInformation = new AccountBusinessInformation() {{
                        address = new AccountAddress() {{
                            country = "Bangladesh";
                            locality = "cupiditate";
                            postalCode = "28311";
                            region = "quo";
                            streetAddress = "esse";
                        }};;
                        customerService = new AccountCustomerService() {{
                            email = "Alvena.Rau7@hotmail.com";
                            phoneNumber = "nihil";
                            url = "totam";
                        }};;
                        koreanBusinessRegistrationNumber = "accusamus";
                        phoneNumber = "aliquam";
                        phoneVerificationStatus = "odio";
                    }};;
                    conversionSettings = new AccountConversionSettings() {{
                        freeListingsAutoTaggingEnabled = false;
                    }};;
                    cssId = "occaecati";
                    googleMyBusinessLink = new AccountGoogleMyBusinessLink() {{
                        gmbAccountId = "commodi";
                        gmbEmail = "sapiente";
                        status = "dolores";
                    }};;
                    id = "deserunt";
                    kind = "molestiae";
                    labelIds = new String[]{{
                        add("porro"),
                    }};
                    name = "Dianne Langosh";
                    sellerId = "fugit";
                    users = new org.openapis.openapi.models.shared.AccountUser[]{{
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "mollitia";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                            reportingManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "incidunt";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                            reportingManager = false;
                        }}),
                        add(new AccountUser() {{
                            admin = false;
                            emailAddress = "atque";
                            orderManager = false;
                            paymentsAnalyst = false;
                            paymentsManager = false;
                            reportingManager = false;
                        }}),
                    }};
                    websiteUrl = "explicabo";
                    youtubeChannelLinks = new org.openapis.openapi.models.shared.AccountYouTubeChannelLink[]{{
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "nisi";
                            status = "fugit";
                        }}),
                        add(new AccountYouTubeChannelLink() {{
                            channelId = "sapiente";
                            status = "consequuntur";
                        }}),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "occaecati";
                key = "atque";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "eveniet";
                uploadProtocol = "accusamus";
            }};            

            ContentAccountsUpdateResponse res = sdk.accounts.contentAccountsUpdate(req, new ContentAccountsUpdateSecurity("veritatis", "esse") {{
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

## contentAccountsUpdatelabels

Updates labels that are assigned to the Merchant Center account by CSS user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsUpdatelabelsRequest;
import org.openapis.openapi.models.operations.ContentAccountsUpdatelabelsResponse;
import org.openapis.openapi.models.operations.ContentAccountsUpdatelabelsSecurity;
import org.openapis.openapi.models.shared.AccountsUpdateLabelsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsUpdatelabelsRequest req = new ContentAccountsUpdatelabelsRequest("quod", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accountsUpdateLabelsRequest = new AccountsUpdateLabelsRequest() {{
                    labelIds = new String[]{{
                        add("quasi"),
                        add("saepe"),
                    }};
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "rerum";
                key = "occaecati";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "eligendi";
                uploadProtocol = "sit";
            }};            

            ContentAccountsUpdatelabelsResponse res = sdk.accounts.contentAccountsUpdatelabels(req, new ContentAccountsUpdatelabelsSecurity("culpa", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsUpdateLabelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentAccountsVerifyphonenumber

Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentAccountsVerifyphonenumberRequest;
import org.openapis.openapi.models.operations.ContentAccountsVerifyphonenumberResponse;
import org.openapis.openapi.models.operations.ContentAccountsVerifyphonenumberSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VerifyPhoneNumberRequest;
import org.openapis.openapi.models.shared.VerifyPhoneNumberRequestPhoneVerificationMethodEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsVerifyphonenumberRequest req = new ContentAccountsVerifyphonenumberRequest("adipisci", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                verifyPhoneNumberRequest = new VerifyPhoneNumberRequest() {{
                    phoneVerificationMethod = VerifyPhoneNumberRequestPhoneVerificationMethodEnum.PHONE_VERIFICATION_METHOD_UNSPECIFIED;
                    verificationCode = "minus";
                    verificationId = "quaerat";
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "blanditiis";
                key = "provident";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "quas";
                uploadProtocol = "esse";
            }};            

            ContentAccountsVerifyphonenumberResponse res = sdk.accounts.contentAccountsVerifyphonenumber(req, new ContentAccountsVerifyphonenumberSecurity("quasi", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.verifyPhoneNumberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
