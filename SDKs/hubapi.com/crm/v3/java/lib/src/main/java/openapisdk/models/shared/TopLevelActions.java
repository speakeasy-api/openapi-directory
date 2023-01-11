package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TopLevelActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Object primary;
    public TopLevelActions withPrimary(Object primary) {
        this.primary = primary;
        return this;
    }
    @JsonProperty("secondary")
    public Object[] secondary;
    public TopLevelActions withSecondary(Object[] secondary) {
        this.secondary = secondary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public IFrameActionBody settings;
    public TopLevelActions withSettings(IFrameActionBody settings) {
        this.settings = settings;
        return this;
    }
}