package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeActionSchema
 * Schema of a runtime action.
**/
public class RuntimeActionSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public RuntimeActionSchema withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputParameters")
    public InputParameter[] inputParameters;
    public RuntimeActionSchema withInputParameters(InputParameter[] inputParameters) {
        this.inputParameters = inputParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultMetadata")
    public ResultMetadata[] resultMetadata;
    public RuntimeActionSchema withResultMetadata(ResultMetadata[] resultMetadata) {
        this.resultMetadata = resultMetadata;
        return this;
    }
}