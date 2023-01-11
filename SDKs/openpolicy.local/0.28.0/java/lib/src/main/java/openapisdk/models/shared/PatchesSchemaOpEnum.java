package openapisdk.models.shared;


public enum PatchesSchemaOpEnum {
    ADD("add"),
    REMOVE("remove"),
    REPLACE("replace"),
    MOVE("move"),
    COPY("copy"),
    TEST("test");

    public final String value;

    private PatchesSchemaOpEnum(String value) {
        this.value = value;
    }
}
