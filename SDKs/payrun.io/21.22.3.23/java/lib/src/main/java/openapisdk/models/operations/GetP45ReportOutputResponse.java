package openapisdk.models.operations;



public class GetP45ReportOutputResponse {
    public String contentType;
    public GetP45ReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetP45ReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getP45ReportOutput200ApplicationJSONBinaryString;
    public GetP45ReportOutputResponse withGetP45ReportOutput200ApplicationJsonBinaryString(byte[] getP45ReportOutput200ApplicationJSONBinaryString) {
        this.getP45ReportOutput200ApplicationJSONBinaryString = getP45ReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetP45ReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}