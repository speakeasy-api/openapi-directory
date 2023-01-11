package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeDisapprovalReasons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String[] details;
    public CreativeDisapprovalReasons withDetails(String[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public CreativeDisapprovalReasons withReason(String reason) {
        this.reason = reason;
        return this;
    }
}