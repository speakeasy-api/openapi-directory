package openapisdk.models.shared;


public enum NfsExportPermissionsEnum {
    PERMISSIONS_UNSPECIFIED("PERMISSIONS_UNSPECIFIED"),
    READ_ONLY("READ_ONLY"),
    READ_WRITE("READ_WRITE");

    public final String value;

    private NfsExportPermissionsEnum(String value) {
        this.value = value;
    }
}
