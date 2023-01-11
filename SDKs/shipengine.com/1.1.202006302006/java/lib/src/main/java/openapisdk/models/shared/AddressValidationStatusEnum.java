package openapisdk.models.shared;


public enum AddressValidationStatusEnum {
    UNVERIFIED("unverified"),
    VERIFIED("verified"),
    WARNING("warning"),
    ERROR("error");

    public final String value;

    private AddressValidationStatusEnum(String value) {
        this.value = value;
    }
}
