package openapisdk.models.operations;



public class YoutubeCommentsMarkAsSpamRequest {
    public YoutubeCommentsMarkAsSpamQueryParams queryParams;
    public YoutubeCommentsMarkAsSpamRequest withQueryParams(YoutubeCommentsMarkAsSpamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeCommentsMarkAsSpamSecurity security;
    public YoutubeCommentsMarkAsSpamRequest withSecurity(YoutubeCommentsMarkAsSpamSecurity security) {
        this.security = security;
        return this;
    }
}