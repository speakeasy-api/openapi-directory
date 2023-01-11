package openapisdk.models.shared;


public enum ChangeOpEnum {
    ADD("add"),
    REMOVE("remove"),
    REPLACE("replace"),
    MOVE("move"),
    COPY("copy"),
    TEST("test");

    public final String value;

    private ChangeOpEnum(String value) {
        this.value = value;
    }
}
