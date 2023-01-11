package openapisdk.models.operations;



public class MybusinessAccountsLocationsVerificationsListResponse {
    public String contentType;
    public MybusinessAccountsLocationsVerificationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVerificationsResponse listVerificationsResponse;
    public MybusinessAccountsLocationsVerificationsListResponse withListVerificationsResponse(openapisdk.models.shared.ListVerificationsResponse listVerificationsResponse) {
        this.listVerificationsResponse = listVerificationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsVerificationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}