package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoPrivacyUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoPrivacyUsersPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}