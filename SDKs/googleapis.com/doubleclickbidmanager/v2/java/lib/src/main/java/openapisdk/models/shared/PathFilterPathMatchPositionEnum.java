package openapisdk.models.shared;


public enum PathFilterPathMatchPositionEnum {
    PATH_MATCH_POSITION_UNSPECIFIED("PATH_MATCH_POSITION_UNSPECIFIED"),
    ANY("ANY"),
    FIRST("FIRST"),
    LAST("LAST");

    public final String value;

    private PathFilterPathMatchPositionEnum(String value) {
        this.value = value;
    }
}
