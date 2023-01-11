package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoPrivacyUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoPrivacyUsersPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}