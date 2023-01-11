package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditEmbedPresetAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preset_id")
    public Double presetId;
    public EditEmbedPresetAlt1PathParams withPresetId(Double presetId) {
        this.presetId = presetId;
        return this;
    }
}