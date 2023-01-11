package openapisdk.models.operations;



public class CreateAdministrationResponse {
    public Object administration;
    public CreateAdministrationResponse withAdministration(Object administration) {
        this.administration = administration;
        return this;
    }
    public String contentType;
    public CreateAdministrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] errorModels;
    public CreateAdministrationResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public Long statusCode;
    public CreateAdministrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}