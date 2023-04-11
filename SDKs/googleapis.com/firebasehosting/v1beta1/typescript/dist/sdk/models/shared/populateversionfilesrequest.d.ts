import { SpeakeasyBase } from "../../../internal/utils";
export declare class PopulateVersionFilesRequest extends SpeakeasyBase {
    /**
     * A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file.
     */
    files?: Record<string, string>;
}
