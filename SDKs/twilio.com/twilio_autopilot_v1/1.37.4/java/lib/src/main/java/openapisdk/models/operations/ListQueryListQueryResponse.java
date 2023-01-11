package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListQueryListQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListQueryListQueryResponseMeta meta;
    public ListQueryListQueryResponse withMeta(ListQueryListQueryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queries")
    public openapisdk.models.shared.AutopilotV1AssistantQuery[] queries;
    public ListQueryListQueryResponse withQueries(openapisdk.models.shared.AutopilotV1AssistantQuery[] queries) {
        this.queries = queries;
        return this;
    }
}