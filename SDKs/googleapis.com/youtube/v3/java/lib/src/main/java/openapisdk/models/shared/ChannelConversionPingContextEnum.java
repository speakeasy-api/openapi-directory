package openapisdk.models.shared;


public enum ChannelConversionPingContextEnum {
    SUBSCRIBE("subscribe"),
    UNSUBSCRIBE("unsubscribe"),
    CVIEW("cview");

    public final String value;

    private ChannelConversionPingContextEnum(String value) {
        this.value = value;
    }
}
