package openapisdk.models.shared;


public enum PatchOpEnum {
    ADD("add"),
    REPLACE("replace"),
    REMOVE("remove"),
    COPY("copy"),
    TEST("test");

    public final String value;

    private PatchOpEnum(String value) {
        this.value = value;
    }
}
