package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckRequest {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public CheckRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=api_secret")
    public String apiSecret;
    public CheckRequest withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=code")
    public String code;
    public CheckRequest withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("form:name=ip_address")
    public String ipAddress;
    public CheckRequest withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=request_id")
    public String requestId;
    public CheckRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}