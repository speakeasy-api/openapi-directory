import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";
import { OrderCustomer } from "./ordercustomer";
import { OrderDeliveryDetails } from "./orderdeliverydetails";
import { OrderLineItem } from "./orderlineitem";
import { OrderOrderAnnotation } from "./orderorderannotation";
import { OrderPickupDetails } from "./orderpickupdetails";
import { OrderPromotion } from "./orderpromotion";
import { OrderRefund } from "./orderrefund";
import { OrderShipment } from "./ordershipment";
import { Price } from "./price";
/**
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
 */
export declare class Order extends SpeakeasyBase {
    /**
     * Whether the order was acknowledged.
     */
    acknowledged?: boolean;
    /**
     * List of key-value pairs that are attached to a given order.
     */
    annotations?: OrderOrderAnnotation[];
    billingAddress?: OrderAddress;
    customer?: OrderCustomer;
    deliveryDetails?: OrderDeliveryDetails;
    /**
     * The REST ID of the order. Globally unique.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#order`"
     */
    kind?: string;
    /**
     * Line items that are ordered.
     */
    lineItems?: OrderLineItem[];
    merchantId?: string;
    /**
     * Merchant-provided ID of the order.
     */
    merchantOrderId?: string;
    netPriceAmount?: Price;
    netTaxAmount?: Price;
    /**
     * The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" - "`pendingAuthorization`"
     */
    paymentStatus?: string;
    pickupDetails?: OrderPickupDetails;
    /**
     * The date when the order was placed, in ISO 8601 format.
     */
    placedDate?: string;
    /**
     * Promotions associated with the order. To determine which promotions apply to which products, check the `Promotions[].appliedItems[].lineItemId` field against the `LineItems[].id` field for each promotion. If a promotion is applied to more than 1 offerId, divide the discount value by the number of affected offers to determine how much discount to apply to each offerId. Examples: 1. To calculate price paid by the customer for a single line item including the discount: For each promotion, subtract the `LineItems[].adjustments[].priceAdjustment.value` amount from the `LineItems[].Price.value`. 2. To calculate price paid by the customer for a single line item including the discount in case of multiple quantity: For each promotion, divide the `LineItems[].adjustments[].priceAdjustment.value` by the quantity of products then subtract the resulting value from the `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here.
     */
    promotions?: OrderPromotion[];
    /**
     * Refunds for the order.
     */
    refunds?: OrderRefund[];
    /**
     * Shipments of the order.
     */
    shipments?: OrderShipment[];
    shippingCost?: Price;
    shippingCostTax?: Price;
    /**
     * The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`" - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`"
     */
    status?: string;
    /**
     * The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" - "`merchant`"
     */
    taxCollector?: string;
}
