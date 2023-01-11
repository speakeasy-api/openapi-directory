package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfUserOwnsVideoAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public CheckIfUserOwnsVideoAlt1PathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}