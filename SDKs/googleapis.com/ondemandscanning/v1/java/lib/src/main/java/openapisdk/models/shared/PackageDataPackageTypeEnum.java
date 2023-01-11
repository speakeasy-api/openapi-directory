package openapisdk.models.shared;


public enum PackageDataPackageTypeEnum {
    PACKAGE_TYPE_UNSPECIFIED("PACKAGE_TYPE_UNSPECIFIED"),
    OS("OS"),
    MAVEN("MAVEN"),
    GO("GO"),
    GO_STDLIB("GO_STDLIB");

    public final String value;

    private PackageDataPackageTypeEnum(String value) {
        this.value = value;
    }
}
