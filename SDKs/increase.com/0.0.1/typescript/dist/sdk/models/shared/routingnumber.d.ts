import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This routing number's support for ACH Transfers.
 */
export declare enum RoutingNumberAchTransfersEnum {
    Supported = "supported",
    NotSupported = "not_supported"
}
/**
 * This routing number's support for Real Time Payments Transfers.
 */
export declare enum RoutingNumberRealTimePaymentsTransfersEnum {
    Supported = "supported",
    NotSupported = "not_supported"
}
/**
 * A constant representing the object's type. For this resource it will always be `routing_number`.
 */
export declare enum RoutingNumberTypeEnum {
    RoutingNumber = "routing_number"
}
/**
 * This routing number's support for Wire Transfers.
 */
export declare enum RoutingNumberWireTransfersEnum {
    Supported = "supported",
    NotSupported = "not_supported"
}
/**
 * Routing numbers are used to identify your bank in a financial transaction.
 */
export declare class RoutingNumber extends SpeakeasyBase {
    /**
     * This routing number's support for ACH Transfers.
     */
    achTransfers: RoutingNumberAchTransfersEnum;
    /**
     * The name of the financial institution belonging to a routing number.
     */
    name: string;
    /**
     * This routing number's support for Real Time Payments Transfers.
     */
    realTimePaymentsTransfers: RoutingNumberRealTimePaymentsTransfersEnum;
    /**
     * The nine digit routing number identifier.
     */
    routingNumber: string;
    /**
     * A constant representing the object's type. For this resource it will always be `routing_number`.
     */
    type: RoutingNumberTypeEnum;
    /**
     * This routing number's support for Wire Transfers.
     */
    wireTransfers: RoutingNumberWireTransfersEnum;
}
