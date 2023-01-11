package openapisdk.models.operations;



public class MybusinessverificationsLocationsVerificationsListResponse {
    public String contentType;
    public MybusinessverificationsLocationsVerificationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVerificationsResponse listVerificationsResponse;
    public MybusinessverificationsLocationsVerificationsListResponse withListVerificationsResponse(openapisdk.models.shared.ListVerificationsResponse listVerificationsResponse) {
        this.listVerificationsResponse = listVerificationsResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessverificationsLocationsVerificationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}