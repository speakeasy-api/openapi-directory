package openapisdk.models.operations;



public class GetV2EditorialUpdatedResponse {
    public String contentType;
    public GetV2EditorialUpdatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditorialUpdatedResults editorialUpdatedResults;
    public GetV2EditorialUpdatedResponse withEditorialUpdatedResults(openapisdk.models.shared.EditorialUpdatedResults editorialUpdatedResults) {
        this.editorialUpdatedResults = editorialUpdatedResults;
        return this;
    }
    public Long statusCode;
    public GetV2EditorialUpdatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}