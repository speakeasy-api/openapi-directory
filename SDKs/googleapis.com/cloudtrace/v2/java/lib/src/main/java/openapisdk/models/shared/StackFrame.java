package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackFrame
 * Represents a single stack frame in a stack trace.
**/
public class StackFrame {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnNumber")
    public String columnNumber;
    public StackFrame withColumnNumber(String columnNumber) {
        this.columnNumber = columnNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public TruncatableString fileName;
    public StackFrame withFileName(TruncatableString fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionName")
    public TruncatableString functionName;
    public StackFrame withFunctionName(TruncatableString functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineNumber")
    public String lineNumber;
    public StackFrame withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadModule")
    public Module loadModule;
    public StackFrame withLoadModule(Module loadModule) {
        this.loadModule = loadModule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalFunctionName")
    public TruncatableString originalFunctionName;
    public StackFrame withOriginalFunctionName(TruncatableString originalFunctionName) {
        this.originalFunctionName = originalFunctionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceVersion")
    public TruncatableString sourceVersion;
    public StackFrame withSourceVersion(TruncatableString sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
}