package openapisdk.models.operations;



public class LandlordControllerGetSettingsResponse {
    public String contentType;
    public LandlordControllerGetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LandlordSettingsModel landlordSettingsModel;
    public LandlordControllerGetSettingsResponse withLandlordSettingsModel(openapisdk.models.shared.LandlordSettingsModel landlordSettingsModel) {
        this.landlordSettingsModel = landlordSettingsModel;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}