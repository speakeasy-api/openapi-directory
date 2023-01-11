package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudRecaptchaenterpriseV1Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedAction")
    public String expectedAction;
    public GoogleCloudRecaptchaenterpriseV1Event withExpectedAction(String expectedAction) {
        this.expectedAction = expectedAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedAccountId")
    public String hashedAccountId;
    public GoogleCloudRecaptchaenterpriseV1Event withHashedAccountId(String hashedAccountId) {
        this.hashedAccountId = hashedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteKey")
    public String siteKey;
    public GoogleCloudRecaptchaenterpriseV1Event withSiteKey(String siteKey) {
        this.siteKey = siteKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public GoogleCloudRecaptchaenterpriseV1Event withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public GoogleCloudRecaptchaenterpriseV1Event withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userIpAddress")
    public String userIpAddress;
    public GoogleCloudRecaptchaenterpriseV1Event withUserIpAddress(String userIpAddress) {
        this.userIpAddress = userIpAddress;
        return this;
    }
}