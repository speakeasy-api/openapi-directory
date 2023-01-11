package openapisdk.models.operations;



public class FindTweetByIdRequest {
    public FindTweetByIdPathParams pathParams;
    public FindTweetByIdRequest withPathParams(FindTweetByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FindTweetByIdQueryParams queryParams;
    public FindTweetByIdRequest withQueryParams(FindTweetByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}