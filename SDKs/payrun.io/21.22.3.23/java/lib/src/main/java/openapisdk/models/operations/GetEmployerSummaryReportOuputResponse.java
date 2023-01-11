package openapisdk.models.operations;



public class GetEmployerSummaryReportOuputResponse {
    public String contentType;
    public GetEmployerSummaryReportOuputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployerSummaryReportOuputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getEmployerSummaryReportOuput200ApplicationJSONBinaryString;
    public GetEmployerSummaryReportOuputResponse withGetEmployerSummaryReportOuput200ApplicationJsonBinaryString(byte[] getEmployerSummaryReportOuput200ApplicationJSONBinaryString) {
        this.getEmployerSummaryReportOuput200ApplicationJSONBinaryString = getEmployerSummaryReportOuput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetEmployerSummaryReportOuputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}