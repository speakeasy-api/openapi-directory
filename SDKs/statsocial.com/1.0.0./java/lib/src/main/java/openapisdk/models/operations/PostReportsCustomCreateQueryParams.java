package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsCustomCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public PostReportsCustomCreateQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_hash")
    public String uploadHash;
    public PostReportsCustomCreateQueryParams withUploadHash(String uploadHash) {
        this.uploadHash = uploadHash;
        return this;
    }
}