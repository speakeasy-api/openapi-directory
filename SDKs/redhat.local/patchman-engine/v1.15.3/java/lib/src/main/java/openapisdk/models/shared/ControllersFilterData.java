package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersFilterData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public String op;
    public ControllersFilterData withOp(String op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public ControllersFilterData withValues(String[] values) {
        this.values = values;
        return this;
    }
}