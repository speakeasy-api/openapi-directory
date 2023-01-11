package openapisdk.models.shared;


public enum PackageManagerEnum {
    MANAGER_UNSPECIFIED("MANAGER_UNSPECIFIED"),
    ANY("ANY"),
    APT("APT"),
    YUM("YUM"),
    ZYPPER("ZYPPER"),
    GOO("GOO");

    public final String value;

    private PackageManagerEnum(String value) {
        this.value = value;
    }
}
