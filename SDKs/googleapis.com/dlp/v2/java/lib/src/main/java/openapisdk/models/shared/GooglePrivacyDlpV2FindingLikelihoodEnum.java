package openapisdk.models.shared;


public enum GooglePrivacyDlpV2FindingLikelihoodEnum {
    LIKELIHOOD_UNSPECIFIED("LIKELIHOOD_UNSPECIFIED"),
    VERY_UNLIKELY("VERY_UNLIKELY"),
    UNLIKELY("UNLIKELY"),
    POSSIBLE("POSSIBLE"),
    LIKELY("LIKELY"),
    VERY_LIKELY("VERY_LIKELY");

    public final String value;

    private GooglePrivacyDlpV2FindingLikelihoodEnum(String value) {
        this.value = value;
    }
}
