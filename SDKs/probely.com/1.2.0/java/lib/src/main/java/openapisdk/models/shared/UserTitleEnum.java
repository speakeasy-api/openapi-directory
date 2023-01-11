package openapisdk.models.shared;


public enum UserTitleEnum {
    CEO("ceo"),
    CTO("cto"),
    CSO("cso"),
    SECENG("seceng"),
    DEV("dev"),
    DEVOP("devop"),
    MANAGER("manager"),
    OTHER("other");

    public final String value;

    private UserTitleEnum(String value) {
        this.value = value;
    }
}
