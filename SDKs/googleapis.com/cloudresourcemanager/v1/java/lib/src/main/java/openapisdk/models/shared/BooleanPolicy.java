package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BooleanPolicy
 * Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
**/
public class BooleanPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforced")
    public Boolean enforced;
    public BooleanPolicy withEnforced(Boolean enforced) {
        this.enforced = enforced;
        return this;
    }
}