package openapisdk.models.operations;



public class GetCisLineTypeFromEmployerResponse {
    public openapisdk.models.shared.CisLineType cisLineType;
    public GetCisLineTypeFromEmployerResponse withCisLineType(openapisdk.models.shared.CisLineType cisLineType) {
        this.cisLineType = cisLineType;
        return this;
    }
    public String contentType;
    public GetCisLineTypeFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCisLineTypeFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetCisLineTypeFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}