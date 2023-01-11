package openapisdk.models.shared;


public enum RackTypeLabelEnum {
    TWO_POST_FRAME("2-post frame"),
    FOUR_POST_FRAME("4-post frame"),
    FOUR_POST_CABINET("4-post cabinet"),
    WALL_MOUNTED_FRAME("Wall-mounted frame"),
    WALL_MOUNTED_CABINET("Wall-mounted cabinet");

    public final String value;

    private RackTypeLabelEnum(String value) {
        this.value = value;
    }
}
