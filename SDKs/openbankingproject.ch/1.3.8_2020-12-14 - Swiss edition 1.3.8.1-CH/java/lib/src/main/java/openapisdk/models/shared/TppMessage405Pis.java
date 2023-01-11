package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TppMessage405Pis {
    @JsonProperty("category")
    public TppMessageCategoryEnum category;
    public TppMessage405Pis withCategory(TppMessageCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("code")
    public MessageCode405PisEnum code;
    public TppMessage405Pis withCode(MessageCode405PisEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public TppMessage405Pis withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TppMessage405Pis withText(String text) {
        this.text = text;
        return this;
    }
}