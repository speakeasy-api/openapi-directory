package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ClientInfo
 * The client metadata associated with Safe Browsing API requests.
**/
public class GoogleSecuritySafebrowsingV4ClientInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public GoogleSecuritySafebrowsingV4ClientInfo withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientVersion")
    public String clientVersion;
    public GoogleSecuritySafebrowsingV4ClientInfo withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
}