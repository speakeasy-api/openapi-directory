package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeServingRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contexts")
    public CreativeServingRestrictionsContexts[] contexts;
    public CreativeServingRestrictions withContexts(CreativeServingRestrictionsContexts[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disapprovalReasons")
    public CreativeServingRestrictionsDisapprovalReasons[] disapprovalReasons;
    public CreativeServingRestrictions withDisapprovalReasons(CreativeServingRestrictionsDisapprovalReasons[] disapprovalReasons) {
        this.disapprovalReasons = disapprovalReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public CreativeServingRestrictions withReason(String reason) {
        this.reason = reason;
        return this;
    }
}