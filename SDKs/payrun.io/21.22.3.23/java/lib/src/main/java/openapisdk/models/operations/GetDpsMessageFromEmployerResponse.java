package openapisdk.models.operations;



public class GetDpsMessageFromEmployerResponse {
    public String contentType;
    public GetDpsMessageFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DpsMessage dpsMessage;
    public GetDpsMessageFromEmployerResponse withDpsMessage(openapisdk.models.shared.DpsMessage dpsMessage) {
        this.dpsMessage = dpsMessage;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetDpsMessageFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetDpsMessageFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}