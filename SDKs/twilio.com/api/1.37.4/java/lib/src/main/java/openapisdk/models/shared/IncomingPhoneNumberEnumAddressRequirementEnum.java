package openapisdk.models.shared;


public enum IncomingPhoneNumberEnumAddressRequirementEnum {
    NONE("none"),
    ANY("any"),
    LOCAL("local"),
    FOREIGN("foreign");

    public final String value;

    private IncomingPhoneNumberEnumAddressRequirementEnum(String value) {
        this.value = value;
    }
}
