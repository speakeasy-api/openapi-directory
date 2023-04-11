import { SpeakeasyBase } from "../../../internal/utils";
export declare class PickupServicesPickupService extends SpeakeasyBase {
    /**
     * The name of the carrier (for example, `"UPS"`). Always present.
     */
    carrierName?: string;
    /**
     * The CLDR country code of the carrier (for example, "US"). Always present.
     */
    country?: string;
    /**
     * The name of the pickup service (for example, `"Access point"`). Always present.
     */
    serviceName?: string;
}
