package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class ControlRequest {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public ControlRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=api_secret")
    public String apiSecret;
    public ControlRequest withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=cmd")
    public ControlRequestCmdEnum cmd;
    public ControlRequest withCmd(ControlRequestCmdEnum cmd) {
        this.cmd = cmd;
        return this;
    }
    @SpeakeasyMetadata("form:name=request_id")
    public String requestId;
    public ControlRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}