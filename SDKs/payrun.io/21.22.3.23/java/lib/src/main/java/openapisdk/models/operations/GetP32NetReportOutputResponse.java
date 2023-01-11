package openapisdk.models.operations;



public class GetP32NetReportOutputResponse {
    public String contentType;
    public GetP32NetReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetP32NetReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getP32NetReportOutput200ApplicationJSONBinaryString;
    public GetP32NetReportOutputResponse withGetP32NetReportOutput200ApplicationJsonBinaryString(byte[] getP32NetReportOutput200ApplicationJSONBinaryString) {
        this.getP32NetReportOutput200ApplicationJSONBinaryString = getP32NetReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetP32NetReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}