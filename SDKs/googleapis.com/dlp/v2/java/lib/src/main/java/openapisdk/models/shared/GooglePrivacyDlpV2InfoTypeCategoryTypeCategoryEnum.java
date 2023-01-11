package openapisdk.models.shared;


public enum GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    PII("PII"),
    SPII("SPII"),
    DEMOGRAPHIC("DEMOGRAPHIC"),
    CREDENTIAL("CREDENTIAL"),
    GOVERNMENT_ID("GOVERNMENT_ID"),
    DOCUMENT("DOCUMENT"),
    CONTEXTUAL_INFORMATION("CONTEXTUAL_INFORMATION");

    public final String value;

    private GooglePrivacyDlpV2InfoTypeCategoryTypeCategoryEnum(String value) {
        this.value = value;
    }
}
