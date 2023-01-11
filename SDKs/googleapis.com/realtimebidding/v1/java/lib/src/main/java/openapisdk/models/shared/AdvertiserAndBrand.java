package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserAndBrand
 * Detected advertiser and brand information.
**/
public class AdvertiserAndBrand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public AdvertiserAndBrand withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserName")
    public String advertiserName;
    public AdvertiserAndBrand withAdvertiserName(String advertiserName) {
        this.advertiserName = advertiserName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandId")
    public String brandId;
    public AdvertiserAndBrand withBrandId(String brandId) {
        this.brandId = brandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandName")
    public String brandName;
    public AdvertiserAndBrand withBrandName(String brandName) {
        this.brandName = brandName;
        return this;
    }
}