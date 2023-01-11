package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TppMessage403Piis {
    @JsonProperty("category")
    public TppMessageCategoryEnum category;
    public TppMessage403Piis withCategory(TppMessageCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("code")
    public MessageCode403PiisEnum code;
    public TppMessage403Piis withCode(MessageCode403PiisEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public TppMessage403Piis withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TppMessage403Piis withText(String text) {
        this.text = text;
        return this;
    }
}