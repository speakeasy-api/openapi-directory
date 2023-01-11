package openapisdk.models.operations;



public class RemotebuildexecutionProjectsInstancesCreateResponse {
    public String contentType;
    public RemotebuildexecutionProjectsInstancesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RemotebuildexecutionProjectsInstancesCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RemotebuildexecutionProjectsInstancesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}