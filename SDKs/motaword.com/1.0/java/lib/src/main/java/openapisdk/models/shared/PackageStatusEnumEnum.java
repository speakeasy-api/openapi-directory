package openapisdk.models.shared;


public enum PackageStatusEnumEnum {
    STARTED("started"),
    PACKAGING("packaging"),
    COMPLETED("completed");

    public final String value;

    private PackageStatusEnumEnum(String value) {
        this.value = value;
    }
}
