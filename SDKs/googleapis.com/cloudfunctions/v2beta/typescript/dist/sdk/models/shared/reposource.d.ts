import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location of the source in a Google Cloud Source Repository.
 */
export declare class RepoSource extends SpeakeasyBase {
    /**
     * Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branchName?: string;
    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string;
    /**
     * Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. eg. helloworld (no leading slash allowed)
     */
    dir?: string;
    /**
     * Only trigger a build if the revision regex does NOT match the revision regex.
     */
    invertRegex?: boolean;
    /**
     * ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
     */
    projectId?: string;
    /**
     * Name of the Cloud Source Repository.
     */
    repoName?: string;
    /**
     * Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tagName?: string;
}
