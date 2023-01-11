package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShortCodeUpdateShortCodeRequest {
    @SpeakeasyMetadata("form:name=ApiVersion")
    public String apiVersion;
    public UpdateShortCodeUpdateShortCodeRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateShortCodeUpdateShortCodeRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackMethod")
    public UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum smsFallbackMethod;
    public UpdateShortCodeUpdateShortCodeRequest withSmsFallbackMethod(UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum smsFallbackMethod) {
        this.smsFallbackMethod = smsFallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsFallbackUrl")
    public String smsFallbackUrl;
    public UpdateShortCodeUpdateShortCodeRequest withSmsFallbackUrl(String smsFallbackUrl) {
        this.smsFallbackUrl = smsFallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsMethod")
    public UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum smsMethod;
    public UpdateShortCodeUpdateShortCodeRequest withSmsMethod(UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum smsMethod) {
        this.smsMethod = smsMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmsUrl")
    public String smsUrl;
    public UpdateShortCodeUpdateShortCodeRequest withSmsUrl(String smsUrl) {
        this.smsUrl = smsUrl;
        return this;
    }
}