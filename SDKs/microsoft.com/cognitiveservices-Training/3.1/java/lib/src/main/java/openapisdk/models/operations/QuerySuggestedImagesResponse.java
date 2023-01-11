package openapisdk.models.operations;



public class QuerySuggestedImagesResponse {
    public byte[] body;
    public QuerySuggestedImagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public QuerySuggestedImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public QuerySuggestedImagesResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Long statusCode;
    public QuerySuggestedImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuggestedTagAndRegionQuery suggestedTagAndRegionQuery;
    public QuerySuggestedImagesResponse withSuggestedTagAndRegionQuery(openapisdk.models.shared.SuggestedTagAndRegionQuery suggestedTagAndRegionQuery) {
        this.suggestedTagAndRegionQuery = suggestedTagAndRegionQuery;
        return this;
    }
}