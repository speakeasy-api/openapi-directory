package openapisdk.models.operations;



public class DeleteSetupV1CompaniesRegionsIdResponse {
    public String contentType;
    public DeleteSetupV1CompaniesRegionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegionViewModel regionViewModel;
    public DeleteSetupV1CompaniesRegionsIdResponse withRegionViewModel(openapisdk.models.shared.RegionViewModel regionViewModel) {
        this.regionViewModel = regionViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1CompaniesRegionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}