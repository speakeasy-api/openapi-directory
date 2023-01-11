package openapisdk.models.operations;



public class BooksLayersAnnotationDataListResponse {
    public openapisdk.models.shared.Annotationsdata annotationsdata;
    public BooksLayersAnnotationDataListResponse withAnnotationsdata(openapisdk.models.shared.Annotationsdata annotationsdata) {
        this.annotationsdata = annotationsdata;
        return this;
    }
    public String contentType;
    public BooksLayersAnnotationDataListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BooksLayersAnnotationDataListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}