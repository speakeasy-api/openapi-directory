package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsImageLabelResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsImageLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DatalabelingProjectsDatasetsImageLabelResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsImageLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}