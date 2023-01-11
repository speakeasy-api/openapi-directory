package openapisdk.models.shared;


public enum AptRepositoryArchiveTypeEnum {
    ARCHIVE_TYPE_UNSPECIFIED("ARCHIVE_TYPE_UNSPECIFIED"),
    DEB("DEB"),
    DEB_SRC("DEB_SRC");

    public final String value;

    private AptRepositoryArchiveTypeEnum(String value) {
        this.value = value;
    }
}
