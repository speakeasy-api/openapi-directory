package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCreditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=credit_id")
    public Double creditId;
    public GetVideoCreditPathParams withCreditId(Double creditId) {
        this.creditId = creditId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoCreditPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}