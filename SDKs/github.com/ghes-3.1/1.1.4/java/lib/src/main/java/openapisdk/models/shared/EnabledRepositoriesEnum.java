package openapisdk.models.shared;


public enum EnabledRepositoriesEnum {
    ALL("all"),
    NONE("none"),
    SELECTED("selected");

    public final String value;

    private EnabledRepositoriesEnum(String value) {
        this.value = value;
    }
}
