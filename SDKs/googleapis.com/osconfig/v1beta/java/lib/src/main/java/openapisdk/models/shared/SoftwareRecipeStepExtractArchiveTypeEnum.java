package openapisdk.models.shared;


public enum SoftwareRecipeStepExtractArchiveTypeEnum {
    ARCHIVE_TYPE_UNSPECIFIED("ARCHIVE_TYPE_UNSPECIFIED"),
    TAR("TAR"),
    TAR_GZIP("TAR_GZIP"),
    TAR_BZIP("TAR_BZIP"),
    TAR_LZMA("TAR_LZMA"),
    TAR_XZ("TAR_XZ"),
    ZIP("ZIP");

    public final String value;

    private SoftwareRecipeStepExtractArchiveTypeEnum(String value) {
        this.value = value;
    }
}
