import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditAgentContactPathParams extends SpeakeasyBase {
    agentId: string;
    contactId: string;
    version: string;
}
export declare class EditAgentContactRequest extends SpeakeasyBase {
    pathParams: EditAgentContactPathParams;
    request: shared.AgentContactEditRequest;
}
export declare class EditAgentContactResponse extends SpeakeasyBase {
    agentContactResult?: shared.AgentContactResult;
    contentType: string;
    statusCode: number;
}
