package openapisdk.models.shared;


public enum SettingsUpdateEnumStatusEnum {
    SCHEDULED("scheduled"),
    IN_PROGRESS("in-progress"),
    SUCCESSFUL("successful"),
    FAILED("failed");

    public final String value;

    private SettingsUpdateEnumStatusEnum(String value) {
        this.value = value;
    }
}
