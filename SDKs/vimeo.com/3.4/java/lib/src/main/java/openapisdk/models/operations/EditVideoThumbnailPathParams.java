package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditVideoThumbnailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=picture_id")
    public Double pictureId;
    public EditVideoThumbnailPathParams withPictureId(Double pictureId) {
        this.pictureId = pictureId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public EditVideoThumbnailPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}