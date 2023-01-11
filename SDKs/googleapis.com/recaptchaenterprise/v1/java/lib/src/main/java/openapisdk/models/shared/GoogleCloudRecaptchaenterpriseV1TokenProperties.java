package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudRecaptchaenterpriseV1TokenProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public GoogleCloudRecaptchaenterpriseV1TokenProperties withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidPackageName")
    public String androidPackageName;
    public GoogleCloudRecaptchaenterpriseV1TokenProperties withAndroidPackageName(String androidPackageName) {
        this.androidPackageName = androidPackageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRecaptchaenterpriseV1TokenProperties withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public GoogleCloudRecaptchaenterpriseV1TokenProperties withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidReason")
    public GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum invalidReason;
    public GoogleCloudRecaptchaenterpriseV1TokenProperties withInvalidReason(GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum invalidReason) {
        this.invalidReason = invalidReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosBundleId")
    public String iosBundleId;
    public GoogleCloudRecaptchaenterpriseV1TokenProperties withIosBundleId(String iosBundleId) {
        this.iosBundleId = iosBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid")
    public Boolean valid;
    public GoogleCloudRecaptchaenterpriseV1TokenProperties withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}