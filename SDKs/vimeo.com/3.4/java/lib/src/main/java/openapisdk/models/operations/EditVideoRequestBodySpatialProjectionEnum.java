package openapisdk.models.operations;


public enum EditVideoRequestBodySpatialProjectionEnum {
    CUBICAL("cubical"),
    CYLINDRICAL("cylindrical"),
    DOME("dome"),
    EQUIRECTANGULAR("equirectangular"),
    PYRAMID("pyramid");

    public final String value;

    private EditVideoRequestBodySpatialProjectionEnum(String value) {
        this.value = value;
    }
}
