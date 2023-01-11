package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentWithWebHook200ApplicationJsonExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locals")
    public GetDocumentWithWebHook200ApplicationJsonExplanationLocals[] locals;
    public GetDocumentWithWebHook200ApplicationJsonExplanation withLocals(GetDocumentWithWebHook200ApplicationJsonExplanationLocals[] locals) {
        this.locals = locals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public GetDocumentWithWebHook200ApplicationJsonExplanationNode node;
    public GetDocumentWithWebHook200ApplicationJsonExplanation withNode(GetDocumentWithWebHook200ApplicationJsonExplanationNode node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum op;
    public GetDocumentWithWebHook200ApplicationJsonExplanation withOp(GetDocumentWithWebHook200ApplicationJsonExplanationOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Double parentId;
    public GetDocumentWithWebHook200ApplicationJsonExplanation withParentId(Double parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_id")
    public Double queryId;
    public GetDocumentWithWebHook200ApplicationJsonExplanation withQueryId(Double queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum type;
    public GetDocumentWithWebHook200ApplicationJsonExplanation withType(GetDocumentWithWebHook200ApplicationJsonExplanationTypeEnum type) {
        this.type = type;
        return this;
    }
}