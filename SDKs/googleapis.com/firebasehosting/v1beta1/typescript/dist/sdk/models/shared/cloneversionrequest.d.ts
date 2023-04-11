import { SpeakeasyBase } from "../../../internal/utils";
import { PathFilter } from "./pathfilter";
export declare class CloneVersionRequest extends SpeakeasyBase {
    /**
     * A representation of filter path.
     */
    exclude?: PathFilter;
    /**
     * If true, the call to `CloneVersion` immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of `CREATED`. Use [`UpdateVersion`](patch) to set the status of the version to `FINALIZED`.
     */
    finalize?: boolean;
    /**
     * A representation of filter path.
     */
    include?: PathFilter;
    /**
     * Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID
     */
    sourceVersion?: string;
}
