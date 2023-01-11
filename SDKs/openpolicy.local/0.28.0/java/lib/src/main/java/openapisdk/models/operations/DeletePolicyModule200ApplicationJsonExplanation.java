package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeletePolicyModule200ApplicationJsonExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locals")
    public DeletePolicyModule200ApplicationJsonExplanationLocals[] locals;
    public DeletePolicyModule200ApplicationJsonExplanation withLocals(DeletePolicyModule200ApplicationJsonExplanationLocals[] locals) {
        this.locals = locals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public DeletePolicyModule200ApplicationJsonExplanationNode node;
    public DeletePolicyModule200ApplicationJsonExplanation withNode(DeletePolicyModule200ApplicationJsonExplanationNode node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public DeletePolicyModule200ApplicationJsonExplanationOpEnum op;
    public DeletePolicyModule200ApplicationJsonExplanation withOp(DeletePolicyModule200ApplicationJsonExplanationOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Double parentId;
    public DeletePolicyModule200ApplicationJsonExplanation withParentId(Double parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_id")
    public Double queryId;
    public DeletePolicyModule200ApplicationJsonExplanation withQueryId(Double queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DeletePolicyModule200ApplicationJsonExplanationTypeEnum type;
    public DeletePolicyModule200ApplicationJsonExplanation withType(DeletePolicyModule200ApplicationJsonExplanationTypeEnum type) {
        this.type = type;
        return this;
    }
}