package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchInputCallbackCompletionBatchRequest request;
    public PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest withRequest(openapisdk.models.shared.BatchInputCallbackCompletionBatchRequest request) {
        this.request = request;
        return this;
    }
    public PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity security;
    public PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest withSecurity(PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity security) {
        this.security = security;
        return this;
    }
}