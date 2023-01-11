package openapisdk.models.operations;


public enum GitCreateTagRequestBodyTypeEnum {
    COMMIT("commit"),
    TREE("tree"),
    BLOB("blob");

    public final String value;

    private GitCreateTagRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
