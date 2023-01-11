package openapisdk.models.shared;


public enum PhoneNumberEnumValidationErrorEnum {
    TOO_SHORT("TOO_SHORT"),
    TOO_LONG("TOO_LONG"),
    INVALID_BUT_POSSIBLE("INVALID_BUT_POSSIBLE"),
    INVALID_COUNTRY_CODE("INVALID_COUNTRY_CODE"),
    INVALID_LENGTH("INVALID_LENGTH"),
    NOT_A_NUMBER("NOT_A_NUMBER");

    public final String value;

    private PhoneNumberEnumValidationErrorEnum(String value) {
        this.value = value;
    }
}
