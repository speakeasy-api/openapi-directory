package openapisdk.models.operations;



public class LandlordControllerGetProfitLossReportResponse {
    public String contentType;
    public LandlordControllerGetProfitLossReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordProfitLossModel landlordProfitLossModel;
    public LandlordControllerGetProfitLossReportResponse withLandlordProfitLossModel(openapisdk.models.shared.LandlordProfitLossModel landlordProfitLossModel) {
        this.landlordProfitLossModel = landlordProfitLossModel;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetProfitLossReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}