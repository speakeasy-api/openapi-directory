import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { ReactionRollup } from "./reactionrollup";
/**
 * Commit Comment
 */
export declare class CommitComment extends SpeakeasyBase {
    /**
     * How the author is associated with the repository.
     */
    authorAssociation: AuthorAssociationEnum;
    body: string;
    commitId: string;
    createdAt: Date;
    htmlUrl: string;
    id: number;
    line: number;
    nodeId: string;
    path: string;
    position: number;
    reactions?: ReactionRollup;
    updatedAt: Date;
    url: string;
    /**
     * A GitHub user.
     */
    user: NullableSimpleUser;
}
