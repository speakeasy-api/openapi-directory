package openapisdk.models.operations;



public class GetAliasResponse {
    public openapisdk.models.shared.AliasModel aliasModel;
    public GetAliasResponse withAliasModel(openapisdk.models.shared.AliasModel aliasModel) {
        this.aliasModel = aliasModel;
        return this;
    }
    public String contentType;
    public GetAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}