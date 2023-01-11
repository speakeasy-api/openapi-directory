package openapisdk.models.operations;



public class EditEmbedPresetAlt1Response {
    public String contentType;
    public EditEmbedPresetAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditEmbedPresetAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public EditEmbedPresetAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Presets presets;
    public EditEmbedPresetAlt1Response withPresets(openapisdk.models.shared.Presets presets) {
        this.presets = presets;
        return this;
    }
}