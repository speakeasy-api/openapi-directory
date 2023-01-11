package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocument200ApplicationJsonExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locals")
    public GetDocument200ApplicationJsonExplanationLocals[] locals;
    public GetDocument200ApplicationJsonExplanation withLocals(GetDocument200ApplicationJsonExplanationLocals[] locals) {
        this.locals = locals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public GetDocument200ApplicationJsonExplanationNode node;
    public GetDocument200ApplicationJsonExplanation withNode(GetDocument200ApplicationJsonExplanationNode node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public GetDocument200ApplicationJsonExplanationOpEnum op;
    public GetDocument200ApplicationJsonExplanation withOp(GetDocument200ApplicationJsonExplanationOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Double parentId;
    public GetDocument200ApplicationJsonExplanation withParentId(Double parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_id")
    public Double queryId;
    public GetDocument200ApplicationJsonExplanation withQueryId(Double queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetDocument200ApplicationJsonExplanationTypeEnum type;
    public GetDocument200ApplicationJsonExplanation withType(GetDocument200ApplicationJsonExplanationTypeEnum type) {
        this.type = type;
        return this;
    }
}