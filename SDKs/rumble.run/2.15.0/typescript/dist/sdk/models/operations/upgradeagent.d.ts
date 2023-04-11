import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpgradeAgentSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpgradeAgentRequest extends SpeakeasyBase {
    /**
     * UUID of the agent to update
     */
    agentId: string;
}
export declare class UpgradeAgentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
