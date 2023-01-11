package openapisdk.models.operations;



public class FetchCompositionSettingsResponse {
    public String contentType;
    public FetchCompositionSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCompositionSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1CompositionSettings videoV1CompositionSettings;
    public FetchCompositionSettingsResponse withVideoV1CompositionSettings(openapisdk.models.shared.VideoV1CompositionSettings videoV1CompositionSettings) {
        this.videoV1CompositionSettings = videoV1CompositionSettings;
        return this;
    }
}