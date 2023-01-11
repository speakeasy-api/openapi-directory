package openapisdk.models.operations;



public class RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse {
    public String contentType;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}