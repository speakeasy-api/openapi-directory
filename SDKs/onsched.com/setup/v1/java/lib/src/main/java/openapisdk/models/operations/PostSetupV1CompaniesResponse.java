package openapisdk.models.operations;



public class PostSetupV1CompaniesResponse {
    public openapisdk.models.shared.CompanyViewModel companyViewModel;
    public PostSetupV1CompaniesResponse withCompanyViewModel(openapisdk.models.shared.CompanyViewModel companyViewModel) {
        this.companyViewModel = companyViewModel;
        return this;
    }
    public String contentType;
    public PostSetupV1CompaniesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetupV1CompaniesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}