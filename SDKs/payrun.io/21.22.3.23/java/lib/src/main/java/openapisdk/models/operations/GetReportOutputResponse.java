package openapisdk.models.operations;



public class GetReportOutputResponse {
    public String contentType;
    public GetReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getReportOutput200ApplicationJSONBinaryString;
    public GetReportOutputResponse withGetReportOutput200ApplicationJsonBinaryString(byte[] getReportOutput200ApplicationJSONBinaryString) {
        this.getReportOutput200ApplicationJSONBinaryString = getReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}