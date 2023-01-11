package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdStyleColors
 * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
**/
public class AdStyleColors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background")
    public String background;
    public AdStyleColors withBackground(String background) {
        this.background = background;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("border")
    public String border;
    public AdStyleColors withBorder(String border) {
        this.border = border;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public AdStyleColors withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AdStyleColors withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AdStyleColors withUrl(String url) {
        this.url = url;
        return this;
    }
}