import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAgentLocationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
    /**
     * The unique identifier of the agent location in Noyo
     */
    locationId: string;
}
export declare class GetAgentLocationResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a single Agent location
     */
    agentLocationResult?: shared.AgentLocationResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
