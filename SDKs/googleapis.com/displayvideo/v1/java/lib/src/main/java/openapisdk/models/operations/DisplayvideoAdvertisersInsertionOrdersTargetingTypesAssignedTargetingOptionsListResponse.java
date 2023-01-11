package openapisdk.models.operations;



public class DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInsertionOrderAssignedTargetingOptionsResponse listInsertionOrderAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse withListInsertionOrderAssignedTargetingOptionsResponse(openapisdk.models.shared.ListInsertionOrderAssignedTargetingOptionsResponse listInsertionOrderAssignedTargetingOptionsResponse) {
        this.listInsertionOrderAssignedTargetingOptionsResponse = listInsertionOrderAssignedTargetingOptionsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}