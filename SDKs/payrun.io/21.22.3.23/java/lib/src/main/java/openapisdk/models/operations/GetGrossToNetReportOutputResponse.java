package openapisdk.models.operations;



public class GetGrossToNetReportOutputResponse {
    public String contentType;
    public GetGrossToNetReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetGrossToNetReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getGrossToNetReportOutput200ApplicationJSONBinaryString;
    public GetGrossToNetReportOutputResponse withGetGrossToNetReportOutput200ApplicationJsonBinaryString(byte[] getGrossToNetReportOutput200ApplicationJSONBinaryString) {
        this.getGrossToNetReportOutput200ApplicationJSONBinaryString = getGrossToNetReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetGrossToNetReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}