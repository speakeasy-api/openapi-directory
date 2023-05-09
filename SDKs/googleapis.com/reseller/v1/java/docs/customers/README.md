# customers

### Available Operations

* [resellerCustomersGet](#resellercustomersget) - Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).
* [resellerCustomersInsert](#resellercustomersinsert) - Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).
* [resellerCustomersPatch](#resellercustomerspatch) - Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).
* [resellerCustomersUpdate](#resellercustomersupdate) - Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

## resellerCustomersGet

Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerCustomersGetRequest;
import org.openapis.openapi.models.operations.ResellerCustomersGetResponse;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurity;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurityOption1;
import org.openapis.openapi.models.operations.ResellerCustomersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerCustomersGetRequest req = new ResellerCustomersGetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ResellerCustomersGetResponse res = sdk.customers.resellerCustomersGet(req, new ResellerCustomersGetSecurity() {{
                option1 = new ResellerCustomersGetSecurityOption1("excepturi", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resellerCustomersInsert

Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerCustomersInsertRequest;
import org.openapis.openapi.models.operations.ResellerCustomersInsertResponse;
import org.openapis.openapi.models.operations.ResellerCustomersInsertSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerCustomerTypeEnum;
import org.openapis.openapi.models.shared.PrimaryAdmin;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerCustomersInsertRequest req = new ResellerCustomersInsertRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                customer = new Customer() {{
                    alternateEmail = "temporibus";
                    customerDomain = "ab";
                    customerDomainVerified = false;
                    customerId = "quis";
                    customerType = CustomerCustomerTypeEnum.CUSTOMER_TYPE_UNSPECIFIED;
                    kind = "deserunt";
                    phoneNumber = "perferendis";
                    postalAddress = new Address() {{
                        addressLine1 = "ipsam";
                        addressLine2 = "repellendus";
                        addressLine3 = "sapiente";
                        contactName = "quo";
                        countryCode = "BW";
                        kind = "at";
                        locality = "at";
                        organizationName = "maiores";
                        postalCode = "78457";
                        region = "dolorum";
                    }};;
                    primaryAdmin = new PrimaryAdmin() {{
                        primaryEmail = "dicta";
                    }};;
                    resourceUiUrl = "nam";
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                customerAuthToken = "deleniti";
                fields = "hic";
                key = "optio";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            ResellerCustomersInsertResponse res = sdk.customers.resellerCustomersInsert(req, new ResellerCustomersInsertSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resellerCustomersPatch

Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerCustomersPatchRequest;
import org.openapis.openapi.models.operations.ResellerCustomersPatchResponse;
import org.openapis.openapi.models.operations.ResellerCustomersPatchSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerCustomerTypeEnum;
import org.openapis.openapi.models.shared.PrimaryAdmin;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerCustomersPatchRequest req = new ResellerCustomersPatchRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                customer = new Customer() {{
                    alternateEmail = "esse";
                    customerDomain = "ipsum";
                    customerDomainVerified = false;
                    customerId = "excepturi";
                    customerType = CustomerCustomerTypeEnum.CUSTOMER_TYPE_UNSPECIFIED;
                    kind = "perferendis";
                    phoneNumber = "ad";
                    postalAddress = new Address() {{
                        addressLine1 = "natus";
                        addressLine2 = "sed";
                        addressLine3 = "iste";
                        contactName = "dolor";
                        countryCode = "MU";
                        kind = "laboriosam";
                        locality = "hic";
                        organizationName = "saepe";
                        postalCode = "43649-6009";
                        region = "est";
                    }};;
                    primaryAdmin = new PrimaryAdmin() {{
                        primaryEmail = "mollitia";
                    }};;
                    resourceUiUrl = "laborum";
                }};;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "explicabo";
                key = "nobis";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "nemo";
                uploadProtocol = "minima";
            }};            

            ResellerCustomersPatchResponse res = sdk.customers.resellerCustomersPatch(req, new ResellerCustomersPatchSecurity("excepturi", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resellerCustomersUpdate

Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerCustomersUpdateRequest;
import org.openapis.openapi.models.operations.ResellerCustomersUpdateResponse;
import org.openapis.openapi.models.operations.ResellerCustomersUpdateSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerCustomerTypeEnum;
import org.openapis.openapi.models.shared.PrimaryAdmin;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerCustomersUpdateRequest req = new ResellerCustomersUpdateRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                customer = new Customer() {{
                    alternateEmail = "doloribus";
                    customerDomain = "sapiente";
                    customerDomainVerified = false;
                    customerId = "architecto";
                    customerType = CustomerCustomerTypeEnum.DOMAIN;
                    kind = "dolorem";
                    phoneNumber = "culpa";
                    postalAddress = new Address() {{
                        addressLine1 = "consequuntur";
                        addressLine2 = "repellat";
                        addressLine3 = "mollitia";
                        contactName = "occaecati";
                        countryCode = "EE";
                        kind = "commodi";
                        locality = "quam";
                        organizationName = "molestiae";
                        postalCode = "61316";
                        region = "animi";
                    }};;
                    primaryAdmin = new PrimaryAdmin() {{
                        primaryEmail = "enim";
                    }};;
                    resourceUiUrl = "odit";
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "ipsam";
                key = "id";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            ResellerCustomersUpdateResponse res = sdk.customers.resellerCustomersUpdate(req, new ResellerCustomersUpdateSecurity("temporibus", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
