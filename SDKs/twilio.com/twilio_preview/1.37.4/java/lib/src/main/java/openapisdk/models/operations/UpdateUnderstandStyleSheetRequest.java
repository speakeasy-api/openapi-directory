package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandStyleSheetRequest {
    public String serverURL;
    public UpdateUnderstandStyleSheetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandStyleSheetPathParams pathParams;
    public UpdateUnderstandStyleSheetRequest withPathParams(UpdateUnderstandStyleSheetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest request;
    public UpdateUnderstandStyleSheetRequest withRequest(UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandStyleSheetSecurity security;
    public UpdateUnderstandStyleSheetRequest withSecurity(UpdateUnderstandStyleSheetSecurity security) {
        this.security = security;
        return this;
    }
}