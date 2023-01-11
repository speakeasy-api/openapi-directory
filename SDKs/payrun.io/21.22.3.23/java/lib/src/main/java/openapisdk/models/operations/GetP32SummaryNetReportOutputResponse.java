package openapisdk.models.operations;



public class GetP32SummaryNetReportOutputResponse {
    public String contentType;
    public GetP32SummaryNetReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetP32SummaryNetReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getP32SummaryNetReportOutput200ApplicationJSONBinaryString;
    public GetP32SummaryNetReportOutputResponse withGetP32SummaryNetReportOutput200ApplicationJsonBinaryString(byte[] getP32SummaryNetReportOutput200ApplicationJSONBinaryString) {
        this.getP32SummaryNetReportOutput200ApplicationJSONBinaryString = getP32SummaryNetReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetP32SummaryNetReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}