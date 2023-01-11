package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdStyle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colors")
    public AdStyleColors colors;
    public AdStyle withColors(AdStyleColors colors) {
        this.colors = colors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corners")
    public String corners;
    public AdStyle withCorners(String corners) {
        this.corners = corners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("font")
    public AdStyleFont font;
    public AdStyle withFont(AdStyleFont font) {
        this.font = font;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdStyle withKind(String kind) {
        this.kind = kind;
        return this;
    }
}