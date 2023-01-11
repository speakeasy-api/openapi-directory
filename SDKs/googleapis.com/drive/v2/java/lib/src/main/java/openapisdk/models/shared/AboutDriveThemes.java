package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutDriveThemes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundImageLink")
    public String backgroundImageLink;
    public AboutDriveThemes withBackgroundImageLink(String backgroundImageLink) {
        this.backgroundImageLink = backgroundImageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorRgb")
    public String colorRgb;
    public AboutDriveThemes withColorRgb(String colorRgb) {
        this.colorRgb = colorRgb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AboutDriveThemes withId(String id) {
        this.id = id;
        return this;
    }
}