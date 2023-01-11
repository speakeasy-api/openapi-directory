package openapisdk.models.operations;



public class SuggestTagsAndRegionsResponse {
    public byte[] body;
    public SuggestTagsAndRegionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SuggestTagsAndRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public SuggestTagsAndRegionsResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Long statusCode;
    public SuggestTagsAndRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuggestedTagAndRegion[] suggestedTagAndRegions;
    public SuggestTagsAndRegionsResponse withSuggestedTagAndRegions(openapisdk.models.shared.SuggestedTagAndRegion[] suggestedTagAndRegions) {
        this.suggestedTagAndRegions = suggestedTagAndRegions;
        return this;
    }
}