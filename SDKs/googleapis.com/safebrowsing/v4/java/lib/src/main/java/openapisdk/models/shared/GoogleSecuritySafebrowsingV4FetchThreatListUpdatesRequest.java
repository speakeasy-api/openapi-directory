package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest
 * Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5
**/
public class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public GoogleSecuritySafebrowsingV4ClientInfo client;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest withClient(GoogleSecuritySafebrowsingV4ClientInfo client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listUpdateRequests")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest[] listUpdateRequests;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest withListUpdateRequests(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest[] listUpdateRequests) {
        this.listUpdateRequests = listUpdateRequests;
        return this;
    }
}