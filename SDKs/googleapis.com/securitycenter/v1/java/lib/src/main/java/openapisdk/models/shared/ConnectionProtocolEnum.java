package openapisdk.models.shared;


public enum ConnectionProtocolEnum {
    PROTOCOL_UNSPECIFIED("PROTOCOL_UNSPECIFIED"),
    ICMP("ICMP"),
    TCP("TCP"),
    UDP("UDP"),
    GRE("GRE"),
    ESP("ESP");

    public final String value;

    private ConnectionProtocolEnum(String value) {
        this.value = value;
    }
}
