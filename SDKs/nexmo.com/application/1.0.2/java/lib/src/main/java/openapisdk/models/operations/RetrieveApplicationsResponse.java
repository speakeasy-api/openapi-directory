package openapisdk.models.operations;



public class RetrieveApplicationsResponse {
    public String contentType;
    public RetrieveApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Applications applications;
    public RetrieveApplicationsResponse withApplications(openapisdk.models.shared.Applications applications) {
        this.applications = applications;
        return this;
    }
}