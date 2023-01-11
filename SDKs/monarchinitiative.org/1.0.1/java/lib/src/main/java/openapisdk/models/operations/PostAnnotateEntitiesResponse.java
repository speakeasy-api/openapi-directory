package openapisdk.models.operations;



public class PostAnnotateEntitiesResponse {
    public String contentType;
    public PostAnnotateEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntityAnnotationResult entityAnnotationResult;
    public PostAnnotateEntitiesResponse withEntityAnnotationResult(openapisdk.models.shared.EntityAnnotationResult entityAnnotationResult) {
        this.entityAnnotationResult = entityAnnotationResult;
        return this;
    }
    public Long statusCode;
    public PostAnnotateEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}