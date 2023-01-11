package openapisdk.models.shared;


public enum ScanConfigUserAgentEnum {
    USER_AGENT_UNSPECIFIED("USER_AGENT_UNSPECIFIED"),
    CHROME_LINUX("CHROME_LINUX"),
    CHROME_ANDROID("CHROME_ANDROID"),
    SAFARI_IPHONE("SAFARI_IPHONE");

    public final String value;

    private ScanConfigUserAgentEnum(String value) {
        this.value = value;
    }
}
