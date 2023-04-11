import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAgentLocationRequest extends SpeakeasyBase {
    agentLocationCreateRequest: shared.AgentLocationCreateRequest;
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
}
export declare class CreateAgentLocationResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the new Agent Location
     */
    agentLocationResult?: shared.AgentLocationResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
