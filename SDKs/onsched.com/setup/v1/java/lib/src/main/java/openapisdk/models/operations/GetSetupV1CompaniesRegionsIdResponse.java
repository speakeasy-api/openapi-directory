package openapisdk.models.operations;



public class GetSetupV1CompaniesRegionsIdResponse {
    public String contentType;
    public GetSetupV1CompaniesRegionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegionViewModel regionViewModel;
    public GetSetupV1CompaniesRegionsIdResponse withRegionViewModel(openapisdk.models.shared.RegionViewModel regionViewModel) {
        this.regionViewModel = regionViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesRegionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}