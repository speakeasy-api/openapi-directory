package openapisdk.models.shared;


public enum GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum {
    LIKELIHOOD_UNSPECIFIED("LIKELIHOOD_UNSPECIFIED"),
    VERY_UNLIKELY("VERY_UNLIKELY"),
    UNLIKELY("UNLIKELY"),
    POSSIBLE("POSSIBLE"),
    LIKELY("LIKELY"),
    VERY_LIKELY("VERY_LIKELY");

    public final String value;

    private GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum(String value) {
        this.value = value;
    }
}
