package openapisdk.models.shared;


public enum UserType2Enum {
    BACKOFFICE("BACKOFFICE"),
    PAYOR("PAYOR"),
    PAYEE("PAYEE");

    public final String value;

    private UserType2Enum(String value) {
        this.value = value;
    }
}
