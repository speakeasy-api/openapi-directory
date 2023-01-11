package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest {
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams pathParams;
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest withPathParams(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CallbackCompletionRequest request;
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest withRequest(openapisdk.models.shared.CallbackCompletionRequest request) {
        this.request = request;
        return this;
    }
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity security;
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest withSecurity(PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity security) {
        this.security = security;
        return this;
    }
}