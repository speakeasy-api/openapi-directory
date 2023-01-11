package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAutomationV4ActionsAppIdCreateRequest {
    public PostAutomationV4ActionsAppIdCreatePathParams pathParams;
    public PostAutomationV4ActionsAppIdCreateRequest withPathParams(PostAutomationV4ActionsAppIdCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExtensionActionDefinitionInput request;
    public PostAutomationV4ActionsAppIdCreateRequest withRequest(openapisdk.models.shared.ExtensionActionDefinitionInput request) {
        this.request = request;
        return this;
    }
    public PostAutomationV4ActionsAppIdCreateSecurity security;
    public PostAutomationV4ActionsAppIdCreateRequest withSecurity(PostAutomationV4ActionsAppIdCreateSecurity security) {
        this.security = security;
        return this;
    }
}