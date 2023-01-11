package openapisdk.models.operations;



public class SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse {
    public String contentType;
    public SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RunMobileFriendlyTestResponse runMobileFriendlyTestResponse;
    public SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse withRunMobileFriendlyTestResponse(openapisdk.models.shared.RunMobileFriendlyTestResponse runMobileFriendlyTestResponse) {
        this.runMobileFriendlyTestResponse = runMobileFriendlyTestResponse;
        return this;
    }
    public Long statusCode;
    public SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}