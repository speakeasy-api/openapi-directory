package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SynonymPropertyValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pred")
    public String pred;
    public SynonymPropertyValue withPred(String pred) {
        this.pred = pred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("val")
    public String val;
    public SynonymPropertyValue withVal(String val) {
        this.val = val;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xrefs")
    public String[] xrefs;
    public SynonymPropertyValue withXrefs(String[] xrefs) {
        this.xrefs = xrefs;
        return this;
    }
}