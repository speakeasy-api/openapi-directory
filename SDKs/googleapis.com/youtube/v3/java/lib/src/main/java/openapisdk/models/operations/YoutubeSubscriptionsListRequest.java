package openapisdk.models.operations;



public class YoutubeSubscriptionsListRequest {
    public YoutubeSubscriptionsListQueryParams queryParams;
    public YoutubeSubscriptionsListRequest withQueryParams(YoutubeSubscriptionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeSubscriptionsListSecurity security;
    public YoutubeSubscriptionsListRequest withSecurity(YoutubeSubscriptionsListSecurity security) {
        this.security = security;
        return this;
    }
}