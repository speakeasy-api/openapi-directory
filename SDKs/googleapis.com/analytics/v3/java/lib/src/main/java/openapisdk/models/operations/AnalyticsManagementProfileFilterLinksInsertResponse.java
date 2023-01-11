package openapisdk.models.operations;



public class AnalyticsManagementProfileFilterLinksInsertResponse {
    public String contentType;
    public AnalyticsManagementProfileFilterLinksInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProfileFilterLink profileFilterLink;
    public AnalyticsManagementProfileFilterLinksInsertResponse withProfileFilterLink(openapisdk.models.shared.ProfileFilterLink profileFilterLink) {
        this.profileFilterLink = profileFilterLink;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementProfileFilterLinksInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}