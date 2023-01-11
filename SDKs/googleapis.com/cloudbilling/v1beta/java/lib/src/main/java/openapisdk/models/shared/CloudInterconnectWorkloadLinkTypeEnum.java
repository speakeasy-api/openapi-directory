package openapisdk.models.shared;


public enum CloudInterconnectWorkloadLinkTypeEnum {
    LINK_TYPE_UNSPECIFIED("LINK_TYPE_UNSPECIFIED"),
    LINK_TYPE_ETHERNET10_G_LR("LINK_TYPE_ETHERNET_10G_LR"),
    LINK_TYPE_ETHERNET100_G_LR("LINK_TYPE_ETHERNET_100G_LR");

    public final String value;

    private CloudInterconnectWorkloadLinkTypeEnum(String value) {
        this.value = value;
    }
}
