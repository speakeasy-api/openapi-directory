package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TppMessage409Piis {
    @JsonProperty("category")
    public TppMessageCategoryEnum category;
    public TppMessage409Piis withCategory(TppMessageCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("code")
    public MessageCode409PiisEnum code;
    public TppMessage409Piis withCode(MessageCode409PiisEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public TppMessage409Piis withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TppMessage409Piis withText(String text) {
        this.text = text;
        return this;
    }
}