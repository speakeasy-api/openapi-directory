package openapisdk.models.operations;



public class FirebasedynamiclinksManagedShortLinksCreateResponse {
    public String contentType;
    public FirebasedynamiclinksManagedShortLinksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateManagedShortLinkResponse createManagedShortLinkResponse;
    public FirebasedynamiclinksManagedShortLinksCreateResponse withCreateManagedShortLinkResponse(openapisdk.models.shared.CreateManagedShortLinkResponse createManagedShortLinkResponse) {
        this.createManagedShortLinkResponse = createManagedShortLinkResponse;
        return this;
    }
    public Long statusCode;
    public FirebasedynamiclinksManagedShortLinksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}