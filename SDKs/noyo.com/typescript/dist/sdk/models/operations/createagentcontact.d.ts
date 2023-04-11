import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAgentContactRequest extends SpeakeasyBase {
    agentContactCreateRequest: shared.AgentContactCreateRequest;
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
}
export declare class CreateAgentContactResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the new Agent Contact
     */
    agentContactResult?: shared.AgentContactResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
