package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public UpdateADatabase200ApplicationJsonTitleAnnotations annotations;
    public UpdateADatabase200ApplicationJsonTitle withAnnotations(UpdateADatabase200ApplicationJsonTitleAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public UpdateADatabase200ApplicationJsonTitle withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public UpdateADatabase200ApplicationJsonTitle withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdateADatabase200ApplicationJsonTitleText text;
    public UpdateADatabase200ApplicationJsonTitle withText(UpdateADatabase200ApplicationJsonTitleText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateADatabase200ApplicationJsonTitle withType(String type) {
        this.type = type;
        return this;
    }
}