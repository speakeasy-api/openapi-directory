package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplySoftwareUpdateRequest
 * Request for ApplySoftwareUpdate.
**/
public class ApplySoftwareUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyAll")
    public Boolean applyAll;
    public ApplySoftwareUpdateRequest withApplyAll(Boolean applyAll) {
        this.applyAll = applyAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeIds")
    public String[] nodeIds;
    public ApplySoftwareUpdateRequest withNodeIds(String[] nodeIds) {
        this.nodeIds = nodeIds;
        return this;
    }
}