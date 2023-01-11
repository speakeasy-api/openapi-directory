package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityActorVerification
 * Verification status of actor.
**/
public class ActivityActorVerification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adHocVerified")
    public String adHocVerified;
    public ActivityActorVerification withAdHocVerified(String adHocVerified) {
        this.adHocVerified = adHocVerified;
        return this;
    }
}