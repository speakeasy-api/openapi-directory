package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TruncateLogContext
 * Database Instance truncate log context.
**/
public class TruncateLogContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TruncateLogContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logType")
    public String logType;
    public TruncateLogContext withLogType(String logType) {
        this.logType = logType;
        return this;
    }
}