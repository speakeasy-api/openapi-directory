package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventSubscriptionsResponseMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpStatus")
    public String httpStatus;
    public EventSubscriptionsResponseMeta withHttpStatus(String httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public EventSubscriptionsResponseMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}