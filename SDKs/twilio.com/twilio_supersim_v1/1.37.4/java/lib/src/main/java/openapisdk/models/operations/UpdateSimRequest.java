package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSimRequest {
    public String serverURL;
    public UpdateSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSimPathParams pathParams;
    public UpdateSimRequest withPathParams(UpdateSimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSimUpdateSimRequest request;
    public UpdateSimRequest withRequest(UpdateSimUpdateSimRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSimSecurity security;
    public UpdateSimRequest withSecurity(UpdateSimSecurity security) {
        this.security = security;
        return this;
    }
}