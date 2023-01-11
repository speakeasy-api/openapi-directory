package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommentsIdEditQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body")
    public String body;
    public PostCommentsIdEditQueryParams withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PostCommentsIdEditQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostCommentsIdEditQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preview")
    public Boolean preview;
    public PostCommentsIdEditQueryParams withPreview(Boolean preview) {
        this.preview = preview;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public PostCommentsIdEditQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}