import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountAgentsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountAgentsRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetAccountAgentsResponse extends SpeakeasyBase {
    /**
     * array of tasks
     */
    agents?: shared.Agent[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
