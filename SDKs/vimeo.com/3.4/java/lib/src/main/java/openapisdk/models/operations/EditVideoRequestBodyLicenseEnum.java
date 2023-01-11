package openapisdk.models.operations;


public enum EditVideoRequestBodyLicenseEnum {
    BY("by"),
    BY_NC("by-nc"),
    BY_NC_ND("by-nc-nd"),
    BY_NC_SA("by-nc-sa"),
    BY_ND("by-nd"),
    BY_SA("by-sa"),
    CC0("cc0");

    public final String value;

    private EditVideoRequestBodyLicenseEnum(String value) {
        this.value = value;
    }
}
