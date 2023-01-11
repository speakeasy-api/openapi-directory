package openapisdk.models.shared;


public enum DeviceEncryptionStateEnum {
    ENCRYPTION_STATE_UNSPECIFIED("ENCRYPTION_STATE_UNSPECIFIED"),
    UNSUPPORTED_BY_DEVICE("UNSUPPORTED_BY_DEVICE"),
    ENCRYPTED("ENCRYPTED"),
    NOT_ENCRYPTED("NOT_ENCRYPTED");

    public final String value;

    private DeviceEncryptionStateEnum(String value) {
        this.value = value;
    }
}
