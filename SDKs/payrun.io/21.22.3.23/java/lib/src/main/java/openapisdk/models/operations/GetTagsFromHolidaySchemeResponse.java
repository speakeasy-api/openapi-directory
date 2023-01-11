package openapisdk.models.operations;



public class GetTagsFromHolidaySchemeResponse {
    public String contentType;
    public GetTagsFromHolidaySchemeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTagsFromHolidaySchemeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetTagsFromHolidaySchemeResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetTagsFromHolidaySchemeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}