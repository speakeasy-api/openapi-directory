package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionListSessionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSessionListSessionResponseMeta meta;
    public ListSessionListSessionResponse withMeta(ListSessionListSessionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessions")
    public openapisdk.models.shared.ProxyV1ServiceSession[] sessions;
    public ListSessionListSessionResponse withSessions(openapisdk.models.shared.ProxyV1ServiceSession[] sessions) {
        this.sessions = sessions;
        return this;
    }
}