package openapisdk.models.shared;


public enum RepositoryFormatEnum {
    FORMAT_UNSPECIFIED("FORMAT_UNSPECIFIED"),
    DOCKER("DOCKER"),
    MAVEN("MAVEN"),
    NPM("NPM"),
    APT("APT"),
    YUM("YUM"),
    PYTHON("PYTHON"),
    KFP("KFP");

    public final String value;

    private RepositoryFormatEnum(String value) {
        this.value = value;
    }
}
