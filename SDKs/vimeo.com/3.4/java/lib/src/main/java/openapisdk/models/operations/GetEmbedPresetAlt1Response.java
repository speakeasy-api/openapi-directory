package openapisdk.models.operations;



public class GetEmbedPresetAlt1Response {
    public String contentType;
    public GetEmbedPresetAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEmbedPresetAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Presets presets;
    public GetEmbedPresetAlt1Response withPresets(openapisdk.models.shared.Presets presets) {
        this.presets = presets;
        return this;
    }
}