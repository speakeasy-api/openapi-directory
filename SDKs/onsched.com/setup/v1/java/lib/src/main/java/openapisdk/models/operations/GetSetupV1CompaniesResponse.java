package openapisdk.models.operations;



public class GetSetupV1CompaniesResponse {
    public openapisdk.models.shared.CompanyViewModel companyViewModel;
    public GetSetupV1CompaniesResponse withCompanyViewModel(openapisdk.models.shared.CompanyViewModel companyViewModel) {
        this.companyViewModel = companyViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1CompaniesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}