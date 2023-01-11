package openapisdk.models.operations;



public class GetTemplateModelResponse {
    public String contentType;
    public GetTemplateModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTemplateModelResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getTemplateModel200ApplicationJSONBinaryString;
    public GetTemplateModelResponse withGetTemplateModel200ApplicationJsonBinaryString(byte[] getTemplateModel200ApplicationJSONBinaryString) {
        this.getTemplateModel200ApplicationJSONBinaryString = getTemplateModel200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetTemplateModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}