import { SpeakeasyBase } from "../../../internal/utils";
import { FileHashes } from "./filehashes";
import { SourceContext } from "./sourcecontext";
/**
 * Source describes the location of the source used for the build.
 */
export declare class Source extends SpeakeasyBase {
    /**
     * If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.
     */
    additionalContexts?: SourceContext[];
    /**
     * If provided, the input binary artifacts for the build came from this location.
     */
    artifactStorageSourceUri?: string;
    /**
     * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
     */
    context?: SourceContext;
    /**
     * Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.
     */
    fileHashes?: Record<string, FileHashes>;
}
