package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isPrivate")
    public Boolean isPrivate;
    public PostFilesUrlQueryParams withIsPrivate(Boolean isPrivate) {
        this.isPrivate = isPrivate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public PostFilesUrlQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}