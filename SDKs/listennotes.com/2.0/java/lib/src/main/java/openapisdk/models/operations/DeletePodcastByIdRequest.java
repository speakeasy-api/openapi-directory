package openapisdk.models.operations;



public class DeletePodcastByIdRequest {
    public DeletePodcastByIdPathParams pathParams;
    public DeletePodcastByIdRequest withPathParams(DeletePodcastByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePodcastByIdQueryParams queryParams;
    public DeletePodcastByIdRequest withQueryParams(DeletePodcastByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeletePodcastByIdHeaders headers;
    public DeletePodcastByIdRequest withHeaders(DeletePodcastByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}