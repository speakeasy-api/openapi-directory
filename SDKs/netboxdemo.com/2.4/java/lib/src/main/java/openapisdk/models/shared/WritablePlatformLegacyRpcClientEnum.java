package openapisdk.models.shared;


public enum WritablePlatformLegacyRpcClientEnum {
    JUNIPER_JUNOS("juniper-junos"),
    CISCO_IOS("cisco-ios"),
    OPENGEAR("opengear");

    public final String value;

    private WritablePlatformLegacyRpcClientEnum(String value) {
        this.value = value;
    }
}
