package openapisdk.models.operations;



public class GetBestPodcastsRequest {
    public GetBestPodcastsQueryParams queryParams;
    public GetBestPodcastsRequest withQueryParams(GetBestPodcastsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBestPodcastsHeaders headers;
    public GetBestPodcastsRequest withHeaders(GetBestPodcastsHeaders headers) {
        this.headers = headers;
        return this;
    }
}