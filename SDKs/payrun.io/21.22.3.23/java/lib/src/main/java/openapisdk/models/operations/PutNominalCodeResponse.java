package openapisdk.models.operations;



public class PutNominalCodeResponse {
    public String contentType;
    public PutNominalCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutNominalCodeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.NominalCode nominalCode;
    public PutNominalCodeResponse withNominalCode(openapisdk.models.shared.NominalCode nominalCode) {
        this.nominalCode = nominalCode;
        return this;
    }
    public Long statusCode;
    public PutNominalCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}