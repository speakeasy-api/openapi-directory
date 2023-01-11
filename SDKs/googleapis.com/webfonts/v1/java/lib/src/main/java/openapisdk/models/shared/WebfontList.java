package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebfontList
 * Response containing the list of fonts currently served by the Google Fonts API.
**/
public class WebfontList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Webfont[] items;
    public WebfontList withItems(Webfont[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public WebfontList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}