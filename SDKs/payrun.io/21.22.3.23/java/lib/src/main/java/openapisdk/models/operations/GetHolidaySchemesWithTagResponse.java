package openapisdk.models.operations;



public class GetHolidaySchemesWithTagResponse {
    public String contentType;
    public GetHolidaySchemesWithTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetHolidaySchemesWithTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetHolidaySchemesWithTagResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetHolidaySchemesWithTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}