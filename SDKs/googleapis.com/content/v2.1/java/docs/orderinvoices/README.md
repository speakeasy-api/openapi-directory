# orderinvoices

### Available Operations

* [contentOrderinvoicesCreatechargeinvoice](#contentorderinvoicescreatechargeinvoice) - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* [contentOrderinvoicesCreaterefundinvoice](#contentorderinvoicescreaterefundinvoice) - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

## contentOrderinvoicesCreatechargeinvoice

Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderinvoicesCreatechargeinvoiceRequest;
import org.openapis.openapi.models.operations.ContentOrderinvoicesCreatechargeinvoiceResponse;
import org.openapis.openapi.models.operations.ContentOrderinvoicesCreatechargeinvoiceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.InvoiceSummary;
import org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary;
import org.openapis.openapi.models.shared.OrderinvoicesCreateChargeInvoiceRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice;
import org.openapis.openapi.models.shared.UnitInvoice;
import org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge;
import org.openapis.openapi.models.shared.UnitInvoiceTaxLine;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderinvoicesCreatechargeinvoiceRequest req = new ContentOrderinvoicesCreatechargeinvoiceRequest("delectus", "mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                orderinvoicesCreateChargeInvoiceRequest = new OrderinvoicesCreateChargeInvoiceRequest() {{
                    invoiceId = "officia";
                    invoiceSummary = new InvoiceSummary() {{
                        additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                            add(new InvoiceSummaryAdditionalChargeSummary() {{
                                totalAmount = new Amount() {{
                                    priceAmount = new Price() {{
                                        currency = "voluptatem";
                                        value = "alias";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "eveniet";
                                        value = "hic";
                                    }};
                                }};
                                type = "voluptatem";
                            }}),
                        }};
                        productTotal = new Amount() {{
                            priceAmount = new Price() {{
                                currency = "incidunt";
                                value = "qui";
                            }};;
                            taxAmount = new Price() {{
                                currency = "qui";
                                value = "necessitatibus";
                            }};;
                        }};;
                    }};;
                    lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                        add(new ShipmentInvoiceLineItemInvoice() {{
                            lineItemId = "explicabo";
                            productId = "beatae";
                            shipmentUnitIds = new String[]{{
                                add("modi"),
                                add("optio"),
                            }};
                            unitInvoice = new UnitInvoice() {{
                                additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "molestias";
                                                value = "officia";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "libero";
                                                value = "totam";
                                            }};
                                        }};
                                        type = "sequi";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "aliquid";
                                                value = "ea";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "impedit";
                                                value = "ducimus";
                                            }};
                                        }};
                                        type = "odit";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "velit";
                                                value = "reiciendis";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "repellat";
                                                value = "nulla";
                                            }};
                                        }};
                                        type = "laborum";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "natus";
                                                value = "accusamus";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "doloremque";
                                                value = "nisi";
                                            }};
                                        }};
                                        type = "rerum";
                                    }}),
                                }};
                                unitPrice = new Price() {{
                                    currency = "recusandae";
                                    value = "voluptates";
                                }};
                                unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "rem";
                                            value = "quia";
                                        }};
                                        taxName = "ullam";
                                        taxType = "quisquam";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "dicta";
                                            value = "voluptatibus";
                                        }};
                                        taxName = "eligendi";
                                        taxType = "quae";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new ShipmentInvoiceLineItemInvoice() {{
                            lineItemId = "officiis";
                            productId = "architecto";
                            shipmentUnitIds = new String[]{{
                                add("enim"),
                            }};
                            unitInvoice = new UnitInvoice() {{
                                additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "rem";
                                                value = "perferendis";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "facilis";
                                                value = "reiciendis";
                                            }};
                                        }};
                                        type = "a";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "iste";
                                                value = "dicta";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "quos";
                                                value = "ullam";
                                            }};
                                        }};
                                        type = "dolore";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "modi";
                                                value = "itaque";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "maxime";
                                                value = "modi";
                                            }};
                                        }};
                                        type = "consequuntur";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "assumenda";
                                                value = "vero";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "doloribus";
                                                value = "impedit";
                                            }};
                                        }};
                                        type = "porro";
                                    }}),
                                }};
                                unitPrice = new Price() {{
                                    currency = "accusamus";
                                    value = "totam";
                                }};
                                unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "ab";
                                            value = "sint";
                                        }};
                                        taxName = "nihil";
                                        taxType = "esse";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "iure";
                                            value = "odio";
                                        }};
                                        taxName = "nesciunt";
                                        taxType = "debitis";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "vel";
                                            value = "neque";
                                        }};
                                        taxName = "corporis";
                                        taxType = "voluptas";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "consequuntur";
                                            value = "officia";
                                        }};
                                        taxName = "reprehenderit";
                                        taxType = "distinctio";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new ShipmentInvoiceLineItemInvoice() {{
                            lineItemId = "eius";
                            productId = "ipsa";
                            shipmentUnitIds = new String[]{{
                                add("maiores"),
                                add("accusantium"),
                                add("veniam"),
                            }};
                            unitInvoice = new UnitInvoice() {{
                                additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "neque";
                                                value = "facere";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "aliquam";
                                                value = "quos";
                                            }};
                                        }};
                                        type = "doloribus";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "fugiat";
                                                value = "est";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "delectus";
                                                value = "velit";
                                            }};
                                        }};
                                        type = "vitae";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "nesciunt";
                                                value = "similique";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "illo";
                                                value = "repellat";
                                            }};
                                        }};
                                        type = "nemo";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "doloribus";
                                                value = "possimus";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "unde";
                                                value = "incidunt";
                                            }};
                                        }};
                                        type = "explicabo";
                                    }}),
                                }};
                                unitPrice = new Price() {{
                                    currency = "ipsam";
                                    value = "cupiditate";
                                }};
                                unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "alias";
                                            value = "quidem";
                                        }};
                                        taxName = "nesciunt";
                                        taxType = "commodi";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "sapiente";
                                            value = "consequuntur";
                                        }};
                                        taxName = "veniam";
                                        taxType = "debitis";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "officia";
                                            value = "sint";
                                        }};
                                        taxName = "ut";
                                        taxType = "numquam";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "tenetur";
                                            value = "adipisci";
                                        }};
                                        taxName = "libero";
                                        taxType = "in";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                    operationId = "minima";
                    shipmentGroupId = "ex";
                }};;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "hic";
                key = "nisi";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "ducimus";
                uploadProtocol = "fuga";
            }};            

            ContentOrderinvoicesCreatechargeinvoiceResponse res = sdk.orderinvoices.contentOrderinvoicesCreatechargeinvoice(req, new ContentOrderinvoicesCreatechargeinvoiceSecurity("minima", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderinvoicesCreateChargeInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentOrderinvoicesCreaterefundinvoice

Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentOrderinvoicesCreaterefundinvoiceRequest;
import org.openapis.openapi.models.operations.ContentOrderinvoicesCreaterefundinvoiceResponse;
import org.openapis.openapi.models.operations.ContentOrderinvoicesCreaterefundinvoiceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.InvoiceSummary;
import org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary;
import org.openapis.openapi.models.shared.OrderinvoicesCreateRefundInvoiceRequest;
import org.openapis.openapi.models.shared.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
import org.openapis.openapi.models.shared.OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.ShipmentInvoice;
import org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice;
import org.openapis.openapi.models.shared.UnitInvoice;
import org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge;
import org.openapis.openapi.models.shared.UnitInvoiceTaxLine;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentOrderinvoicesCreaterefundinvoiceRequest req = new ContentOrderinvoicesCreaterefundinvoiceRequest("qui", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                orderinvoicesCreateRefundInvoiceRequest = new OrderinvoicesCreateRefundInvoiceRequest() {{
                    invoiceId = "incidunt";
                    operationId = "adipisci";
                    refundOnlyOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption() {{
                        description = "praesentium";
                        reason = "dolor";
                    }};;
                    returnOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption() {{
                        description = "exercitationem";
                        reason = "expedita";
                    }};;
                    shipmentInvoices = new org.openapis.openapi.models.shared.ShipmentInvoice[]{{
                        add(new ShipmentInvoice() {{
                            invoiceSummary = new InvoiceSummary() {{
                                additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "sit";
                                                value = "nemo";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "culpa";
                                                value = "consequuntur";
                                            }};
                                        }};
                                        type = "amet";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "deserunt";
                                                value = "modi";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "veniam";
                                                value = "quod";
                                            }};
                                        }};
                                        type = "itaque";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "a";
                                                value = "quisquam";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "enim";
                                                value = "doloribus";
                                            }};
                                        }};
                                        type = "assumenda";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "officiis";
                                                value = "architecto";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "alias";
                                                value = "culpa";
                                            }};
                                        }};
                                        type = "ipsa";
                                    }}),
                                }};
                                productTotal = new Amount() {{
                                    priceAmount = new Price() {{
                                        currency = "nobis";
                                        value = "necessitatibus";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "quia";
                                        value = "dicta";
                                    }};
                                }};
                            }};
                            lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "perspiciatis";
                                    productId = "debitis";
                                    shipmentUnitIds = new String[]{{
                                        add("architecto"),
                                        add("accusantium"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "veritatis";
                                                        value = "provident";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "cumque";
                                                        value = "iure";
                                                    }};
                                                }};
                                                type = "quibusdam";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "quod";
                                            value = "nemo";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "velit";
                                                    value = "magnam";
                                                }};
                                                taxName = "dignissimos";
                                                taxType = "laboriosam";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "sed";
                                                    value = "odio";
                                                }};
                                                taxName = "natus";
                                                taxType = "provident";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "cum";
                                                    value = "doloribus";
                                                }};
                                                taxName = "facilis";
                                                taxType = "quidem";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "itaque";
                                                    value = "laboriosam";
                                                }};
                                                taxName = "unde";
                                                taxType = "modi";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "perspiciatis";
                                    productId = "hic";
                                    shipmentUnitIds = new String[]{{
                                        add("aspernatur"),
                                        add("libero"),
                                        add("nam"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "recusandae";
                                                        value = "quod";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "id";
                                                        value = "saepe";
                                                    }};
                                                }};
                                                type = "autem";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "quo";
                                                        value = "nesciunt";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "illum";
                                                        value = "nemo";
                                                    }};
                                                }};
                                                type = "illum";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "facilis";
                                            value = "non";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "assumenda";
                                                    value = "recusandae";
                                                }};
                                                taxName = "distinctio";
                                                taxType = "pariatur";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "ad";
                                                    value = "facere";
                                                }};
                                                taxName = "laborum";
                                                taxType = "eveniet";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "laborum";
                                                    value = "incidunt";
                                                }};
                                                taxName = "maxime";
                                                taxType = "ipsam";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            shipmentGroupId = "alias";
                        }}),
                        add(new ShipmentInvoice() {{
                            invoiceSummary = new InvoiceSummary() {{
                                additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "deserunt";
                                                value = "molestias";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "laborum";
                                                value = "est";
                                            }};
                                        }};
                                        type = "occaecati";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "labore";
                                                value = "quo";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "perferendis";
                                                value = "fugit";
                                            }};
                                        }};
                                        type = "aliquid";
                                    }}),
                                }};
                                productTotal = new Amount() {{
                                    priceAmount = new Price() {{
                                        currency = "magnam";
                                        value = "quaerat";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "eligendi";
                                        value = "hic";
                                    }};
                                }};
                            }};
                            lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "officiis";
                                    productId = "unde";
                                    shipmentUnitIds = new String[]{{
                                        add("error"),
                                        add("mollitia"),
                                        add("magnam"),
                                        add("nostrum"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "corrupti";
                                                        value = "fuga";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "facere";
                                                        value = "impedit";
                                                    }};
                                                }};
                                                type = "quasi";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "deserunt";
                                                        value = "quod";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "laboriosam";
                                                        value = "doloremque";
                                                    }};
                                                }};
                                                type = "voluptatem";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "facere";
                                            value = "necessitatibus";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "consequatur";
                                                    value = "eaque";
                                                }};
                                                taxName = "architecto";
                                                taxType = "similique";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "porro";
                                                    value = "blanditiis";
                                                }};
                                                taxName = "quae";
                                                taxType = "magni";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "officiis";
                                                    value = "sed";
                                                }};
                                                taxName = "necessitatibus";
                                                taxType = "impedit";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "ipsa";
                                                    value = "excepturi";
                                                }};
                                                taxName = "a";
                                                taxType = "maiores";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "laudantium";
                                    productId = "maiores";
                                    shipmentUnitIds = new String[]{{
                                        add("asperiores"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "dicta";
                                                        value = "suscipit";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "earum";
                                                        value = "doloribus";
                                                    }};
                                                }};
                                                type = "velit";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "eius";
                                                        value = "esse";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "in";
                                                        value = "eligendi";
                                                    }};
                                                }};
                                                type = "quasi";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "neque";
                                                        value = "vero";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "excepturi";
                                                        value = "accusantium";
                                                    }};
                                                }};
                                                type = "qui";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "impedit";
                                            value = "beatae";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "dicta";
                                                    value = "odit";
                                                }};
                                                taxName = "corporis";
                                                taxType = "rerum";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "alias";
                                                    value = "error";
                                                }};
                                                taxName = "vel";
                                                taxType = "accusantium";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            shipmentGroupId = "id";
                        }}),
                        add(new ShipmentInvoice() {{
                            invoiceSummary = new InvoiceSummary() {{
                                additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "ex";
                                                value = "quas";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "veritatis";
                                                value = "ullam";
                                            }};
                                        }};
                                        type = "quae";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            priceAmount = new Price() {{
                                                currency = "similique";
                                                value = "incidunt";
                                            }};
                                            taxAmount = new Price() {{
                                                currency = "quam";
                                                value = "magni";
                                            }};
                                        }};
                                        type = "deserunt";
                                    }}),
                                }};
                                productTotal = new Amount() {{
                                    priceAmount = new Price() {{
                                        currency = "delectus";
                                        value = "omnis";
                                    }};
                                    taxAmount = new Price() {{
                                        currency = "sed";
                                        value = "nesciunt";
                                    }};
                                }};
                            }};
                            lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "quis";
                                    productId = "cupiditate";
                                    shipmentUnitIds = new String[]{{
                                        add("excepturi"),
                                        add("maiores"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "velit";
                                                        value = "reiciendis";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "amet";
                                                        value = "nemo";
                                                    }};
                                                }};
                                                type = "ipsa";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "quisquam";
                                                        value = "tenetur";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "quas";
                                                        value = "molestiae";
                                                    }};
                                                }};
                                                type = "aliquid";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "asperiores";
                                                        value = "a";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "nobis";
                                                        value = "perspiciatis";
                                                    }};
                                                }};
                                                type = "accusantium";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "dicta";
                                            value = "minus";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "eveniet";
                                                    value = "porro";
                                                }};
                                                taxName = "tempore";
                                                taxType = "quidem";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "modi";
                                                    value = "voluptates";
                                                }};
                                                taxName = "fugit";
                                                taxType = "eius";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "sequi";
                                    productId = "eligendi";
                                    shipmentUnitIds = new String[]{{
                                        add("esse"),
                                        add("blanditiis"),
                                        add("sint"),
                                        add("repellat"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "animi";
                                                        value = "maiores";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "itaque";
                                                        value = "nulla";
                                                    }};
                                                }};
                                                type = "deserunt";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "corporis";
                                                        value = "velit";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "officiis";
                                                        value = "enim";
                                                    }};
                                                }};
                                                type = "officia";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "saepe";
                                                        value = "eum";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "repudiandae";
                                                        value = "accusantium";
                                                    }};
                                                }};
                                                type = "officia";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "impedit";
                                                        value = "quasi";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "blanditiis";
                                                        value = "eius";
                                                    }};
                                                }};
                                                type = "quisquam";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "eos";
                                            value = "nobis";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "minus";
                                                    value = "quia";
                                                }};
                                                taxName = "magnam";
                                                taxType = "reprehenderit";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "quod";
                                                    value = "quos";
                                                }};
                                                taxName = "corrupti";
                                                taxType = "amet";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "molestiae";
                                                    value = "amet";
                                                }};
                                                taxName = "laborum";
                                                taxType = "modi";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "perferendis";
                                    productId = "necessitatibus";
                                    shipmentUnitIds = new String[]{{
                                        add("molestias"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "sunt";
                                                        value = "maiores";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "neque";
                                                        value = "odit";
                                                    }};
                                                }};
                                                type = "earum";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "veniam";
                                                        value = "ipsam";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "eaque";
                                                        value = "exercitationem";
                                                    }};
                                                }};
                                                type = "veniam";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "nihil";
                                            value = "ad";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "tenetur";
                                                    value = "quis";
                                                }};
                                                taxName = "quibusdam";
                                                taxType = "nemo";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "suscipit";
                                                    value = "pariatur";
                                                }};
                                                taxName = "sit";
                                                taxType = "quidem";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "repellendus";
                                    productId = "perferendis";
                                    shipmentUnitIds = new String[]{{
                                        add("sapiente"),
                                        add("sed"),
                                        add("possimus"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "repudiandae";
                                                        value = "architecto";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "adipisci";
                                                        value = "pariatur";
                                                    }};
                                                }};
                                                type = "harum";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "dolore";
                                                        value = "voluptatibus";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "iure";
                                                        value = "explicabo";
                                                    }};
                                                }};
                                                type = "minus";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "soluta";
                                                        value = "dolorum";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "velit";
                                                        value = "earum";
                                                    }};
                                                }};
                                                type = "praesentium";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    priceAmount = new Price() {{
                                                        currency = "error";
                                                        value = "non";
                                                    }};
                                                    taxAmount = new Price() {{
                                                        currency = "quasi";
                                                        value = "mollitia";
                                                    }};
                                                }};
                                                type = "accusamus";
                                            }}),
                                        }};
                                        unitPrice = new Price() {{
                                            currency = "harum";
                                            value = "cumque";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "expedita";
                                                    value = "corrupti";
                                                }};
                                                taxName = "eaque";
                                                taxType = "deserunt";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            shipmentGroupId = "aliquid";
                        }}),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "possimus";
                key = "dolor";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "accusamus";
                uploadProtocol = "optio";
            }};            

            ContentOrderinvoicesCreaterefundinvoiceResponse res = sdk.orderinvoices.contentOrderinvoicesCreaterefundinvoice(req, new ContentOrderinvoicesCreaterefundinvoiceSecurity("delectus", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderinvoicesCreateRefundInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
