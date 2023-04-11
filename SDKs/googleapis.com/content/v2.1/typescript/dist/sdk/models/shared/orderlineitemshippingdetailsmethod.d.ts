import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderLineItemShippingDetailsMethod extends SpeakeasyBase {
    /**
     * The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values.
     */
    carrier?: string;
    /**
     * Required. Maximum transit time.
     */
    maxDaysInTransit?: number;
    /**
     * Required. The name of the shipping method.
     */
    methodName?: string;
    /**
     * Required. Minimum transit time.
     */
    minDaysInTransit?: number;
}
