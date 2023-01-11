package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentResultPersonDetailsAmericanIndian
 * American Indian status details (if applicable)
**/
public class DependentResultPersonDetailsAmericanIndian {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DependentResultPersonDetailsAmericanIndianStateEnum state;
    public DependentResultPersonDetailsAmericanIndian withState(DependentResultPersonDetailsAmericanIndianStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tribe")
    public String tribe;
    public DependentResultPersonDetailsAmericanIndian withTribe(String tribe) {
        this.tribe = tribe;
        return this;
    }
}