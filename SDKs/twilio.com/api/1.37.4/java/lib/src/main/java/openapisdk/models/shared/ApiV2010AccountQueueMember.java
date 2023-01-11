package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountQueueMember {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public ApiV2010AccountQueueMember withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_enqueued")
    public String dateEnqueued;
    public ApiV2010AccountQueueMember withDateEnqueued(String dateEnqueued) {
        this.dateEnqueued = dateEnqueued;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public ApiV2010AccountQueueMember withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queue_sid")
    public String queueSid;
    public ApiV2010AccountQueueMember withQueueSid(String queueSid) {
        this.queueSid = queueSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountQueueMember withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_time")
    public Long waitTime;
    public ApiV2010AccountQueueMember withWaitTime(Long waitTime) {
        this.waitTime = waitTime;
        return this;
    }
}