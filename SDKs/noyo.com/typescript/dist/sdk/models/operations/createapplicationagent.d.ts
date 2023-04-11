import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApplicationAgentRequest extends SpeakeasyBase {
    agentCreateRequest: shared.AgentCreateRequest;
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
}
export declare class CreateApplicationAgentResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the new Agent
     */
    agentResult?: shared.AgentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
