package openapisdk.models.operations;



public class GetPensionLiabilityReportOutputResponse {
    public String contentType;
    public GetPensionLiabilityReportOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPensionLiabilityReportOutputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getPensionLiabilityReportOutput200ApplicationJSONBinaryString;
    public GetPensionLiabilityReportOutputResponse withGetPensionLiabilityReportOutput200ApplicationJsonBinaryString(byte[] getPensionLiabilityReportOutput200ApplicationJSONBinaryString) {
        this.getPensionLiabilityReportOutput200ApplicationJSONBinaryString = getPensionLiabilityReportOutput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetPensionLiabilityReportOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}