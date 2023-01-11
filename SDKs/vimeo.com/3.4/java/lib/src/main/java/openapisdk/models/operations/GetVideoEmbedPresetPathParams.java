package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoEmbedPresetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preset_id")
    public Double presetId;
    public GetVideoEmbedPresetPathParams withPresetId(Double presetId) {
        this.presetId = presetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoEmbedPresetPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}