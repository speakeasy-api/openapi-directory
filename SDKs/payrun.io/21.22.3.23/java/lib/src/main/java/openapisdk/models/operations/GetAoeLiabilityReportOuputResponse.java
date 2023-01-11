package openapisdk.models.operations;



public class GetAoeLiabilityReportOuputResponse {
    public String contentType;
    public GetAoeLiabilityReportOuputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAoeLiabilityReportOuputResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getAoeLiabilityReportOuput200ApplicationJSONBinaryString;
    public GetAoeLiabilityReportOuputResponse withGetAoeLiabilityReportOuput200ApplicationJsonBinaryString(byte[] getAoeLiabilityReportOuput200ApplicationJSONBinaryString) {
        this.getAoeLiabilityReportOuput200ApplicationJSONBinaryString = getAoeLiabilityReportOuput200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetAoeLiabilityReportOuputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}