package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVideoCreditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=credit_id")
    public Double creditId;
    public EditVideoCreditPathParams withCreditId(Double creditId) {
        this.creditId = creditId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public EditVideoCreditPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}