package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPostsIdCommentsAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body")
    public String body;
    public PostPostsIdCommentsAddQueryParams withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PostPostsIdCommentsAddQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostPostsIdCommentsAddQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preview")
    public Boolean preview;
    public PostPostsIdCommentsAddQueryParams withPreview(Boolean preview) {
        this.preview = preview;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public PostPostsIdCommentsAddQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}