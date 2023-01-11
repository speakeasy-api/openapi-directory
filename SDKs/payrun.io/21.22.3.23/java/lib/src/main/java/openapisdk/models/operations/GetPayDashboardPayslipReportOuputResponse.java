package openapisdk.models.operations;



public class GetPayDashboardPayslipReportOuputResponse {
    public String contentType;
    public GetPayDashboardPayslipReportOuputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayDashboardPayslipReportOuputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getPayDashboardPayslipReportOuput200ApplicationJSONBinaryString;
    public GetPayDashboardPayslipReportOuputResponse withGetPayDashboardPayslipReportOuput200ApplicationJsonBinaryString(byte[] getPayDashboardPayslipReportOuput200ApplicationJSONBinaryString) {
        this.getPayDashboardPayslipReportOuput200ApplicationJSONBinaryString = getPayDashboardPayslipReportOuput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetPayDashboardPayslipReportOuputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}