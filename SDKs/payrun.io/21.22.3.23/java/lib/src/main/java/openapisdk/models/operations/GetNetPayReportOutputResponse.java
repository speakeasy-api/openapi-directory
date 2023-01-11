package openapisdk.models.operations;



public class GetNetPayReportOutputResponse {
    public String contentType;
    public GetNetPayReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetNetPayReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getNetPayReportOutput200ApplicationJSONBinaryString;
    public GetNetPayReportOutputResponse withGetNetPayReportOutput200ApplicationJsonBinaryString(byte[] getNetPayReportOutput200ApplicationJSONBinaryString) {
        this.getNetPayReportOutput200ApplicationJSONBinaryString = getNetPayReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetNetPayReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}