package openapisdk.models.operations;



public class AccessapprovalProjectsUpdateAccessApprovalSettingsResponse {
    public openapisdk.models.shared.AccessApprovalSettings accessApprovalSettings;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsResponse withAccessApprovalSettings(openapisdk.models.shared.AccessApprovalSettings accessApprovalSettings) {
        this.accessApprovalSettings = accessApprovalSettings;
        return this;
    }
    public String contentType;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}