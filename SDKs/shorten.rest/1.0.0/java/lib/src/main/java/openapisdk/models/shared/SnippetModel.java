package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SnippetModel {
    @JsonProperty("id")
    public String id;
    public SnippetModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public SnippetModel withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
}