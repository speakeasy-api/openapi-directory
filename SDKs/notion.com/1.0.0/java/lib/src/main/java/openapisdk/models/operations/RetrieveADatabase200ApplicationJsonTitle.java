package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public RetrieveADatabase200ApplicationJsonTitleAnnotations annotations;
    public RetrieveADatabase200ApplicationJsonTitle withAnnotations(RetrieveADatabase200ApplicationJsonTitleAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public RetrieveADatabase200ApplicationJsonTitle withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public RetrieveADatabase200ApplicationJsonTitle withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public RetrieveADatabase200ApplicationJsonTitleText text;
    public RetrieveADatabase200ApplicationJsonTitle withText(RetrieveADatabase200ApplicationJsonTitleText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveADatabase200ApplicationJsonTitle withType(String type) {
        this.type = type;
        return this;
    }
}