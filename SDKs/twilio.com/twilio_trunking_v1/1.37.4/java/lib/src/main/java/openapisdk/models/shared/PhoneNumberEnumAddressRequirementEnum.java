package openapisdk.models.shared;


public enum PhoneNumberEnumAddressRequirementEnum {
    NONE("none"),
    ANY("any"),
    LOCAL("local"),
    FOREIGN("foreign");

    public final String value;

    private PhoneNumberEnumAddressRequirementEnum(String value) {
        this.value = value;
    }
}
