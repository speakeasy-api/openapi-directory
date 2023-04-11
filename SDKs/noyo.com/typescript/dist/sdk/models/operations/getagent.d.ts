import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAgentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
}
export declare class GetAgentResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a single Agent
     */
    agentResult?: shared.AgentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
