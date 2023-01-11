package openapisdk.models.operations;



public class PostCompanyEmployeesResponse {
    public String contentType;
    public PostCompanyEmployeesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public PostCompanyEmployeesResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public Long statusCode;
    public PostCompanyEmployeesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}