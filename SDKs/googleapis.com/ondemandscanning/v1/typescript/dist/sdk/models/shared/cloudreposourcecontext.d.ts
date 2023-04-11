import { SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";
import { RepoId } from "./repoid";
/**
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
 */
export declare class CloudRepoSourceContext extends SpeakeasyBase {
    /**
     * An alias to a repo revision.
     */
    aliasContext?: AliasContext;
    /**
     * A unique identifier for a Cloud Repo.
     */
    repoId?: RepoId;
    /**
     * A revision ID.
     */
    revisionId?: string;
}
