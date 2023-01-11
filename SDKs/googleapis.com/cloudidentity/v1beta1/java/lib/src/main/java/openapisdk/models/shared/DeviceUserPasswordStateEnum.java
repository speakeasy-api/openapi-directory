package openapisdk.models.shared;


public enum DeviceUserPasswordStateEnum {
    PASSWORD_STATE_UNSPECIFIED("PASSWORD_STATE_UNSPECIFIED"),
    PASSWORD_SET("PASSWORD_SET"),
    PASSWORD_NOT_SET("PASSWORD_NOT_SET");

    public final String value;

    private DeviceUserPasswordStateEnum(String value) {
        this.value = value;
    }
}
