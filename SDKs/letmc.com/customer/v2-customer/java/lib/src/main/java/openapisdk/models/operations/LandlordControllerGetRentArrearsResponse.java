package openapisdk.models.operations;



public class LandlordControllerGetRentArrearsResponse {
    public String contentType;
    public LandlordControllerGetRentArrearsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordRentArrearsModel landlordRentArrearsModel;
    public LandlordControllerGetRentArrearsResponse withLandlordRentArrearsModel(openapisdk.models.shared.LandlordRentArrearsModel landlordRentArrearsModel) {
        this.landlordRentArrearsModel = landlordRentArrearsModel;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetRentArrearsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}