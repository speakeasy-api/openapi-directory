import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAgentContactPathParams extends SpeakeasyBase {
    agentId: string;
    contactId: string;
}
export declare class GetAgentContactRequest extends SpeakeasyBase {
    pathParams: GetAgentContactPathParams;
}
export declare class GetAgentContactResponse extends SpeakeasyBase {
    agentContactResult?: shared.AgentContactResult;
    contentType: string;
    statusCode: number;
}
