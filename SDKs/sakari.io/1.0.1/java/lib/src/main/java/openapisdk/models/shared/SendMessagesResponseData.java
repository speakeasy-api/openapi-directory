package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessagesResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedPrice")
    public Double estimatedPrice;
    public SendMessagesResponseData withEstimatedPrice(Double estimatedPrice) {
        this.estimatedPrice = estimatedPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public SendMessagesResponseData withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public Message[] messages;
    public SendMessagesResponseData withMessages(Message[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queued")
    public Long queued;
    public SendMessagesResponseData withQueued(Long queued) {
        this.queued = queued;
        return this;
    }
}