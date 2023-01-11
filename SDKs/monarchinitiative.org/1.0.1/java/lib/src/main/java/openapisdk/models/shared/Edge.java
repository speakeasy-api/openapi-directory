package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Edge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public Edge withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obj")
    public String obj;
    public Edge withObj(String obj) {
        this.obj = obj;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pred")
    public String pred;
    public Edge withPred(String pred) {
        this.pred = pred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub")
    public String sub;
    public Edge withSub(String sub) {
        this.sub = sub;
        return this;
    }
}