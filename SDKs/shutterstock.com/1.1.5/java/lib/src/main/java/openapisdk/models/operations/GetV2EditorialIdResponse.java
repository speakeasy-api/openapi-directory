package openapisdk.models.operations;



public class GetV2EditorialIdResponse {
    public String contentType;
    public GetV2EditorialIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialContent editorialContent;
    public GetV2EditorialIdResponse withEditorialContent(openapisdk.models.shared.EditorialContent editorialContent) {
        this.editorialContent = editorialContent;
        return this;
    }
    public Long statusCode;
    public GetV2EditorialIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}