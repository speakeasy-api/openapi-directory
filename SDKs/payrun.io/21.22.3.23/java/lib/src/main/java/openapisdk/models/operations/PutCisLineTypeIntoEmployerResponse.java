package openapisdk.models.operations;



public class PutCisLineTypeIntoEmployerResponse {
    public openapisdk.models.shared.CisLineType cisLineType;
    public PutCisLineTypeIntoEmployerResponse withCisLineType(openapisdk.models.shared.CisLineType cisLineType) {
        this.cisLineType = cisLineType;
        return this;
    }
    public String contentType;
    public PutCisLineTypeIntoEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutCisLineTypeIntoEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutCisLineTypeIntoEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}