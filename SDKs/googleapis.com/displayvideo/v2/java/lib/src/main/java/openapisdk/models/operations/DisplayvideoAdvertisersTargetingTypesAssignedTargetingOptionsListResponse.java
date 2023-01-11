package openapisdk.models.operations;



public class DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAdvertiserAssignedTargetingOptionsResponse listAdvertiserAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse withListAdvertiserAssignedTargetingOptionsResponse(openapisdk.models.shared.ListAdvertiserAssignedTargetingOptionsResponse listAdvertiserAssignedTargetingOptionsResponse) {
        this.listAdvertiserAssignedTargetingOptionsResponse = listAdvertiserAssignedTargetingOptionsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}