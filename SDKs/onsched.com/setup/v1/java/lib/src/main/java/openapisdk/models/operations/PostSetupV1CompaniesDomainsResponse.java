package openapisdk.models.operations;



public class PostSetupV1CompaniesDomainsResponse {
    public openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel;
    public PostSetupV1CompaniesDomainsResponse withCompanyDomainViewModel(openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel) {
        this.companyDomainViewModel = companyDomainViewModel;
        return this;
    }
    public String contentType;
    public PostSetupV1CompaniesDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetupV1CompaniesDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}