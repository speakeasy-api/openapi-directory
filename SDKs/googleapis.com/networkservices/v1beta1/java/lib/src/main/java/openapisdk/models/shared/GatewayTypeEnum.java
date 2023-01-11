package openapisdk.models.shared;


public enum GatewayTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    OPEN_MESH("OPEN_MESH"),
    SECURE_WEB_GATEWAY("SECURE_WEB_GATEWAY");

    public final String value;

    private GatewayTypeEnum(String value) {
        this.value = value;
    }
}
