package openapisdk.models.operations;



public class GetPayslip3ReportOutputResponse {
    public String contentType;
    public GetPayslip3ReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayslip3ReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getPayslip3ReportOutput200ApplicationJSONBinaryString;
    public GetPayslip3ReportOutputResponse withGetPayslip3ReportOutput200ApplicationJsonBinaryString(byte[] getPayslip3ReportOutput200ApplicationJSONBinaryString) {
        this.getPayslip3ReportOutput200ApplicationJSONBinaryString = getPayslip3ReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetPayslip3ReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}