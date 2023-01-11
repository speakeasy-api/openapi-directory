package openapisdk.models.shared;


public enum ChannelChannelTypeEnum {
    CHANNEL_TYPE_UNSPECIFIED("CHANNEL_TYPE_UNSPECIFIED"),
    STABLE("STABLE"),
    BETA("BETA"),
    DEV("DEV"),
    CANARY("CANARY"),
    CANARY_ASAN("CANARY_ASAN"),
    ALL("ALL"),
    EXTENDED("EXTENDED");

    public final String value;

    private ChannelChannelTypeEnum(String value) {
        this.value = value;
    }
}
