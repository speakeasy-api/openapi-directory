package openapisdk.models.operations;



public class GetSetupV1BusinessusersEmailCompaniesResponse {
    public openapisdk.models.shared.AuthorizedCompanyListViewModel authorizedCompanyListViewModel;
    public GetSetupV1BusinessusersEmailCompaniesResponse withAuthorizedCompanyListViewModel(openapisdk.models.shared.AuthorizedCompanyListViewModel authorizedCompanyListViewModel) {
        this.authorizedCompanyListViewModel = authorizedCompanyListViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1BusinessusersEmailCompaniesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1BusinessusersEmailCompaniesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}