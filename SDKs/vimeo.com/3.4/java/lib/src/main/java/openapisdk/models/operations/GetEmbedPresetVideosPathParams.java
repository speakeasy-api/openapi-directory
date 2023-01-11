package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmbedPresetVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preset_id")
    public Double presetId;
    public GetEmbedPresetVideosPathParams withPresetId(Double presetId) {
        this.presetId = presetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public GetEmbedPresetVideosPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}