package openapisdk.models.shared;


public enum ManageEventActionEnum {
    CREATE("create"),
    FIRE("fire"),
    CHANGE("change"),
    DELETE("delete");

    public final String value;

    private ManageEventActionEnum(String value) {
        this.value = value;
    }
}
