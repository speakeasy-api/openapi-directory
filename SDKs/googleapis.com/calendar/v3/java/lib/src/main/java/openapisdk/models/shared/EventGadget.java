package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventGadget
 * A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.
**/
public class EventGadget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display")
    public String display;
    public EventGadget withDisplay(String display) {
        this.display = display;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public EventGadget withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconLink")
    public String iconLink;
    public EventGadget withIconLink(String iconLink) {
        this.iconLink = iconLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public EventGadget withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public java.util.Map<String, String> preferences;
    public EventGadget withPreferences(java.util.Map<String, String> preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EventGadget withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public EventGadget withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public EventGadget withWidth(Integer width) {
        this.width = width;
        return this;
    }
}