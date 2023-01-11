package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedApplicationDocumentResult {
    @JsonProperty("meta")
    public PaginatedApplicationDocumentResultMeta meta;
    public PaginatedApplicationDocumentResult withMeta(PaginatedApplicationDocumentResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public ApplicationDocumentResult[] response;
    public PaginatedApplicationDocumentResult withResponse(ApplicationDocumentResult[] response) {
        this.response = response;
        return this;
    }
}