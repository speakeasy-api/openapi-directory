import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorkflowSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    request: shared.CreateWorkflow;
    security: CreateWorkflowSecurity;
}
export declare class CreateWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    response?: shared.Response;
    statusCode: number;
}
