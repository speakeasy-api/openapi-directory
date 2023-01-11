package openapisdk.models.operations;



public class RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse {
    public String contentType;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}