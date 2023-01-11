package openapisdk.models.operations;



public class GetHolidayBalanceReportOutputResponse {
    public String contentType;
    public GetHolidayBalanceReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetHolidayBalanceReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getHolidayBalanceReportOutput200ApplicationJSONBinaryString;
    public GetHolidayBalanceReportOutputResponse withGetHolidayBalanceReportOutput200ApplicationJsonBinaryString(byte[] getHolidayBalanceReportOutput200ApplicationJSONBinaryString) {
        this.getHolidayBalanceReportOutput200ApplicationJSONBinaryString = getHolidayBalanceReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetHolidayBalanceReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}