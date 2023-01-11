package openapisdk.models.operations;



public class GetAllCompanyCodesAndDescriptionsByResourceResponse {
    public String contentType;
    public GetAllCompanyCodesAndDescriptionsByResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllCompanyCodesAndDescriptionsByResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CompanyCodes[] companyCodes;
    public GetAllCompanyCodesAndDescriptionsByResourceResponse withCompanyCodes(openapisdk.models.shared.CompanyCodes[] companyCodes) {
        this.companyCodes = companyCodes;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetAllCompanyCodesAndDescriptionsByResourceResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}