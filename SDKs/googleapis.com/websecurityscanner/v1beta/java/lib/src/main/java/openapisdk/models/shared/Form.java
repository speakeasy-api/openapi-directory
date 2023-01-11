package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Form
 * ! Information about a vulnerability with an HTML.
**/
public class Form {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionUri")
    public String actionUri;
    public Form withActionUri(String actionUri) {
        this.actionUri = actionUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String[] fields;
    public Form withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
}