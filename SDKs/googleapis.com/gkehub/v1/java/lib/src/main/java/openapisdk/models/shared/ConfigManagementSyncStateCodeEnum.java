package openapisdk.models.shared;


public enum ConfigManagementSyncStateCodeEnum {
    SYNC_CODE_UNSPECIFIED("SYNC_CODE_UNSPECIFIED"),
    SYNCED("SYNCED"),
    PENDING("PENDING"),
    ERROR("ERROR"),
    NOT_CONFIGURED("NOT_CONFIGURED"),
    NOT_INSTALLED("NOT_INSTALLED"),
    UNAUTHORIZED("UNAUTHORIZED"),
    UNREACHABLE("UNREACHABLE");

    public final String value;

    private ConfigManagementSyncStateCodeEnum(String value) {
        this.value = value;
    }
}
