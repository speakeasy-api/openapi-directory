package openapisdk.models.operations;



public class LandlordControllerGetSummaryDetailsResponse {
    public String contentType;
    public LandlordControllerGetSummaryDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordSummaryModel landlordSummaryModel;
    public LandlordControllerGetSummaryDetailsResponse withLandlordSummaryModel(openapisdk.models.shared.LandlordSummaryModel landlordSummaryModel) {
        this.landlordSummaryModel = landlordSummaryModel;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetSummaryDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}