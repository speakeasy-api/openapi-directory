package openapisdk.models.shared;


public enum PayeeTypeEnum {
    INDIVIDUAL("Individual"),
    COMPANY("Company");

    public final String value;

    private PayeeTypeEnum(String value) {
        this.value = value;
    }
}
