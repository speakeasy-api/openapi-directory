package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterSenderRequest {
    public String serverURL;
    public RegisterSenderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public RegisterSenderQueryParams queryParams;
    public RegisterSenderRequest withQueryParams(RegisterSenderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterEmailRequest request;
    public RegisterSenderRequest withRequest(openapisdk.models.shared.RegisterEmailRequest request) {
        this.request = request;
        return this;
    }
}