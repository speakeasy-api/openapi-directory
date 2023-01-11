package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OmidAssignedTargetingOptionDetails
 * Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.
**/
public class OmidAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omid")
    public OmidAssignedTargetingOptionDetailsOmidEnum omid;
    public OmidAssignedTargetingOptionDetails withOmid(OmidAssignedTargetingOptionDetailsOmidEnum omid) {
        this.omid = omid;
        return this;
    }
}