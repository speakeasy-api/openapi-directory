package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OmidTargetingOptionDetails
 * Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.
**/
public class OmidTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omid")
    public OmidTargetingOptionDetailsOmidEnum omid;
    public OmidTargetingOptionDetails withOmid(OmidTargetingOptionDetailsOmidEnum omid) {
        this.omid = omid;
        return this;
    }
}