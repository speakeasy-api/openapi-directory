package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicGroupMetadata
 * Dynamic group metadata like queries and status.
**/
public class DynamicGroupMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queries")
    public DynamicGroupQuery[] queries;
    public DynamicGroupMetadata withQueries(DynamicGroupQuery[] queries) {
        this.queries = queries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DynamicGroupStatus status;
    public DynamicGroupMetadata withStatus(DynamicGroupStatus status) {
        this.status = status;
        return this;
    }
}