package openapisdk.models.shared;


public enum AccountEnumStatusEnum {
    ACTIVE("active"),
    SUSPENDED("suspended"),
    CLOSED("closed");

    public final String value;

    private AccountEnumStatusEnum(String value) {
        this.value = value;
    }
}
