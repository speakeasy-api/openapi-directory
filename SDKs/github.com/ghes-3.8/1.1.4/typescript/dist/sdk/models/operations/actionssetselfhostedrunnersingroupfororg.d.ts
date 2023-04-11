import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody extends SpeakeasyBase {
    /**
     * List of runner IDs to add to the runner group.
     */
    runners: number[];
}
export declare class ActionsSetSelfHostedRunnersInGroupForOrgRequest extends SpeakeasyBase {
    requestBody: ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class ActionsSetSelfHostedRunnersInGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
