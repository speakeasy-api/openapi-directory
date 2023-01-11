package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLogListLogResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logs")
    public openapisdk.models.shared.ServerlessV1ServiceEnvironmentLog[] logs;
    public ListLogListLogResponse withLogs(openapisdk.models.shared.ServerlessV1ServiceEnvironmentLog[] logs) {
        this.logs = logs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListLogListLogResponseMeta meta;
    public ListLogListLogResponse withMeta(ListLogListLogResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}