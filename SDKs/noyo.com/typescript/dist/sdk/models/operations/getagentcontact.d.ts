import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAgentContactRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
    /**
     * The unique identifier of the agent contact in Noyo
     */
    contactId: string;
}
export declare class GetAgentContactResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a single Agent contact
     */
    agentContactResult?: shared.AgentContactResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
