import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditAgentContactRequest extends SpeakeasyBase {
    agentContactEditRequest: shared.AgentContactEditRequest;
    /**
     * The unique identifier of the agent in Noyo
     */
    agentId: string;
    /**
     * The unique identifier of the agent contact in Noyo
     */
    contactId: string;
    /**
     * The current version identifier of the agent contact
     */
    version: string;
}
export declare class EditAgentContactResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the modified Agent contact
     */
    agentContactResult?: shared.AgentContactResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
