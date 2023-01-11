package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingsCapabilityWebhooksSessionChanged
 * Vonage will send call session changed events to this URL
**/
public class MeetingsCapabilityWebhooksSessionChanged {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public MeetingsCapabilityWebhooksSessionChanged withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum httpMethod;
    public MeetingsCapabilityWebhooksSessionChanged withHttpMethod(MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
}