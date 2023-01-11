package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStyleSheetRequest {
    public String serverURL;
    public UpdateStyleSheetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateStyleSheetPathParams pathParams;
    public UpdateStyleSheetRequest withPathParams(UpdateStyleSheetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateStyleSheetUpdateStyleSheetRequest request;
    public UpdateStyleSheetRequest withRequest(UpdateStyleSheetUpdateStyleSheetRequest request) {
        this.request = request;
        return this;
    }
    public UpdateStyleSheetSecurity security;
    public UpdateStyleSheetRequest withSecurity(UpdateStyleSheetSecurity security) {
        this.security = security;
        return this;
    }
}