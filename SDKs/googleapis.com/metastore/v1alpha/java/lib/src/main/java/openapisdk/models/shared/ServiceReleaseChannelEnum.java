package openapisdk.models.shared;


public enum ServiceReleaseChannelEnum {
    RELEASE_CHANNEL_UNSPECIFIED("RELEASE_CHANNEL_UNSPECIFIED"),
    CANARY("CANARY"),
    STABLE("STABLE");

    public final String value;

    private ServiceReleaseChannelEnum(String value) {
        this.value = value;
    }
}
