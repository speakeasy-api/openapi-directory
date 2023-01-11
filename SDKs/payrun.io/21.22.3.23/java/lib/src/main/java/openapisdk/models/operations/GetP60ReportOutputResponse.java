package openapisdk.models.operations;



public class GetP60ReportOutputResponse {
    public String contentType;
    public GetP60ReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetP60ReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getP60ReportOutput200ApplicationJSONBinaryString;
    public GetP60ReportOutputResponse withGetP60ReportOutput200ApplicationJsonBinaryString(byte[] getP60ReportOutput200ApplicationJSONBinaryString) {
        this.getP60ReportOutput200ApplicationJSONBinaryString = getP60ReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetP60ReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}