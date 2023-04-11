import { SpeakeasyBase } from "../../../internal/utils";
import { ConvertedOtherRegionsPrice } from "./convertedotherregionsprice";
import { ConvertedRegionPrice } from "./convertedregionprice";
/**
 * Response message for ConvertRegionPrices.
 */
export declare class ConvertRegionPricesResponse extends SpeakeasyBase {
    /**
     * Converted other regions prices.
     */
    convertedOtherRegionsPrice?: ConvertedOtherRegionsPrice;
    /**
     * Map from region code to converted region price.
     */
    convertedRegionPrices?: Record<string, ConvertedRegionPrice>;
}
