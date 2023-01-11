package openapisdk.models.operations;



public class MybusinessAccountsLocationsAdminsListResponse {
    public String contentType;
    public MybusinessAccountsLocationsAdminsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationAdminsResponse listLocationAdminsResponse;
    public MybusinessAccountsLocationsAdminsListResponse withListLocationAdminsResponse(openapisdk.models.shared.ListLocationAdminsResponse listLocationAdminsResponse) {
        this.listLocationAdminsResponse = listLocationAdminsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsAdminsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}