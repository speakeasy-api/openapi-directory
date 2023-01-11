package openapisdk.models.shared;


public enum WritableRackTypeEnum {
    TWO_POST_FRAME("2-post-frame"),
    FOUR_POST_FRAME("4-post-frame"),
    FOUR_POST_CABINET("4-post-cabinet"),
    WALL_FRAME("wall-frame"),
    WALL_CABINET("wall-cabinet");

    public final String value;

    private WritableRackTypeEnum(String value) {
        this.value = value;
    }
}
