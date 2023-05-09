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
import org.openapis.openapi.models.shared.Promotion;
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

            ContentOrderinvoicesCreatechargeinvoiceRequest req = new ContentOrderinvoicesCreatechargeinvoiceRequest("ut", "ad") {{
                dollarXgafv = XgafvEnum.TWO;
                orderinvoicesCreateChargeInvoiceRequest = new OrderinvoicesCreateChargeInvoiceRequest() {{
                    invoiceId = "voluptatem";
                    invoiceSummary = new InvoiceSummary() {{
                        additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                            add(new InvoiceSummaryAdditionalChargeSummary() {{
                                totalAmount = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "cum";
                                        value = "aliquid";
                                    }};
                                    tax = new Price() {{
                                        currency = "beatae";
                                        value = "voluptatum";
                                    }};
                                }};
                                type = "omnis";
                            }}),
                            add(new InvoiceSummaryAdditionalChargeSummary() {{
                                totalAmount = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "veritatis";
                                        value = "rerum";
                                    }};
                                    tax = new Price() {{
                                        currency = "est";
                                        value = "culpa";
                                    }};
                                }};
                                type = "voluptatem";
                            }}),
                            add(new InvoiceSummaryAdditionalChargeSummary() {{
                                totalAmount = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "sapiente";
                                        value = "officiis";
                                    }};
                                    tax = new Price() {{
                                        currency = "architecto";
                                        value = "fuga";
                                    }};
                                }};
                                type = "pariatur";
                            }}),
                        }};
                        customerBalance = new Amount() {{
                            pretax = new Price() {{
                                currency = "debitis";
                                value = "voluptatem";
                            }};;
                            tax = new Price() {{
                                currency = "alias";
                                value = "deleniti";
                            }};;
                        }};;
                        googleBalance = new Amount() {{
                            pretax = new Price() {{
                                currency = "earum";
                                value = "ex";
                            }};;
                            tax = new Price() {{
                                currency = "sapiente";
                                value = "rem";
                            }};;
                        }};;
                        merchantBalance = new Amount() {{
                            pretax = new Price() {{
                                currency = "minus";
                                value = "nemo";
                            }};;
                            tax = new Price() {{
                                currency = "asperiores";
                                value = "ratione";
                            }};;
                        }};;
                        productTotal = new Amount() {{
                            pretax = new Price() {{
                                currency = "ullam";
                                value = "perferendis";
                            }};;
                            tax = new Price() {{
                                currency = "illum";
                                value = "totam";
                            }};;
                        }};;
                        promotionSummaries = new org.openapis.openapi.models.shared.Promotion[]{{
                            add(new Promotion() {{
                                promotionAmount = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "quibusdam";
                                        value = "nam";
                                    }};
                                    tax = new Price() {{
                                        currency = "ipsam";
                                        value = "culpa";
                                    }};
                                }};
                                promotionId = "dolor";
                            }}),
                            add(new Promotion() {{
                                promotionAmount = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "aliquam";
                                        value = "inventore";
                                    }};
                                    tax = new Price() {{
                                        currency = "deleniti";
                                        value = "veritatis";
                                    }};
                                }};
                                promotionId = "tempora";
                            }}),
                            add(new Promotion() {{
                                promotionAmount = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "dolor";
                                        value = "consequatur";
                                    }};
                                    tax = new Price() {{
                                        currency = "architecto";
                                        value = "sit";
                                    }};
                                }};
                                promotionId = "modi";
                            }}),
                            add(new Promotion() {{
                                promotionAmount = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "fugit";
                                        value = "ab";
                                    }};
                                    tax = new Price() {{
                                        currency = "laudantium";
                                        value = "quae";
                                    }};
                                }};
                                promotionId = "dolor";
                            }}),
                        }};
                    }};;
                    lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                        add(new ShipmentInvoiceLineItemInvoice() {{
                            lineItemId = "ipsam";
                            productId = "consequuntur";
                            shipmentUnitIds = new String[]{{
                                add("quas"),
                            }};
                            unitInvoice = new UnitInvoice() {{
                                additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "impedit";
                                                value = "officiis";
                                            }};
                                            tax = new Price() {{
                                                currency = "esse";
                                                value = "necessitatibus";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "veniam";
                                                        value = "nesciunt";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "expedita";
                                                        value = "eum";
                                                    }};
                                                }};
                                                promotionId = "vel";
                                            }}),
                                        }};
                                        type = "voluptatum";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "magnam";
                                                value = "exercitationem";
                                            }};
                                            tax = new Price() {{
                                                currency = "ab";
                                                value = "porro";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "nobis";
                                                        value = "laboriosam";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "recusandae";
                                                        value = "consequuntur";
                                                    }};
                                                }};
                                                promotionId = "voluptatem";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "exercitationem";
                                                        value = "necessitatibus";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "quasi";
                                                        value = "nisi";
                                                    }};
                                                }};
                                                promotionId = "at";
                                            }}),
                                        }};
                                        type = "vero";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "est";
                                                value = "harum";
                                            }};
                                            tax = new Price() {{
                                                currency = "sequi";
                                                value = "doloribus";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "optio";
                                                        value = "occaecati";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nemo";
                                                        value = "voluptate";
                                                    }};
                                                }};
                                                promotionId = "blanditiis";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "officia";
                                                        value = "voluptas";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "numquam";
                                                        value = "nemo";
                                                    }};
                                                }};
                                                promotionId = "quos";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "eius";
                                                        value = "aspernatur";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "ducimus";
                                                        value = "nesciunt";
                                                    }};
                                                }};
                                                promotionId = "fuga";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "laudantium";
                                                        value = "incidunt";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "quasi";
                                                        value = "rem";
                                                    }};
                                                }};
                                                promotionId = "fugiat";
                                            }}),
                                        }};
                                        type = "dicta";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "nisi";
                                                value = "consequuntur";
                                            }};
                                            tax = new Price() {{
                                                currency = "consectetur";
                                                value = "aperiam";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "reiciendis";
                                                        value = "soluta";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "alias";
                                                        value = "omnis";
                                                    }};
                                                }};
                                                promotionId = "eos";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "occaecati";
                                                        value = "iste";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "magni";
                                                        value = "inventore";
                                                    }};
                                                }};
                                                promotionId = "fuga";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "accusamus";
                                                        value = "voluptatibus";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "distinctio";
                                                        value = "omnis";
                                                    }};
                                                }};
                                                promotionId = "delectus";
                                            }}),
                                        }};
                                        type = "minima";
                                    }}),
                                }};
                                promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "maxime";
                                                value = "magnam";
                                            }};
                                            tax = new Price() {{
                                                currency = "temporibus";
                                                value = "quos";
                                            }};
                                        }};
                                        promotionId = "commodi";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "itaque";
                                                value = "commodi";
                                            }};
                                            tax = new Price() {{
                                                currency = "totam";
                                                value = "earum";
                                            }};
                                        }};
                                        promotionId = "modi";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "nam";
                                                value = "vero";
                                            }};
                                            tax = new Price() {{
                                                currency = "voluptatem";
                                                value = "ipsam";
                                            }};
                                        }};
                                        promotionId = "vel";
                                    }}),
                                }};
                                unitPricePretax = new Price() {{
                                    currency = "alias";
                                    value = "quasi";
                                }};
                                unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "maiores";
                                            value = "enim";
                                        }};
                                        taxName = "sint";
                                        taxType = "nulla";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new ShipmentInvoiceLineItemInvoice() {{
                            lineItemId = "deserunt";
                            productId = "esse";
                            shipmentUnitIds = new String[]{{
                                add("reprehenderit"),
                                add("est"),
                            }};
                            unitInvoice = new UnitInvoice() {{
                                additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "sint";
                                                value = "accusamus";
                                            }};
                                            tax = new Price() {{
                                                currency = "impedit";
                                                value = "hic";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "asperiores";
                                                        value = "ex";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "voluptas";
                                                        value = "debitis";
                                                    }};
                                                }};
                                                promotionId = "delectus";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "quae";
                                                        value = "minus";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "fuga";
                                                        value = "laborum";
                                                    }};
                                                }};
                                                promotionId = "consectetur";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "velit";
                                                        value = "atque";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "ipsum";
                                                        value = "impedit";
                                                    }};
                                                }};
                                                promotionId = "magni";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "soluta";
                                                        value = "repudiandae";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nam";
                                                        value = "dolore";
                                                    }};
                                                }};
                                                promotionId = "iusto";
                                            }}),
                                        }};
                                        type = "voluptate";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "sequi";
                                                value = "dignissimos";
                                            }};
                                            tax = new Price() {{
                                                currency = "neque";
                                                value = "quo";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "quibusdam";
                                                        value = "iure";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "odit";
                                                        value = "voluptatibus";
                                                    }};
                                                }};
                                                promotionId = "vel";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "magnam";
                                                        value = "quibusdam";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "inventore";
                                                        value = "facere";
                                                    }};
                                                }};
                                                promotionId = "libero";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "architecto";
                                                        value = "voluptatibus";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "quia";
                                                        value = "porro";
                                                    }};
                                                }};
                                                promotionId = "aliquam";
                                            }}),
                                        }};
                                        type = "velit";
                                    }}),
                                }};
                                promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "accusantium";
                                                value = "vel";
                                            }};
                                            tax = new Price() {{
                                                currency = "ea";
                                                value = "beatae";
                                            }};
                                        }};
                                        promotionId = "vero";
                                    }}),
                                }};
                                unitPricePretax = new Price() {{
                                    currency = "excepturi";
                                    value = "eum";
                                }};
                                unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "ut";
                                            value = "perspiciatis";
                                        }};
                                        taxName = "earum";
                                        taxType = "dicta";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new ShipmentInvoiceLineItemInvoice() {{
                            lineItemId = "impedit";
                            productId = "voluptatibus";
                            shipmentUnitIds = new String[]{{
                                add("itaque"),
                                add("alias"),
                                add("nisi"),
                            }};
                            unitInvoice = new UnitInvoice() {{
                                additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "velit";
                                                value = "laborum";
                                            }};
                                            tax = new Price() {{
                                                currency = "non";
                                                value = "dolor";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "sit";
                                                        value = "doloremque";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "consequatur";
                                                        value = "officia";
                                                    }};
                                                }};
                                                promotionId = "recusandae";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "ea";
                                                        value = "quidem";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "voluptas";
                                                        value = "facilis";
                                                    }};
                                                }};
                                                promotionId = "placeat";
                                            }}),
                                        }};
                                        type = "perspiciatis";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "expedita";
                                                value = "deleniti";
                                            }};
                                            tax = new Price() {{
                                                currency = "a";
                                                value = "voluptate";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "unde";
                                                        value = "necessitatibus";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "animi";
                                                        value = "impedit";
                                                    }};
                                                }};
                                                promotionId = "ipsam";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "corporis";
                                                        value = "est";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "error";
                                                        value = "esse";
                                                    }};
                                                }};
                                                promotionId = "labore";
                                            }}),
                                        }};
                                        type = "veritatis";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "vero";
                                                value = "consectetur";
                                            }};
                                            tax = new Price() {{
                                                currency = "vitae";
                                                value = "inventore";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "ad";
                                                        value = "qui";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "iste";
                                                        value = "ex";
                                                    }};
                                                }};
                                                promotionId = "nemo";
                                            }}),
                                        }};
                                        type = "soluta";
                                    }}),
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "libero";
                                                value = "rem";
                                            }};
                                            tax = new Price() {{
                                                currency = "dolorum";
                                                value = "odio";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "alias";
                                                        value = "magni";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "vel";
                                                        value = "quae";
                                                    }};
                                                }};
                                                promotionId = "quae";
                                            }}),
                                        }};
                                        type = "modi";
                                    }}),
                                }};
                                promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "exercitationem";
                                                value = "itaque";
                                            }};
                                            tax = new Price() {{
                                                currency = "et";
                                                value = "ipsum";
                                            }};
                                        }};
                                        promotionId = "unde";
                                    }}),
                                }};
                                unitPricePretax = new Price() {{
                                    currency = "nulla";
                                    value = "distinctio";
                                }};
                                unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "quia";
                                            value = "quia";
                                        }};
                                        taxName = "nostrum";
                                        taxType = "omnis";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "libero";
                                            value = "dicta";
                                        }};
                                        taxName = "id";
                                        taxType = "libero";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "fugiat";
                                            value = "officia";
                                        }};
                                        taxName = "quos";
                                        taxType = "placeat";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "sit";
                                            value = "iusto";
                                        }};
                                        taxName = "ipsa";
                                        taxType = "voluptates";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new ShipmentInvoiceLineItemInvoice() {{
                            lineItemId = "inventore";
                            productId = "aperiam";
                            shipmentUnitIds = new String[]{{
                                add("dolore"),
                                add("eligendi"),
                                add("distinctio"),
                            }};
                            unitInvoice = new UnitInvoice() {{
                                additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                    add(new UnitInvoiceAdditionalCharge() {{
                                        additionalChargeAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "autem";
                                                value = "esse";
                                            }};
                                            tax = new Price() {{
                                                currency = "dolores";
                                                value = "assumenda";
                                            }};
                                        }};
                                        additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "est";
                                                        value = "facere";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "corrupti";
                                                        value = "molestiae";
                                                    }};
                                                }};
                                                promotionId = "provident";
                                            }}),
                                        }};
                                        type = "accusamus";
                                    }}),
                                }};
                                promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "tempore";
                                                value = "sint";
                                            }};
                                            tax = new Price() {{
                                                currency = "ea";
                                                value = "autem";
                                            }};
                                        }};
                                        promotionId = "ipsam";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "rerum";
                                                value = "laudantium";
                                            }};
                                            tax = new Price() {{
                                                currency = "corporis";
                                                value = "officiis";
                                            }};
                                        }};
                                        promotionId = "voluptatibus";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "cum";
                                                value = "at";
                                            }};
                                            tax = new Price() {{
                                                currency = "alias";
                                                value = "quia";
                                            }};
                                        }};
                                        promotionId = "quidem";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "fuga";
                                                value = "repudiandae";
                                            }};
                                            tax = new Price() {{
                                                currency = "accusantium";
                                                value = "expedita";
                                            }};
                                        }};
                                        promotionId = "officiis";
                                    }}),
                                }};
                                unitPricePretax = new Price() {{
                                    currency = "eos";
                                    value = "quibusdam";
                                }};
                                unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "praesentium";
                                            value = "odit";
                                        }};
                                        taxName = "explicabo";
                                        taxType = "corporis";
                                    }}),
                                    add(new UnitInvoiceTaxLine() {{
                                        taxAmount = new Price() {{
                                            currency = "error";
                                            value = "earum";
                                        }};
                                        taxName = "adipisci";
                                        taxType = "recusandae";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                    operationId = "similique";
                    shipmentGroupId = "ut";
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "unde";
                key = "molestiae";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "fugit";
                uploadProtocol = "numquam";
            }};            

            ContentOrderinvoicesCreatechargeinvoiceResponse res = sdk.orderinvoices.contentOrderinvoicesCreatechargeinvoice(req, new ContentOrderinvoicesCreatechargeinvoiceSecurity("numquam", "nesciunt") {{
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
import org.openapis.openapi.models.shared.Promotion;
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

            ContentOrderinvoicesCreaterefundinvoiceRequest req = new ContentOrderinvoicesCreaterefundinvoiceRequest("at", "officia") {{
                dollarXgafv = XgafvEnum.ONE;
                orderinvoicesCreateRefundInvoiceRequest = new OrderinvoicesCreateRefundInvoiceRequest() {{
                    invoiceId = "optio";
                    operationId = "necessitatibus";
                    refundOnlyOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption() {{
                        description = "corporis";
                        reason = "qui";
                    }};;
                    returnOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption() {{
                        description = "expedita";
                        reason = "voluptatum";
                    }};;
                    shipmentInvoices = new org.openapis.openapi.models.shared.ShipmentInvoice[]{{
                        add(new ShipmentInvoice() {{
                            invoiceSummary = new InvoiceSummary() {{
                                additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "placeat";
                                                value = "enim";
                                            }};
                                            tax = new Price() {{
                                                currency = "neque";
                                                value = "in";
                                            }};
                                        }};
                                        type = "minus";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "eum";
                                                value = "modi";
                                            }};
                                            tax = new Price() {{
                                                currency = "corporis";
                                                value = "magnam";
                                            }};
                                        }};
                                        type = "voluptates";
                                    }}),
                                }};
                                customerBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "maiores";
                                        value = "tempore";
                                    }};
                                    tax = new Price() {{
                                        currency = "aperiam";
                                        value = "libero";
                                    }};
                                }};
                                googleBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "ratione";
                                        value = "labore";
                                    }};
                                    tax = new Price() {{
                                        currency = "totam";
                                        value = "occaecati";
                                    }};
                                }};
                                merchantBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "voluptas";
                                        value = "quo";
                                    }};
                                    tax = new Price() {{
                                        currency = "velit";
                                        value = "minus";
                                    }};
                                }};
                                productTotal = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "fuga";
                                        value = "nostrum";
                                    }};
                                    tax = new Price() {{
                                        currency = "est";
                                        value = "impedit";
                                    }};
                                }};
                                promotionSummaries = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "tempore";
                                                value = "vero";
                                            }};
                                            tax = new Price() {{
                                                currency = "odit";
                                                value = "repellat";
                                            }};
                                        }};
                                        promotionId = "pariatur";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "nemo";
                                                value = "reprehenderit";
                                            }};
                                            tax = new Price() {{
                                                currency = "aperiam";
                                                value = "odio";
                                            }};
                                        }};
                                        promotionId = "minima";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "in";
                                                value = "ducimus";
                                            }};
                                            tax = new Price() {{
                                                currency = "excepturi";
                                                value = "dolores";
                                            }};
                                        }};
                                        promotionId = "error";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "veritatis";
                                                value = "ducimus";
                                            }};
                                            tax = new Price() {{
                                                currency = "voluptate";
                                                value = "pariatur";
                                            }};
                                        }};
                                        promotionId = "itaque";
                                    }}),
                                }};
                            }};
                            lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "optio";
                                    productId = "ex";
                                    shipmentUnitIds = new String[]{{
                                        add("commodi"),
                                        add("officiis"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "quidem";
                                                        value = "exercitationem";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "quam";
                                                        value = "dolorem";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "ipsa";
                                                                value = "sint";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "vero";
                                                                value = "sequi";
                                                            }};
                                                        }};
                                                        promotionId = "repudiandae";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "cum";
                                                                value = "dicta";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "earum";
                                                                value = "veniam";
                                                            }};
                                                        }};
                                                        promotionId = "animi";
                                                    }}),
                                                }};
                                                type = "dolores";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "nam";
                                                        value = "dicta";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "consequuntur";
                                                        value = "necessitatibus";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "ipsa";
                                                                value = "ducimus";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "maiores";
                                                                value = "veritatis";
                                                            }};
                                                        }};
                                                        promotionId = "quasi";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "laboriosam";
                                                                value = "pariatur";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "libero";
                                                                value = "excepturi";
                                                            }};
                                                        }};
                                                        promotionId = "occaecati";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "nemo";
                                                                value = "aliquam";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "nostrum";
                                                                value = "doloribus";
                                                            }};
                                                        }};
                                                        promotionId = "eligendi";
                                                    }}),
                                                }};
                                                type = "sint";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "enim";
                                                        value = "hic";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "animi";
                                                        value = "quas";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "molestias";
                                                                value = "odio";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "eaque";
                                                                value = "saepe";
                                                            }};
                                                        }};
                                                        promotionId = "architecto";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "quos";
                                                                value = "iste";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "assumenda";
                                                                value = "tempore";
                                                            }};
                                                        }};
                                                        promotionId = "libero";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "velit";
                                                                value = "doloremque";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "delectus";
                                                                value = "impedit";
                                                            }};
                                                        }};
                                                        promotionId = "cum";
                                                    }}),
                                                }};
                                                type = "ipsum";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "adipisci";
                                                        value = "saepe";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "deserunt";
                                                        value = "doloremque";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "veniam";
                                                                value = "libero";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "architecto";
                                                                value = "cupiditate";
                                                            }};
                                                        }};
                                                        promotionId = "molestiae";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "eligendi";
                                                                value = "possimus";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "non";
                                                                value = "magnam";
                                                            }};
                                                        }};
                                                        promotionId = "itaque";
                                                    }}),
                                                }};
                                                type = "sed";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "veniam";
                                                        value = "consequuntur";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "facere";
                                                        value = "laudantium";
                                                    }};
                                                }};
                                                promotionId = "odit";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "pariatur";
                                                        value = "amet";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "exercitationem";
                                                        value = "ab";
                                                    }};
                                                }};
                                                promotionId = "velit";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "facilis";
                                                        value = "tempore";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nisi";
                                                        value = "voluptatibus";
                                                    }};
                                                }};
                                                promotionId = "quaerat";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "blanditiis";
                                                        value = "distinctio";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nisi";
                                                        value = "quis";
                                                    }};
                                                }};
                                                promotionId = "nisi";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "libero";
                                            value = "minus";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "facilis";
                                                    value = "ipsum";
                                                }};
                                                taxName = "ad";
                                                taxType = "voluptatibus";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "voluptatibus";
                                                    value = "consequuntur";
                                                }};
                                                taxName = "debitis";
                                                taxType = "labore";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "rerum";
                                                    value = "eos";
                                                }};
                                                taxName = "reprehenderit";
                                                taxType = "nostrum";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "neque";
                                                    value = "iusto";
                                                }};
                                                taxName = "est";
                                                taxType = "rem";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "eligendi";
                                    productId = "fugiat";
                                    shipmentUnitIds = new String[]{{
                                        add("officiis"),
                                        add("ducimus"),
                                        add("dolor"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "error";
                                                        value = "porro";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "vitae";
                                                        value = "dignissimos";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "fugiat";
                                                                value = "ad";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "aspernatur";
                                                                value = "enim";
                                                            }};
                                                        }};
                                                        promotionId = "delectus";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "iusto";
                                                                value = "dignissimos";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "libero";
                                                                value = "illo";
                                                            }};
                                                        }};
                                                        promotionId = "ab";
                                                    }}),
                                                }};
                                                type = "incidunt";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "saepe";
                                                        value = "tempore";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "veniam";
                                                        value = "eos";
                                                    }};
                                                }};
                                                promotionId = "reiciendis";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "earum";
                                                        value = "reprehenderit";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "praesentium";
                                                        value = "nemo";
                                                    }};
                                                }};
                                                promotionId = "repellat";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "quisquam";
                                                        value = "sequi";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nihil";
                                                        value = "deleniti";
                                                    }};
                                                }};
                                                promotionId = "illo";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "labore";
                                                        value = "assumenda";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "aliquam";
                                                        value = "quisquam";
                                                    }};
                                                }};
                                                promotionId = "provident";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "laudantium";
                                            value = "repudiandae";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "maxime";
                                                    value = "aspernatur";
                                                }};
                                                taxName = "nam";
                                                taxType = "expedita";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "quas";
                                    productId = "provident";
                                    shipmentUnitIds = new String[]{{
                                        add("rerum"),
                                        add("dignissimos"),
                                        add("corporis"),
                                        add("vero"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "repellendus";
                                                        value = "iure";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "dolorem";
                                                        value = "commodi";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "commodi";
                                                                value = "aut";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "voluptatem";
                                                                value = "ad";
                                                            }};
                                                        }};
                                                        promotionId = "quae";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "amet";
                                                                value = "illum";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "praesentium";
                                                                value = "quidem";
                                                            }};
                                                        }};
                                                        promotionId = "cum";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "amet";
                                                                value = "quasi";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "dicta";
                                                                value = "laudantium";
                                                            }};
                                                        }};
                                                        promotionId = "doloremque";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "earum";
                                                                value = "iusto";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "amet";
                                                                value = "provident";
                                                            }};
                                                        }};
                                                        promotionId = "dolorum";
                                                    }}),
                                                }};
                                                type = "necessitatibus";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "provident";
                                                        value = "repudiandae";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "consequatur";
                                                        value = "nemo";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "itaque";
                                                                value = "facilis";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "corrupti";
                                                                value = "aperiam";
                                                            }};
                                                        }};
                                                        promotionId = "sint";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "accusamus";
                                                                value = "eos";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "totam";
                                                                value = "dicta";
                                                            }};
                                                        }};
                                                        promotionId = "voluptatem";
                                                    }}),
                                                }};
                                                type = "velit";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "dolor";
                                                        value = "sunt";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "a";
                                                        value = "dolor";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "atque";
                                                                value = "beatae";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "at";
                                                                value = "labore";
                                                            }};
                                                        }};
                                                        promotionId = "minus";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "esse";
                                                                value = "voluptatem";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "perferendis";
                                                                value = "rerum";
                                                            }};
                                                        }};
                                                        promotionId = "ea";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "aperiam";
                                                                value = "dignissimos";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "repellat";
                                                                value = "velit";
                                                            }};
                                                        }};
                                                        promotionId = "porro";
                                                    }}),
                                                }};
                                                type = "provident";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "eligendi";
                                                        value = "dignissimos";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "consectetur";
                                                        value = "soluta";
                                                    }};
                                                }};
                                                promotionId = "natus";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "temporibus";
                                            value = "officia";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "tenetur";
                                                    value = "aspernatur";
                                                }};
                                                taxName = "quo";
                                                taxType = "itaque";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            shipmentGroupId = "illum";
                        }}),
                        add(new ShipmentInvoice() {{
                            invoiceSummary = new InvoiceSummary() {{
                                additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "dignissimos";
                                                value = "vero";
                                            }};
                                            tax = new Price() {{
                                                currency = "qui";
                                                value = "consectetur";
                                            }};
                                        }};
                                        type = "repellat";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "explicabo";
                                                value = "explicabo";
                                            }};
                                            tax = new Price() {{
                                                currency = "exercitationem";
                                                value = "nihil";
                                            }};
                                        }};
                                        type = "non";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "ab";
                                                value = "illo";
                                            }};
                                            tax = new Price() {{
                                                currency = "hic";
                                                value = "deserunt";
                                            }};
                                        }};
                                        type = "delectus";
                                    }}),
                                }};
                                customerBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "non";
                                        value = "distinctio";
                                    }};
                                    tax = new Price() {{
                                        currency = "in";
                                        value = "exercitationem";
                                    }};
                                }};
                                googleBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "labore";
                                        value = "numquam";
                                    }};
                                    tax = new Price() {{
                                        currency = "repudiandae";
                                        value = "modi";
                                    }};
                                }};
                                merchantBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "in";
                                        value = "explicabo";
                                    }};
                                    tax = new Price() {{
                                        currency = "accusamus";
                                        value = "rem";
                                    }};
                                }};
                                productTotal = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "aperiam";
                                        value = "odit";
                                    }};
                                    tax = new Price() {{
                                        currency = "deleniti";
                                        value = "enim";
                                    }};
                                }};
                                promotionSummaries = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "similique";
                                                value = "minima";
                                            }};
                                            tax = new Price() {{
                                                currency = "libero";
                                                value = "magnam";
                                            }};
                                        }};
                                        promotionId = "sit";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "modi";
                                                value = "eum";
                                            }};
                                            tax = new Price() {{
                                                currency = "nesciunt";
                                                value = "mollitia";
                                            }};
                                        }};
                                        promotionId = "dignissimos";
                                    }}),
                                }};
                            }};
                            lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "nostrum";
                                    productId = "molestiae";
                                    shipmentUnitIds = new String[]{{
                                        add("reiciendis"),
                                        add("ab"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "aut";
                                                        value = "aut";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "eveniet";
                                                        value = "odio";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "numquam";
                                                                value = "dolorum";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "possimus";
                                                                value = "voluptate";
                                                            }};
                                                        }};
                                                        promotionId = "consectetur";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "nesciunt";
                                                                value = "quaerat";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "itaque";
                                                                value = "minus";
                                                            }};
                                                        }};
                                                        promotionId = "sunt";
                                                    }}),
                                                }};
                                                type = "distinctio";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "iusto";
                                                        value = "quas";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "et";
                                                        value = "facilis";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "autem";
                                                                value = "fuga";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "alias";
                                                                value = "rem";
                                                            }};
                                                        }};
                                                        promotionId = "aut";
                                                    }}),
                                                }};
                                                type = "quos";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "repellendus";
                                                        value = "veritatis";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "quae";
                                                        value = "eaque";
                                                    }};
                                                }};
                                                promotionId = "saepe";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "delectus";
                                                        value = "mollitia";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nulla";
                                                        value = "officia";
                                                    }};
                                                }};
                                                promotionId = "sed";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "voluptatem";
                                                        value = "alias";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "eveniet";
                                                        value = "hic";
                                                    }};
                                                }};
                                                promotionId = "voluptatem";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "incidunt";
                                            value = "qui";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "necessitatibus";
                                                    value = "harum";
                                                }};
                                                taxName = "explicabo";
                                                taxType = "beatae";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "aliquid";
                                    productId = "modi";
                                    shipmentUnitIds = new String[]{{
                                        add("voluptatibus"),
                                        add("molestias"),
                                        add("officia"),
                                        add("libero"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "sequi";
                                                        value = "aliquid";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "ea";
                                                        value = "impedit";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "odit";
                                                                value = "velit";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "reiciendis";
                                                                value = "repellat";
                                                            }};
                                                        }};
                                                        promotionId = "nulla";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "laborum";
                                                                value = "natus";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "accusamus";
                                                                value = "doloremque";
                                                            }};
                                                        }};
                                                        promotionId = "nisi";
                                                    }}),
                                                }};
                                                type = "rerum";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "recusandae";
                                                        value = "voluptates";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "non";
                                                        value = "rem";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "ullam";
                                                                value = "quisquam";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "dicta";
                                                                value = "voluptatibus";
                                                            }};
                                                        }};
                                                        promotionId = "eligendi";
                                                    }}),
                                                }};
                                                type = "quae";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "officiis";
                                                        value = "architecto";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "architecto";
                                                        value = "enim";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "rem";
                                                                value = "perferendis";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "facilis";
                                                                value = "reiciendis";
                                                            }};
                                                        }};
                                                        promotionId = "a";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "iste";
                                                                value = "dicta";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "quos";
                                                                value = "ullam";
                                                            }};
                                                        }};
                                                        promotionId = "dolore";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "modi";
                                                                value = "itaque";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "maxime";
                                                                value = "modi";
                                                            }};
                                                        }};
                                                        promotionId = "consequuntur";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "assumenda";
                                                                value = "vero";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "doloribus";
                                                                value = "impedit";
                                                            }};
                                                        }};
                                                        promotionId = "porro";
                                                    }}),
                                                }};
                                                type = "accusamus";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "reiciendis";
                                                        value = "ab";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "sint";
                                                        value = "nihil";
                                                    }};
                                                }};
                                                promotionId = "esse";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "iure";
                                                        value = "odio";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nesciunt";
                                                        value = "debitis";
                                                    }};
                                                }};
                                                promotionId = "vel";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "neque";
                                                        value = "corporis";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "voluptas";
                                                        value = "consequuntur";
                                                    }};
                                                }};
                                                promotionId = "officia";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "reprehenderit";
                                            value = "distinctio";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "ipsa";
                                                    value = "rem";
                                                }};
                                                taxName = "maiores";
                                                taxType = "accusantium";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "veniam";
                                                    value = "saepe";
                                                }};
                                                taxName = "neque";
                                                taxType = "facere";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "aliquam";
                                    productId = "quos";
                                    shipmentUnitIds = new String[]{{
                                        add("fugiat"),
                                        add("est"),
                                        add("delectus"),
                                        add("velit"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "nesciunt";
                                                        value = "similique";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "illo";
                                                        value = "repellat";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "doloribus";
                                                                value = "possimus";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "unde";
                                                                value = "incidunt";
                                                            }};
                                                        }};
                                                        promotionId = "explicabo";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "ipsam";
                                                                value = "cupiditate";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "optio";
                                                                value = "alias";
                                                            }};
                                                        }};
                                                        promotionId = "quidem";
                                                    }}),
                                                }};
                                                type = "nesciunt";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "sapiente";
                                                        value = "consequuntur";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "veniam";
                                                        value = "debitis";
                                                    }};
                                                }};
                                                promotionId = "officia";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "sint";
                                                        value = "ut";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "numquam";
                                                        value = "tenetur";
                                                    }};
                                                }};
                                                promotionId = "adipisci";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "libero";
                                            value = "in";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "ex";
                                                    value = "minus";
                                                }};
                                                taxName = "ab";
                                                taxType = "beatae";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "hic";
                                                    value = "nisi";
                                                }};
                                                taxName = "quisquam";
                                                taxType = "dolor";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "ducimus";
                                    productId = "fuga";
                                    shipmentUnitIds = new String[]{{
                                        add("architecto"),
                                        add("qui"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "magni";
                                                        value = "incidunt";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "adipisci";
                                                        value = "praesentium";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "exercitationem";
                                                                value = "expedita";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "facilis";
                                                                value = "impedit";
                                                            }};
                                                        }};
                                                        promotionId = "sit";
                                                    }}),
                                                }};
                                                type = "nemo";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "culpa";
                                                        value = "consequuntur";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "amet";
                                                        value = "deserunt";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "veniam";
                                                                value = "quod";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "itaque";
                                                                value = "a";
                                                            }};
                                                        }};
                                                        promotionId = "quisquam";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "enim";
                                                                value = "doloribus";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "assumenda";
                                                                value = "officiis";
                                                            }};
                                                        }};
                                                        promotionId = "architecto";
                                                    }}),
                                                }};
                                                type = "alias";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "ipsa";
                                                        value = "nobis";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "necessitatibus";
                                                        value = "quia";
                                                    }};
                                                }};
                                                promotionId = "dicta";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "vel";
                                                        value = "perspiciatis";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "debitis";
                                                        value = "ullam";
                                                    }};
                                                }};
                                                promotionId = "architecto";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "accusantium";
                                                        value = "perferendis";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "veritatis";
                                                        value = "provident";
                                                    }};
                                                }};
                                                promotionId = "cumque";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "iure";
                                            value = "quibusdam";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "nemo";
                                                    value = "recusandae";
                                                }};
                                                taxName = "velit";
                                                taxType = "magnam";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "dignissimos";
                                                    value = "laboriosam";
                                                }};
                                                taxName = "sed";
                                                taxType = "odio";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "natus";
                                                    value = "provident";
                                                }};
                                                taxName = "cum";
                                                taxType = "doloribus";
                                            }}),
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "facilis";
                                                    value = "quidem";
                                                }};
                                                taxName = "itaque";
                                                taxType = "laboriosam";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            shipmentGroupId = "unde";
                        }}),
                        add(new ShipmentInvoice() {{
                            invoiceSummary = new InvoiceSummary() {{
                                additionalChargeSummaries = new org.openapis.openapi.models.shared.InvoiceSummaryAdditionalChargeSummary[]{{
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "perspiciatis";
                                                value = "hic";
                                            }};
                                            tax = new Price() {{
                                                currency = "cum";
                                                value = "aspernatur";
                                            }};
                                        }};
                                        type = "libero";
                                    }}),
                                    add(new InvoiceSummaryAdditionalChargeSummary() {{
                                        totalAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "nam";
                                                value = "incidunt";
                                            }};
                                            tax = new Price() {{
                                                currency = "recusandae";
                                                value = "quod";
                                            }};
                                        }};
                                        type = "id";
                                    }}),
                                }};
                                customerBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "saepe";
                                        value = "autem";
                                    }};
                                    tax = new Price() {{
                                        currency = "quo";
                                        value = "nesciunt";
                                    }};
                                }};
                                googleBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "illum";
                                        value = "nemo";
                                    }};
                                    tax = new Price() {{
                                        currency = "illum";
                                        value = "facilis";
                                    }};
                                }};
                                merchantBalance = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "non";
                                        value = "mollitia";
                                    }};
                                    tax = new Price() {{
                                        currency = "assumenda";
                                        value = "recusandae";
                                    }};
                                }};
                                productTotal = new Amount() {{
                                    pretax = new Price() {{
                                        currency = "distinctio";
                                        value = "pariatur";
                                    }};
                                    tax = new Price() {{
                                        currency = "ad";
                                        value = "facere";
                                    }};
                                }};
                                promotionSummaries = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "eveniet";
                                                value = "laborum";
                                            }};
                                            tax = new Price() {{
                                                currency = "incidunt";
                                                value = "maxime";
                                            }};
                                        }};
                                        promotionId = "ipsam";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "alias";
                                                value = "suscipit";
                                            }};
                                            tax = new Price() {{
                                                currency = "deserunt";
                                                value = "molestias";
                                            }};
                                        }};
                                        promotionId = "laborum";
                                    }}),
                                    add(new Promotion() {{
                                        promotionAmount = new Amount() {{
                                            pretax = new Price() {{
                                                currency = "est";
                                                value = "occaecati";
                                            }};
                                            tax = new Price() {{
                                                currency = "labore";
                                                value = "quo";
                                            }};
                                        }};
                                        promotionId = "perferendis";
                                    }}),
                                }};
                            }};
                            lineItemInvoices = new org.openapis.openapi.models.shared.ShipmentInvoiceLineItemInvoice[]{{
                                add(new ShipmentInvoiceLineItemInvoice() {{
                                    lineItemId = "aliquid";
                                    productId = "magnam";
                                    shipmentUnitIds = new String[]{{
                                        add("eligendi"),
                                        add("hic"),
                                    }};
                                    unitInvoice = new UnitInvoice() {{
                                        additionalCharges = new org.openapis.openapi.models.shared.UnitInvoiceAdditionalCharge[]{{
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "officiis";
                                                        value = "unde";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "nulla";
                                                        value = "error";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "magnam";
                                                                value = "nostrum";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "esse";
                                                                value = "corrupti";
                                                            }};
                                                        }};
                                                        promotionId = "fuga";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "facere";
                                                                value = "impedit";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "quasi";
                                                                value = "deserunt";
                                                            }};
                                                        }};
                                                        promotionId = "quod";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "laboriosam";
                                                                value = "doloremque";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "voluptatem";
                                                                value = "facere";
                                                            }};
                                                        }};
                                                        promotionId = "necessitatibus";
                                                    }}),
                                                }};
                                                type = "maxime";
                                            }}),
                                            add(new UnitInvoiceAdditionalCharge() {{
                                                additionalChargeAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "consequatur";
                                                        value = "eaque";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "architecto";
                                                        value = "similique";
                                                    }};
                                                }};
                                                additionalChargePromotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "blanditiis";
                                                                value = "quae";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "magni";
                                                                value = "officiis";
                                                            }};
                                                        }};
                                                        promotionId = "sed";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "necessitatibus";
                                                                value = "impedit";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "ipsa";
                                                                value = "excepturi";
                                                            }};
                                                        }};
                                                        promotionId = "a";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "maiores";
                                                                value = "laudantium";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "maiores";
                                                                value = "alias";
                                                            }};
                                                        }};
                                                        promotionId = "asperiores";
                                                    }}),
                                                    add(new Promotion() {{
                                                        promotionAmount = new Amount() {{
                                                            pretax = new Price() {{
                                                                currency = "rem";
                                                                value = "dicta";
                                                            }};
                                                            tax = new Price() {{
                                                                currency = "suscipit";
                                                                value = "earum";
                                                            }};
                                                        }};
                                                        promotionId = "doloribus";
                                                    }}),
                                                }};
                                                type = "velit";
                                            }}),
                                        }};
                                        promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "esse";
                                                        value = "in";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "eligendi";
                                                        value = "quasi";
                                                    }};
                                                }};
                                                promotionId = "neque";
                                            }}),
                                            add(new Promotion() {{
                                                promotionAmount = new Amount() {{
                                                    pretax = new Price() {{
                                                        currency = "vero";
                                                        value = "excepturi";
                                                    }};
                                                    tax = new Price() {{
                                                        currency = "accusantium";
                                                        value = "qui";
                                                    }};
                                                }};
                                                promotionId = "impedit";
                                            }}),
                                        }};
                                        unitPricePretax = new Price() {{
                                            currency = "beatae";
                                            value = "incidunt";
                                        }};
                                        unitPriceTaxes = new org.openapis.openapi.models.shared.UnitInvoiceTaxLine[]{{
                                            add(new UnitInvoiceTaxLine() {{
                                                taxAmount = new Price() {{
                                                    currency = "odit";
                                                    value = "corporis";
                                                }};
                                                taxName = "rerum";
                                                taxType = "alias";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            shipmentGroupId = "error";
                        }}),
                    }};
                }};;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "laboriosam";
                key = "ex";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ullam";
                uploadProtocol = "quae";
            }};            

            ContentOrderinvoicesCreaterefundinvoiceResponse res = sdk.orderinvoices.contentOrderinvoicesCreaterefundinvoice(req, new ContentOrderinvoicesCreaterefundinvoiceSecurity("similique", "incidunt") {{
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
