package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingsCapabilityWebhooksRecordingChanged
 * Vonage will send recording changed events to this URL
**/
public class MeetingsCapabilityWebhooksRecordingChanged {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public MeetingsCapabilityWebhooksRecordingChanged withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum httpMethod;
    public MeetingsCapabilityWebhooksRecordingChanged withHttpMethod(MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
}