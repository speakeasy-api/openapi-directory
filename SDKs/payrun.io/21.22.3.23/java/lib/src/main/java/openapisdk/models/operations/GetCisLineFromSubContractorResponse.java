package openapisdk.models.operations;



public class GetCisLineFromSubContractorResponse {
    public openapisdk.models.shared.CisLine cisLine;
    public GetCisLineFromSubContractorResponse withCisLine(openapisdk.models.shared.CisLine cisLine) {
        this.cisLine = cisLine;
        return this;
    }
    public String contentType;
    public GetCisLineFromSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCisLineFromSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetCisLineFromSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}