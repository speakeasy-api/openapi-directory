package openapisdk.models.operations;



public class MybusinessaccountmanagementLocationsAdminsListResponse {
    public String contentType;
    public MybusinessaccountmanagementLocationsAdminsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationAdminsResponse listLocationAdminsResponse;
    public MybusinessaccountmanagementLocationsAdminsListResponse withListLocationAdminsResponse(openapisdk.models.shared.ListLocationAdminsResponse listLocationAdminsResponse) {
        this.listLocationAdminsResponse = listLocationAdminsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessaccountmanagementLocationsAdminsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}