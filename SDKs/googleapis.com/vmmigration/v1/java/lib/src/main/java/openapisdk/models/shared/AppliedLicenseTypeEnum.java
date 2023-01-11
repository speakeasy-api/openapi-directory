package openapisdk.models.shared;


public enum AppliedLicenseTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    NONE("NONE"),
    PAYG("PAYG"),
    BYOL("BYOL");

    public final String value;

    private AppliedLicenseTypeEnum(String value) {
        this.value = value;
    }
}
