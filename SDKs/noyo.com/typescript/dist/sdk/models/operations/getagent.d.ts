import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAgentPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class GetAgentRequest extends SpeakeasyBase {
    pathParams: GetAgentPathParams;
}
export declare class GetAgentResponse extends SpeakeasyBase {
    agentResult?: shared.AgentResult;
    contentType: string;
    statusCode: number;
}
