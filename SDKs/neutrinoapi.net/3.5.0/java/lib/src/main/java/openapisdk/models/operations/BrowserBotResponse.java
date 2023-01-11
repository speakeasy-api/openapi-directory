package openapisdk.models.operations;



public class BrowserBotResponse {
    public openapisdk.models.shared.ApiError apiError;
    public BrowserBotResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BrowserBotResponse browserBotResponse;
    public BrowserBotResponse withBrowserBotResponse(openapisdk.models.shared.BrowserBotResponse browserBotResponse) {
        this.browserBotResponse = browserBotResponse;
        return this;
    }
    public String contentType;
    public BrowserBotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BrowserBotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}