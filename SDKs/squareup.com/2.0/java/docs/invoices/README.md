# invoices

### Available Operations

* [cancelInvoice](#cancelinvoice) - CancelInvoice
* [createInvoice](#createinvoice) - CreateInvoice
* [deleteInvoice](#deleteinvoice) - DeleteInvoice
* [getInvoice](#getinvoice) - GetInvoice
* [listInvoices](#listinvoices) - ListInvoices
* [publishInvoice](#publishinvoice) - PublishInvoice
* [searchInvoices](#searchinvoices) - SearchInvoices
* [updateInvoice](#updateinvoice) - UpdateInvoice

## cancelInvoice

Cancels an invoice. The seller cannot collect payments for 
the canceled invoice.

You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelInvoiceRequest;
import org.openapis.openapi.models.operations.CancelInvoiceResponse;
import org.openapis.openapi.models.operations.CancelInvoiceSecurity;
import org.openapis.openapi.models.shared.CancelInvoiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelInvoiceRequest req = new CancelInvoiceRequest(                new CancelInvoiceRequest(984557L);, "amet");            

            CancelInvoiceResponse res = sdk.invoices.cancelInvoice(req, new CancelInvoiceSecurity("ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInvoice

Creates a draft [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) 
for an order created using the Orders API.

A draft invoice remains in your account and no action is taken. 
You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInvoiceResponse;
import org.openapis.openapi.models.operations.CreateInvoiceSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateInvoiceRequest;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAcceptedPaymentMethods;
import org.openapis.openapi.models.shared.InvoiceCustomField;
import org.openapis.openapi.models.shared.InvoicePaymentReminder;
import org.openapis.openapi.models.shared.InvoicePaymentRequest;
import org.openapis.openapi.models.shared.InvoiceRecipient;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateInvoiceRequest req = new CreateInvoiceRequest(                new Invoice() {{
                                acceptedPaymentMethods = new InvoiceAcceptedPaymentMethods() {{
                                    bankAccount = false;
                                    card = false;
                                    squareGiftCard = false;
                                }};;
                                createdAt = "deleniti";
                                customFields = new org.openapis.openapi.models.shared.InvoiceCustomField[]{{
                                    add(new InvoiceCustomField() {{
                                        label = "ab";
                                        placement = "sint";
                                        value = "quos";
                                    }}),
                                }};
                                deliveryMethod = "sequi";
                                description = "fugiat";
                                id = "42e54a85-4665-497c-9023-3c1471d51aaa";
                                invoiceNumber = "autem";
                                locationId = "illum";
                                nextPaymentAmountMoney = new Money() {{
                                    amount = 871381L;
                                    currency = "hic";
                                }};;
                                orderId = "nemo";
                                paymentRequests = new org.openapis.openapi.models.shared.InvoicePaymentRequest[]{{
                                    add(new InvoicePaymentRequest() {{
                                        automaticPaymentSource = "quidem";
                                        cardId = "nulla";
                                        computedAmountMoney = new Money() {{
                                            amount = 399112L;
                                            currency = "eius";
                                        }};
                                        dueDate = "atque";
                                        fixedAmountRequestedMoney = new Money() {{
                                            amount = 442527L;
                                            currency = "quo";
                                        }};
                                        percentageRequested = "enim";
                                        reminders = new org.openapis.openapi.models.shared.InvoicePaymentReminder[]{{
                                            add(new InvoicePaymentReminder() {{
                                                message = "impedit";
                                                relativeScheduledDays = 134887L;
                                                sentAt = "nobis";
                                                status = "voluptatum";
                                                uid = "ex";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "aspernatur";
                                                relativeScheduledDays = 666478L;
                                                sentAt = "voluptatem";
                                                status = "aut";
                                                uid = "nobis";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "saepe";
                                                relativeScheduledDays = 983272L;
                                                sentAt = "autem";
                                                status = "perspiciatis";
                                                uid = "saepe";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "illo";
                                                relativeScheduledDays = 45536L;
                                                sentAt = "quae";
                                                status = "veritatis";
                                                uid = "enim";
                                            }}),
                                        }};
                                        requestMethod = "ducimus";
                                        requestType = "suscipit";
                                        roundingAdjustmentIncludedMoney = new Money() {{
                                            amount = 222109L;
                                            currency = "alias";
                                        }};
                                        tippingEnabled = false;
                                        totalCompletedAmountMoney = new Money() {{
                                            amount = 730178L;
                                            currency = "quibusdam";
                                        }};
                                        uid = "fuga";
                                    }}),
                                    add(new InvoicePaymentRequest() {{
                                        automaticPaymentSource = "nihil";
                                        cardId = "similique";
                                        computedAmountMoney = new Money() {{
                                            amount = 995708L;
                                            currency = "quibusdam";
                                        }};
                                        dueDate = "accusamus";
                                        fixedAmountRequestedMoney = new Money() {{
                                            amount = 846581L;
                                            currency = "blanditiis";
                                        }};
                                        percentageRequested = "tempora";
                                        reminders = new org.openapis.openapi.models.shared.InvoicePaymentReminder[]{{
                                            add(new InvoicePaymentReminder() {{
                                                message = "dolor";
                                                relativeScheduledDays = 314552L;
                                                sentAt = "dolorum";
                                                status = "aliquam";
                                                uid = "beatae";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "explicabo";
                                                relativeScheduledDays = 202246L;
                                                sentAt = "corrupti";
                                                status = "officiis";
                                                uid = "inventore";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "officia";
                                                relativeScheduledDays = 446860L;
                                                sentAt = "sequi";
                                                status = "ad";
                                                uid = "fuga";
                                            }}),
                                        }};
                                        requestMethod = "quisquam";
                                        requestType = "qui";
                                        roundingAdjustmentIncludedMoney = new Money() {{
                                            amount = 381445L;
                                            currency = "officia";
                                        }};
                                        tippingEnabled = false;
                                        totalCompletedAmountMoney = new Money() {{
                                            amount = 901496L;
                                            currency = "ipsum";
                                        }};
                                        uid = "ratione";
                                    }}),
                                    add(new InvoicePaymentRequest() {{
                                        automaticPaymentSource = "expedita";
                                        cardId = "itaque";
                                        computedAmountMoney = new Money() {{
                                            amount = 982216L;
                                            currency = "provident";
                                        }};
                                        dueDate = "dignissimos";
                                        fixedAmountRequestedMoney = new Money() {{
                                            amount = 120241L;
                                            currency = "id";
                                        }};
                                        percentageRequested = "blanditiis";
                                        reminders = new org.openapis.openapi.models.shared.InvoicePaymentReminder[]{{
                                            add(new InvoicePaymentReminder() {{
                                                message = "modi";
                                                relativeScheduledDays = 401466L;
                                                sentAt = "nobis";
                                                status = "placeat";
                                                uid = "mollitia";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "architecto";
                                                relativeScheduledDays = 62736L;
                                                sentAt = "aut";
                                                status = "commodi";
                                                uid = "delectus";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "officiis";
                                                relativeScheduledDays = 607672L;
                                                sentAt = "ea";
                                                status = "ipsam";
                                                uid = "soluta";
                                            }}),
                                            add(new InvoicePaymentReminder() {{
                                                message = "esse";
                                                relativeScheduledDays = 113382L;
                                                sentAt = "beatae";
                                                status = "pariatur";
                                                uid = "voluptatem";
                                            }}),
                                        }};
                                        requestMethod = "blanditiis";
                                        requestType = "eligendi";
                                        roundingAdjustmentIncludedMoney = new Money() {{
                                            amount = 947573L;
                                            currency = "deleniti";
                                        }};
                                        tippingEnabled = false;
                                        totalCompletedAmountMoney = new Money() {{
                                            amount = 537321L;
                                            currency = "necessitatibus";
                                        }};
                                        uid = "cumque";
                                    }}),
                                }};
                                primaryRecipient = new InvoiceRecipient() {{
                                    address = new Address() {{
                                        addressLine1 = "iste";
                                        addressLine2 = "reiciendis";
                                        addressLine3 = "nihil";
                                        administrativeDistrictLevel1 = "libero";
                                        administrativeDistrictLevel2 = "perspiciatis";
                                        administrativeDistrictLevel3 = "occaecati";
                                        country = "Nicaragua";
                                        firstName = "Frederick";
                                        lastName = "Hauck";
                                        locality = "doloremque";
                                        organization = "similique";
                                        postalCode = "34982";
                                        sublocality = "ratione";
                                        sublocality2 = "velit";
                                        sublocality3 = "soluta";
                                    }};;
                                    companyName = "cum";
                                    customerId = "accusantium";
                                    emailAddress = "quo";
                                    familyName = "officiis";
                                    givenName = "laudantium";
                                    phoneNumber = "est";
                                }};;
                                publicUrl = "fuga";
                                scheduledAt = "autem";
                                status = "quis";
                                subscriptionId = "modi";
                                timezone = "consectetur";
                                title = "Mr.";
                                updatedAt = "officia";
                                version = 585645L;
                            }};) {{
                idempotencyKey = "rem";
            }};            

            CreateInvoiceResponse res = sdk.invoices.createInvoice(req, new CreateInvoiceSecurity("ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInvoice

Deletes the specified invoice. When an invoice is deleted, the 
associated order status changes to CANCELED. You can only delete a draft 
invoice (you cannot delete a published invoice, including one that is scheduled for processing).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInvoiceRequest;
import org.openapis.openapi.models.operations.DeleteInvoiceResponse;
import org.openapis.openapi.models.operations.DeleteInvoiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInvoiceRequest req = new DeleteInvoiceRequest("debitis") {{
                version = 743023L;
            }};            

            DeleteInvoiceResponse res = sdk.invoices.deleteInvoice(req, new DeleteInvoiceSecurity("odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvoice

Retrieves an invoice by invoice ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoiceRequest;
import org.openapis.openapi.models.operations.GetInvoiceResponse;
import org.openapis.openapi.models.operations.GetInvoiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvoiceRequest req = new GetInvoiceRequest("eveniet");            

            GetInvoiceResponse res = sdk.invoices.getInvoice(req, new GetInvoiceSecurity("beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInvoices

Returns a list of invoices for a given location. The response 
is paginated. If truncated, the response includes a `cursor` that you    
use in a subsequent request to retrieve the next set of invoices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInvoicesRequest;
import org.openapis.openapi.models.operations.ListInvoicesResponse;
import org.openapis.openapi.models.operations.ListInvoicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInvoicesRequest req = new ListInvoicesRequest("dolore") {{
                cursor = "quisquam";
                limit = 649901L;
            }};            

            ListInvoicesResponse res = sdk.invoices.listInvoices(req, new ListInvoicesSecurity("ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInvoicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishInvoice

Publishes the specified draft invoice. 

After an invoice is published, Square 
follows up based on the invoice configuration. For example, Square 
sends the invoice to the customer's email address, charges the customer's card on file, or does 
nothing. Square also makes the invoice available on a Square-hosted invoice page. 

The invoice `status` also changes from `DRAFT` to a status 
based on the invoice configuration. For example, the status changes to `UNPAID` if 
Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the 
invoice amount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishInvoiceRequest;
import org.openapis.openapi.models.operations.PublishInvoiceResponse;
import org.openapis.openapi.models.operations.PublishInvoiceSecurity;
import org.openapis.openapi.models.shared.PublishInvoiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishInvoiceRequest req = new PublishInvoiceRequest(                new PublishInvoiceRequest(422722L) {{
                                idempotencyKey = "non";
                            }};, "doloremque");            

            PublishInvoiceResponse res = sdk.invoices.publishInvoice(req, new PublishInvoiceSecurity("atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.publishInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchInvoices

Searches for invoices from a location specified in 
the filter. You can optionally specify customers in the filter for whom to 
retrieve invoices. In the current implementation, you can only specify one location and 
optionally one customer.

The response is paginated. If truncated, the response includes a `cursor` 
that you use in a subsequent request to retrieve the next set of invoices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchInvoicesResponse;
import org.openapis.openapi.models.operations.SearchInvoicesSecurity;
import org.openapis.openapi.models.shared.InvoiceFilter;
import org.openapis.openapi.models.shared.InvoiceQuery;
import org.openapis.openapi.models.shared.InvoiceSort;
import org.openapis.openapi.models.shared.SearchInvoicesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchInvoicesRequest req = new SearchInvoicesRequest(                new InvoiceQuery(                new InvoiceFilter(                new String[]{{
                                                                add("beatae"),
                                                                add("nemo"),
                                                                add("eaque"),
                                                            }}) {{
                                                customerIds = new String[]{{
                                                    add("natus"),
                                                }};
                                            }};) {{
                                sort = new InvoiceSort("nihil") {{
                                    order = "accusantium";
                                }};;
                            }};) {{
                cursor = "et";
                limit = 603306L;
            }};            

            SearchInvoicesResponse res = sdk.invoices.searchInvoices(req, new SearchInvoicesSecurity("similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchInvoicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInvoice

Updates an invoice by modifying fields, clearing fields, or both. For most updates, you can use a sparse 
`Invoice` object to add fields or change values and use the `fields_to_clear` field to specify fields to clear. 
However, some restrictions apply. For example, you cannot change the `order_id` or `location_id` field and you 
must provide the complete `custom_fields` list to update a custom field. Published invoices have additional restrictions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInvoiceRequest;
import org.openapis.openapi.models.operations.UpdateInvoiceResponse;
import org.openapis.openapi.models.operations.UpdateInvoiceSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Invoice;
import org.openapis.openapi.models.shared.InvoiceAcceptedPaymentMethods;
import org.openapis.openapi.models.shared.InvoiceCustomField;
import org.openapis.openapi.models.shared.InvoicePaymentReminder;
import org.openapis.openapi.models.shared.InvoicePaymentRequest;
import org.openapis.openapi.models.shared.InvoiceRecipient;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.UpdateInvoiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInvoiceRequest req = new UpdateInvoiceRequest(                new UpdateInvoiceRequest(                new Invoice() {{
                                                acceptedPaymentMethods = new InvoiceAcceptedPaymentMethods() {{
                                                    bankAccount = false;
                                                    card = false;
                                                    squareGiftCard = false;
                                                }};;
                                                createdAt = "eius";
                                                customFields = new org.openapis.openapi.models.shared.InvoiceCustomField[]{{
                                                    add(new InvoiceCustomField() {{
                                                        label = "delectus";
                                                        placement = "blanditiis";
                                                        value = "laudantium";
                                                    }}),
                                                    add(new InvoiceCustomField() {{
                                                        label = "earum";
                                                        placement = "impedit";
                                                        value = "accusamus";
                                                    }}),
                                                    add(new InvoiceCustomField() {{
                                                        label = "reprehenderit";
                                                        placement = "expedita";
                                                        value = "hic";
                                                    }}),
                                                }};
                                                deliveryMethod = "occaecati";
                                                description = "perferendis";
                                                id = "4e01105d-3890-4816-ac6b-eb68a0f657b7";
                                                invoiceNumber = "at";
                                                locationId = "alias";
                                                nextPaymentAmountMoney = new Money() {{
                                                    amount = 230897L;
                                                    currency = "mollitia";
                                                }};;
                                                orderId = "beatae";
                                                paymentRequests = new org.openapis.openapi.models.shared.InvoicePaymentRequest[]{{
                                                    add(new InvoicePaymentRequest() {{
                                                        automaticPaymentSource = "praesentium";
                                                        cardId = "aperiam";
                                                        computedAmountMoney = new Money() {{
                                                            amount = 940676L;
                                                            currency = "blanditiis";
                                                        }};
                                                        dueDate = "at";
                                                        fixedAmountRequestedMoney = new Money() {{
                                                            amount = 920548L;
                                                            currency = "ipsum";
                                                        }};
                                                        percentageRequested = "voluptatem";
                                                        reminders = new org.openapis.openapi.models.shared.InvoicePaymentReminder[]{{
                                                            add(new InvoicePaymentReminder() {{
                                                                message = "aut";
                                                                relativeScheduledDays = 401150L;
                                                                sentAt = "cupiditate";
                                                                status = "fugiat";
                                                                uid = "atque";
                                                            }}),
                                                            add(new InvoicePaymentReminder() {{
                                                                message = "beatae";
                                                                relativeScheduledDays = 15706L;
                                                                sentAt = "commodi";
                                                                status = "architecto";
                                                                uid = "atque";
                                                            }}),
                                                            add(new InvoicePaymentReminder() {{
                                                                message = "temporibus";
                                                                relativeScheduledDays = 600167L;
                                                                sentAt = "voluptate";
                                                                status = "debitis";
                                                                uid = "sunt";
                                                            }}),
                                                            add(new InvoicePaymentReminder() {{
                                                                message = "ad";
                                                                relativeScheduledDays = 155920L;
                                                                sentAt = "aspernatur";
                                                                status = "iste";
                                                                uid = "molestiae";
                                                            }}),
                                                        }};
                                                        requestMethod = "minima";
                                                        requestType = "et";
                                                        roundingAdjustmentIncludedMoney = new Money() {{
                                                            amount = 25705L;
                                                            currency = "quibusdam";
                                                        }};
                                                        tippingEnabled = false;
                                                        totalCompletedAmountMoney = new Money() {{
                                                            amount = 636019L;
                                                            currency = "voluptatum";
                                                        }};
                                                        uid = "voluptatem";
                                                    }}),
                                                    add(new InvoicePaymentRequest() {{
                                                        automaticPaymentSource = "amet";
                                                        cardId = "vitae";
                                                        computedAmountMoney = new Money() {{
                                                            amount = 130672L;
                                                            currency = "quia";
                                                        }};
                                                        dueDate = "provident";
                                                        fixedAmountRequestedMoney = new Money() {{
                                                            amount = 143278L;
                                                            currency = "nobis";
                                                        }};
                                                        percentageRequested = "optio";
                                                        reminders = new org.openapis.openapi.models.shared.InvoicePaymentReminder[]{{
                                                            add(new InvoicePaymentReminder() {{
                                                                message = "quasi";
                                                                relativeScheduledDays = 780614L;
                                                                sentAt = "sed";
                                                                status = "laborum";
                                                                uid = "in";
                                                            }}),
                                                            add(new InvoicePaymentReminder() {{
                                                                message = "eaque";
                                                                relativeScheduledDays = 140083L;
                                                                sentAt = "distinctio";
                                                                status = "soluta";
                                                                uid = "sint";
                                                            }}),
                                                        }};
                                                        requestMethod = "odio";
                                                        requestType = "repudiandae";
                                                        roundingAdjustmentIncludedMoney = new Money() {{
                                                            amount = 879644L;
                                                            currency = "quasi";
                                                        }};
                                                        tippingEnabled = false;
                                                        totalCompletedAmountMoney = new Money() {{
                                                            amount = 38115L;
                                                            currency = "dolores";
                                                        }};
                                                        uid = "fugiat";
                                                    }}),
                                                }};
                                                primaryRecipient = new InvoiceRecipient() {{
                                                    address = new Address() {{
                                                        addressLine1 = "id";
                                                        addressLine2 = "sed";
                                                        addressLine3 = "fugiat";
                                                        administrativeDistrictLevel1 = "recusandae";
                                                        administrativeDistrictLevel2 = "neque";
                                                        administrativeDistrictLevel3 = "minima";
                                                        country = "United States Minor Outlying Islands";
                                                        firstName = "Johnnie";
                                                        lastName = "Torphy";
                                                        locality = "sit";
                                                        organization = "quasi";
                                                        postalCode = "92296-6623";
                                                        sublocality = "eius";
                                                        sublocality2 = "quae";
                                                        sublocality3 = "dolores";
                                                    }};;
                                                    companyName = "dolorum";
                                                    customerId = "quod";
                                                    emailAddress = "sunt";
                                                    familyName = "iure";
                                                    givenName = "voluptatem";
                                                    phoneNumber = "incidunt";
                                                }};;
                                                publicUrl = "soluta";
                                                scheduledAt = "a";
                                                status = "vitae";
                                                subscriptionId = "maxime";
                                                timezone = "placeat";
                                                title = "Ms.";
                                                updatedAt = "asperiores";
                                                version = 802449L;
                                            }};) {{
                                fieldsToClear = new String[]{{
                                    add("dicta"),
                                    add("deserunt"),
                                }};
                                idempotencyKey = "laborum";
                            }};, "itaque");            

            UpdateInvoiceResponse res = sdk.invoices.updateInvoice(req, new UpdateInvoiceSecurity("ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
