package openapisdk.models.shared;


public enum GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum {
    MATCHING_TYPE_UNSPECIFIED("MATCHING_TYPE_UNSPECIFIED"),
    MATCHING_TYPE_FULL_MATCH("MATCHING_TYPE_FULL_MATCH"),
    MATCHING_TYPE_PARTIAL_MATCH("MATCHING_TYPE_PARTIAL_MATCH"),
    MATCHING_TYPE_INVERSE_MATCH("MATCHING_TYPE_INVERSE_MATCH");

    public final String value;

    private GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum(String value) {
        this.value = value;
    }
}
