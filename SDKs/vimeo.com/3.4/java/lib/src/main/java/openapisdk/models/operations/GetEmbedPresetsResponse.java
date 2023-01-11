package openapisdk.models.operations;



public class GetEmbedPresetsResponse {
    public String contentType;
    public GetEmbedPresetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEmbedPresetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Presets[] presets;
    public GetEmbedPresetsResponse withPresets(openapisdk.models.shared.Presets[] presets) {
        this.presets = presets;
        return this;
    }
}