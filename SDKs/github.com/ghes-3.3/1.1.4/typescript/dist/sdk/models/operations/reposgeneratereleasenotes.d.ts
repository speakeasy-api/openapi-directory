import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGenerateReleaseNotesRequestBody extends SpeakeasyBase {
    /**
     * Specifies a path to a file in the repository containing configuration settings used for generating the release notes. If unspecified, the configuration file located in the repository at '.github/release.yml' or '.github/release.yaml' will be used. If that is not present, the default configuration will be used.
     */
    configurationFilePath?: string;
    /**
     * The name of the previous tag to use as the starting point for the release notes. Use to manually specify the range for the set of changes considered as part this release.
     */
    previousTagName?: string;
    /**
     * The tag name for the release. This can be an existing tag or a new one.
     */
    tagName: string;
    /**
     * Specifies the commitish value that will be the target for the release's tag. Required if the supplied tag_name does not reference an existing tag. Ignored if the tag_name already exists.
     */
    targetCommitish?: string;
}
export declare class ReposGenerateReleaseNotesRequest extends SpeakeasyBase {
    requestBody: ReposGenerateReleaseNotesRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposGenerateReleaseNotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Name and body of generated release notes
     */
    releaseNotesContent?: shared.ReleaseNotesContent;
}
