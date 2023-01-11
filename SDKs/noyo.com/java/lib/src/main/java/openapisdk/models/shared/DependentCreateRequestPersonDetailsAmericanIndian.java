package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentCreateRequestPersonDetailsAmericanIndian
 * American Indian status details (if applicable)
**/
public class DependentCreateRequestPersonDetailsAmericanIndian {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DependentCreateRequestPersonDetailsAmericanIndianStateEnum state;
    public DependentCreateRequestPersonDetailsAmericanIndian withState(DependentCreateRequestPersonDetailsAmericanIndianStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tribe")
    public String tribe;
    public DependentCreateRequestPersonDetailsAmericanIndian withTribe(String tribe) {
        this.tribe = tribe;
        return this;
    }
}