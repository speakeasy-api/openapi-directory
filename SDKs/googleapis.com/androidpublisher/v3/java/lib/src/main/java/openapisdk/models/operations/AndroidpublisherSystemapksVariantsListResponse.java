package openapisdk.models.operations;



public class AndroidpublisherSystemapksVariantsListResponse {
    public String contentType;
    public AndroidpublisherSystemapksVariantsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherSystemapksVariantsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SystemApksListResponse systemApksListResponse;
    public AndroidpublisherSystemapksVariantsListResponse withSystemApksListResponse(openapisdk.models.shared.SystemApksListResponse systemApksListResponse) {
        this.systemApksListResponse = systemApksListResponse;
        return this;
    }
}