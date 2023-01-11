package openapisdk.models.shared;


public enum TrunkEnumTransferSettingEnum {
    DISABLE_ALL("disable-all"),
    ENABLE_ALL("enable-all"),
    SIP_ONLY("sip-only");

    public final String value;

    private TrunkEnumTransferSettingEnum(String value) {
        this.value = value;
    }
}
