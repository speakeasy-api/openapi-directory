package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFlowRevisionListFlowRevisionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFlowRevisionListFlowRevisionResponseMeta meta;
    public ListFlowRevisionListFlowRevisionResponse withMeta(ListFlowRevisionListFlowRevisionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisions")
    public openapisdk.models.shared.StudioV2FlowFlowRevision[] revisions;
    public ListFlowRevisionListFlowRevisionResponse withRevisions(openapisdk.models.shared.StudioV2FlowFlowRevision[] revisions) {
        this.revisions = revisions;
        return this;
    }
}