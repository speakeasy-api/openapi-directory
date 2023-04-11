import { SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";
/**
 * Files store content that is potentially associated with Packages or Versions.
 */
export declare class GoogleDevtoolsArtifactregistryV1File extends SpeakeasyBase {
    /**
     * Output only. The time when the File was created.
     */
    createTime?: string;
    /**
     * Output only. The time when the last attempt to refresh the file's data was made. Only set when the repository is remote.
     */
    fetchTime?: string;
    /**
     * The hashes of the file content.
     */
    hashes?: Hash[];
    /**
     * The name of the file, for example: "projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt". If the file ID part contains slashes, they are escaped.
     */
    name?: string;
    /**
     * The name of the Package or Version that owns this file, if any.
     */
    owner?: string;
    /**
     * The size of the File in bytes.
     */
    sizeBytes?: string;
    /**
     * Output only. The time when the File was last updated.
     */
    updateTime?: string;
}
