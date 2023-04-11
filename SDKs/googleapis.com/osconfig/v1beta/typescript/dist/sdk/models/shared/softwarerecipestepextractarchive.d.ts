import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the archive to extract.
 */
export declare enum SoftwareRecipeStepExtractArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Tar = "TAR",
    TarGzip = "TAR_GZIP",
    TarBzip = "TAR_BZIP",
    TarLzma = "TAR_LZMA",
    TarXz = "TAR_XZ",
    Zip = "ZIP"
}
/**
 * Extracts an archive of the type specified in the specified directory.
 */
export declare class SoftwareRecipeStepExtractArchive extends SpeakeasyBase {
    /**
     * Required. The id of the relevant artifact in the recipe.
     */
    artifactId?: string;
    /**
     * Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows.
     */
    destination?: string;
    /**
     * Required. The type of the archive to extract.
     */
    type?: SoftwareRecipeStepExtractArchiveTypeEnum;
}
