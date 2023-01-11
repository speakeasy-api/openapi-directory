package openapisdk.models.shared;


public enum DeviceClaimSectionTypeEnum {
    SECTION_TYPE_UNSPECIFIED("SECTION_TYPE_UNSPECIFIED"),
    SECTION_TYPE_SIM_LOCK("SECTION_TYPE_SIM_LOCK"),
    SECTION_TYPE_ZERO_TOUCH("SECTION_TYPE_ZERO_TOUCH");

    public final String value;

    private DeviceClaimSectionTypeEnum(String value) {
        this.value = value;
    }
}
