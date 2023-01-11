package openapisdk.models.operations;



public class GetEmbedPresetsAlt1Response {
    public String contentType;
    public GetEmbedPresetsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEmbedPresetsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Presets[] presets;
    public GetEmbedPresetsAlt1Response withPresets(openapisdk.models.shared.Presets[] presets) {
        this.presets = presets;
        return this;
    }
}