package openapisdk.models.operations;



public class GetEditorialImageResponse {
    public String contentType;
    public GetEditorialImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialContent editorialContent;
    public GetEditorialImageResponse withEditorialContent(openapisdk.models.shared.EditorialContent editorialContent) {
        this.editorialContent = editorialContent;
        return this;
    }
    public Long statusCode;
    public GetEditorialImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}