package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditEmbedPresetAlt1Request {
    public EditEmbedPresetAlt1PathParams pathParams;
    public EditEmbedPresetAlt1Request withPathParams(EditEmbedPresetAlt1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.preset+json")
    public EditEmbedPresetAlt1RequestBody request;
    public EditEmbedPresetAlt1Request withRequest(EditEmbedPresetAlt1RequestBody request) {
        this.request = request;
        return this;
    }
}