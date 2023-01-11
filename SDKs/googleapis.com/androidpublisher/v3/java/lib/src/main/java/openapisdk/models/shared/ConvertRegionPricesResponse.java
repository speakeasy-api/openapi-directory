package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConvertRegionPricesResponse
 * Response message for ConvertRegionPrices.
**/
public class ConvertRegionPricesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convertedOtherRegionsPrice")
    public ConvertedOtherRegionsPrice convertedOtherRegionsPrice;
    public ConvertRegionPricesResponse withConvertedOtherRegionsPrice(ConvertedOtherRegionsPrice convertedOtherRegionsPrice) {
        this.convertedOtherRegionsPrice = convertedOtherRegionsPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convertedRegionPrices")
    public java.util.Map<String, ConvertedRegionPrice> convertedRegionPrices;
    public ConvertRegionPricesResponse withConvertedRegionPrices(java.util.Map<String, ConvertedRegionPrice> convertedRegionPrices) {
        this.convertedRegionPrices = convertedRegionPrices;
        return this;
    }
}