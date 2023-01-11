package openapisdk.models.operations;



public class GetSetupV1CompaniesRegionsResponse {
    public String contentType;
    public GetSetupV1CompaniesRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> regionListViewModel;
    public GetSetupV1CompaniesRegionsResponse withRegionListViewModel(java.util.Map<String, Object> regionListViewModel) {
        this.regionListViewModel = regionListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}