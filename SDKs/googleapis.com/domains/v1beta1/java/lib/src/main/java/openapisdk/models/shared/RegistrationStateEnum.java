package openapisdk.models.shared;


public enum RegistrationStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    REGISTRATION_PENDING("REGISTRATION_PENDING"),
    REGISTRATION_FAILED("REGISTRATION_FAILED"),
    TRANSFER_PENDING("TRANSFER_PENDING"),
    TRANSFER_FAILED("TRANSFER_FAILED"),
    IMPORT_PENDING("IMPORT_PENDING"),
    ACTIVE("ACTIVE"),
    SUSPENDED("SUSPENDED"),
    EXPORTED("EXPORTED");

    public final String value;

    private RegistrationStateEnum(String value) {
        this.value = value;
    }
}
