package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * EnduserAcceptanceDetails
 * Represents end-user details.
**/
public class EnduserAcceptanceDetails {
    @JsonProperty("ip_address")
@SpeakeasyMetadata("form:name=ip_address multipartForm:name=ip_address")
    public String ipAddress;
    public EnduserAcceptanceDetails withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("user_agent")
@SpeakeasyMetadata("form:name=user_agent multipartForm:name=user_agent")
    public String userAgent;
    public EnduserAcceptanceDetails withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}