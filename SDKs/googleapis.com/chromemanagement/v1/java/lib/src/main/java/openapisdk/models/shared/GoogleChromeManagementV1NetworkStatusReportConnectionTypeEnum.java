package openapisdk.models.shared;


public enum GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum {
    NETWORK_TYPE_UNSPECIFIED("NETWORK_TYPE_UNSPECIFIED"),
    CELLULAR("CELLULAR"),
    ETHERNET("ETHERNET"),
    TETHER("TETHER"),
    VPN("VPN"),
    WIFI("WIFI");

    public final String value;

    private GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum(String value) {
        this.value = value;
    }
}
