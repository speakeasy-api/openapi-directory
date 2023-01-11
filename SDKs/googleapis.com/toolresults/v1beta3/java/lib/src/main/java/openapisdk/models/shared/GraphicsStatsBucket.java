package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GraphicsStatsBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameCount")
    public String frameCount;
    public GraphicsStatsBucket withFrameCount(String frameCount) {
        this.frameCount = frameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderMillis")
    public String renderMillis;
    public GraphicsStatsBucket withRenderMillis(String renderMillis) {
        this.renderMillis = renderMillis;
        return this;
    }
}