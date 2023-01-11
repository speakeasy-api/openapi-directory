package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandQueryListUnderstandQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandQueryListUnderstandQueryResponseMeta meta;
    public ListUnderstandQueryListUnderstandQueryResponse withMeta(ListUnderstandQueryListUnderstandQueryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queries")
    public openapisdk.models.shared.PreviewUnderstandAssistantQuery[] queries;
    public ListUnderstandQueryListUnderstandQueryResponse withQueries(openapisdk.models.shared.PreviewUnderstandAssistantQuery[] queries) {
        this.queries = queries;
        return this;
    }
}