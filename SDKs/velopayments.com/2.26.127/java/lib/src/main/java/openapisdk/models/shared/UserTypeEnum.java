package openapisdk.models.shared;


public enum UserTypeEnum {
    BACKOFFICE("BACKOFFICE"),
    PAYOR("PAYOR"),
    PAYEE("PAYEE");

    public final String value;

    private UserTypeEnum(String value) {
        this.value = value;
    }
}
