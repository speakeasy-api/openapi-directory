package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesTruncateLogRequest
 * Instance truncate log request.
**/
public class InstancesTruncateLogRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncateLogContext")
    public TruncateLogContext truncateLogContext;
    public InstancesTruncateLogRequest withTruncateLogContext(TruncateLogContext truncateLogContext) {
        this.truncateLogContext = truncateLogContext;
        return this;
    }
}