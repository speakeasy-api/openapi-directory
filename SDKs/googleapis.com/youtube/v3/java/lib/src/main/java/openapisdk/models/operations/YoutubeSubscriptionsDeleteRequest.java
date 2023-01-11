package openapisdk.models.operations;



public class YoutubeSubscriptionsDeleteRequest {
    public YoutubeSubscriptionsDeleteQueryParams queryParams;
    public YoutubeSubscriptionsDeleteRequest withQueryParams(YoutubeSubscriptionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeSubscriptionsDeleteSecurity security;
    public YoutubeSubscriptionsDeleteRequest withSecurity(YoutubeSubscriptionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}