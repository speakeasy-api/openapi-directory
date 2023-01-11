package openapisdk.models.operations;



public class PostConsumerV1AppointmentsRequest {
    public PostConsumerV1AppointmentsQueryParams queryParams;
    public PostConsumerV1AppointmentsRequest withQueryParams(PostConsumerV1AppointmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostConsumerV1AppointmentsRequests request;
    public PostConsumerV1AppointmentsRequest withRequest(PostConsumerV1AppointmentsRequests request) {
        this.request = request;
        return this;
    }
}