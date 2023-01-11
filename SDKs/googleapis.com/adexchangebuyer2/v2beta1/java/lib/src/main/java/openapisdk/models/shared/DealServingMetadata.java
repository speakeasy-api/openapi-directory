package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealServingMetadata
 * Message captures metadata about the serving status of a deal.
**/
public class DealServingMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealPauseStatus")
    public DealPauseStatus dealPauseStatus;
    public DealServingMetadata withDealPauseStatus(DealPauseStatus dealPauseStatus) {
        this.dealPauseStatus = dealPauseStatus;
        return this;
    }
}