package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompleteStreamingUploadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public CompleteStreamingUploadQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=video_file_id")
    public Double videoFileId;
    public CompleteStreamingUploadQueryParams withVideoFileId(Double videoFileId) {
        this.videoFileId = videoFileId;
        return this;
    }
}