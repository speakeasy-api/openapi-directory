package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackPack
 * Message containing Stack Pack information.
**/
public class StackPack {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public java.util.Map<String, String> descriptions;
    public StackPack withDescriptions(java.util.Map<String, String> descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconDataURL")
    public String iconDataURL;
    public StackPack withIconDataUrl(String iconDataURL) {
        this.iconDataURL = iconDataURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public StackPack withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public StackPack withTitle(String title) {
        this.title = title;
        return this;
    }
}