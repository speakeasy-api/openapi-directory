package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObaIcon
 * OBA Icon for a Creative
**/
public class ObaIcon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickTrackingUrl")
    public String clickTrackingUrl;
    public ObaIcon withClickTrackingUrl(String clickTrackingUrl) {
        this.clickTrackingUrl = clickTrackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public ObaIcon withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landingPageUrl")
    public String landingPageUrl;
    public ObaIcon withLandingPageUrl(String landingPageUrl) {
        this.landingPageUrl = landingPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public ObaIconPositionEnum position;
    public ObaIcon withPosition(ObaIconPositionEnum position) {
        this.position = position;
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
    @JsonProperty("resourceMimeType")
    public String resourceMimeType;
    public ObaIcon withResourceMimeType(String resourceMimeType) {
        this.resourceMimeType = resourceMimeType;
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
    @JsonProperty("viewTrackingUrl")
    public String viewTrackingUrl;
    public ObaIcon withViewTrackingUrl(String viewTrackingUrl) {
        this.viewTrackingUrl = viewTrackingUrl;
        return this;
    }
}