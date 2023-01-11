package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditEmbedPresetRequest {
    public EditEmbedPresetPathParams pathParams;
    public EditEmbedPresetRequest withPathParams(EditEmbedPresetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.preset+json")
    public EditEmbedPresetRequestBody request;
    public EditEmbedPresetRequest withRequest(EditEmbedPresetRequestBody request) {
        this.request = request;
        return this;
    }
}