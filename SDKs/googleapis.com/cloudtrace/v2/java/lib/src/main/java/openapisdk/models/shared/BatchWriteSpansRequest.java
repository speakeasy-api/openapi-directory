package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchWriteSpansRequest
 * The request message for the `BatchWriteSpans` method.
**/
public class BatchWriteSpansRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spans")
    public Span[] spans;
    public BatchWriteSpansRequest withSpans(Span[] spans) {
        this.spans = spans;
        return this;
    }
}