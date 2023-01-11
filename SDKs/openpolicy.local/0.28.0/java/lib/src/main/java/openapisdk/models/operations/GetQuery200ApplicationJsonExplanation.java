package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQuery200ApplicationJsonExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locals")
    public GetQuery200ApplicationJsonExplanationLocals[] locals;
    public GetQuery200ApplicationJsonExplanation withLocals(GetQuery200ApplicationJsonExplanationLocals[] locals) {
        this.locals = locals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public GetQuery200ApplicationJsonExplanationNode node;
    public GetQuery200ApplicationJsonExplanation withNode(GetQuery200ApplicationJsonExplanationNode node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public GetQuery200ApplicationJsonExplanationOpEnum op;
    public GetQuery200ApplicationJsonExplanation withOp(GetQuery200ApplicationJsonExplanationOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Double parentId;
    public GetQuery200ApplicationJsonExplanation withParentId(Double parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_id")
    public Double queryId;
    public GetQuery200ApplicationJsonExplanation withQueryId(Double queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetQuery200ApplicationJsonExplanationTypeEnum type;
    public GetQuery200ApplicationJsonExplanation withType(GetQuery200ApplicationJsonExplanationTypeEnum type) {
        this.type = type;
        return this;
    }
}