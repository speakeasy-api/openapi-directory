package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventSubscriptionsResponseResultMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpStatus")
    public String httpStatus;
    public EventSubscriptionsResponseResultMeta withHttpStatus(String httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }
}