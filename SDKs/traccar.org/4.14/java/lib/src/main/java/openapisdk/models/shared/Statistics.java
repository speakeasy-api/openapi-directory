package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Statistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDevices")
    public Long activeDevices;
    public Statistics withActiveDevices(Long activeDevices) {
        this.activeDevices = activeDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeUsers")
    public Long activeUsers;
    public Statistics withActiveUsers(Long activeUsers) {
        this.activeUsers = activeUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("captureTime")
    public OffsetDateTime captureTime;
    public Statistics withCaptureTime(OffsetDateTime captureTime) {
        this.captureTime = captureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messagesReceived")
    public Long messagesReceived;
    public Statistics withMessagesReceived(Long messagesReceived) {
        this.messagesReceived = messagesReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messagesStored")
    public Long messagesStored;
    public Statistics withMessagesStored(Long messagesStored) {
        this.messagesStored = messagesStored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public Long requests;
    public Statistics withRequests(Long requests) {
        this.requests = requests;
        return this;
    }
}