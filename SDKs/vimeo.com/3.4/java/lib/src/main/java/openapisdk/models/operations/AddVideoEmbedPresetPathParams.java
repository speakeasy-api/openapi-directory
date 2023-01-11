package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoEmbedPresetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preset_id")
    public Double presetId;
    public AddVideoEmbedPresetPathParams withPresetId(Double presetId) {
        this.presetId = presetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public AddVideoEmbedPresetPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}