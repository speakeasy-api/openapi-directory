package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelConversionPing
 * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
**/
public class ChannelConversionPing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ChannelConversionPingContextEnum context;
    public ChannelConversionPing withContext(ChannelConversionPingContextEnum context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionUrl")
    public String conversionUrl;
    public ChannelConversionPing withConversionUrl(String conversionUrl) {
        this.conversionUrl = conversionUrl;
        return this;
    }
}