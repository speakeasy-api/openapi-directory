package openapisdk.models.shared;


public enum SocketAddressProtocolEnum {
    TCP("TCP"),
    UDP("UDP");

    public final String value;

    private SocketAddressProtocolEnum(String value) {
        this.value = value;
    }
}
