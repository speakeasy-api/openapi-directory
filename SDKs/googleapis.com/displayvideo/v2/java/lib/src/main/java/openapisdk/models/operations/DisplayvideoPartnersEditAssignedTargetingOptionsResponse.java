package openapisdk.models.operations;



public class DisplayvideoPartnersEditAssignedTargetingOptionsResponse {
    public openapisdk.models.shared.BulkEditPartnerAssignedTargetingOptionsResponse bulkEditPartnerAssignedTargetingOptionsResponse;
    public DisplayvideoPartnersEditAssignedTargetingOptionsResponse withBulkEditPartnerAssignedTargetingOptionsResponse(openapisdk.models.shared.BulkEditPartnerAssignedTargetingOptionsResponse bulkEditPartnerAssignedTargetingOptionsResponse) {
        this.bulkEditPartnerAssignedTargetingOptionsResponse = bulkEditPartnerAssignedTargetingOptionsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoPartnersEditAssignedTargetingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoPartnersEditAssignedTargetingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}