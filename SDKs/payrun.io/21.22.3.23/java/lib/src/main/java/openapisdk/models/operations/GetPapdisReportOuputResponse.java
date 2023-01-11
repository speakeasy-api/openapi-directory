package openapisdk.models.operations;



public class GetPapdisReportOuputResponse {
    public String contentType;
    public GetPapdisReportOuputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPapdisReportOuputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getPapdisReportOuput200ApplicationJSONBinaryString;
    public GetPapdisReportOuputResponse withGetPapdisReportOuput200ApplicationJsonBinaryString(byte[] getPapdisReportOuput200ApplicationJSONBinaryString) {
        this.getPapdisReportOuput200ApplicationJSONBinaryString = getPapdisReportOuput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetPapdisReportOuputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}