package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RtcCapabilityWebhooksEventUrl
 * Vonage will send RTC events to this URL
**/
public class RtcCapabilityWebhooksEventUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public RtcCapabilityWebhooksEventUrl withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public RtcCapabilityWebhooksEventUrlHttpMethodEnum httpMethod;
    public RtcCapabilityWebhooksEventUrl withHttpMethod(RtcCapabilityWebhooksEventUrlHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
}