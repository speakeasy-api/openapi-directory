package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RichMediaExitOverride
 * Rich Media Exit Override.
**/
public class RichMediaExitOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrl")
    public ClickThroughUrl clickThroughUrl;
    public RichMediaExitOverride withClickThroughUrl(ClickThroughUrl clickThroughUrl) {
        this.clickThroughUrl = clickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public RichMediaExitOverride withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitId")
    public String exitId;
    public RichMediaExitOverride withExitId(String exitId) {
        this.exitId = exitId;
        return this;
    }
}