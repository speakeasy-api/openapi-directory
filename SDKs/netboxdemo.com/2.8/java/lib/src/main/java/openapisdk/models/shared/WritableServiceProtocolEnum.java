package openapisdk.models.shared;


public enum WritableServiceProtocolEnum {
    TCP("tcp"),
    UDP("udp");

    public final String value;

    private WritableServiceProtocolEnum(String value) {
        this.value = value;
    }
}
