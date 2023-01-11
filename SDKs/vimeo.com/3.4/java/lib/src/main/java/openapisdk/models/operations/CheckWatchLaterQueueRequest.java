package openapisdk.models.operations;



public class CheckWatchLaterQueueRequest {
    public CheckWatchLaterQueuePathParams pathParams;
    public CheckWatchLaterQueueRequest withPathParams(CheckWatchLaterQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CheckWatchLaterQueueSecurity security;
    public CheckWatchLaterQueueRequest withSecurity(CheckWatchLaterQueueSecurity security) {
        this.security = security;
        return this;
    }
}