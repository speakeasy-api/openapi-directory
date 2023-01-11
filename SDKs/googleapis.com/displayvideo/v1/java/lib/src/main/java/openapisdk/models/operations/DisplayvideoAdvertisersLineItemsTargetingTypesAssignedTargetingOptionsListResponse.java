package openapisdk.models.operations;



public class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLineItemAssignedTargetingOptionsResponse listLineItemAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse withListLineItemAssignedTargetingOptionsResponse(openapisdk.models.shared.ListLineItemAssignedTargetingOptionsResponse listLineItemAssignedTargetingOptionsResponse) {
        this.listLineItemAssignedTargetingOptionsResponse = listLineItemAssignedTargetingOptionsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}