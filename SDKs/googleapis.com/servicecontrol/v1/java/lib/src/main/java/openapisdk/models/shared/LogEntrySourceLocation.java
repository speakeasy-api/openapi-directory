package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogEntrySourceLocation
 * Additional information about the source code location that produced the log entry.
**/
public class LogEntrySourceLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public String file;
    public LogEntrySourceLocation withFile(String file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("function")
    public String function;
    public LogEntrySourceLocation withFunction(String function) {
        this.function = function;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public String line;
    public LogEntrySourceLocation withLine(String line) {
        this.line = line;
        return this;
    }
}