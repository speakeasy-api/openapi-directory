package openapisdk.models.shared;


public enum AccountStatusEnum {
    ENABLED("enabled"),
    DELETED("deleted"),
    BLOCKED("blocked");

    public final String value;

    private AccountStatusEnum(String value) {
        this.value = value;
    }
}
