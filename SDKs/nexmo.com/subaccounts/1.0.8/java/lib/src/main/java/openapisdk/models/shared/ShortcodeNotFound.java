package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ShortcodeNotFound
 * Shortcode Not Found
**/
public class ShortcodeNotFound {
    @JsonProperty("detail")
    public String detail;
    public ShortcodeNotFound withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ShortcodeNotFound withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ShortcodeNotFound withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ShortcodeNotFound withType(String type) {
        this.type = type;
        return this;
    }
}