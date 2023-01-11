package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoThumbnailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=picture_id")
    public Double pictureId;
    public GetVideoThumbnailPathParams withPictureId(Double pictureId) {
        this.pictureId = pictureId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoThumbnailPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}