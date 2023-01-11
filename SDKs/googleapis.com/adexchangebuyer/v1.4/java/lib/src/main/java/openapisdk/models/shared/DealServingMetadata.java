package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DealServingMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alcoholAdsAllowed")
    public Boolean alcoholAdsAllowed;
    public DealServingMetadata withAlcoholAdsAllowed(Boolean alcoholAdsAllowed) {
        this.alcoholAdsAllowed = alcoholAdsAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealPauseStatus")
    public DealServingMetadataDealPauseStatus dealPauseStatus;
    public DealServingMetadata withDealPauseStatus(DealServingMetadataDealPauseStatus dealPauseStatus) {
        this.dealPauseStatus = dealPauseStatus;
        return this;
    }
}