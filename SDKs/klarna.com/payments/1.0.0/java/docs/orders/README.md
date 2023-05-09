# orders

### Available Operations

* [cancelAuthorization](#cancelauthorization) - Cancel an existing authorization
* [createOrder](#createorder) - Create a new order
* [purchaseToken](#purchasetoken) - Generate a consumer token

## cancelAuthorization

Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.
Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelAuthorizationRequest;
import org.openapis.openapi.models.operations.CancelAuthorizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelAuthorizationRequest req = new CancelAuthorizationRequest("provident");            

            CancelAuthorizationResponse res = sdk.orders.cancelAuthorization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrder

Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api).
Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrderRequest;
import org.openapis.openapi.models.operations.CreateOrderResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateOrderRequestInput;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerOrganizationEntityTypeEnum;
import org.openapis.openapi.models.shared.MerchantUrls;
import org.openapis.openapi.models.shared.OrderLine;
import org.openapis.openapi.models.shared.ProductIdentifiers;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.SubscriptionIntervalEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateOrderRequest req = new CreateOrderRequest("distinctio") {{
                createOrderRequestInput = new CreateOrderRequestInput(2500L,                 new org.openapis.openapi.models.shared.OrderLine[]{{
                                    add(new OrderLine("Running shoe", 1L, 2500L, 2500L) {{
                                        imageUrl = "https://www.exampleobjects.com/logo.png";
                                        merchantData = "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}";
                                        name = "Running shoe";
                                        productIdentifiers = new ProductIdentifiers() {{
                                            brand = "shoe-brand";
                                            categoryPath = "Shoes > Running";
                                            color = "white";
                                            globalTradeItemNumber = "4912345678904";
                                            manufacturerPartNumber = "AD6654412-334.22";
                                            size = "small";
                                        }};
                                        productUrl = "https://.../AD6654412.html";
                                        quantity = 1L;
                                        quantityUnit = "pcs";
                                        reference = "AD6654412";
                                        subscription = new Subscription(SubscriptionIntervalEnum.WEEK, 437587L, "magnam") {{
                                            interval = SubscriptionIntervalEnum.MONTH;
                                            intervalCount = 857946L;
                                            name = "Dallas Kassulke";
                                        }};
                                        taxRate = 1900L;
                                        totalAmount = 2500L;
                                        totalDiscountAmount = 500L;
                                        totalTaxAmount = 475L;
                                        type = "physical";
                                        unitPrice = 2500L;
                                    }}),
                                    add(new OrderLine("Running shoe", 1L, 2500L, 2500L) {{
                                        imageUrl = "https://www.exampleobjects.com/logo.png";
                                        merchantData = "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}";
                                        name = "Running shoe";
                                        productIdentifiers = new ProductIdentifiers() {{
                                            brand = "shoe-brand";
                                            categoryPath = "Shoes > Running";
                                            color = "white";
                                            globalTradeItemNumber = "4912345678904";
                                            manufacturerPartNumber = "AD6654412-334.22";
                                            size = "small";
                                        }};
                                        productUrl = "https://.../AD6654412.html";
                                        quantity = 1L;
                                        quantityUnit = "pcs";
                                        reference = "AD6654412";
                                        subscription = new Subscription(SubscriptionIntervalEnum.YEAR, 528895L, "iusto") {{
                                            interval = SubscriptionIntervalEnum.YEAR;
                                            intervalCount = 56713L;
                                            name = "Ricky Hoppe";
                                        }};
                                        taxRate = 1900L;
                                        totalAmount = 2500L;
                                        totalDiscountAmount = 500L;
                                        totalTaxAmount = 475L;
                                        type = "physical";
                                        unitPrice = 2500L;
                                    }}),
                                    add(new OrderLine("Running shoe", 1L, 2500L, 2500L) {{
                                        imageUrl = "https://www.exampleobjects.com/logo.png";
                                        merchantData = "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}";
                                        name = "Running shoe";
                                        productIdentifiers = new ProductIdentifiers() {{
                                            brand = "shoe-brand";
                                            categoryPath = "Shoes > Running";
                                            color = "white";
                                            globalTradeItemNumber = "4912345678904";
                                            manufacturerPartNumber = "AD6654412-334.22";
                                            size = "small";
                                        }};
                                        productUrl = "https://.../AD6654412.html";
                                        quantity = 1L;
                                        quantityUnit = "pcs";
                                        reference = "AD6654412";
                                        subscription = new Subscription(SubscriptionIntervalEnum.DAY, 368241L, "repellendus") {{
                                            interval = SubscriptionIntervalEnum.MONTH;
                                            intervalCount = 392785L;
                                            name = "Jake Bernier MD";
                                        }};
                                        taxRate = 1900L;
                                        totalAmount = 2500L;
                                        totalDiscountAmount = 500L;
                                        totalTaxAmount = 475L;
                                        type = "physical";
                                        unitPrice = 2500L;
                                    }}),
                                    add(new OrderLine("Running shoe", 1L, 2500L, 2500L) {{
                                        imageUrl = "https://www.exampleobjects.com/logo.png";
                                        merchantData = "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}";
                                        name = "Running shoe";
                                        productIdentifiers = new ProductIdentifiers() {{
                                            brand = "shoe-brand";
                                            categoryPath = "Shoes > Running";
                                            color = "white";
                                            globalTradeItemNumber = "4912345678904";
                                            manufacturerPartNumber = "AD6654412-334.22";
                                            size = "small";
                                        }};
                                        productUrl = "https://.../AD6654412.html";
                                        quantity = 1L;
                                        quantityUnit = "pcs";
                                        reference = "AD6654412";
                                        subscription = new Subscription(SubscriptionIntervalEnum.YEAR, 800911L, "esse") {{
                                            interval = SubscriptionIntervalEnum.YEAR;
                                            intervalCount = 778157L;
                                            name = "Teri Strosin";
                                        }};
                                        taxRate = 1900L;
                                        totalAmount = 2500L;
                                        totalDiscountAmount = 500L;
                                        totalTaxAmount = 475L;
                                        type = "physical";
                                        unitPrice = 2500L;
                                    }}),
                                }}, "GB", "GBP") {{
                    autoCapture = false;
                    billingAddress = new Address() {{
                        attention = "Attn";
                        city = "London";
                        country = "GB";
                        email = "test.sam@test.com";
                        familyName = "Andersson";
                        givenName = "Adam";
                        organizationName = "totam";
                        phone = "+44795465131";
                        postalCode = "W1G 0PW";
                        region = "OH";
                        streetAddress = "33 Cavendish Square";
                        streetAddress2 = "Floor 22 / Flat 2";
                        title = "Mr.";
                    }};;
                    customPaymentMethodIds = new String[]{{
                        add("dolorum"),
                        add("dicta"),
                        add("nam"),
                        add("officia"),
                    }};
                    customer = new Customer() {{
                        dateOfBirth = "1978-12-31";
                        gender = "male";
                        lastFourSsn = "occaecati";
                        nationalIdentificationNumber = "fugit";
                        organizationEntityType = CustomerOrganizationEntityTypeEnum.GENERAL_PARTNERSHIP;
                        organizationRegistrationId = "hic";
                        title = "Mr.";
                        type = "organization";
                        vatId = "optio";
                    }};;
                    locale = "en-GB";
                    merchantData = "{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}";
                    merchantReference1 = "ON4711";
                    merchantReference2 = "hdt53h-zdgg6-hdaff2";
                    merchantUrls = new MerchantUrls() {{
                        authorization = "https://www.example-url.com/authorization";
                        confirmation = "https://www.example-url.com/confirmation";
                        notification = "https://www.example-url.com/notification";
                        push = "https://www.example-url.com/push";
                    }};;
                    orderTaxAmount = 475L;
                    shippingAddress = new Address() {{
                        attention = "Attn";
                        city = "London";
                        country = "GB";
                        email = "test.sam@test.com";
                        familyName = "Andersson";
                        givenName = "Adam";
                        organizationName = "totam";
                        phone = "+44795465131";
                        postalCode = "W1G 0PW";
                        region = "OH";
                        streetAddress = "33 Cavendish Square";
                        streetAddress2 = "Floor 22 / Flat 2";
                        title = "Mr.";
                    }};;
                }};;
            }};            

            CreateOrderResponse res = sdk.orders.createOrder(req);

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## purchaseToken

Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.
Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchaseTokenRequest;
import org.openapis.openapi.models.operations.PurchaseTokenResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerOrganizationEntityTypeEnum;
import org.openapis.openapi.models.shared.CustomerTokenCreationRequest;
import org.openapis.openapi.models.shared.CustomerTokenCreationRequestIntendedUseEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PurchaseTokenRequest req = new PurchaseTokenRequest("beatae") {{
                customerTokenCreationRequest = new CustomerTokenCreationRequest("commodi", CustomerTokenCreationRequestIntendedUseEnum.SUBSCRIPTION, "en-GB", "GB", "GBP") {{
                    billingAddress = new Address() {{
                        attention = "Attn";
                        city = "London";
                        country = "GB";
                        email = "test.sam@test.com";
                        familyName = "Andersson";
                        givenName = "Adam";
                        organizationName = "molestiae";
                        phone = "+44795465131";
                        postalCode = "W1G 0PW";
                        region = "OH";
                        streetAddress = "33 Cavendish Square";
                        streetAddress2 = "Floor 22 / Flat 2";
                        title = "Mr.";
                    }};;
                    customer = new Customer() {{
                        dateOfBirth = "1978-12-31";
                        gender = "male";
                        lastFourSsn = "modi";
                        nationalIdentificationNumber = "qui";
                        organizationEntityType = CustomerOrganizationEntityTypeEnum.CIVIL_LAW_PARTNERSHIP;
                        organizationRegistrationId = "cum";
                        title = "Mr.";
                        type = "organization";
                        vatId = "esse";
                    }};;
                }};;
            }};            

            PurchaseTokenResponse res = sdk.orders.purchaseToken(req);

            if (res.customerTokenCreationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
