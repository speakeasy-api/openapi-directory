package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsWaitersGetResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsWaitersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsWaitersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Waiter waiter;
    public RuntimeconfigProjectsConfigsWaitersGetResponse withWaiter(openapisdk.models.shared.Waiter waiter) {
        this.waiter = waiter;
        return this;
    }
}