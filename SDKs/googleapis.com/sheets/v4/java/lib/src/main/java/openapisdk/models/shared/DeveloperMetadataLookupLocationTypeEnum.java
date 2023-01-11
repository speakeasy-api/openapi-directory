package openapisdk.models.shared;


public enum DeveloperMetadataLookupLocationTypeEnum {
    DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED("DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"),
    ROW("ROW"),
    COLUMN("COLUMN"),
    SHEET("SHEET"),
    SPREADSHEET("SPREADSHEET");

    public final String value;

    private DeveloperMetadataLookupLocationTypeEnum(String value) {
        this.value = value;
    }
}
