import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
export declare class ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
