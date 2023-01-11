package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommentsIdDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PostCommentsIdDeleteQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostCommentsIdDeleteQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preview")
    public Boolean preview;
    public PostCommentsIdDeleteQueryParams withPreview(Boolean preview) {
        this.preview = preview;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public PostCommentsIdDeleteQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}