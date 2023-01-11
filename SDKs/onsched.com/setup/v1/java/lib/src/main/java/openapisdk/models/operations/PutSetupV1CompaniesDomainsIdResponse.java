package openapisdk.models.operations;



public class PutSetupV1CompaniesDomainsIdResponse {
    public openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel;
    public PutSetupV1CompaniesDomainsIdResponse withCompanyDomainViewModel(openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel) {
        this.companyDomainViewModel = companyDomainViewModel;
        return this;
    }
    public String contentType;
    public PutSetupV1CompaniesDomainsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSetupV1CompaniesDomainsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}