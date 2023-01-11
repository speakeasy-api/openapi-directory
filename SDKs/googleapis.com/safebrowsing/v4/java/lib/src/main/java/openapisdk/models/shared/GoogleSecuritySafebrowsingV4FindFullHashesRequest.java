package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4FindFullHashesRequest
 * Request to return full hashes matched by the provided hash prefixes.
**/
public class GoogleSecuritySafebrowsingV4FindFullHashesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiClient")
    public GoogleSecuritySafebrowsingV4ClientInfo apiClient;
    public GoogleSecuritySafebrowsingV4FindFullHashesRequest withApiClient(GoogleSecuritySafebrowsingV4ClientInfo apiClient) {
        this.apiClient = apiClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public GoogleSecuritySafebrowsingV4ClientInfo client;
    public GoogleSecuritySafebrowsingV4FindFullHashesRequest withClient(GoogleSecuritySafebrowsingV4ClientInfo client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientStates")
    public String[] clientStates;
    public GoogleSecuritySafebrowsingV4FindFullHashesRequest withClientStates(String[] clientStates) {
        this.clientStates = clientStates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatInfo")
    public GoogleSecuritySafebrowsingV4ThreatInfo threatInfo;
    public GoogleSecuritySafebrowsingV4FindFullHashesRequest withThreatInfo(GoogleSecuritySafebrowsingV4ThreatInfo threatInfo) {
        this.threatInfo = threatInfo;
        return this;
    }
}