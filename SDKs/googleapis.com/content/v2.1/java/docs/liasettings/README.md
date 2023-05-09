# liasettings

### Available Operations

* [contentLiasettingsCustombatch](#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [contentLiasettingsGet](#contentliasettingsget) - Retrieves the LIA settings of the account.
* [contentLiasettingsGetaccessiblegmbaccounts](#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Business Profiles.
* [contentLiasettingsList](#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [contentLiasettingsListposdataproviders](#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [contentLiasettingsRequestgmbaccess](#contentliasettingsrequestgmbaccess) - Requests access to a specified Business Profile.
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
                            accountId = "at";
                            batchId = 637856L;
                            contactEmail = "dignissimos";
                            contactName = "optio";
                            country = "Tonga";
                            gmbEmail = "corporis";
                            liaSettings = new LiaSettings() {{
                                accountId = "qui";
                                countrySettings = new org.openapis.openapi.models.shared.LiaCountrySettings[]{{
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "voluptatum";
                                            url = "cupiditate";
                                        }};
                                        country = "Ghana";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "placeat";
                                            inventoryVerificationContactName = "enim";
                                            inventoryVerificationContactStatus = "neque";
                                            status = "in";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "minus";
                                            status = "eum";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "modi";
                                            posExternalAccountId = "corporis";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "magnam";
                                            url = "voluptates";
                                        }};
                                        country = "Virgin Islands, U.S.";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "tempore";
                                            inventoryVerificationContactName = "aperiam";
                                            inventoryVerificationContactStatus = "libero";
                                            status = "ratione";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "labore";
                                            status = "totam";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "occaecati";
                                            posExternalAccountId = "voluptas";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                    add(new LiaCountrySettings() {{
                                        about = new LiaAboutPageSettings() {{
                                            status = "quo";
                                            url = "velit";
                                        }};
                                        country = "Seychelles";
                                        hostedLocalStorefrontActive = false;
                                        inventory = new LiaInventorySettings() {{
                                            inventoryVerificationContactEmail = "fuga";
                                            inventoryVerificationContactName = "nostrum";
                                            inventoryVerificationContactStatus = "est";
                                            status = "impedit";
                                        }};
                                        onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                            shippingCostPolicyUrl = "delectus";
                                            status = "tempore";
                                        }};
                                        posDataProvider = new LiaPosDataProvider() {{
                                            posDataProviderId = "vero";
                                            posExternalAccountId = "odit";
                                        }};
                                        storePickupActive = false;
                                    }}),
                                }};
                                kind = "repellat";
                            }};
                            merchantId = "pariatur";
                            method = "nemo";
                            posDataProviderId = "reprehenderit";
                            posExternalAccountId = "aperiam";
                        }}),
                    }};
                }};;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "in";
                fields = "ducimus";
                key = "excepturi";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "veritatis";
                uploadProtocol = "ducimus";
            }};            

            ContentLiasettingsCustombatchResponse res = sdk.liasettings.contentLiasettingsCustombatch(req, new ContentLiasettingsCustombatchSecurity("voluptate", "pariatur") {{
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

            ContentLiasettingsGetRequest req = new ContentLiasettingsGetRequest("itaque", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "officiis";
                key = "placeat";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "quam";
                uploadProtocol = "dolorem";
            }};            

            ContentLiasettingsGetResponse res = sdk.liasettings.contentLiasettingsGet(req, new ContentLiasettingsGetSecurity("modi", "ipsa") {{
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

Retrieves the list of accessible Business Profiles.

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

            ContentLiasettingsGetaccessiblegmbaccountsRequest req = new ContentLiasettingsGetaccessiblegmbaccountsRequest("sint", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "earum";
                key = "veniam";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "nam";
                uploadProtocol = "dicta";
            }};            

            ContentLiasettingsGetaccessiblegmbaccountsResponse res = sdk.liasettings.contentLiasettingsGetaccessiblegmbaccounts(req, new ContentLiasettingsGetaccessiblegmbaccountsSecurity("consequuntur", "necessitatibus") {{
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

            ContentLiasettingsListRequest req = new ContentLiasettingsListRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "quasi";
                key = "laboriosam";
                maxResults = 863471L;
                oauthToken = "libero";
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "nemo";
                uploadProtocol = "aliquam";
            }};            

            ContentLiasettingsListResponse res = sdk.liasettings.contentLiasettingsList(req, new ContentLiasettingsListSecurity("nostrum", "doloribus") {{
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
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "animi";
                key = "quas";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "odio";
                uploadProtocol = "eaque";
            }};            

            ContentLiasettingsListposdataprovidersResponse res = sdk.liasettings.contentLiasettingsListposdataproviders(req, new ContentLiasettingsListposdataprovidersSecurity("saepe", "architecto") {{
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

Requests access to a specified Business Profile.

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

            ContentLiasettingsRequestgmbaccessRequest req = new ContentLiasettingsRequestgmbaccessRequest("quos", "iste", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "delectus";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "adipisci";
                uploadProtocol = "saepe";
            }};            

            ContentLiasettingsRequestgmbaccessResponse res = sdk.liasettings.contentLiasettingsRequestgmbaccess(req, new ContentLiasettingsRequestgmbaccessSecurity("deserunt", "doloremque") {{
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

            ContentLiasettingsRequestinventoryverificationRequest req = new ContentLiasettingsRequestinventoryverificationRequest("quis", "veniam", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "possimus";
                key = "non";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "sed";
                uploadProtocol = "asperiores";
            }};            

            ContentLiasettingsRequestinventoryverificationResponse res = sdk.liasettings.contentLiasettingsRequestinventoryverification(req, new ContentLiasettingsRequestinventoryverificationSecurity("veniam", "consequuntur") {{
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

            ContentLiasettingsSetinventoryverificationcontactRequest req = new ContentLiasettingsSetinventoryverificationcontactRequest("facere", "laudantium", "odit", "pariatur", "amet", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "nisi";
                key = "voluptatibus";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "distinctio";
                uploadProtocol = "nisi";
            }};            

            ContentLiasettingsSetinventoryverificationcontactResponse res = sdk.liasettings.contentLiasettingsSetinventoryverificationcontact(req, new ContentLiasettingsSetinventoryverificationcontactSecurity("quis", "nisi") {{
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

            ContentLiasettingsSetposdataproviderRequest req = new ContentLiasettingsSetposdataproviderRequest("libero", "minus", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "voluptatibus";
                key = "consequuntur";
                oauthToken = "debitis";
                posDataProviderId = "labore";
                posExternalAccountId = "rerum";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "reprehenderit";
                uploadProtocol = "nostrum";
            }};            

            ContentLiasettingsSetposdataproviderResponse res = sdk.liasettings.contentLiasettingsSetposdataprovider(req, new ContentLiasettingsSetposdataproviderSecurity("neque", "iusto") {{
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

            ContentLiasettingsUpdateRequest req = new ContentLiasettingsUpdateRequest("est", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                liaSettings = new LiaSettings() {{
                    accountId = "fugiat";
                    countrySettings = new org.openapis.openapi.models.shared.LiaCountrySettings[]{{
                        add(new LiaCountrySettings() {{
                            about = new LiaAboutPageSettings() {{
                                status = "officiis";
                                url = "ducimus";
                            }};
                            country = "Cuba";
                            hostedLocalStorefrontActive = false;
                            inventory = new LiaInventorySettings() {{
                                inventoryVerificationContactEmail = "dicta";
                                inventoryVerificationContactName = "error";
                                inventoryVerificationContactStatus = "porro";
                                status = "vitae";
                            }};
                            onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                shippingCostPolicyUrl = "dignissimos";
                                status = "esse";
                            }};
                            posDataProvider = new LiaPosDataProvider() {{
                                posDataProviderId = "fugiat";
                                posExternalAccountId = "ad";
                            }};
                            storePickupActive = false;
                        }}),
                        add(new LiaCountrySettings() {{
                            about = new LiaAboutPageSettings() {{
                                status = "aspernatur";
                                url = "enim";
                            }};
                            country = "Venezuela";
                            hostedLocalStorefrontActive = false;
                            inventory = new LiaInventorySettings() {{
                                inventoryVerificationContactEmail = "iusto";
                                inventoryVerificationContactName = "dignissimos";
                                inventoryVerificationContactStatus = "libero";
                                status = "illo";
                            }};
                            onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                shippingCostPolicyUrl = "ab";
                                status = "incidunt";
                            }};
                            posDataProvider = new LiaPosDataProvider() {{
                                posDataProviderId = "accusamus";
                                posExternalAccountId = "saepe";
                            }};
                            storePickupActive = false;
                        }}),
                        add(new LiaCountrySettings() {{
                            about = new LiaAboutPageSettings() {{
                                status = "tempore";
                                url = "veniam";
                            }};
                            country = "China";
                            hostedLocalStorefrontActive = false;
                            inventory = new LiaInventorySettings() {{
                                inventoryVerificationContactEmail = "reiciendis";
                                inventoryVerificationContactName = "earum";
                                inventoryVerificationContactStatus = "reprehenderit";
                                status = "praesentium";
                            }};
                            onDisplayToOrder = new LiaOnDisplayToOrderSettings() {{
                                shippingCostPolicyUrl = "nemo";
                                status = "repellat";
                            }};
                            posDataProvider = new LiaPosDataProvider() {{
                                posDataProviderId = "quisquam";
                                posExternalAccountId = "sequi";
                            }};
                            storePickupActive = false;
                        }}),
                    }};
                    kind = "nihil";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "assumenda";
                key = "aliquam";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "laudantium";
                uploadProtocol = "repudiandae";
            }};            

            ContentLiasettingsUpdateResponse res = sdk.liasettings.contentLiasettingsUpdate(req, new ContentLiasettingsUpdateSecurity("consequatur", "maxime") {{
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
