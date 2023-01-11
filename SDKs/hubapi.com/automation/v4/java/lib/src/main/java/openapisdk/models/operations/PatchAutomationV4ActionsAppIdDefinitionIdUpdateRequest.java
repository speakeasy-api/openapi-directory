package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest {
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams pathParams;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest withPathParams(PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExtensionActionDefinitionPatch request;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest withRequest(openapisdk.models.shared.ExtensionActionDefinitionPatch request) {
        this.request = request;
        return this;
    }
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity security;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest withSecurity(PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity security) {
        this.security = security;
        return this;
    }
}