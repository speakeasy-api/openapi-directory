package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PretargetingConfigDimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public String height;
    public PretargetingConfigDimensions withHeight(String height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public String width;
    public PretargetingConfigDimensions withWidth(String width) {
        this.width = width;
        return this;
    }
}