package openapisdk.models.operations;



public class GetSetupV1CompaniesDomainsIdResponse {
    public openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel;
    public GetSetupV1CompaniesDomainsIdResponse withCompanyDomainViewModel(openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel) {
        this.companyDomainViewModel = companyDomainViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1CompaniesDomainsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesDomainsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}