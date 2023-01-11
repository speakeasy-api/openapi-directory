package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PretargetingConfigVideoPlayerSizes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectRatio")
    public String aspectRatio;
    public PretargetingConfigVideoPlayerSizes withAspectRatio(String aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minHeight")
    public String minHeight;
    public PretargetingConfigVideoPlayerSizes withMinHeight(String minHeight) {
        this.minHeight = minHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minWidth")
    public String minWidth;
    public PretargetingConfigVideoPlayerSizes withMinWidth(String minWidth) {
        this.minWidth = minWidth;
        return this;
    }
}