package openapisdk.models.operations;



public class GetAnnotateEntitiesResponse {
    public String contentType;
    public GetAnnotateEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityAnnotationResult entityAnnotationResult;
    public GetAnnotateEntitiesResponse withEntityAnnotationResult(openapisdk.models.shared.EntityAnnotationResult entityAnnotationResult) {
        this.entityAnnotationResult = entityAnnotationResult;
        return this;
    }
    public Long statusCode;
    public GetAnnotateEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}