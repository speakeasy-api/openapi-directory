package openapisdk.models.operations;



public class CreateAliasResponse {
    public String contentType;
    public CreateAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAliasResponseModel createAliasResponseModel;
    public CreateAliasResponse withCreateAliasResponseModel(openapisdk.models.shared.CreateAliasResponseModel createAliasResponseModel) {
        this.createAliasResponseModel = createAliasResponseModel;
        return this;
    }
    public Long statusCode;
    public CreateAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}