package openapisdk.models.operations;



public class GetAliasesResponse {
    public String contentType;
    public GetAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAliasesModel getAliasesModel;
    public GetAliasesResponse withGetAliasesModel(openapisdk.models.shared.GetAliasesModel getAliasesModel) {
        this.getAliasesModel = getAliasesModel;
        return this;
    }
    public Long statusCode;
    public GetAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}