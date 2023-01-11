package openapisdk.models.operations;



public class FirebasedynamiclinksShortLinksCreateResponse {
    public String contentType;
    public FirebasedynamiclinksShortLinksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateShortDynamicLinkResponse createShortDynamicLinkResponse;
    public FirebasedynamiclinksShortLinksCreateResponse withCreateShortDynamicLinkResponse(openapisdk.models.shared.CreateShortDynamicLinkResponse createShortDynamicLinkResponse) {
        this.createShortDynamicLinkResponse = createShortDynamicLinkResponse;
        return this;
    }
    public Long statusCode;
    public FirebasedynamiclinksShortLinksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}