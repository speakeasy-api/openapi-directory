import { SpeakeasyBase } from "../../../internal/utils";
import { Customer } from "./customer";
import { OrderAdditionalFields } from "./orderadditionalfields";
import { OrderBillingAddress } from "./orderbillingaddress";
import { OrderProduct } from "./orderproduct";
import { OrderShippingAddress } from "./ordershippingaddress";
import { OrderShippingTax } from "./ordershippingtax";
import { TrafficSource } from "./trafficsource";
/**
 * Shipment Status for Order Fulfillment.
 */
export declare enum OrderFieldsShipmentStatusEnum {
    Delivered = "delivered",
    Requested = "requested",
    InTransit = "in_transit",
    Failed = "failed",
    PickupAvailable = "pickup_available"
}
/**
 * Shipping option for this order.
 */
export declare enum OrderFieldsShippingOptionEnum {
    Delivery = "delivery",
    StorePickup = "store_pickup",
    NoShipping = "no_shipping"
}
/**
 * Status of the Order
 */
export declare enum OrderFieldsStatusEnum {
    Abandoned = "Abandoned",
    Canceled = "Canceled",
    PendingPayment = "Pending Payment",
    Paid = "Paid"
}
export declare class OrderFields extends SpeakeasyBase {
    /**
     * Array of additional fields for the given Order
     */
    additionalFields?: OrderAdditionalFields[];
    /**
     * Additional information for the given Order
     */
    additionalInformation?: string;
    billingAddress?: OrderBillingAddress;
    /**
     * Store Checkout Order URL for the given Order
     */
    checkoutUrl?: string;
    /**
     * Promotion Coupons used on the given Order
     */
    coupons?: string;
    /**
     * Order date
     */
    createdAt?: string;
    /**
     * Currency of the Order
     */
    currency?: string;
    customer?: Customer;
    /**
     * Discount value for the given Order
     */
    discount?: number;
    /**
     * Duplicate Order URL for the given Order
     */
    duplicateUrl?: string;
    /**
     * Rate id for selected External Shipping Method rate
     */
    externalShippingRateId?: string;
    /**
     * Unique identifier of the Order
     */
    id?: number;
    /**
     * Payment information for the given Order
     */
    paymentInformation?: string;
    /**
     * Payment Method name used e.g. PayPal
     */
    paymentMethodName?: string;
    /**
     * Payment Method type used e.g. paypal
     */
    paymentMethodType?: string;
    products?: OrderProduct[];
    /**
     * Recovery Order URL for the given Order
     */
    recoveryUrl?: string;
    /**
     * Shipment Status for Order Fulfillment.
     */
    shipmentStatus?: OrderFieldsShipmentStatusEnum;
    /**
     * Shipping value for the given Order
     */
    shipping?: number;
    shippingAddress?: OrderShippingAddress;
    /**
     * Shipping Discount value for the given order
     */
    shippingDiscount?: number;
    /**
     * Shipping method e.g. Royal Mail
     */
    shippingMethodId?: number;
    /**
     * Shipping method e.g. Royal Mail
     */
    shippingMethodName?: string;
    /**
     * Shipping option for this order.
     */
    shippingOption?: OrderFieldsShippingOptionEnum;
    /**
     * False if the order is digital.
     */
    shippingRequired?: boolean;
    /**
     * Shipping Tax value for the given order
     */
    shippingTax?: number;
    shippingTaxes?: OrderShippingTax[];
    source?: TrafficSource;
    /**
     * Status of the Order
     */
    status?: OrderFieldsStatusEnum;
    /**
     * Subtotal value for the given Order. Excluding taxes, shipping and discounts
     */
    subtotal?: number;
    /**
     * Tax value for the given order
     */
    tax?: number;
    /**
     * Total value for the given Order. Including taxes, shipping and discounts
     */
    total?: number;
    /**
     * Company Used for Order Fulfillment.
     */
    trackingCompany?: string;
    /**
     * Tracking Number for Order Fulfillment.
     */
    trackingNumber?: string;
    /**
     * Tracking URL for Order Fulfillment.
     */
    trackingUrl?: string;
}
