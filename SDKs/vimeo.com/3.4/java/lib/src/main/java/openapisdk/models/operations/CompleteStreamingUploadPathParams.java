package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompleteStreamingUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=upload")
    public Double upload;
    public CompleteStreamingUploadPathParams withUpload(Double upload) {
        this.upload = upload;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public CompleteStreamingUploadPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}