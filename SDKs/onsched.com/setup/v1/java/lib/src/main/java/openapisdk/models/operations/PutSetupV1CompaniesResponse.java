package openapisdk.models.operations;



public class PutSetupV1CompaniesResponse {
    public openapisdk.models.shared.CompanyViewModel companyViewModel;
    public PutSetupV1CompaniesResponse withCompanyViewModel(openapisdk.models.shared.CompanyViewModel companyViewModel) {
        this.companyViewModel = companyViewModel;
        return this;
    }
    public String contentType;
    public PutSetupV1CompaniesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSetupV1CompaniesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}