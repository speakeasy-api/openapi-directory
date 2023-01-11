package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCustomLogoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thumbnail_id")
    public Double thumbnailId;
    public GetVideoCustomLogoPathParams withThumbnailId(Double thumbnailId) {
        this.thumbnailId = thumbnailId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoCustomLogoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}