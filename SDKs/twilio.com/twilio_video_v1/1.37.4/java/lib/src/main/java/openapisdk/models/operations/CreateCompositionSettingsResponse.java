package openapisdk.models.operations;



public class CreateCompositionSettingsResponse {
    public String contentType;
    public CreateCompositionSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCompositionSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1CompositionSettings videoV1CompositionSettings;
    public CreateCompositionSettingsResponse withVideoV1CompositionSettings(openapisdk.models.shared.VideoV1CompositionSettings videoV1CompositionSettings) {
        this.videoV1CompositionSettings = videoV1CompositionSettings;
        return this;
    }
}