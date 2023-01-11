package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetYearMonthJson200ApplicationJsonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docs")
    public openapisdk.models.shared.Doc[] docs;
    public GetYearMonthJson200ApplicationJsonResponse withDocs(openapisdk.models.shared.Doc[] docs) {
        this.docs = docs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetYearMonthJson200ApplicationJsonResponseMeta meta;
    public GetYearMonthJson200ApplicationJsonResponse withMeta(GetYearMonthJson200ApplicationJsonResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}