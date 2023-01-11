package openapisdk.models.shared;


public enum ServiceProtocolValueEnum {
    TCP("tcp"),
    UDP("udp");

    public final String value;

    private ServiceProtocolValueEnum(String value) {
        this.value = value;
    }
}
