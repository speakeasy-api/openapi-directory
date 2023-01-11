package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifySubaccountRequest {
    public ModifySubaccountPathParams pathParams;
    public ModifySubaccountRequest withPathParams(ModifySubaccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifySubaccountRequest request;
    public ModifySubaccountRequest withRequest(openapisdk.models.shared.ModifySubaccountRequest request) {
        this.request = request;
        return this;
    }
    public ModifySubaccountSecurity security;
    public ModifySubaccountRequest withSecurity(ModifySubaccountSecurity security) {
        this.security = security;
        return this;
    }
}