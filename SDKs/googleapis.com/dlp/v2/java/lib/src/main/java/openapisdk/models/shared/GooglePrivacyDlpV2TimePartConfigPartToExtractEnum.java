package openapisdk.models.shared;


public enum GooglePrivacyDlpV2TimePartConfigPartToExtractEnum {
    TIME_PART_UNSPECIFIED("TIME_PART_UNSPECIFIED"),
    YEAR("YEAR"),
    MONTH("MONTH"),
    DAY_OF_MONTH("DAY_OF_MONTH"),
    DAY_OF_WEEK("DAY_OF_WEEK"),
    WEEK_OF_YEAR("WEEK_OF_YEAR"),
    HOUR_OF_DAY("HOUR_OF_DAY");

    public final String value;

    private GooglePrivacyDlpV2TimePartConfigPartToExtractEnum(String value) {
        this.value = value;
    }
}
