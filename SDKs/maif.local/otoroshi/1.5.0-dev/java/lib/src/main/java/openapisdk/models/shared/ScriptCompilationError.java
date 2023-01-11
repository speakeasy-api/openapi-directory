package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScriptCompilationError
 * The error of the compilation of a Script
**/
public class ScriptCompilationError {
    @JsonProperty("column")
    public String column;
    public ScriptCompilationError withColumn(String column) {
        this.column = column;
        return this;
    }
    @JsonProperty("file")
    public java.util.Map<String, String> file;
    public ScriptCompilationError withFile(java.util.Map<String, String> file) {
        this.file = file;
        return this;
    }
    @JsonProperty("line")
    public String line;
    public ScriptCompilationError withLine(String line) {
        this.line = line;
        return this;
    }
    @JsonProperty("message")
    public java.util.Map<String, String> message;
    public ScriptCompilationError withMessage(java.util.Map<String, String> message) {
        this.message = message;
        return this;
    }
    @JsonProperty("rawMessage")
    public java.util.Map<String, String> rawMessage;
    public ScriptCompilationError withRawMessage(java.util.Map<String, String> rawMessage) {
        this.rawMessage = rawMessage;
        return this;
    }
}