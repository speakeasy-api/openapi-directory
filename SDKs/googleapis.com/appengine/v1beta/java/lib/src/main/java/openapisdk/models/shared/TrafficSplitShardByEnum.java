package openapisdk.models.shared;


public enum TrafficSplitShardByEnum {
    UNSPECIFIED("UNSPECIFIED"),
    COOKIE("COOKIE"),
    IP("IP"),
    RANDOM("RANDOM");

    public final String value;

    private TrafficSplitShardByEnum(String value) {
        this.value = value;
    }
}
