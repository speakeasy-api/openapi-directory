import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeploymentBranchPolicyNamePattern extends SpeakeasyBase {
    /**
     * The name pattern that branches must match in order to deploy to the environment.
     *
     * @remarks
     *
     * Wildcard characters will not match `/`. For example, to match branches that begin with `release/` and contain an additional single slash, use `release/* /*`.
     * For more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
     */
    name: string;
}
