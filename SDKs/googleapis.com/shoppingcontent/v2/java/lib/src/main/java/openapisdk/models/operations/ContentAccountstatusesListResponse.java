package openapisdk.models.operations;



public class ContentAccountstatusesListResponse {
    public openapisdk.models.shared.AccountstatusesListResponse accountstatusesListResponse;
    public ContentAccountstatusesListResponse withAccountstatusesListResponse(openapisdk.models.shared.AccountstatusesListResponse accountstatusesListResponse) {
        this.accountstatusesListResponse = accountstatusesListResponse;
        return this;
    }
    public String contentType;
    public ContentAccountstatusesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountstatusesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}