package openapisdk.models.operations;



public class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse {
    public String contentType;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}