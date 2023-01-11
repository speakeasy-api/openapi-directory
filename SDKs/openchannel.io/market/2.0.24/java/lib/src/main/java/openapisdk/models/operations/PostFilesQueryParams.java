package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hash")
    public String hash;
    public PostFilesQueryParams withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isPrivate")
    public Boolean isPrivate;
    public PostFilesQueryParams withIsPrivate(Boolean isPrivate) {
        this.isPrivate = isPrivate;
        return this;
    }
}