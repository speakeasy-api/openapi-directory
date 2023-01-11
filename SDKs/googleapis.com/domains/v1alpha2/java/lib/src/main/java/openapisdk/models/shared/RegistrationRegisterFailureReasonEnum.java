package openapisdk.models.shared;


public enum RegistrationRegisterFailureReasonEnum {
    REGISTER_FAILURE_REASON_UNSPECIFIED("REGISTER_FAILURE_REASON_UNSPECIFIED"),
    REGISTER_FAILURE_REASON_UNKNOWN("REGISTER_FAILURE_REASON_UNKNOWN"),
    DOMAIN_NOT_AVAILABLE("DOMAIN_NOT_AVAILABLE"),
    INVALID_CONTACTS("INVALID_CONTACTS");

    public final String value;

    private RegistrationRegisterFailureReasonEnum(String value) {
        this.value = value;
    }
}
