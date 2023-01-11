package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Doc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public Doc withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("category")
    public String category;
    public Doc withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public Doc withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentDoc")
    public String parentDoc;
    public Doc withParentDoc(String parentDoc) {
        this.parentDoc = parentDoc;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Doc withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DocTypeEnum type;
    public Doc withType(DocTypeEnum type) {
        this.type = type;
        return this;
    }
}