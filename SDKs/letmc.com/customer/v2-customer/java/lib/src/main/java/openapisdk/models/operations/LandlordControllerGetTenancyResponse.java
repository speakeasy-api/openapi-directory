package openapisdk.models.operations;



public class LandlordControllerGetTenancyResponse {
    public String contentType;
    public LandlordControllerGetTenancyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordTenancyModel landlordTenancyModel;
    public LandlordControllerGetTenancyResponse withLandlordTenancyModel(openapisdk.models.shared.LandlordTenancyModel landlordTenancyModel) {
        this.landlordTenancyModel = landlordTenancyModel;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetTenancyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}