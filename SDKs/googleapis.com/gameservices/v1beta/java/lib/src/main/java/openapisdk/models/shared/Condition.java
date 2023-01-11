package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Condition
 * A condition to be met.
**/
public class Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iam")
    public ConditionIamEnum iam;
    public Condition withIam(ConditionIamEnum iam) {
        this.iam = iam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("op")
    public ConditionOpEnum op;
    public Condition withOp(ConditionOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("svc")
    public String svc;
    public Condition withSvc(String svc) {
        this.svc = svc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sys")
    public ConditionSysEnum sys;
    public Condition withSys(ConditionSysEnum sys) {
        this.sys = sys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public Condition withValues(String[] values) {
        this.values = values;
        return this;
    }
}