# liasettings

### Available Operations

* [contentLiasettingsCustombatch](#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [contentLiasettingsGet](#contentliasettingsget) - Retrieves the LIA settings of the account.
* [contentLiasettingsGetaccessiblegmbaccounts](#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Google My Business accounts.
* [contentLiasettingsList](#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [contentLiasettingsListposdataproviders](#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [contentLiasettingsRequestgmbaccess](#contentliasettingsrequestgmbaccess) - Requests access to a specified Google My Business account.
* [contentLiasettingsRequestinventoryverification](#contentliasettingsrequestinventoryverification) - Requests inventory validation for the specified country.
* [contentLiasettingsSetinventoryverificationcontact](#contentliasettingssetinventoryverificationcontact) - Sets the inventory verification contract for the specified country.
* [contentLiasettingsSetposdataprovider](#contentliasettingssetposdataprovider) - Sets the POS data provider for the specified country.
* [contentLiasettingsUpdate](#contentliasettingsupdate) - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

## contentLiasettingsCustombatch

Retrieves and/or updates the LIA settings of multiple accounts in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsCustombatchRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsCustombatchResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LiaAboutPageSettings;
import org.openapis.openapi.models.shared.LiaCountrySettings;
import org.openapis.openapi.models.shared.LiaInventorySettings;
import org.openapis.openapi.models.shared.LiaOnDisplayToOrderSettings;
import org.openapis.openapi.models.shared.LiaPosDataProvider;
import org.openapis.openapi.models.shared.LiaSettings;
import org.openapis.openapi.models.shared.LiasettingsCustomBatchRequest;
import org.openapis.openapi.models.shared.LiasettingsCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsCustombatchRequest req = new ContentLiasettingsCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                liasettingsCustomBatchRequest = new LiasettingsCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.LiasettingsCustomBatchRequestEntry[]{{
                        add(new LiasettingsCustomBatchRequestEntry() {{
                            accountId = "atque";
                            batchId = 671957L;
                            contactEmail = "nam";
                            contactName = "tenetur";
                            country = "Honduras";
                            gmbEmail = "alias";
                            liaSettings = new LiaSettings() {{
                                accountId = "amet";
                                countrySettings = new org.openapis.openapi.models.shared.LiaCountrySettings[]{{
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "voluptate";
                                            url = "unde";
                                        }};
                                        country = "Virgin Islands, British";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "provident";
                                            inventoryVerificationContactName = "repellendus";
                                            inventoryVerificationContactStatus = "delectus";
                                            status = "voluptates";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "perferendis";
                                            status = "est";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "quidem";
                                            posExternalAccountId = "reprehenderit";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "facere";
                                            url = "fuga";
                                        }};
                                        country = "Lithuania";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "mollitia";
                                            inventoryVerificationContactName = "veniam";
                                            inventoryVerificationContactStatus = "voluptatem";
                                            status = "quisquam";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "repudiandae";
                                            status = "quasi";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "atque";
                                            posExternalAccountId = "reprehenderit";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "asperiores";
                                            url = "totam";
                                        }};
                                        country = "Holy See (Vatican City State)";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "quidem";
                                            inventoryVerificationContactName = "maxime";
                                            inventoryVerificationContactStatus = "et";
                                            status = "esse";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "amet";
                                            status = "assumenda";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "ea";
                                            posExternalAccountId = "atque";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                }};
                                kind = "error";
                            }};
                            merchantId = "officiis";
                            method = "officiis";
                            posDataProviderId = "accusamus";
                            posExternalAccountId = "natus";
                        }}),
                        add(new LiasettingsCustomBatchRequestEntry() {{
                            accountId = "minima";
                            batchId = 133461L;
                            contactEmail = "ex";
                            contactName = "maiores";
                            country = "Mali";
                            gmbEmail = "at";
                            liaSettings = new LiaSettings() {{
                                accountId = "error";
                                countrySettings = new org.openapis.openapi.models.shared.LiaCountrySettings[]{{
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "suscipit";
                                            url = "repudiandae";
                                        }};
                                        country = "Mali";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "atque";
                                            inventoryVerificationContactName = "sunt";
                                            inventoryVerificationContactStatus = "recusandae";
                                            status = "dolorum";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "repellendus";
                                            status = "labore";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "reiciendis";
                                            posExternalAccountId = "doloremque";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "repudiandae";
                                            url = "dicta";
                                        }};
                                        country = "Antigua and Barbuda";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "beatae";
                                            inventoryVerificationContactName = "dolores";
                                            inventoryVerificationContactStatus = "enim";
                                            status = "laboriosam";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "velit";
                                            status = "a";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "molestias";
                                            posExternalAccountId = "magnam";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "saepe";
                                            url = "consequuntur";
                                        }};
                                        country = "Moldova";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "officiis";
                                            inventoryVerificationContactName = "perspiciatis";
                                            inventoryVerificationContactStatus = "in";
                                            status = "adipisci";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "eveniet";
                                            status = "occaecati";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "consequuntur";
                                            posExternalAccountId = "fugit";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                }};
                                kind = "id";
                            }};
                            merchantId = "quis";
                            method = "reprehenderit";
                            posDataProviderId = "error";
                            posExternalAccountId = "illo";
                        }}),
                        add(new LiasettingsCustomBatchRequestEntry() {{
                            accountId = "corporis";
                            batchId = 696463L;
                            contactEmail = "eveniet";
                            contactName = "non";
                            country = "Tanzania";
                            gmbEmail = "doloremque";
                            liaSettings = new LiaSettings() {{
                                accountId = "iure";
                                countrySettings = new org.openapis.openapi.models.shared.LiaCountrySettings[]{{
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "totam";
                                            url = "quae";
                                        }};
                                        country = "Kuwait";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "eveniet";
                                            inventoryVerificationContactName = "qui";
                                            inventoryVerificationContactStatus = "cum";
                                            status = "iure";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "necessitatibus";
                                            status = "ratione";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "laborum";
                                            posExternalAccountId = "distinctio";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                }};
                                kind = "voluptatum";
                            }};
                            merchantId = "rem";
                            method = "aliquam";
                            posDataProviderId = "ad";
                            posExternalAccountId = "repellat";
                        }}),
                    }};
                }};;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                dryRun = false;
                fields = "nihil";
                key = "mollitia";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "maiores";
                uploadProtocol = "reiciendis";
            }};            

            ContentLiasettingsCustombatchResponse res = sdk.liasettings.contentLiasettingsCustombatch(req, new ContentLiasettingsCustombatchSecurity("dolores", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsGet

Retrieves the LIA settings of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsGetRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsGetResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsGetRequest req = new ContentLiasettingsGetRequest("minima", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "omnis";
                key = "quaerat";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "ut";
                uploadProtocol = "culpa";
            }};            

            ContentLiasettingsGetResponse res = sdk.liasettings.contentLiasettingsGet(req, new ContentLiasettingsGetSecurity("adipisci", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liaSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsGetaccessiblegmbaccounts

Retrieves the list of accessible Google My Business accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsGetaccessiblegmbaccountsRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsGetaccessiblegmbaccountsResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsGetaccessiblegmbaccountsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsGetaccessiblegmbaccountsRequest req = new ContentLiasettingsGetaccessiblegmbaccountsRequest("laudantium", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quis";
                key = "eum";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "aspernatur";
                uploadProtocol = "ullam";
            }};            

            ContentLiasettingsGetaccessiblegmbaccountsResponse res = sdk.liasettings.contentLiasettingsGetaccessiblegmbaccounts(req, new ContentLiasettingsGetaccessiblegmbaccountsSecurity("quasi", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsGetAccessibleGmbAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsList

Lists the LIA settings of the sub-accounts in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsListRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsListResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsListRequest req = new ContentLiasettingsListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "ex";
                key = "aliquid";
                maxResults = 37565L;
                oauthToken = "repellat";
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "in";
                uploadProtocol = "nam";
            }};            

            ContentLiasettingsListResponse res = sdk.liasettings.contentLiasettingsList(req, new ContentLiasettingsListSecurity("earum", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsListposdataproviders

Retrieves the list of POS data providers that have active settings for the all eiligible countries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsListposdataprovidersRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsListposdataprovidersResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsListposdataprovidersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsListposdataprovidersRequest req = new ContentLiasettingsListposdataprovidersRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "molestias";
                key = "officiis";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "vitae";
                uploadProtocol = "rerum";
            }};            

            ContentLiasettingsListposdataprovidersResponse res = sdk.liasettings.contentLiasettingsListposdataproviders(req, new ContentLiasettingsListposdataprovidersSecurity("tempora", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsListPosDataProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsRequestgmbaccess

Requests access to a specified Google My Business account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsRequestgmbaccessRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsRequestgmbaccessResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsRequestgmbaccessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsRequestgmbaccessRequest req = new ContentLiasettingsRequestgmbaccessRequest("inventore", "fugit", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "eum";
                key = "eius";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "impedit";
                uploadProtocol = "eos";
            }};            

            ContentLiasettingsRequestgmbaccessResponse res = sdk.liasettings.contentLiasettingsRequestgmbaccess(req, new ContentLiasettingsRequestgmbaccessSecurity("sapiente", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsRequestGmbAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsRequestinventoryverification

Requests inventory validation for the specified country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsRequestinventoryverificationRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsRequestinventoryverificationResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsRequestinventoryverificationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsRequestinventoryverificationRequest req = new ContentLiasettingsRequestinventoryverificationRequest("dicta", "minima", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "hic";
                key = "illum";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "perspiciatis";
                uploadProtocol = "maiores";
            }};            

            ContentLiasettingsRequestinventoryverificationResponse res = sdk.liasettings.contentLiasettingsRequestinventoryverification(req, new ContentLiasettingsRequestinventoryverificationSecurity("debitis", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsRequestInventoryVerificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsSetinventoryverificationcontact

Sets the inventory verification contract for the specified country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsSetinventoryverificationcontactRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsSetinventoryverificationcontactResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsSetinventoryverificationcontactSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsSetinventoryverificationcontactRequest req = new ContentLiasettingsSetinventoryverificationcontactRequest("porro", "suscipit", "dolorem", "fugit", "cumque", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "consequatur";
                key = "quasi";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "natus";
                uploadProtocol = "occaecati";
            }};            

            ContentLiasettingsSetinventoryverificationcontactResponse res = sdk.liasettings.contentLiasettingsSetinventoryverificationcontact(req, new ContentLiasettingsSetinventoryverificationcontactSecurity("suscipit", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsSetInventoryVerificationContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsSetposdataprovider

Sets the POS data provider for the specified country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsSetposdataproviderRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsSetposdataproviderResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsSetposdataproviderSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsSetposdataproviderRequest req = new ContentLiasettingsSetposdataproviderRequest("quasi", "magni", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "nihil";
                key = "molestiae";
                oauthToken = "dicta";
                posDataProviderId = "iusto";
                posExternalAccountId = "esse";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "maiores";
                uploadProtocol = "reiciendis";
            }};            

            ContentLiasettingsSetposdataproviderResponse res = sdk.liasettings.contentLiasettingsSetposdataprovider(req, new ContentLiasettingsSetposdataproviderSecurity("vel", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liasettingsSetPosDataProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentLiasettingsUpdate

Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentLiasettingsUpdateRequest;
import org.openapis.openapi.models.operations.ContentLiasettingsUpdateResponse;
import org.openapis.openapi.models.operations.ContentLiasettingsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LiaAboutPageSettings;
import org.openapis.openapi.models.shared.LiaCountrySettings;
import org.openapis.openapi.models.shared.LiaInventorySettings;
import org.openapis.openapi.models.shared.LiaOnDisplayToOrderSettings;
import org.openapis.openapi.models.shared.LiaPosDataProvider;
import org.openapis.openapi.models.shared.LiaSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentLiasettingsUpdateRequest req = new ContentLiasettingsUpdateRequest("fugiat", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                liaSettings = new LiaSettings() {{
                    accountId = "odio";
                    countrySettings = new org.openapis.openapi.models.shared.LiaCountrySettings[]{{
                        add(new LiaCountrySettings() {{
                            about = new LiaAboutPageSettings() {{
                                status = "esse";
                                url = "ex";
                            }};
                            country = "Djibouti";
                            hostedLocalStorefrontActive = false;
                            inventory = new LiaInventorySettings() {{
                                inventoryVerificationContactEmail = "aliquid";
                                inventoryVerificationContactName = "ipsa";
                                inventoryVerificationContactStatus = "laborum";
                                status = "sunt";
                            }};
                            onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                shippingCostPolicyUrl = "nostrum";
                                status = "fugiat";
                            }};
                            posDataProvider = new LiaPosDataProvider() {{
                                posDataProviderId = "expedita";
                                posExternalAccountId = "aliquid";
                            }};
                            storePickupActive = false;
                        }}),
                        add(new LiaCountrySettings() {{
                            about = new LiaAboutPageSettings() {{
                                status = "officia";
                                url = "suscipit";
                            }};
                            country = "Iceland";
                            hostedLocalStorefrontActive = false;
                            inventory = new LiaInventorySettings() {{
                                inventoryVerificationContactEmail = "perferendis";
                                inventoryVerificationContactName = "eum";
                                inventoryVerificationContactStatus = "voluptas";
                                status = "iste";
                            }};
                            onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                shippingCostPolicyUrl = "id";
                                status = "ab";
                            }};
                            posDataProvider = new LiaPosDataProvider() {{
                                posDataProviderId = "error";
                                posExternalAccountId = "possimus";
                            }};
                            storePickupActive = false;
                        }}),
                    }};
                    kind = "voluptates";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "libero";
                dryRun = false;
                fields = "ad";
                key = "deleniti";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "repellendus";
                uploadProtocol = "ex";
            }};            

            ContentLiasettingsUpdateResponse res = sdk.liasettings.contentLiasettingsUpdate(req, new ContentLiasettingsUpdateSecurity("quo", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.liaSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
