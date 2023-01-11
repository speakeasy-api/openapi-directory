package openapisdk.models.operations;



public class EditEmbedPresetResponse {
    public String contentType;
    public EditEmbedPresetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditEmbedPresetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public EditEmbedPresetResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Presets presets;
    public EditEmbedPresetResponse withPresets(openapisdk.models.shared.Presets presets) {
        this.presets = presets;
        return this;
    }
}