package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * Action message contains metadata information about a single action present in the external system.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputParameters")
    public InputParameter[] inputParameters;
    public Action withInputParameters(InputParameter[] inputParameters) {
        this.inputParameters = inputParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Action withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultMetadata")
    public ResultMetadata[] resultMetadata;
    public Action withResultMetadata(ResultMetadata[] resultMetadata) {
        this.resultMetadata = resultMetadata;
        return this;
    }
}