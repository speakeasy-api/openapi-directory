package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectActorVerification
 * Verification status of actor.
**/
public class ActivityObjectActorVerification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adHocVerified")
    public String adHocVerified;
    public ActivityObjectActorVerification withAdHocVerified(String adHocVerified) {
        this.adHocVerified = adHocVerified;
        return this;
    }
}