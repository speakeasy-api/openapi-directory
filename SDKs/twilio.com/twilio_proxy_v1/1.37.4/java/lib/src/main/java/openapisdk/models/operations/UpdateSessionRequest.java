package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSessionRequest {
    public String serverURL;
    public UpdateSessionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSessionPathParams pathParams;
    public UpdateSessionRequest withPathParams(UpdateSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSessionUpdateSessionRequest request;
    public UpdateSessionRequest withRequest(UpdateSessionUpdateSessionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSessionSecurity security;
    public UpdateSessionRequest withSecurity(UpdateSessionSecurity security) {
        this.security = security;
        return this;
    }
}