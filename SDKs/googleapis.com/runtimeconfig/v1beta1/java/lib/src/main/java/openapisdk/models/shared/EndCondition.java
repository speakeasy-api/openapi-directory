package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndCondition
 * The condition that a Waiter resource is waiting for.
**/
public class EndCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardinality")
    public Cardinality cardinality;
    public EndCondition withCardinality(Cardinality cardinality) {
        this.cardinality = cardinality;
        return this;
    }
}