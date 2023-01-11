package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEventsBatchInsertResponse
 * Insert Custom Events Response.
**/
public class CustomEventsBatchInsertResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasFailures")
    public Boolean hasFailures;
    public CustomEventsBatchInsertResponse withHasFailures(Boolean hasFailures) {
        this.hasFailures = hasFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEventsBatchInsertResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CustomEventStatus[] status;
    public CustomEventsBatchInsertResponse withStatus(CustomEventStatus[] status) {
        this.status = status;
        return this;
    }
}