package openapisdk.models.shared;


public enum LiveBroadcastContentDetailsProjectionEnum {
    PROJECTION_UNSPECIFIED("projectionUnspecified"),
    RECTANGULAR("rectangular"),
    THREE_HUNDRED_AND_SIXTY("360"),
    MESH("mesh");

    public final String value;

    private LiveBroadcastContentDetailsProjectionEnum(String value) {
        this.value = value;
    }
}
