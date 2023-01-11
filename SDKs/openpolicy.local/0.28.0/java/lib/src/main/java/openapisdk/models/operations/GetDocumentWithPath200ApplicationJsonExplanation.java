package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithPath200ApplicationJsonExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locals")
    public GetDocumentWithPath200ApplicationJsonExplanationLocals[] locals;
    public GetDocumentWithPath200ApplicationJsonExplanation withLocals(GetDocumentWithPath200ApplicationJsonExplanationLocals[] locals) {
        this.locals = locals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public GetDocumentWithPath200ApplicationJsonExplanationNode node;
    public GetDocumentWithPath200ApplicationJsonExplanation withNode(GetDocumentWithPath200ApplicationJsonExplanationNode node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public GetDocumentWithPath200ApplicationJsonExplanationOpEnum op;
    public GetDocumentWithPath200ApplicationJsonExplanation withOp(GetDocumentWithPath200ApplicationJsonExplanationOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Double parentId;
    public GetDocumentWithPath200ApplicationJsonExplanation withParentId(Double parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_id")
    public Double queryId;
    public GetDocumentWithPath200ApplicationJsonExplanation withQueryId(Double queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetDocumentWithPath200ApplicationJsonExplanationTypeEnum type;
    public GetDocumentWithPath200ApplicationJsonExplanation withType(GetDocumentWithPath200ApplicationJsonExplanationTypeEnum type) {
        this.type = type;
        return this;
    }
}