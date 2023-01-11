package openapisdk.models.operations;



public class PatchDpsMessageResponse {
    public String contentType;
    public PatchDpsMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DpsMessage dpsMessage;
    public PatchDpsMessageResponse withDpsMessage(openapisdk.models.shared.DpsMessage dpsMessage) {
        this.dpsMessage = dpsMessage;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchDpsMessageResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PatchDpsMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}