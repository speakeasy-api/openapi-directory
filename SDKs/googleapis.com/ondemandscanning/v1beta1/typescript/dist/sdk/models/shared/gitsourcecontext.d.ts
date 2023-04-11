import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
 */
export declare class GitSourceContext extends SpeakeasyBase {
    /**
     * Git commit hash.
     */
    revisionId?: string;
    /**
     * Git repository URL.
     */
    url?: string;
}
