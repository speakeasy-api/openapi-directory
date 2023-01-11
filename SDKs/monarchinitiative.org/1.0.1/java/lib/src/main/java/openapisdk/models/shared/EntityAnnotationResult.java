package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntityAnnotationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public EntityAnnotationResult withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spans")
    public Span[] spans;
    public EntityAnnotationResult withSpans(Span[] spans) {
        this.spans = spans;
        return this;
    }
}