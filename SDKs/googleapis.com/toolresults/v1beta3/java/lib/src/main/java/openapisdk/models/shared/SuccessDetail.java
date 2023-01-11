package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuccessDetail
 * Details for an outcome with a SUCCESS outcome summary. LINT.IfChange
**/
public class SuccessDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherNativeCrash")
    public Boolean otherNativeCrash;
    public SuccessDetail withOtherNativeCrash(Boolean otherNativeCrash) {
        this.otherNativeCrash = otherNativeCrash;
        return this;
    }
}