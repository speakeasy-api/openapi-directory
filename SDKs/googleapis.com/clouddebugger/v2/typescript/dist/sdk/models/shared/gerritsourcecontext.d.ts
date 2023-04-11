import { SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";
/**
 * A SourceContext referring to a Gerrit project.
 */
export declare class GerritSourceContext extends SpeakeasyBase {
    /**
     * An alias to a repo revision.
     */
    aliasContext?: AliasContext;
    /**
     * The name of an alias (branch, tag, etc.).
     */
    aliasName?: string;
    /**
     * The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is hostURI/project.
     */
    gerritProject?: string;
    /**
     * The URI of a running Gerrit instance.
     */
    hostUri?: string;
    /**
     * A revision (commit) ID.
     */
    revisionId?: string;
}
