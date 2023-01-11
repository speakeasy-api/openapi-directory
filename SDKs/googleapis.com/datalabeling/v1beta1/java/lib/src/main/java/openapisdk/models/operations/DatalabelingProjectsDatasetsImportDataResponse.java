package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsImportDataResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsImportDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DatalabelingProjectsDatasetsImportDataResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsImportDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}