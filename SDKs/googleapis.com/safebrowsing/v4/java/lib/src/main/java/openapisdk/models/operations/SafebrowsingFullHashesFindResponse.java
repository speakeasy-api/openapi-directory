package openapisdk.models.operations;



public class SafebrowsingFullHashesFindResponse {
    public String contentType;
    public SafebrowsingFullHashesFindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse googleSecuritySafebrowsingV4FindFullHashesResponse;
    public SafebrowsingFullHashesFindResponse withGoogleSecuritySafebrowsingV4FindFullHashesResponse(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse googleSecuritySafebrowsingV4FindFullHashesResponse) {
        this.googleSecuritySafebrowsingV4FindFullHashesResponse = googleSecuritySafebrowsingV4FindFullHashesResponse;
        return this;
    }
    public Long statusCode;
    public SafebrowsingFullHashesFindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}