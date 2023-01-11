package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetGoogleUpdatedLodgingResponse
 * Response message for LodgingService.GetGoogleUpdatedLodging
**/
public class GetGoogleUpdatedLodgingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffMask")
    public String diffMask;
    public GetGoogleUpdatedLodgingResponse withDiffMask(String diffMask) {
        this.diffMask = diffMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lodging")
    public Lodging lodging;
    public GetGoogleUpdatedLodgingResponse withLodging(Lodging lodging) {
        this.lodging = lodging;
        return this;
    }
}