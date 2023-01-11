package openapisdk.models.operations;



public class GetHolidaySchemeRevisionsResponse {
    public String contentType;
    public GetHolidaySchemeRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetHolidaySchemeRevisionsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetHolidaySchemeRevisionsResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetHolidaySchemeRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}