package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsTextLabelResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsTextLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DatalabelingProjectsDatasetsTextLabelResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsTextLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}