import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApplicationAgentPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateApplicationAgentRequest extends SpeakeasyBase {
    pathParams: CreateApplicationAgentPathParams;
    request: shared.AgentCreateRequest;
}
export declare class CreateApplicationAgentResponse extends SpeakeasyBase {
    agentResult?: shared.AgentResult;
    contentType: string;
    statusCode: number;
}
