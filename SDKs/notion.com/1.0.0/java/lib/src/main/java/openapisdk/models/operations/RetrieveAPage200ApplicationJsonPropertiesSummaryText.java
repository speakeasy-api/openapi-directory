package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonPropertiesSummaryText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations annotations;
    public RetrieveAPage200ApplicationJsonPropertiesSummaryText withAnnotations(RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public RetrieveAPage200ApplicationJsonPropertiesSummaryText withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public RetrieveAPage200ApplicationJsonPropertiesSummaryText withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public RetrieveAPage200ApplicationJsonPropertiesSummaryTextText text;
    public RetrieveAPage200ApplicationJsonPropertiesSummaryText withText(RetrieveAPage200ApplicationJsonPropertiesSummaryTextText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonPropertiesSummaryText withType(String type) {
        this.type = type;
        return this;
    }
}