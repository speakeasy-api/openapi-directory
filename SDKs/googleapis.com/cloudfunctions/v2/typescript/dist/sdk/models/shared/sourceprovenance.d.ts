import { SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
/**
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
 */
export declare class SourceProvenance extends SpeakeasyBase {
    /**
     * Location of the source in a Google Cloud Source Repository.
     */
    resolvedRepoSource?: RepoSource;
    /**
     * Location of the source in an archive file in Google Cloud Storage.
     */
    resolvedStorageSource?: StorageSource;
}
