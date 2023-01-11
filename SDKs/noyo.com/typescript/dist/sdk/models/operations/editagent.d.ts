import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditAgentPathParams extends SpeakeasyBase {
    agentId: string;
    version: string;
}
export declare class EditAgentRequest extends SpeakeasyBase {
    pathParams: EditAgentPathParams;
    request: shared.AgentEditRequest;
}
export declare class EditAgentResponse extends SpeakeasyBase {
    agentResult?: shared.AgentResult;
    contentType: string;
    statusCode: number;
}
