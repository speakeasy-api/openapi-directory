package openapisdk.models.operations;



public class GetNominalCodeFromEmployerResponse {
    public String contentType;
    public GetNominalCodeFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetNominalCodeFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.NominalCode nominalCode;
    public GetNominalCodeFromEmployerResponse withNominalCode(openapisdk.models.shared.NominalCode nominalCode) {
        this.nominalCode = nominalCode;
        return this;
    }
    public Long statusCode;
    public GetNominalCodeFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}