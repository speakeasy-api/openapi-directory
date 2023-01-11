package openapisdk.models.operations;



public class GetDpsMessageReportOutputResponse {
    public String contentType;
    public GetDpsMessageReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetDpsMessageReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getDpsMessageReportOutput200ApplicationJSONBinaryString;
    public GetDpsMessageReportOutputResponse withGetDpsMessageReportOutput200ApplicationJsonBinaryString(byte[] getDpsMessageReportOutput200ApplicationJSONBinaryString) {
        this.getDpsMessageReportOutput200ApplicationJSONBinaryString = getDpsMessageReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetDpsMessageReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}