package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScriptError
 * An error message for a custom bidding script.
**/
public class ScriptError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column")
    public String column;
    public ScriptError withColumn(String column) {
        this.column = column;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public ScriptErrorErrorCodeEnum errorCode;
    public ScriptError withErrorCode(ScriptErrorErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ScriptError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public String line;
    public ScriptError withLine(String line) {
        this.line = line;
        return this;
    }
}