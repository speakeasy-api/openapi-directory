import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditAgentRequest extends SpeakeasyBase {
    agentEditRequest: shared.AgentEditRequest;
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
    /**
     * The current version identifier of the agent
     */
    version: string;
}
export declare class EditAgentResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the modified Agent
     */
    agentResult?: shared.AgentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
