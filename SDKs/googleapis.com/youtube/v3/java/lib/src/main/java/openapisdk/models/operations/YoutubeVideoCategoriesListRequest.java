package openapisdk.models.operations;



public class YoutubeVideoCategoriesListRequest {
    public YoutubeVideoCategoriesListQueryParams queryParams;
    public YoutubeVideoCategoriesListRequest withQueryParams(YoutubeVideoCategoriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeVideoCategoriesListSecurity security;
    public YoutubeVideoCategoriesListRequest withSecurity(YoutubeVideoCategoriesListSecurity security) {
        this.security = security;
        return this;
    }
}