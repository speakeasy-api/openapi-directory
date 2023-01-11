package openapisdk.models.shared;


public enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum {
    WAF_FEATURE_UNSPECIFIED("WAF_FEATURE_UNSPECIFIED"),
    CHALLENGE_PAGE("CHALLENGE_PAGE"),
    SESSION_TOKEN("SESSION_TOKEN"),
    ACTION_TOKEN("ACTION_TOKEN");

    public final String value;

    private GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum(String value) {
        this.value = value;
    }
}
