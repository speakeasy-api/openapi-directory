package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingsCapabilityWebhooksRoomChanged
 * Vonage will send call room changed events to this URL
**/
public class MeetingsCapabilityWebhooksRoomChanged {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public MeetingsCapabilityWebhooksRoomChanged withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum httpMethod;
    public MeetingsCapabilityWebhooksRoomChanged withHttpMethod(MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
}