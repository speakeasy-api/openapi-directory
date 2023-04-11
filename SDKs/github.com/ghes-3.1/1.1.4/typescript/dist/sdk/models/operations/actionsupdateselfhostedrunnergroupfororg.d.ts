import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories.
 */
export declare enum ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
    /**
     * Whether the runner group can be used by `public` repositories.
     */
    allowsPublicRepositories?: boolean;
    /**
     * Name of the runner group.
     */
    name: string;
    /**
     * Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories.
     */
    visibility?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
    requestBody: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
