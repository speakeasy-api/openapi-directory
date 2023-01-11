package openapisdk.models.operations;



public class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse {
    public openapisdk.models.shared.ContentResult contentResult;
    public GetSetupV1CompaniesEmailTemplatesTemplateNameResponse withContentResult(openapisdk.models.shared.ContentResult contentResult) {
        this.contentResult = contentResult;
        return this;
    }
    public String contentType;
    public GetSetupV1CompaniesEmailTemplatesTemplateNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesEmailTemplatesTemplateNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}