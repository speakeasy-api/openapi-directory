package openapisdk.models.shared;


public enum IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum {
    REGISTERED("registered"),
    UNREGISTERED("unregistered"),
    PENDING_REGISTRATION("pending-registration"),
    REGISTRATION_FAILURE("registration-failure"),
    PENDING_UNREGISTRATION("pending-unregistration"),
    UNREGISTRATION_FAILURE("unregistration-failure");

    public final String value;

    private IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum(String value) {
        this.value = value;
    }
}
