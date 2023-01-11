package openapisdk.models.shared;


public enum PointStyleShapeEnum {
    POINT_SHAPE_UNSPECIFIED("POINT_SHAPE_UNSPECIFIED"),
    CIRCLE("CIRCLE"),
    DIAMOND("DIAMOND"),
    HEXAGON("HEXAGON"),
    PENTAGON("PENTAGON"),
    SQUARE("SQUARE"),
    STAR("STAR"),
    TRIANGLE("TRIANGLE"),
    X_MARK("X_MARK");

    public final String value;

    private PointStyleShapeEnum(String value) {
        this.value = value;
    }
}
