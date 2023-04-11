import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLegacyPromotion } from "./orderlegacypromotion";
import { Price } from "./price";
import { TestOrderCustomer } from "./testordercustomer";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPaymentMethod } from "./testorderpaymentmethod";
export declare class TestOrder extends SpeakeasyBase {
    customer?: TestOrderCustomer;
    /**
     * Whether the orderinvoices service should support this order.
     */
    enableOrderinvoices?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`"
     */
    kind?: string;
    /**
     * Required. Line items that are ordered. At least one line item must be provided.
     */
    lineItems?: TestOrderLineItem[];
    /**
     * Restricted. Do not use.
     */
    notificationMode?: string;
    paymentMethod?: TestOrderPaymentMethod;
    /**
     * Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
     */
    predefinedDeliveryAddress?: string;
    /**
     * Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
     */
    predefinedPickupDetails?: string;
    /**
     * Deprecated. Ignored if provided.
     */
    promotions?: OrderLegacyPromotion[];
    shippingCost?: Price;
    shippingCostTax?: Price;
    /**
     * Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`"
     */
    shippingOption?: string;
}
