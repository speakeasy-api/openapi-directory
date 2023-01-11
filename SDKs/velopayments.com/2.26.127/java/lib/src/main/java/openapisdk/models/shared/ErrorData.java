package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public java.util.Map<String, Object> content;
    public ErrorData withContent(java.util.Map<String, Object> content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ErrorData withDescription(String description) {
        this.description = description;
        return this;
    }
}