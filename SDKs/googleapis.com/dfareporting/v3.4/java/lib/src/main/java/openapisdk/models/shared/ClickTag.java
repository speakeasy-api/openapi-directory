package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClickTag
 * Creative Click Tag.
**/
public class ClickTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrl")
    public CreativeClickThroughUrl clickThroughUrl;
    public ClickTag withClickThroughUrl(CreativeClickThroughUrl clickThroughUrl) {
        this.clickThroughUrl = clickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventName")
    public String eventName;
    public ClickTag withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ClickTag withName(String name) {
        this.name = name;
        return this;
    }
}