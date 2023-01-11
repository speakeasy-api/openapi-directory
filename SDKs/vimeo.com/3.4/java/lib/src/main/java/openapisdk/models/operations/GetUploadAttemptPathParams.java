package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUploadAttemptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=upload")
    public Double upload;
    public GetUploadAttemptPathParams withUpload(Double upload) {
        this.upload = upload;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetUploadAttemptPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}