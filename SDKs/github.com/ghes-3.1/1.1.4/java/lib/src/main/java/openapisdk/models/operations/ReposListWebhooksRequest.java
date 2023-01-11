package openapisdk.models.operations;



public class ReposListWebhooksRequest {
    public ReposListWebhooksPathParams pathParams;
    public ReposListWebhooksRequest withPathParams(ReposListWebhooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListWebhooksQueryParams queryParams;
    public ReposListWebhooksRequest withQueryParams(ReposListWebhooksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}