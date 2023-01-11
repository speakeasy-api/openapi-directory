package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest {
    public SearchconsoleUrlTestingToolsMobileFriendlyTestRunQueryParams queryParams;
    public SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest withQueryParams(SearchconsoleUrlTestingToolsMobileFriendlyTestRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunMobileFriendlyTestRequest request;
    public SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest withRequest(openapisdk.models.shared.RunMobileFriendlyTestRequest request) {
        this.request = request;
        return this;
    }
}