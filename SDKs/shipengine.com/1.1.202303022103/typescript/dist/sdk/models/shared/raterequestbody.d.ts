import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A rate request body
 */
export declare class RateRequestBody extends SpeakeasyBase {
    /**
     * Calculate the duties and tariffs for cross border shipments.
     */
    calculateTaxAmount?: boolean;
    /**
     * Array of carrier ids to get rates for
     */
    carrierIds: string[];
    /**
     * Indicate if it's a return shipment
     */
    isReturn?: boolean;
    packageTypes?: string[];
    preferredCurrency?: string;
    serviceCodes?: string[];
}
