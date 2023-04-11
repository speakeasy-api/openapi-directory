import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
/**
 * The merge method to use.
 */
export declare enum AutoMergeMergeMethodEnum {
    Merge = "merge",
    Squash = "squash",
    Rebase = "rebase"
}
/**
 * The status of auto merging a pull request.
 */
export declare class AutoMerge extends SpeakeasyBase {
    /**
     * Commit message for the merge commit.
     */
    commitMessage: string;
    /**
     * Title for the merge commit message.
     */
    commitTitle: string;
    /**
     * Simple User
     */
    enabledBy: SimpleUser;
    /**
     * The merge method to use.
     */
    mergeMethod: AutoMergeMergeMethodEnum;
}
