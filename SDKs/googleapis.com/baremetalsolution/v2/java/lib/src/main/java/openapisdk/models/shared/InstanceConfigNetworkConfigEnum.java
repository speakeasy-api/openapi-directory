package openapisdk.models.shared;


public enum InstanceConfigNetworkConfigEnum {
    NETWORKCONFIG_UNSPECIFIED("NETWORKCONFIG_UNSPECIFIED"),
    SINGLE_VLAN("SINGLE_VLAN"),
    MULTI_VLAN("MULTI_VLAN");

    public final String value;

    private InstanceConfigNetworkConfigEnum(String value) {
        this.value = value;
    }
}
