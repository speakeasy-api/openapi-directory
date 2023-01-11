package openapisdk.models.shared;


public enum VerifyChallengeResponseResultKeyTrustLevelEnum {
    KEY_TRUST_LEVEL_UNSPECIFIED("KEY_TRUST_LEVEL_UNSPECIFIED"),
    CHROME_OS_VERIFIED_MODE("CHROME_OS_VERIFIED_MODE"),
    CHROME_OS_DEVELOPER_MODE("CHROME_OS_DEVELOPER_MODE"),
    CHROME_BROWSER_HW_KEY("CHROME_BROWSER_HW_KEY"),
    CHROME_BROWSER_OS_KEY("CHROME_BROWSER_OS_KEY");

    public final String value;

    private VerifyChallengeResponseResultKeyTrustLevelEnum(String value) {
        this.value = value;
    }
}
