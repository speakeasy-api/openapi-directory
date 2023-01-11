package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaUserInfo
 * Information of an end user.
**/
public class GoogleCloudDiscoveryengineV1betaUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public GoogleCloudDiscoveryengineV1betaUserInfo withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public GoogleCloudDiscoveryengineV1betaUserInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}