package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composition")
    public NodeQueryCompositionEnum composition;
    public NodeQuery withComposition(NodeQueryCompositionEnum composition) {
        this.composition = composition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public String select;
    public NodeQuery withSelect(String select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("where")
    public NodeQueryWhere[] where;
    public NodeQuery withWhere(NodeQueryWhere[] where) {
        this.where = where;
        return this;
    }
}