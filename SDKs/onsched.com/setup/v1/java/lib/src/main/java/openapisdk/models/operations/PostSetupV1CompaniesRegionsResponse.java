package openapisdk.models.operations;



public class PostSetupV1CompaniesRegionsResponse {
    public String contentType;
    public PostSetupV1CompaniesRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegionViewModel regionViewModel;
    public PostSetupV1CompaniesRegionsResponse withRegionViewModel(openapisdk.models.shared.RegionViewModel regionViewModel) {
        this.regionViewModel = regionViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1CompaniesRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}