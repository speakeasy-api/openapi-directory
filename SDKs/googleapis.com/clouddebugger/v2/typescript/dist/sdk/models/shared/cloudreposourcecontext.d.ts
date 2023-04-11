import { SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";
import { RepoId } from "./repoid";
/**
 * A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).
 */
export declare class CloudRepoSourceContext extends SpeakeasyBase {
    /**
     * An alias to a repo revision.
     */
    aliasContext?: AliasContext;
    /**
     * The name of an alias (branch, tag, etc.).
     */
    aliasName?: string;
    /**
     * A unique identifier for a cloud repo.
     */
    repoId?: RepoId;
    /**
     * A revision ID.
     */
    revisionId?: string;
}
