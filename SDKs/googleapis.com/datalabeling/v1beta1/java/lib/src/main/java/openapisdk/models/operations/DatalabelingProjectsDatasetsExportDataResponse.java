package openapisdk.models.operations;



public class DatalabelingProjectsDatasetsExportDataResponse {
    public String contentType;
    public DatalabelingProjectsDatasetsExportDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DatalabelingProjectsDatasetsExportDataResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DatalabelingProjectsDatasetsExportDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}