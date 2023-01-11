package openapisdk.models.shared;


public enum GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum {
    ACCOUNT_DEFENDER_LABEL_UNSPECIFIED("ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"),
    PROFILE_MATCH("PROFILE_MATCH"),
    SUSPICIOUS_LOGIN_ACTIVITY("SUSPICIOUS_LOGIN_ACTIVITY"),
    SUSPICIOUS_ACCOUNT_CREATION("SUSPICIOUS_ACCOUNT_CREATION"),
    RELATED_ACCOUNTS_NUMBER_HIGH("RELATED_ACCOUNTS_NUMBER_HIGH");

    public final String value;

    private GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum(String value) {
        this.value = value;
    }
}
