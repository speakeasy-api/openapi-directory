package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsCustomInsertQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public Object[] ids;
    public PostReportsCustomInsertQueryParams withIds(Object[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_hash")
    public String uploadHash;
    public PostReportsCustomInsertQueryParams withUploadHash(String uploadHash) {
        this.uploadHash = uploadHash;
        return this;
    }
}