package openapisdk.models.operations;



public class LandlordControllerGetAccountsResponse {
    public String contentType;
    public LandlordControllerGetAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordAccountingModel landlordAccountingModel;
    public LandlordControllerGetAccountsResponse withLandlordAccountingModel(openapisdk.models.shared.LandlordAccountingModel landlordAccountingModel) {
        this.landlordAccountingModel = landlordAccountingModel;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}