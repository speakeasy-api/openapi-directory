package openapisdk.models.shared;


public enum TitleAssetPositionEnum {
    TOP("top"),
    TOP_RIGHT("topRight"),
    RIGHT("right"),
    BOTTOM_RIGHT("bottomRight"),
    BOTTOM("bottom"),
    BOTTOM_LEFT("bottomLeft"),
    LEFT("left"),
    TOP_LEFT("topLeft"),
    CENTER("center");

    public final String value;

    private TitleAssetPositionEnum(String value) {
        this.value = value;
    }
}
