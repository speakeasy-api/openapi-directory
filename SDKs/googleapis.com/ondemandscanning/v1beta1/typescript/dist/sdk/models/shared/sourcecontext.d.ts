import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRepoSourceContext } from "./cloudreposourcecontext";
import { GerritSourceContext } from "./gerritsourcecontext";
import { GitSourceContext } from "./gitsourcecontext";
/**
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
 */
export declare class SourceContext extends SpeakeasyBase {
    /**
     * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
     */
    cloudRepo?: CloudRepoSourceContext;
    /**
     * A SourceContext referring to a Gerrit project.
     */
    gerrit?: GerritSourceContext;
    /**
     * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
     */
    git?: GitSourceContext;
    /**
     * Labels with user defined metadata.
     */
    labels?: Record<string, string>;
}
