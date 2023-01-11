package openapisdk.models.shared;


public enum ManagementSettingsTransferLockStateEnum {
    TRANSFER_LOCK_STATE_UNSPECIFIED("TRANSFER_LOCK_STATE_UNSPECIFIED"),
    UNLOCKED("UNLOCKED"),
    LOCKED("LOCKED");

    public final String value;

    private ManagementSettingsTransferLockStateEnum(String value) {
        this.value = value;
    }
}
