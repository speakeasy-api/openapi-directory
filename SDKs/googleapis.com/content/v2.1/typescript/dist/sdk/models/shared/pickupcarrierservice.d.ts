import { SpeakeasyBase } from "../../../internal/utils";
export declare class PickupCarrierService extends SpeakeasyBase {
    /**
     * The name of the pickup carrier (for example, `"UPS"`). Required.
     */
    carrierName?: string;
    /**
     * The name of the pickup service (for example, `"Access point"`). Required.
     */
    serviceName?: string;
}
