package openapisdk.models.operations;



public class DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse {
    public String contentType;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPartnerAssignedTargetingOptionsResponse listPartnerAssignedTargetingOptionsResponse;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse withListPartnerAssignedTargetingOptionsResponse(openapisdk.models.shared.ListPartnerAssignedTargetingOptionsResponse listPartnerAssignedTargetingOptionsResponse) {
        this.listPartnerAssignedTargetingOptionsResponse = listPartnerAssignedTargetingOptionsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}