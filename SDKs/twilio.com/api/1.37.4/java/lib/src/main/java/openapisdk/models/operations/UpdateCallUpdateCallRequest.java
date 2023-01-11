package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallUpdateCallRequest {
    @SpeakeasyMetadata("form:name=FallbackMethod")
    public UpdateCallUpdateCallRequestFallbackMethodEnum fallbackMethod;
    public UpdateCallUpdateCallRequest withFallbackMethod(UpdateCallUpdateCallRequestFallbackMethodEnum fallbackMethod) {
        this.fallbackMethod = fallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackUrl")
    public String fallbackUrl;
    public UpdateCallUpdateCallRequest withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Method")
    public UpdateCallUpdateCallRequestMethodEnum method;
    public UpdateCallUpdateCallRequest withMethod(UpdateCallUpdateCallRequestMethodEnum method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.CallEnumUpdateStatusEnum status;
    public UpdateCallUpdateCallRequest withStatus(openapisdk.models.shared.CallEnumUpdateStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateCallUpdateCallRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public UpdateCallUpdateCallRequestStatusCallbackMethodEnum statusCallbackMethod;
    public UpdateCallUpdateCallRequest withStatusCallbackMethod(UpdateCallUpdateCallRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TimeLimit")
    public Long timeLimit;
    public UpdateCallUpdateCallRequest withTimeLimit(Long timeLimit) {
        this.timeLimit = timeLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=Twiml")
    public String twiml;
    public UpdateCallUpdateCallRequest withTwiml(String twiml) {
        this.twiml = twiml;
        return this;
    }
    @SpeakeasyMetadata("form:name=Url")
    public String url;
    public UpdateCallUpdateCallRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}