import { SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
/**
 * The location of the function source code.
 */
export declare class Source extends SpeakeasyBase {
    /**
     * Location of the source in a Google Cloud Source Repository.
     */
    repoSource?: RepoSource;
    /**
     * Location of the source in an archive file in Google Cloud Storage.
     */
    storageSource?: StorageSource;
}
