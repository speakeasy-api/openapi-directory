package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4FindThreatMatchesRequest
 * Request to check entries against lists.
**/
public class GoogleSecuritySafebrowsingV4FindThreatMatchesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public GoogleSecuritySafebrowsingV4ClientInfo client;
    public GoogleSecuritySafebrowsingV4FindThreatMatchesRequest withClient(GoogleSecuritySafebrowsingV4ClientInfo client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatInfo")
    public GoogleSecuritySafebrowsingV4ThreatInfo threatInfo;
    public GoogleSecuritySafebrowsingV4FindThreatMatchesRequest withThreatInfo(GoogleSecuritySafebrowsingV4ThreatInfo threatInfo) {
        this.threatInfo = threatInfo;
        return this;
    }
}