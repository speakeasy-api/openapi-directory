# sessions

### Available Operations

* [createCreditSession](#createcreditsession) - Create a new payment session
* [readCreditSession](#readcreditsession) - Read an existing payment session
* [updateCreditSession](#updatecreditsession) - Update an existing payment session

## createCreditSession

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCreditSessionResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerOrganizationEntityTypeEnum;
import org.openapis.openapi.models.shared.MerchantUrls;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.OrderLine;
import org.openapis.openapi.models.shared.ProductIdentifiers;
import org.openapis.openapi.models.shared.SessionCreateAcquiringChannelEnum;
import org.openapis.openapi.models.shared.SessionCreateInput;
import org.openapis.openapi.models.shared.SessionCreateIntentEnum;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.SubscriptionIntervalEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SessionCreateInput req = new SessionCreateInput(2500L,                 new org.openapis.openapi.models.shared.OrderLine[]{{
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
                                    subscription = new Subscription(SubscriptionIntervalEnum.DAY, 616934L, "laboriosam") {{
                                        interval = SubscriptionIntervalEnum.MONTH;
                                        intervalCount = 135218L;
                                        name = "Cathy Mosciski";
                                    }};
                                    taxRate = 1900L;
                                    totalAmount = 2500L;
                                    totalDiscountAmount = 500L;
                                    totalTaxAmount = 475L;
                                    type = "physical";
                                    unitPrice = 2500L;
                                }}),
                            }}, "GB", "GBP") {{
                acquiringChannel = SessionCreateAcquiringChannelEnum.ECOMMERCE;
                attachment = new Attachment("{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}", "application/vnd.klarna.internal.emd-v2+json");;
                billingAddress = new Address() {{
                    attention = "Attn";
                    city = "London";
                    country = "GB";
                    email = "test.sam@test.com";
                    familyName = "Andersson";
                    givenName = "Adam";
                    organizationName = "hic";
                    phone = "+44795465131";
                    postalCode = "W1G 0PW";
                    region = "OH";
                    streetAddress = "33 Cavendish Square";
                    streetAddress2 = "Floor 22 / Flat 2";
                    title = "Mr.";
                }};;
                customPaymentMethodIds = new String[]{{
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                    add("iste"),
                }};
                customer = new Customer() {{
                    dateOfBirth = "1978-12-31";
                    gender = "male";
                    lastFourSsn = "iure";
                    nationalIdentificationNumber = "saepe";
                    organizationEntityType = CustomerOrganizationEntityTypeEnum.SOLE_TRADER;
                    organizationRegistrationId = "architecto";
                    title = "Mr.";
                    type = "organization";
                    vatId = "ipsa";
                }};;
                design = "reiciendis";
                intent = SessionCreateIntentEnum.BUY;
                locale = "en-US";
                merchantData = "{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}";
                merchantReference1 = "ON4711";
                merchantReference2 = "hdt53h-zdgg6-hdaff2";
                merchantUrls = new MerchantUrls() {{
                    authorization = "https://www.example-url.com/authorization";
                    confirmation = "https://www.example-url.com/confirmation";
                    notification = "https://www.example-url.com/notification";
                    push = "https://www.example-url.com/push";
                }};;
                options = new Options() {{
                    colorBorder = "#FF9900";
                    colorBorderSelected = "#FF9900";
                    colorDetails = "#FF9900";
                    colorText = "#FF9900";
                    radiusBorder = "5px";
                }};;
                orderTaxAmount = 475L;
                shippingAddress = new Address() {{
                    attention = "Attn";
                    city = "London";
                    country = "GB";
                    email = "test.sam@test.com";
                    familyName = "Andersson";
                    givenName = "Adam";
                    organizationName = "est";
                    phone = "+44795465131";
                    postalCode = "W1G 0PW";
                    region = "OH";
                    streetAddress = "33 Cavendish Square";
                    streetAddress2 = "Floor 22 / Flat 2";
                    title = "Mr.";
                }};;
            }};            

            CreateCreditSessionResponse res = sdk.sessions.createCreditSession(req);

            if (res.merchantSession != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readCreditSession

Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReadCreditSessionRequest;
import org.openapis.openapi.models.operations.ReadCreditSessionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReadCreditSessionRequest req = new ReadCreditSessionRequest("mollitia");            

            ReadCreditSessionResponse res = sdk.sessions.readCreditSession(req);

            if (res.sessionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCreditSession

Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCreditSessionRequest;
import org.openapis.openapi.models.operations.UpdateCreditSessionResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Attachment;
import org.openapis.openapi.models.shared.Customer;
import org.openapis.openapi.models.shared.CustomerOrganizationEntityTypeEnum;
import org.openapis.openapi.models.shared.MerchantUrls;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.OrderLine;
import org.openapis.openapi.models.shared.ProductIdentifiers;
import org.openapis.openapi.models.shared.SessionAcquiringChannelEnum;
import org.openapis.openapi.models.shared.SessionInput;
import org.openapis.openapi.models.shared.SessionIntentEnum;
import org.openapis.openapi.models.shared.Subscription;
import org.openapis.openapi.models.shared.SubscriptionIntervalEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCreditSessionRequest req = new UpdateCreditSessionRequest(                new SessionInput() {{
                                acquiringChannel = SessionAcquiringChannelEnum.ECOMMERCE;
                                attachment = new Attachment("{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}", "application/vnd.klarna.internal.emd-v2+json");;
                                billingAddress = new Address() {{
                                    attention = "Attn";
                                    city = "London";
                                    country = "GB";
                                    email = "test.sam@test.com";
                                    familyName = "Andersson";
                                    givenName = "Adam";
                                    organizationName = "laborum";
                                    phone = "+44795465131";
                                    postalCode = "W1G 0PW";
                                    region = "OH";
                                    streetAddress = "33 Cavendish Square";
                                    streetAddress2 = "Floor 22 / Flat 2";
                                    title = "Mr.";
                                }};;
                                customPaymentMethodIds = new String[]{{
                                    add("dolorem"),
                                }};
                                customer = new Customer() {{
                                    dateOfBirth = "1978-12-31";
                                    gender = "male";
                                    lastFourSsn = "corporis";
                                    nationalIdentificationNumber = "explicabo";
                                    organizationEntityType = CustomerOrganizationEntityTypeEnum.CIVIL_LAW_PARTNERSHIP;
                                    organizationRegistrationId = "enim";
                                    title = "Mr.";
                                    type = "organization";
                                    vatId = "omnis";
                                }};;
                                design = "nemo";
                                intent = SessionIntentEnum.BUY;
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
                                options = new Options() {{
                                    colorBorder = "#FF9900";
                                    colorBorderSelected = "#FF9900";
                                    colorDetails = "#FF9900";
                                    colorText = "#FF9900";
                                    radiusBorder = "5px";
                                }};;
                                orderAmount = 2500L;
                                orderLines = new org.openapis.openapi.models.shared.OrderLine[]{{
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
                                        subscription = new Subscription(SubscriptionIntervalEnum.DAY, 635059L, "consequuntur") {{
                                            interval = SubscriptionIntervalEnum.MONTH;
                                            intervalCount = 38425L;
                                            name = "Cecilia Yundt MD";
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
                                        subscription = new Subscription(SubscriptionIntervalEnum.DAY, 623510L, "quia") {{
                                            interval = SubscriptionIntervalEnum.YEAR;
                                            intervalCount = 653108L;
                                            name = "Francis Jerde";
                                        }};
                                        taxRate = 1900L;
                                        totalAmount = 2500L;
                                        totalDiscountAmount = 500L;
                                        totalTaxAmount = 475L;
                                        type = "physical";
                                        unitPrice = 2500L;
                                    }}),
                                }};
                                orderTaxAmount = 475L;
                                purchaseCountry = "GB";
                                purchaseCurrency = "GBP";
                                shippingAddress = new Address() {{
                                    attention = "Attn";
                                    city = "London";
                                    country = "GB";
                                    email = "test.sam@test.com";
                                    familyName = "Andersson";
                                    givenName = "Adam";
                                    organizationName = "quis";
                                    phone = "+44795465131";
                                    postalCode = "W1G 0PW";
                                    region = "OH";
                                    streetAddress = "33 Cavendish Square";
                                    streetAddress2 = "Floor 22 / Flat 2";
                                    title = "Mr.";
                                }};;
                            }};, "vitae");            

            UpdateCreditSessionResponse res = sdk.sessions.updateCreditSession(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
