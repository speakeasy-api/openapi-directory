import { SpeakeasyBase } from "../../../internal/utils";
import { OrderPromotion } from "./orderpromotion";
import { Price } from "./price";
import { TestOrderDeliveryDetails } from "./testorderdeliverydetails";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPickupDetails } from "./testorderpickupdetails";
export declare class TestOrder extends SpeakeasyBase {
    deliveryDetails?: TestOrderDeliveryDetails;
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
    pickupDetails?: TestOrderPickupDetails;
    /**
     * Required. The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
     */
    predefinedBillingAddress?: string;
    /**
     * Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
     */
    predefinedDeliveryAddress?: string;
    /**
     * Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`"
     */
    predefinedEmail?: string;
    /**
     * Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`"
     */
    predefinedPickupDetails?: string;
    /**
     * Promotions associated with the order.
     */
    promotions?: OrderPromotion[];
    shippingCost?: Price;
    /**
     * Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`"
     */
    shippingOption?: string;
}
