package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServingRestriction
 * Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
**/
public class ServingRestriction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contexts")
    public ServingContext[] contexts;
    public ServingRestriction withContexts(ServingContext[] contexts) {
        this.contexts = contexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disapproval")
    public Disapproval disapproval;
    public ServingRestriction withDisapproval(Disapproval disapproval) {
        this.disapproval = disapproval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disapprovalReasons")
    public Disapproval[] disapprovalReasons;
    public ServingRestriction withDisapprovalReasons(Disapproval[] disapprovalReasons) {
        this.disapprovalReasons = disapprovalReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ServingRestrictionStatusEnum status;
    public ServingRestriction withStatus(ServingRestrictionStatusEnum status) {
        this.status = status;
        return this;
    }
}