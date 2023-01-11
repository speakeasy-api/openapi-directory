package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1Key
 * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
**/
public class GoogleCloudRecaptchaenterpriseV1Key {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidSettings")
    public GoogleCloudRecaptchaenterpriseV1AndroidKeySettings androidSettings;
    public GoogleCloudRecaptchaenterpriseV1Key withAndroidSettings(GoogleCloudRecaptchaenterpriseV1AndroidKeySettings androidSettings) {
        this.androidSettings = androidSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRecaptchaenterpriseV1Key withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudRecaptchaenterpriseV1Key withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosSettings")
    public GoogleCloudRecaptchaenterpriseV1IosKeySettings iosSettings;
    public GoogleCloudRecaptchaenterpriseV1Key withIosSettings(GoogleCloudRecaptchaenterpriseV1IosKeySettings iosSettings) {
        this.iosSettings = iosSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRecaptchaenterpriseV1Key withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecaptchaenterpriseV1Key withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testingOptions")
    public GoogleCloudRecaptchaenterpriseV1TestingOptions testingOptions;
    public GoogleCloudRecaptchaenterpriseV1Key withTestingOptions(GoogleCloudRecaptchaenterpriseV1TestingOptions testingOptions) {
        this.testingOptions = testingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wafSettings")
    public GoogleCloudRecaptchaenterpriseV1WafSettings wafSettings;
    public GoogleCloudRecaptchaenterpriseV1Key withWafSettings(GoogleCloudRecaptchaenterpriseV1WafSettings wafSettings) {
        this.wafSettings = wafSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webSettings")
    public GoogleCloudRecaptchaenterpriseV1WebKeySettings webSettings;
    public GoogleCloudRecaptchaenterpriseV1Key withWebSettings(GoogleCloudRecaptchaenterpriseV1WebKeySettings webSettings) {
        this.webSettings = webSettings;
        return this;
    }
}