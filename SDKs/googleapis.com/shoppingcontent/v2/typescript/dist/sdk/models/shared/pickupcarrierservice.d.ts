import { SpeakeasyBase } from "../../../internal/utils";
export declare class PickupCarrierService extends SpeakeasyBase {
    /**
     * The name of the pickup carrier (e.g., `"UPS"`). Required.
     */
    carrierName?: string;
    /**
     * The name of the pickup service (e.g., `"Access point"`). Required.
     */
    serviceName?: string;
}
