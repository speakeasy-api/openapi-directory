package openapisdk.models.operations;



public class GetAdministrationResponse {
    public Object administration;
    public GetAdministrationResponse withAdministration(Object administration) {
        this.administration = administration;
        return this;
    }
    public String contentType;
    public GetAdministrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdministrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}