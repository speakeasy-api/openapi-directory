package openapisdk.models.operations;



public class GetPassReportOuputResponse {
    public String contentType;
    public GetPassReportOuputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPassReportOuputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getPassReportOuput200ApplicationJSONBinaryString;
    public GetPassReportOuputResponse withGetPassReportOuput200ApplicationJsonBinaryString(byte[] getPassReportOuput200ApplicationJSONBinaryString) {
        this.getPassReportOuput200ApplicationJSONBinaryString = getPassReportOuput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetPassReportOuputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}