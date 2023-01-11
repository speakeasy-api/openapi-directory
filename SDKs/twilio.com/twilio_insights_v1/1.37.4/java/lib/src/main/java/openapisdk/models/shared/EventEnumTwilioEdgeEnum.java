package openapisdk.models.shared;


public enum EventEnumTwilioEdgeEnum {
    UNKNOWN_EDGE("unknown_edge"),
    CARRIER_EDGE("carrier_edge"),
    SIP_EDGE("sip_edge"),
    SDK_EDGE("sdk_edge"),
    CLIENT_EDGE("client_edge");

    public final String value;

    private EventEnumTwilioEdgeEnum(String value) {
        this.value = value;
    }
}
