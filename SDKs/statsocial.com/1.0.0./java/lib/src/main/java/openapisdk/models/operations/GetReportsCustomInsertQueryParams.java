package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsCustomInsertQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public Object[] ids;
    public GetReportsCustomInsertQueryParams withIds(Object[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_hash")
    public String uploadHash;
    public GetReportsCustomInsertQueryParams withUploadHash(String uploadHash) {
        this.uploadHash = uploadHash;
        return this;
    }
}