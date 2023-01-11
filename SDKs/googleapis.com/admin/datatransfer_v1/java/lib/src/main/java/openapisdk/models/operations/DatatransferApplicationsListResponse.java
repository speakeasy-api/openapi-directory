package openapisdk.models.operations;



public class DatatransferApplicationsListResponse {
    public openapisdk.models.shared.ApplicationsListResponse applicationsListResponse;
    public DatatransferApplicationsListResponse withApplicationsListResponse(openapisdk.models.shared.ApplicationsListResponse applicationsListResponse) {
        this.applicationsListResponse = applicationsListResponse;
        return this;
    }
    public String contentType;
    public DatatransferApplicationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatatransferApplicationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}