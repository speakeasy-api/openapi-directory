package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeAddPropertiesVars {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("var1")
    public String var1;
    public NodeAddPropertiesVars withVar1(String var1) {
        this.var1 = var1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vars2")
    public String vars2;
    public NodeAddPropertiesVars withVars2(String vars2) {
        this.vars2 = vars2;
        return this;
    }
}