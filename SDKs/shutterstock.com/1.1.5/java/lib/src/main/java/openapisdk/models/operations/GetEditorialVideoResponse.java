package openapisdk.models.operations;



public class GetEditorialVideoResponse {
    public String contentType;
    public GetEditorialVideoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialVideoContent editorialVideoContent;
    public GetEditorialVideoResponse withEditorialVideoContent(openapisdk.models.shared.EditorialVideoContent editorialVideoContent) {
        this.editorialVideoContent = editorialVideoContent;
        return this;
    }
    public Long statusCode;
    public GetEditorialVideoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}