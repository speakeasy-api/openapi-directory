package openapisdk.models.operations;



public class SafebrowsingEncodedFullHashesGetResponse {
    public String contentType;
    public SafebrowsingEncodedFullHashesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse googleSecuritySafebrowsingV4FindFullHashesResponse;
    public SafebrowsingEncodedFullHashesGetResponse withGoogleSecuritySafebrowsingV4FindFullHashesResponse(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse googleSecuritySafebrowsingV4FindFullHashesResponse) {
        this.googleSecuritySafebrowsingV4FindFullHashesResponse = googleSecuritySafebrowsingV4FindFullHashesResponse;
        return this;
    }
    public Long statusCode;
    public SafebrowsingEncodedFullHashesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}