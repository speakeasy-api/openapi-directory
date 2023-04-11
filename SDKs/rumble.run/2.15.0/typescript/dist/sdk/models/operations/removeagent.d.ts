import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAgentSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAgentRequest extends SpeakeasyBase {
    /**
     * UUID of the agent to remove
     */
    agentId: string;
}
export declare class RemoveAgentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
