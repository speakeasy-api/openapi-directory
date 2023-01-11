package openapisdk.models.operations;



public class GetNextPayPeriodDatesReportOutputResponse {
    public String contentType;
    public GetNextPayPeriodDatesReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetNextPayPeriodDatesReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString;
    public GetNextPayPeriodDatesReportOutputResponse withGetNextPayPeriodDatesReportOutput200ApplicationJsonBinaryString(byte[] getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString) {
        this.getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString = getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetNextPayPeriodDatesReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}