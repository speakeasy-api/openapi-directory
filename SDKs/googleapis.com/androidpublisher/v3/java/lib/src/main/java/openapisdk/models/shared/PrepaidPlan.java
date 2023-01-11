package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrepaidPlan
 * Information related to a prepaid plan.
**/
public class PrepaidPlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowExtendAfterTime")
    public String allowExtendAfterTime;
    public PrepaidPlan withAllowExtendAfterTime(String allowExtendAfterTime) {
        this.allowExtendAfterTime = allowExtendAfterTime;
        return this;
    }
}