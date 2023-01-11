package openapisdk.models.operations;



public class DeleteSetupV1CompaniesDomainsIdResponse {
    public openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel;
    public DeleteSetupV1CompaniesDomainsIdResponse withCompanyDomainViewModel(openapisdk.models.shared.CompanyDomainViewModel companyDomainViewModel) {
        this.companyDomainViewModel = companyDomainViewModel;
        return this;
    }
    public String contentType;
    public DeleteSetupV1CompaniesDomainsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1CompaniesDomainsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}