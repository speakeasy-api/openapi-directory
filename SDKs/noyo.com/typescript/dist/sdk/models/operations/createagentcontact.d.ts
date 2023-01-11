import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAgentContactPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class CreateAgentContactRequest extends SpeakeasyBase {
    pathParams: CreateAgentContactPathParams;
    request: shared.AgentContactCreateRequest;
}
export declare class CreateAgentContactResponse extends SpeakeasyBase {
    agentContactResult?: shared.AgentContactResult;
    contentType: string;
    statusCode: number;
}
