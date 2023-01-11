package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesNameTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations annotations;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitle withAnnotations(RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitle withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitle withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public RetrieveAPage200ApplicationJsonPropertiesNameTitleText text;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitle withText(RetrieveAPage200ApplicationJsonPropertiesNameTitleText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonPropertiesNameTitle withType(String type) {
        this.type = type;
        return this;
    }
}