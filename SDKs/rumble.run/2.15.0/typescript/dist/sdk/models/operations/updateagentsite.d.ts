import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAgentSiteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateAgentSiteRequest extends SpeakeasyBase {
    /**
     * site_id to associate with the agent
     */
    agentSiteID: shared.AgentSiteID;
    /**
     * UUID of the agent to update
     */
    agentId: string;
}
export declare class UpdateAgentSiteResponse extends SpeakeasyBase {
    /**
     * agent details
     */
    agent?: shared.Agent;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
