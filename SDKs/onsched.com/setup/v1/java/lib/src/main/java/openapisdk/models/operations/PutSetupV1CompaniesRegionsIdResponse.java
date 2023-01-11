package openapisdk.models.operations;



public class PutSetupV1CompaniesRegionsIdResponse {
    public String contentType;
    public PutSetupV1CompaniesRegionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegionViewModel regionViewModel;
    public PutSetupV1CompaniesRegionsIdResponse withRegionViewModel(openapisdk.models.shared.RegionViewModel regionViewModel) {
        this.regionViewModel = regionViewModel;
        return this;
    }
    public Long statusCode;
    public PutSetupV1CompaniesRegionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}