package openapisdk.models.operations;



public class GetP11SummaryReportOutputResponse {
    public String contentType;
    public GetP11SummaryReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetP11SummaryReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getP11SummaryReportOutput200ApplicationJSONBinaryString;
    public GetP11SummaryReportOutputResponse withGetP11SummaryReportOutput200ApplicationJsonBinaryString(byte[] getP11SummaryReportOutput200ApplicationJSONBinaryString) {
        this.getP11SummaryReportOutput200ApplicationJSONBinaryString = getP11SummaryReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetP11SummaryReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}