import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditAgentLocationRequest extends SpeakeasyBase {
    agentLocationEditRequest: shared.AgentLocationEditRequest;
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
    /**
     * The unique identifier of the agent location in Noyo
     */
    locationId: string;
    /**
     * The current version identifier of the agent location
     */
    version: string;
}
export declare class EditAgentLocationResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the modified Agent location
     */
    agentLocationResult?: shared.AgentLocationResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
