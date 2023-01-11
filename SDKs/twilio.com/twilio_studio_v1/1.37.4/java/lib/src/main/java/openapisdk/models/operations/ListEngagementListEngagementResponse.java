package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEngagementListEngagementResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engagements")
    public openapisdk.models.shared.StudioV1FlowEngagement[] engagements;
    public ListEngagementListEngagementResponse withEngagements(openapisdk.models.shared.StudioV1FlowEngagement[] engagements) {
        this.engagements = engagements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEngagementListEngagementResponseMeta meta;
    public ListEngagementListEngagementResponse withMeta(ListEngagementListEngagementResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}