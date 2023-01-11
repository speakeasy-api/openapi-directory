package openapisdk.models.operations;



public class GetLastPayDateReportOuputResponse {
    public String contentType;
    public GetLastPayDateReportOuputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetLastPayDateReportOuputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getLastPayDateReportOuput200ApplicationJSONBinaryString;
    public GetLastPayDateReportOuputResponse withGetLastPayDateReportOuput200ApplicationJsonBinaryString(byte[] getLastPayDateReportOuput200ApplicationJSONBinaryString) {
        this.getLastPayDateReportOuput200ApplicationJSONBinaryString = getLastPayDateReportOuput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetLastPayDateReportOuputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}