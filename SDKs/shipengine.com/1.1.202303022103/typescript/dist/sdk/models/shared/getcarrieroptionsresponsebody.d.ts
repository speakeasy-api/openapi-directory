import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Advanced options that are specific to the carrier
 */
export declare class GetCarrierOptionsResponseBodyCarrierAdvancedOption extends SpeakeasyBase {
    /**
     * Default value of option
     */
    defaultValue?: string;
    /**
     * Description of option
     */
    description?: string;
    /**
     * Name of advanced option
     */
    name?: string;
}
/**
 * A carrier list options response body
 */
export declare class GetCarrierOptionsResponseBody extends SpeakeasyBase {
    /**
     * AN array of carrier options
     */
    options?: GetCarrierOptionsResponseBodyCarrierAdvancedOption[];
}
