import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The uplink bandwidth settings for the pricing plan.
 */
export declare class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps). null indicates no limit
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps). null indicates no limit
     */
    limitUp?: number;
}
/**
 * The time limit of the pricing plan in minutes. Can be '1 hour', '1 day', '1 week', or '30 days'.
 */
export declare enum UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum {
    OneDay = "1 day",
    OneHour = "1 hour",
    OneWeek = "1 week",
    ThirtyDays = "30 days"
}
export declare class UpdateNetworkWirelessBillingRequestBodyPlans extends SpeakeasyBase {
    /**
     * The uplink bandwidth settings for the pricing plan.
     */
    bandwidthLimits: UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
    /**
     * The id of the pricing plan to update.
     */
    id?: string;
    /**
     * The price of the billing plan.
     */
    price: number;
    /**
     * The time limit of the pricing plan in minutes. Can be '1 hour', '1 day', '1 week', or '30 days'.
     */
    timeLimit: UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;
}
export declare class UpdateNetworkWirelessBillingRequestBody extends SpeakeasyBase {
    /**
     * The currency code of this node group's billing plans
     */
    currency?: string;
    /**
     * Array of billing plans in the node group. (Can configure a maximum of 5)
     */
    plans?: UpdateNetworkWirelessBillingRequestBodyPlans[];
}
export declare class UpdateNetworkWirelessBillingRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessBillingRequestBody;
    networkId: string;
}
export declare class UpdateNetworkWirelessBillingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessBilling200ApplicationJSONObject?: Record<string, any>;
}
