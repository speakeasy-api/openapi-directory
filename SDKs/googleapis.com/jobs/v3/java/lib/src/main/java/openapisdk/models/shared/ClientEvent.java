package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientEvent
 * An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of search and recommendation for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
**/
public class ClientEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ClientEvent withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public ClientEvent withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraInfo")
    public java.util.Map<String, String> extraInfo;
    public ClientEvent withExtraInfo(java.util.Map<String, String> extraInfo) {
        this.extraInfo = extraInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobEvent")
    public JobEvent jobEvent;
    public ClientEvent withJobEvent(JobEvent jobEvent) {
        this.jobEvent = jobEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentEventId")
    public String parentEventId;
    public ClientEvent withParentEventId(String parentEventId) {
        this.parentEventId = parentEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ClientEvent withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}