package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesNameTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations annotations;
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitle withAnnotations(UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitle withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitle withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitleText text;
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitle withText(UpdatePageProperties200ApplicationJsonPropertiesNameTitleText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesNameTitle withType(String type) {
        this.type = type;
        return this;
    }
}