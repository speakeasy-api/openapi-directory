import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
 */
export declare enum GitCreateTreeRequestBodyTreeModeEnum {
    OneHundredThousandSixHundredAndFortyFour = "100644",
    OneHundredThousandSevenHundredAndFiftyFive = "100755",
    FortyThousand = "040000",
    OneHundredAndSixtyThousand = "160000",
    OneHundredAndTwentyThousand = "120000"
}
/**
 * Either `blob`, `tree`, or `commit`.
 */
export declare enum GitCreateTreeRequestBodyTreeTypeEnum {
    Blob = "blob",
    Tree = "tree",
    Commit = "commit"
}
export declare class GitCreateTreeRequestBodyTree extends SpeakeasyBase {
    /**
     * The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.
     *
     * @remarks
     *
     * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
     */
    content?: string;
    /**
     * The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
     */
    mode?: GitCreateTreeRequestBodyTreeModeEnum;
    /**
     * The file referenced in the tree.
     */
    path?: string;
    /**
     * The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.
     *
     * @remarks
     *
     * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
     */
    sha?: string;
    /**
     * Either `blob`, `tree`, or `commit`.
     */
    type?: GitCreateTreeRequestBodyTreeTypeEnum;
}
export declare class GitCreateTreeRequestBody extends SpeakeasyBase {
    /**
     * The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by `base_tree` and entries defined in the `tree` parameter. Entries defined in the `tree` parameter will overwrite items from `base_tree` with the same `path`. If you're creating new changes on a branch, then normally you'd set `base_tree` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.
     *
     * @remarks
     * If not provided, GitHub will create a new Git tree object from only the entries defined in the `tree` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the `tree` parameter will be listed as deleted by the new commit.
     *
     */
    baseTree?: string;
    /**
     * Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
     */
    tree: GitCreateTreeRequestBodyTree[];
}
export declare class GitCreateTreeRequest extends SpeakeasyBase {
    requestBody: GitCreateTreeRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class GitCreateTreeResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    gitTree?: shared.GitTree;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
