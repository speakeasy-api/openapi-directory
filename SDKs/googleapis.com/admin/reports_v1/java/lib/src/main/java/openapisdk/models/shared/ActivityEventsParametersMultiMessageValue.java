package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityEventsParametersMultiMessageValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public NestedParameter[] parameter;
    public ActivityEventsParametersMultiMessageValue withParameter(NestedParameter[] parameter) {
        this.parameter = parameter;
        return this;
    }
}