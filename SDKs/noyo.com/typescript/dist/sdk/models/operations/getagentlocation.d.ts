import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAgentLocationPathParams extends SpeakeasyBase {
    agentId: string;
    locationId: string;
}
export declare class GetAgentLocationRequest extends SpeakeasyBase {
    pathParams: GetAgentLocationPathParams;
}
export declare class GetAgentLocationResponse extends SpeakeasyBase {
    agentLocationResult?: shared.AgentLocationResult;
    contentType: string;
    statusCode: number;
}
