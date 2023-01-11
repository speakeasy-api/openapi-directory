package openapisdk.models.operations;



public class GetSetupV1CompaniesDomainsResponse {
    public openapisdk.models.shared.CompanyDomainListViewModel companyDomainListViewModel;
    public GetSetupV1CompaniesDomainsResponse withCompanyDomainListViewModel(openapisdk.models.shared.CompanyDomainListViewModel companyDomainListViewModel) {
        this.companyDomainListViewModel = companyDomainListViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1CompaniesDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}