package openapisdk.models.operations;



public class SafebrowsingThreatListUpdatesFetchResponse {
    public String contentType;
    public SafebrowsingThreatListUpdatesFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
    public SafebrowsingThreatListUpdatesFetchResponse withGoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse) {
        this.googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse = googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
        return this;
    }
    public Long statusCode;
    public SafebrowsingThreatListUpdatesFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}