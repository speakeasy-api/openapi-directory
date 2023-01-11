import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAgentLocationPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class CreateAgentLocationRequest extends SpeakeasyBase {
    pathParams: CreateAgentLocationPathParams;
    request: shared.AgentLocationCreateRequest;
}
export declare class CreateAgentLocationResponse extends SpeakeasyBase {
    agentLocationResult?: shared.AgentLocationResult;
    contentType: string;
    statusCode: number;
}
