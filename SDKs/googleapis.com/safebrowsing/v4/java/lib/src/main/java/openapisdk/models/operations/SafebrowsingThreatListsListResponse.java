package openapisdk.models.operations;



public class SafebrowsingThreatListsListResponse {
    public String contentType;
    public SafebrowsingThreatListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4ListThreatListsResponse googleSecuritySafebrowsingV4ListThreatListsResponse;
    public SafebrowsingThreatListsListResponse withGoogleSecuritySafebrowsingV4ListThreatListsResponse(openapisdk.models.shared.GoogleSecuritySafebrowsingV4ListThreatListsResponse googleSecuritySafebrowsingV4ListThreatListsResponse) {
        this.googleSecuritySafebrowsingV4ListThreatListsResponse = googleSecuritySafebrowsingV4ListThreatListsResponse;
        return this;
    }
    public Long statusCode;
    public SafebrowsingThreatListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}