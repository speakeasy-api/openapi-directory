import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditAgentLocationPathParams extends SpeakeasyBase {
    agentId: string;
    locationId: string;
    version: string;
}
export declare class EditAgentLocationRequest extends SpeakeasyBase {
    pathParams: EditAgentLocationPathParams;
    request: shared.AgentLocationEditRequest;
}
export declare class EditAgentLocationResponse extends SpeakeasyBase {
    agentLocationResult?: shared.AgentLocationResult;
    contentType: string;
    statusCode: number;
}
