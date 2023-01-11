package openapisdk.models.operations;



public class SafebrowsingEncodedUpdatesGetResponse {
    public String contentType;
    public SafebrowsingEncodedUpdatesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
    public SafebrowsingEncodedUpdatesGetResponse withGoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse) {
        this.googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse = googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
        return this;
    }
    public Long statusCode;
    public SafebrowsingEncodedUpdatesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}