package openapisdk.models.operations;



public class GetUpdatedEditorialImagesResponse {
    public String contentType;
    public GetUpdatedEditorialImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialUpdatedResults editorialUpdatedResults;
    public GetUpdatedEditorialImagesResponse withEditorialUpdatedResults(openapisdk.models.shared.EditorialUpdatedResults editorialUpdatedResults) {
        this.editorialUpdatedResults = editorialUpdatedResults;
        return this;
    }
    public Long statusCode;
    public GetUpdatedEditorialImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}