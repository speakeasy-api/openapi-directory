package openapisdk.models.shared;


public enum AndroidAttributesOwnershipPrivilegeEnum {
    OWNERSHIP_PRIVILEGE_UNSPECIFIED("OWNERSHIP_PRIVILEGE_UNSPECIFIED"),
    DEVICE_ADMINISTRATOR("DEVICE_ADMINISTRATOR"),
    PROFILE_OWNER("PROFILE_OWNER"),
    DEVICE_OWNER("DEVICE_OWNER");

    public final String value;

    private AndroidAttributesOwnershipPrivilegeEnum(String value) {
        this.value = value;
    }
}
