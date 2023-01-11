package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TppMessage2Xx {
    @JsonProperty("category")
    public TppMessageCategoryEnum category;
    public TppMessage2Xx withCategory(TppMessageCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("code")
    public MessageCode2XxEnum code;
    public TppMessage2Xx withCode(MessageCode2XxEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public TppMessage2Xx withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TppMessage2Xx withText(String text) {
        this.text = text;
        return this;
    }
}