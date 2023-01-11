package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetArticlesearchJson200ApplicationJsonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docs")
    public openapisdk.models.shared.Doc[] docs;
    public GetArticlesearchJson200ApplicationJsonResponse withDocs(openapisdk.models.shared.Doc[] docs) {
        this.docs = docs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetArticlesearchJson200ApplicationJsonResponseMeta meta;
    public GetArticlesearchJson200ApplicationJsonResponse withMeta(GetArticlesearchJson200ApplicationJsonResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}