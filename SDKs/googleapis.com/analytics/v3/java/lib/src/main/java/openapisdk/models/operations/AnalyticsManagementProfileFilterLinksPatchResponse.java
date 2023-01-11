package openapisdk.models.operations;



public class AnalyticsManagementProfileFilterLinksPatchResponse {
    public String contentType;
    public AnalyticsManagementProfileFilterLinksPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProfileFilterLink profileFilterLink;
    public AnalyticsManagementProfileFilterLinksPatchResponse withProfileFilterLink(openapisdk.models.shared.ProfileFilterLink profileFilterLink) {
        this.profileFilterLink = profileFilterLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfileFilterLinksPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}