package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations annotations;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText withAnnotations(UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText text;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText withText(UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText withType(String type) {
        this.type = type;
        return this;
    }
}