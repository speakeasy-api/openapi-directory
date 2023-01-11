package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesNameTitle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations annotations;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitle withAnnotations(QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitle withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitle withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText text;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitle withText(QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitle withType(String type) {
        this.type = type;
        return this;
    }
}