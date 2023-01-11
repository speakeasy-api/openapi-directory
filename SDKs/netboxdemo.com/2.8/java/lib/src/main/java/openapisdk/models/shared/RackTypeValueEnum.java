package openapisdk.models.shared;


public enum RackTypeValueEnum {
    TWO_POST_FRAME("2-post-frame"),
    FOUR_POST_FRAME("4-post-frame"),
    FOUR_POST_CABINET("4-post-cabinet"),
    WALL_FRAME("wall-frame"),
    WALL_CABINET("wall-cabinet");

    public final String value;

    private RackTypeValueEnum(String value) {
        this.value = value;
    }
}
