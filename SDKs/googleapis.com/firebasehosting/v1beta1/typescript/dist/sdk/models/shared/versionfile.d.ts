import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`.
 */
export declare enum VersionFileStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Expected = "EXPECTED",
    Active = "ACTIVE"
}
/**
 * A static content file that is part of a version.
 */
export declare class VersionFile extends SpeakeasyBase {
    /**
     * The SHA256 content hash of the file.
     */
    hash?: string;
    /**
     * The URI at which the file's content should display.
     */
    path?: string;
    /**
     * Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`.
     */
    status?: VersionFileStatusEnum;
}
