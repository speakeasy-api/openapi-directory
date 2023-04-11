import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
