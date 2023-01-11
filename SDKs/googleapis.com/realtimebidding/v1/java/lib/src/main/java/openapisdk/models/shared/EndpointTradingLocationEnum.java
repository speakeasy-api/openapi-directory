package openapisdk.models.shared;


public enum EndpointTradingLocationEnum {
    TRADING_LOCATION_UNSPECIFIED("TRADING_LOCATION_UNSPECIFIED"),
    US_WEST("US_WEST"),
    US_EAST("US_EAST"),
    EUROPE("EUROPE"),
    ASIA("ASIA");

    public final String value;

    private EndpointTradingLocationEnum(String value) {
        this.value = value;
    }
}
