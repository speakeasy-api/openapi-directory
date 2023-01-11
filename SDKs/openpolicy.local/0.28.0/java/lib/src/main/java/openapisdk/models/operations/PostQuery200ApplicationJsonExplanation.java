package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostQuery200ApplicationJsonExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locals")
    public PostQuery200ApplicationJsonExplanationLocals[] locals;
    public PostQuery200ApplicationJsonExplanation withLocals(PostQuery200ApplicationJsonExplanationLocals[] locals) {
        this.locals = locals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public PostQuery200ApplicationJsonExplanationNode node;
    public PostQuery200ApplicationJsonExplanation withNode(PostQuery200ApplicationJsonExplanationNode node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public PostQuery200ApplicationJsonExplanationOpEnum op;
    public PostQuery200ApplicationJsonExplanation withOp(PostQuery200ApplicationJsonExplanationOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Double parentId;
    public PostQuery200ApplicationJsonExplanation withParentId(Double parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_id")
    public Double queryId;
    public PostQuery200ApplicationJsonExplanation withQueryId(Double queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostQuery200ApplicationJsonExplanationTypeEnum type;
    public PostQuery200ApplicationJsonExplanation withType(PostQuery200ApplicationJsonExplanationTypeEnum type) {
        this.type = type;
        return this;
    }
}