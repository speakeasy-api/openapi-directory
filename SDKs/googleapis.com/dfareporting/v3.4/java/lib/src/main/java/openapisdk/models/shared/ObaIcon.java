package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObaIcon
 * Online Behavioral Advertiser icon.
**/
public class ObaIcon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconClickThroughUrl")
    public String iconClickThroughUrl;
    public ObaIcon withIconClickThroughUrl(String iconClickThroughUrl) {
        this.iconClickThroughUrl = iconClickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconClickTrackingUrl")
    public String iconClickTrackingUrl;
    public ObaIcon withIconClickTrackingUrl(String iconClickTrackingUrl) {
        this.iconClickTrackingUrl = iconClickTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconViewTrackingUrl")
    public String iconViewTrackingUrl;
    public ObaIcon withIconViewTrackingUrl(String iconViewTrackingUrl) {
        this.iconViewTrackingUrl = iconViewTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("program")
    public String program;
    public ObaIcon withProgram(String program) {
        this.program = program;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUrl")
    public String resourceUrl;
    public ObaIcon withResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;
    public ObaIcon withSize(Size size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xPosition")
    public String xPosition;
    public ObaIcon withXPosition(String xPosition) {
        this.xPosition = xPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yPosition")
    public String yPosition;
    public ObaIcon withYPosition(String yPosition) {
        this.yPosition = yPosition;
        return this;
    }
}