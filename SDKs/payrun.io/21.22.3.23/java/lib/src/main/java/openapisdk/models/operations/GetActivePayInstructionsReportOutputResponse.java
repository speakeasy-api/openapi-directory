package openapisdk.models.operations;



public class GetActivePayInstructionsReportOutputResponse {
    public String contentType;
    public GetActivePayInstructionsReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetActivePayInstructionsReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getActivePayInstructionsReportOutput200ApplicationJSONBinaryString;
    public GetActivePayInstructionsReportOutputResponse withGetActivePayInstructionsReportOutput200ApplicationJsonBinaryString(byte[] getActivePayInstructionsReportOutput200ApplicationJSONBinaryString) {
        this.getActivePayInstructionsReportOutput200ApplicationJSONBinaryString = getActivePayInstructionsReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetActivePayInstructionsReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}