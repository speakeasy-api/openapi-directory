import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAgentSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAgentRequest extends SpeakeasyBase {
    /**
     * UUID of the agent
     */
    agentId: string;
}
export declare class GetAgentResponse extends SpeakeasyBase {
    /**
     * agent details
     */
    agent?: shared.Agent;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
