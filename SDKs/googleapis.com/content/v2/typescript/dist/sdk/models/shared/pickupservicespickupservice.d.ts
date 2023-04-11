import { SpeakeasyBase } from "../../../internal/utils";
export declare class PickupServicesPickupService extends SpeakeasyBase {
    /**
     * The name of the carrier (e.g., `"UPS"`). Always present.
     */
    carrierName?: string;
    /**
     * The CLDR country code of the carrier (e.g., "US"). Always present.
     */
    country?: string;
    /**
     * The name of the pickup service (e.g., `"Access point"`). Always present.
     */
    serviceName?: string;
}
