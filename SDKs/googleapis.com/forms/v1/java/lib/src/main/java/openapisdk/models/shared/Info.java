package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Info
 * The general information for a form.
**/
public class Info {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Info withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentTitle")
    public String documentTitle;
    public Info withDocumentTitle(String documentTitle) {
        this.documentTitle = documentTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Info withTitle(String title) {
        this.title = title;
        return this;
    }
}