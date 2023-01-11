package openapisdk.models.operations;



public class AndroidpublisherEditsApksListResponse {
    public openapisdk.models.shared.ApksListResponse apksListResponse;
    public AndroidpublisherEditsApksListResponse withApksListResponse(openapisdk.models.shared.ApksListResponse apksListResponse) {
        this.apksListResponse = apksListResponse;
        return this;
    }
    public String contentType;
    public AndroidpublisherEditsApksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsApksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}