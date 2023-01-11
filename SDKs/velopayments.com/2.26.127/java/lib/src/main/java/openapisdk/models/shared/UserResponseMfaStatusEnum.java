package openapisdk.models.shared;


public enum UserResponseMfaStatusEnum {
    REGISTERED("REGISTERED"),
    UNREGISTERED("UNREGISTERED");

    public final String value;

    private UserResponseMfaStatusEnum(String value) {
        this.value = value;
    }
}
