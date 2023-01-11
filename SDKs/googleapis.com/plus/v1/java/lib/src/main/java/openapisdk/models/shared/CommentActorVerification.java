package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentActorVerification
 * Verification status of actor.
**/
public class CommentActorVerification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adHocVerified")
    public String adHocVerified;
    public CommentActorVerification withAdHocVerified(String adHocVerified) {
        this.adHocVerified = adHocVerified;
        return this;
    }
}