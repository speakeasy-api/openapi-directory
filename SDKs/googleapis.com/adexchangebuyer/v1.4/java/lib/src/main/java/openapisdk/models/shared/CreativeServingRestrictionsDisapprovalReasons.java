package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeServingRestrictionsDisapprovalReasons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String[] details;
    public CreativeServingRestrictionsDisapprovalReasons withDetails(String[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public CreativeServingRestrictionsDisapprovalReasons withReason(String reason) {
        this.reason = reason;
        return this;
    }
}