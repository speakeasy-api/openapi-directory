package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TppMessage405PisCanc {
    @JsonProperty("category")
    public TppMessageCategoryEnum category;
    public TppMessage405PisCanc withCategory(TppMessageCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("code")
    public MessageCode405PisCancEnum code;
    public TppMessage405PisCanc withCode(MessageCode405PisCancEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public TppMessage405PisCanc withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TppMessage405PisCanc withText(String text) {
        this.text = text;
        return this;
    }
}