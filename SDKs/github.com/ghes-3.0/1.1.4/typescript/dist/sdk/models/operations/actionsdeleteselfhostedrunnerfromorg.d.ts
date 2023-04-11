import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteSelfHostedRunnerFromOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
export declare class ActionsDeleteSelfHostedRunnerFromOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
