package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplyParametersRequest
 * Request for ApplyParameters.
**/
public class ApplyParametersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyAll")
    public Boolean applyAll;
    public ApplyParametersRequest withApplyAll(Boolean applyAll) {
        this.applyAll = applyAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeIds")
    public String[] nodeIds;
    public ApplyParametersRequest withNodeIds(String[] nodeIds) {
        this.nodeIds = nodeIds;
        return this;
    }
}