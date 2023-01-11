package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCompile200ApplicationJsonExplanation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locals")
    public PostCompile200ApplicationJsonExplanationLocals[] locals;
    public PostCompile200ApplicationJsonExplanation withLocals(PostCompile200ApplicationJsonExplanationLocals[] locals) {
        this.locals = locals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public PostCompile200ApplicationJsonExplanationNode node;
    public PostCompile200ApplicationJsonExplanation withNode(PostCompile200ApplicationJsonExplanationNode node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public PostCompile200ApplicationJsonExplanationOpEnum op;
    public PostCompile200ApplicationJsonExplanation withOp(PostCompile200ApplicationJsonExplanationOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public Double parentId;
    public PostCompile200ApplicationJsonExplanation withParentId(Double parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query_id")
    public Double queryId;
    public PostCompile200ApplicationJsonExplanation withQueryId(Double queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostCompile200ApplicationJsonExplanationTypeEnum type;
    public PostCompile200ApplicationJsonExplanation withType(PostCompile200ApplicationJsonExplanationTypeEnum type) {
        this.type = type;
        return this;
    }
}