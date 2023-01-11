package openapisdk.models.operations;



public class GetEmbedPresetResponse {
    public String contentType;
    public GetEmbedPresetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEmbedPresetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Presets presets;
    public GetEmbedPresetResponse withPresets(openapisdk.models.shared.Presets presets) {
        this.presets = presets;
        return this;
    }
}