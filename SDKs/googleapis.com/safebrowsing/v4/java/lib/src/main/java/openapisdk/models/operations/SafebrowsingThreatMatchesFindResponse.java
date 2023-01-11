package openapisdk.models.operations;



public class SafebrowsingThreatMatchesFindResponse {
    public String contentType;
    public SafebrowsingThreatMatchesFindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindThreatMatchesResponse googleSecuritySafebrowsingV4FindThreatMatchesResponse;
    public SafebrowsingThreatMatchesFindResponse withGoogleSecuritySafebrowsingV4FindThreatMatchesResponse(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindThreatMatchesResponse googleSecuritySafebrowsingV4FindThreatMatchesResponse) {
        this.googleSecuritySafebrowsingV4FindThreatMatchesResponse = googleSecuritySafebrowsingV4FindThreatMatchesResponse;
        return this;
    }
    public Long statusCode;
    public SafebrowsingThreatMatchesFindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}