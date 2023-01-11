package openapisdk.models.shared;


public enum PlatformLegacyRpcClientEnum {
    JUNIPER_JUNOS("juniper-junos"),
    CISCO_IOS("cisco-ios"),
    OPENGEAR("opengear");

    public final String value;

    private PlatformLegacyRpcClientEnum(String value) {
        this.value = value;
    }
}
